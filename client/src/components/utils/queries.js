import { gql } from '@apollo/client';

export const QUERY_FRIENDS = gql`
query getFriends {
  friends {
    _id
    name,
    phone,
    email,
    address,
    interests,
    groups {
      name,
      description
    },
    events {
      _id,
      name,
      description
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

// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       name
//       skills
//     }
//   }
// `;
