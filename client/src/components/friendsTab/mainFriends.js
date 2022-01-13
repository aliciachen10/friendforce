import { useState } from "react";
import FriendsList from "./friendsList";
import FriendsPage from "./friendsPage";


function MainFriends () {

    const {friendState, setFriendState} = useState("friendpage");

    function chooseFriend(friendOption) {
        if(friendOption === "friendpage"){
            return <FriendsPage mainFriendSetter = {setFriendState} />
        }
        else if(friendOption === "friendlist") {
            return <FriendsList/>
        }
    }

    return (
        <div className>
            {console.log("friendpage")}
        </div>
    )


}

export default MainFriends