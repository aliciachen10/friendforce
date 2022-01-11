const { gql } = require('apollo-server-express');

//profile(profileId: ID!) -- that means to get a single profile, enter the profileID, which is required to obtain that profile
// type Profile {
//   _id: ID
//   name: String
//   skills: [String]!
// }

// type Query {
//   profiles: [Profile]!
//   profile(profileId: ID!): Profile
// }

// type Mutation {
//   addProfile(name: String!): Profile
//   addSkill(profileId: ID!, skill: String!): Profile
//   removeProfile(profileId: ID!): Profile
//   removeSkill(profileId: ID!, skill: String!): Profile
// }
//event:     date_created: Date
    // date: Date

    //friend:     date_created: Date
    //group:     date_created: Date 
    //invitationEvent:     date_created: Date 
    //invitationGroup:     date_created: Date 
const typeDefs = gql`
  scalar Date 
 
  type Event {
    _id: ID
    name: String 

    location: String
    description: String 
    invitees: [String]
    creator: String
  }

  type Friend {
    _id: ID 
    name: String

    address: String
    email: String
    phone: String 
    interests: [String]
    groups: [String]
    events: [String] 
    invitations_received: [String] 
    invitations_sent: [String]
  }

  type Group {
    _id: ID
    name: String

    description: String 
    friends: [String] 
    events: [String] 
    interests: [String] 
  }

  type InvitationEvent {

    invitee: String 
    inviter: String 
    email: String 
    status: String 
    event: String 
  }

  type InvitationGroup {

    invitee: String 
    inviter: String 
    email: String 
    status: String 
    group: String 
  }

  type Query {
    events: [Event]
    friends: [Friend]
    groups: [Group]
    invitationEvents: [InvitationEvent]
    invitationGroups: [InvitationGroup]
  }


`;

module.exports = typeDefs;
