const {Event, Friend, Group, Invitation } = require('../models');
//each of the ones defined in the typeDef needs a corresponding resolver
//    profile: async (parent, { profileId }) => {
//   return Profile.findOne({ _id: profileId });
// },
// what this means is that we are taking the profileId and entering that into _id: profileID to findOne that matches it 
// {new: true} -- means return the newly updated profile 

const resolvers = {
  Query: {
    events: async () => {
      return Event.find();
    },

    event: async (parent, { eventId }) => {
      return Event.findOne({ _id: eventId });
    },
  },

  Mutation: {
    addEvent: async (parent, { name }) => {
      return Event.create({ name });
    },
    addFriend: async (parent, { name }) => {
      return Friend.create({ name });
    },
    addGroup: async (parent, { name }) => {
      return Group.create({ name });
    },
    addInvitation: async (parent, { email }) => { //would this be the best way to create it, with the email? 
      return Invitation.create({ email });
    },
    removeEvent: async (parent, { eventId }) => {
      return Event.findOneAndDelete({ _id: eventId });
    },
    removeGroup: async (parent, { groupId }) => {
      return Group.findOneAndDelete({ _id: groupId });
    },
  },
};

module.exports = resolvers;
