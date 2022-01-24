import { useState } from "react";
import FriendsPage from "./friendsPage";
import FriendList from "../util/friendList";
import Footer from "../util/footer"
import { useQuery } from '@apollo/client';
import { QUERY_FRIENDS, QUERY_SINGLE_FRIEND, QUERY_ME } from '../utils/queries';
/* MainFriends
    Controller for Friend tab's appearance. Clicking on a user in the list
    changes the activeFriend to a Friend object containing address, name,
    info, etc. This is used to activate and populate the FriendPage component.
*/
function MainFriends () {
  // const { loading, data } = useQuery(
  //   profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
  //   {
  //     variables: { profileId: profileId },
  //   }
  // );
  const { loading2, data2 } = useQuery(
    profileId ? QUERY_SINGLE_FRIEND : QUERY_ME,
    {
    variables: { profileId: '61ed72719a86f00514b73eb4'}
  });

  console.log(data2)

  const { loading, data } = useQuery(QUERY_FRIENDS);
  const people = data?.friends || [];

    //Display is either the friendlist or a friendpage based on this state.
    const [activeFriend, setActiveFriend] = useState("");

    //This state is what needs to be set by the api call.
    //If time allows, we should narrow this search to people in groups with you.
  
    const [directory, setDirectory] = useState(people);

    //Conditionally render child component based on state
    function displayFriendPage(currFriend) {
        if(currFriend){
            return (
                <div className = "flex-grow p-4 w-full pr-2 xl:w-2/3 max-h-fit mb-16">
                    <FriendsPage user = {activeFriend} />
                </div>  
            )
        }
    }

    return (
        <div className="relative min-h-screen bg-gray-200 ">
            <div className="flex flex-col xl:flex-row xl:w-full justify-center align-middle">
                <div className = {`p-2 m-6 ` + (activeFriend ? 'w-full pr-12 xl:w-2/5' : 'w-full')}>
                    <FriendList mainFriendSetter = {setActiveFriend} directory = {directory}/>
                </div>
                {displayFriendPage(activeFriend)}
            </div>
            <Footer/>
        </div>
    )
}

export default MainFriends