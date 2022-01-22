const {Event, Friend, Group, InvitationEvent, InvitationGroup } = require('../models');
const  {GraphQLDateTime} = require("graphql-iso-date");
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    events: async () => {
      return Event.find().populate('friends');
    },
    friends: async () => {
      return Friend.find().populate('groups').populate('events');
    },
    friend: async (parent, { profileId }) => {
      return Friend.findOne({ id: profileId });
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
    addEvent: async (parent, { name, date, location, description, friends, creator }) => {
      const newEvent = await Event.create({ name, date, location, description, friends, creator });
      return newEvent;
    },
    addFriend: async (parent, { name, address, email, phone, about_me, interests, password }) => {
      const friend = await Friend.create({name, address, email, phone, about_me, interests, password})
      // const token = signToken(friend); -- jennifer, not sure if this will be useful to you with auth stuff 
      // return { token, friend };
      return friend;
    },
    addGroup: async (parent, { name, description, friends, interests }) => {
      return await Group.create({ name, description, friends, interests });
    },
    addInvitationGroup: async (parent, { invitee, inviter, email, status, group }) => { //would this be the best way to create it, with the email? 
      return await InvitationGroup.create({ invitee, inviter, email, status, group });
    },
    addInvitationEvent: async (parent, { invitee, inviter, email, status, event }) => { //would this be the best way to create it, with the email? 
      return await InvitationGroup.create({ email, status, event });
    },
    removeEvent: async (parent, { eventId }) => {
      return await Event.findOneAndDelete({ _id: eventId });
    },
    removeGroup: async (parent, { groupId }) => {
      return await Group.findOneAndDelete({ _id: groupId });
    },
    login: async (parent, { email, password }) => {
      const profile = await Friend.findOne({ email })
      .populate('groups')
      .populate('events')
      // .populate('invitations_recieved')
      // .populate('invitations_sent');
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
