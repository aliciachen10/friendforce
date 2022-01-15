const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Date 

  type Profile {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }
 
  type Event {
    _id: ID
    name: String 

    location: String
    description: String 
    friends: [Friend]
    creator: String
  }

  type Friend {
    _id: ID 
    name: String
    date_created: Date
    address: String
    email: String
    phone: String 
    interests: [String]
    groups: [Group]!
    events: [Event] 
    invitations_received: [String] 
    invitations_sent: [String]
  }

  type Group {
    _id: ID
    name: String
    date_created: Date 
    description: String 
    friends: [Friend]! 
    interests: [String] 
  }

  type InvitationEvent {
    date_created: Date 
    invitee: String 
    inviter: String 
    email: String 
    status: String 
    event: String 
  }

  type InvitationGroup {
    date_created: Date 
    invitee: String 
    inviter: String 
    email: String 
    status: String 
    group: String 
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    event: Event
    events: [Event]
    friends: [Friend]
    groups: [Group]
    invitationEvents: [InvitationEvent]
    invitationGroups: [InvitationGroup]
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent(name: String!): Event
    addFriend(name: String!): Friend
    addGroup(name: String!): Group
    addInvitationGroup(email: String!): InvitationGroup 
    addInvitationEvent(email: String!): InvitationEvent
    removeGroup(groupId: ID!): Group
    removeEvent(eventId: ID!): Event
  }


`;

//to do: resolvers - addevent, addfriend, and addgroup might need to be changed so they can be added by ID

module.exports = typeDefs;
