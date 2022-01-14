const {Event, Friend, Group, InvitationEvent, InvitationGroup } = require('../models');
const  {GraphQLDateTime} = require("graphql-iso-date");

const resolvers = {
  Query: {
    events: async () => {
      return Event.find().populate('friends');
    },
    friends: async () => {
      return Friend.find().populate('groups').populate('events');
    },
    groups: async () => {
      return Group.find().populate('friends');
    },
    invitationEvents: async () => {
      return InvitationEvent.find();
    },
    invitationGroups: async () => {
      return InvitationGroup.find();
    },
    event: async (parent, { eventId }) => {
      return Event.findOne({ _id: eventId }).populate('friends');
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
    addInvitationGroup: async (parent, { email }) => { //would this be the best way to create it, with the email? 
      return InvitationGroup.create({ email });
    },
    addInvitationEvent: async (parent, { email }) => { //would this be the best way to create it, with the email? 
      return InvitationGroup.create({ email });
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
