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
  const invitationEvents = await InvitationEvent.insertMany(invitationEventData);
  const invitationGroups = await InvitationGroup.insertMany(invitationGroupData);

  //to do: will need to seed the info for each of the invitations

  for (newFriend of friends) {
    // for (newClass of classes) {
    //randomly add friends to each event
    const tempEvent = events[Math.floor(Math.random() * events.length)];
    tempEvent.invitees.push(newFriend._id);
    // friends[Math.floor(Math.random() * friends.length)]
    // await InvitationEvent.create({invitee: newFriend._id, })
    //mongoose create a new document -- add the event object id = tempEvent, the the invitee = newFriend._id
    //the inviter = anotherFriend._id that's not the existing newFriend._id

    await tempEvent.save();

    //randomly add friends to each group
    const tempGroup = groups[Math.floor(Math.random() * groups.length)];
    tempGroup.friends.push(newFriend._id);
    await tempGroup.save();
  }

  console.log("all done!");
  process.exit(0);
});
