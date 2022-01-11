const {Event, Friend, Group, Invitation } = require('../models');

const resolversRemove = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
  },

  Mutation: {
    addProfile: async (parent, { name }) => {
      return Profile.create({ name });
    },
    addSkill: async (parent, { profileId, skill }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { skills: skill },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },
    removeSkill: async (parent, { profileId, skill }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        { $pull: { skills: skill } },
        { new: true }
      );
    },
  },
};

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
