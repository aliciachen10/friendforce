import { useState } from "react";
import FriendsList from "./friendsList";
import FriendsPage from "./friendsPage";


function MainFriends () {

    //For some reason, friendState is initialized as 'undefined'. We had to make this if/else to account for this.
    const {friendState, setFriendState} = useState("friendpage");

    function chooseFriend(friendOption) {
        if(friendOption === "friendpage"){
            return <FriendsPage mainFriendSetter = {setFriendState} />
        }
        else {
            return <FriendsList mainFriendSetter = {setFriendState}/>
        }
    }

    return (
        <div>
            {chooseFriend(friendState)}
        </div>
    )


}

export default MainFriends