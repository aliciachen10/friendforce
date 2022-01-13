const db = require("../config/connection");
const {
  Event,
  Friend,
  Group,
  InvitationEvent,
  InvitationGroup,
} = require("../models");

const eventData = require("./eventData.json");
const friendData = require("./friendData.json");
const groupData = require("./groupData.json");
const invitationEventData = require('./invitationEventData.json');
const invitationGroupData = require('./invitationGroupData.json');

db.once("open", async () => {
  // clean database
  await Event.deleteMany({});
  await Friend.deleteMany({});
  await Group.deleteMany({});
  await InvitationEvent.deleteMany({});
  await InvitationGroup.deleteMany({});

  // bulk create each model
  const events = await Event.insertMany(eventData);
  const friends = await Friend.insertMany(friendData);
  const groups = await Group.insertMany(groupData);

  //to do: will need to seed the info for each of the invitations
  let count = 0;

  for (newFriend of friends) {
    //randomly add friends to each event
    const tempEvent = events[Math.floor(Math.random() * events.length)];
    tempEvent.friends.push(newFriend._id);

    //add the event to each friend
    await Friend.updateOne(
      { _id: newFriend._id },
      { $push: { events: tempEvent._id } }
    )

    //add the same friend you added to the event to the invitationevent. 
    await InvitationEvent.create({invitee: newFriend._id, event: tempEvent._id, status: "accepted", email: newFriend.email})
    // if (count+1 < friends.length) {
    //   await InvitationEvent.create({invitee: friends[count+1]._id, event: tempEvent._id, status: "pending", email: friends[count+1].email})
    // }

    await tempEvent.save();

    //randomly add friends to each group
    const tempGroup = groups[Math.floor(Math.random() * groups.length)];
    tempGroup.friends.push(newFriend._id);

    //add the group to each friend 
    await Friend.updateOne(
      { _id: newFriend._id },
      { $push: { groups: tempGroup._id } }
    )
    //add the same friend you added to the group to the invitation group
    await InvitationGroup.create({invitee: newFriend._id, group: tempGroup._id, status: "accepted", email: newFriend.email})
    // if (count+1 < friends.length) {
    //   await InvitationGroup.create({invitee: friends[count+1]._id, group: tempGroup._id, status: "pending", email: friends[count+1].email})
    //   console.log("newestInvitationGroup", await InvitationGroup.find().sort({$natural:1}).limit(1))
    // }

    await tempGroup.save();

    // count += 1
  }

  console.log("all done!");
  process.exit(0);
});
