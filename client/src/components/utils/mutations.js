import { gql } from '@apollo/client';
//to do: need to add in REMOVE_EVENT, REMOVE_GROUP, REMOVE_FRIEND AND OTHER MUTATIONS IN THE FILE 

export const ADD_FRIEND = gql`
mutation addFriend($name: String!, $address: String, $email: String!, 
  $phone: String, $interests: [String]) {
	addFriend(name: $name, address: $address, email:$email, 
    phone:$phone, interests: $interests) {
		_id
		name
    address
    email
    phone
		interests
	}
}`;

export const ADD_EVENT = gql`
mutation addEvent($name: String!, $date:String, $location:String, 
		$description:String, $friends:[ID], $creator:String) {
	addEvent(name: $name, date:$date, location:$location,
  description:$description, friends:$friends, creator:$creator) {
		_id
		name
    location
    description
    friends {
      name
    }
    creator {
      name
    }
	}
}
`;

export const ADD_GROUP = gql`
mutation addGroup(
  $name: String!
  $description: String
  $friends: [ID]
  $interests: [String]
) {
  addGroup(
    name: $name
    description: $description
    friends: $friends
    interests: $interests
  ) {
    _id
    name
    description
    friends {
      _id,
      name
    }
    interests
  }
}
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;
