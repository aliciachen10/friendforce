import { useState } from "react";
import FriendsPage from "./friendsPage";
import FriendList from "../util/friendList";


/* MainFriends
    Controller for Friend tab's appearance. Clicking on a user in the list
    changes the activeFriend to a Friend object containing address, name,
    info, etc. This is used to activate and populate the FriendPage component.
*/
function MainFriends () {

    //Display is either the friendlist or a friendpage based on this state.
    const [activeFriend, setActiveFriend] = useState("");

    //This state is what needs to be set by the api call.
    //If time allows, we should narrow this search to people in groups with you.
    const people = [
        {
            "name": "Andrew Bumgarner",
            "address": "420 Alameda Ave. Los Angeles, CA",
            "email": "Andrewbumnc@gmail.com",
            "phone": "919-111-2222",
            "about_me": "I'm Andrew and I like technical sales",
            "interests": ["bunda", "kites", "los angeles", "ramen", "sales", "startups"]
          },
          {
            "name": "Jared Kohrt", 
            "address": "69 Loblolly Pine Dr. Raleigh, NC",
            "email": "jkohrt@gmail.com",
            "phone": "336-384-3842",
            "about_me": "I'm a compsci grad who's doing a bootcamp and don't play DnD",
            "interests": ["birdwatching", "rollerskating", "powered paragliding", "indoor skydiving"]
          },
          {
            "name": "Alicia Chen",
            "address": "3802 Giant Teddy Bear St. Chapel Hill, NC",
            "email": "aliciachen@gmail.com",
            "phone": "702-382-9120",
            "about_me": "I'm some random person who does data science in their free time",
            "interests": ["amusement parks", "fictitious history", "absurdism", "Samuel Beckett"]
          }
      ]
    const [directory, setDirectory] = useState(people);

    //Conditionally render child component based on state
    function displayFriendPage(currFriend) {
        if(currFriend){
            return (
                <div className = "flex-grow max-w-fit min-w-max">
                    <FriendsPage user = {activeFriend} />
                </div>  
            )
        }
    }

    return (
        <div className="flex flex-col lg:flex-row">
            <div className = "w-full max-h-screen pt-4 flex-grow-0">
                <FriendList mainFriendSetter = {setActiveFriend} directory = {directory}/>
            </div>
            {displayFriendPage(activeFriend)}
        </div>
    )
}

export default MainFriends