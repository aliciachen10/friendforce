import { gql } from '@apollo/client';

export const QUERY_FRIENDS = gql`
query getFriends {
  friends {
    _id
    name
    phone
    email
    address
    about_me
    interests
    groups {
      name,
      description
    },
    events {
      _id,
      name,
      description,
      date_created
      date
      location
    }
  }
}
`;

export const QUERY_SINGLE_FRIEND = gql`
  query singleFriend($id: ID!) {
    friend(id: $id) {
      name
      address
      phone
      email
      interests
      groups {
        _id 
        name
        description
      }
      events {
        _id 
        name 
        description
      }
    }
  }
`;

export const QUERY_GROUPS = gql`
query getGroups {
  groups{
    _id
    name
    date_created
    description
    interests
    friends { 
      _id
      name
      email
      phone
    }

  }
}
`;

export const QUERY_SINGLE_GROUP = gql `
query singleGroup($id: ID!) {
  group(id: $id) {
    name
    date_created
    description
    interests
    friends {
      _id
      name
    }
  }
}
`;



export const QUERY_EVENTS = gql `
query getEvents {
  events{
    _id
    name
    date_created
    date
    location
    description
    friends {
      _id
      name
      email
      phone
    }
    creator {
      _id
      name
    }
  }
}
`;


export const QUERY_SINGLE_EVENT = gql `
query singleEvent ($id: id!) {
  event(id: $id) {
    name
    date_created
    date
    location
    description
    friends {
      _id
      name
    }
    creator {
      _id
      name
    }
  }
}
`;







// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       name
//       skills
//     }
//   }
// `;
