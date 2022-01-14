import { useState, useEffect } from "react";
import FriendsList from "./friendsList";
import FriendsPage from "./friendsPage";


function MainFriends () {

    //For some reason, friendState is initialized as 'undefined'. We had to make this if/else to account for this.
    const [friendState, setFriendState] = useState("friendlist");

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
            {/* executed before friendState is assigned */}
            {displayFriendPage(friendState)} 
        </div>
    )


}

export default MainFriends