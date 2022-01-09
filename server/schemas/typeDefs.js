const { gql } = require('apollo-server-express');

//profile(profileId: ID!) -- that means to get a single profile, enter the profileID, which is required to obtain that profile
const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    skills: [String]!
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(name: String!): Profile
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

module.exports = typeDefs;
