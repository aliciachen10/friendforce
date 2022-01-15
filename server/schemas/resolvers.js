const {Event, Friend, Group, InvitationEvent, InvitationGroup } = require('../models');
const  {GraphQLDateTime} = require("graphql-iso-date");
const { AuthenticationError } = require('apollo-server-express');
const { Profile } = require('../models');
const { signToken } = require('../utils/auth');

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
    profiles: async () => {
      return Profile.find();
    },
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
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
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);
      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });
      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }
      const correctPw = await profile.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }
      const token = signToken(profile);
      return { token, profile };
    },
  },
};

module.exports = resolvers;
