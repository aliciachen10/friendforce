import { useState } from "react";
import FriendsList from "./friendsList";
import FriendsPage from "./friendsPage";

/* MainFriends
    Parent of the two possible friend views--the default
    list of all friends (FriendList) and a profile view of 
    a specific friend (FriendPage)
*/
function MainFriends () {

    //Display is either the friendlist or a friendpage based on this state.
    const [friendState, setFriendState] = useState("friendlist");

    //Conditionally render child component based on state
    function displayFriendPage(friendOption) {
        if(friendOption === "friendpage"){
            return <FriendsPage mainFriendSetter = {setFriendState} />
        }
        else if (friendOption === "friendlist"){
            return <FriendsList mainFriendSetter = {setFriendState}/>
        }
    }

    return (
        <div>
            {displayFriendPage(friendState)} 
        </div>
    )
}

export default MainFriends