import { useState } from "react";
import FriendsList from "./friendslist";
import FriendsPage from "./friendspage";




 function MainFriends (props) {

    const {friendState, setFriendState} = useState("friendlist")

    function chooseFriend(friendOption) {
        if(friendOption === "friendpage"){
            return <FriendsPage setFriendState />
        }
        else if(friendOption === "friendlist") {
            return <FriendsList setFriendState />
        }
    }


return (

    <div className>

      {chooseFriend(friendState) }
    </div>
)


}

export default MainFriends