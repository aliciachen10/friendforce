const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Date 

  type Auth {
    token: ID!
    profile: Friend
    friend: Friend
  }
 
  type Event {
    _id: ID
    name: String 
    date: Date
    date_created: Date
    location: String
    description: String 
    friends: [Friend]
    creator: Friend
  }

  type Friend {
    _id: ID 
    name: String
    date_created: Date
    address: String
    email: String
    phone: String 
    about_me: String
    interests: [String]
    groups: [Group]!
    events: [Event] 
    invitations_received: [String] 
    invitations_sent: [String]
    password: String
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
    event: Event
    events: [Event]
    friends: [Friend]
    friend(friendId: ID!): Friend
    groups: [Group]
    group: Group
    invitationEvents: [InvitationEvent]
    invitationGroups: [InvitationGroup]
    me: Friend
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent(name: String!, date: String, location: String, description: String, friends: [ID], creator: String): Event 
    addFriend(name: String!, address: String, email: String!, phone: String, about_me: String, interests: [String], password: String): Friend
    addGroup(name: String!, description: String, friends: [ID], interests: [String]): Group
    addInvitationGroup(invitee: ID, inviter: ID, email: String!, status: [String], group: String): InvitationGroup 
    addInvitationEvent(invitee: ID, inviter: ID, email: String!, status: String, event: String): InvitationEvent
    removeGroup(groupId: ID!): Group
    removeEvent(eventId: ID!): Event
  }


`;

//to do: resolvers - addevent, addfriend, and addgroup might need to be changed so they can be added by ID

module.exports = typeDefs;
