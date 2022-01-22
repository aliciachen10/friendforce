import {useState} from "react";
import GroupsList from "./groupList";
import GroupsPage from "./groupsPage";
import Footer from "../util/footer";


function MainGroups () {


    //Display is either the friendlist or a friendpage based on this state.
    const [activeGroup, setActiveGroup] = useState("");

    //This state is what needs to be set by the api call.
    //If time allows, we should narrow this search to people in groups with you.
    const groups = [
        {
            "name": "Butterfly fanclub",
            "description": "LS",
            "interests": ["small insects", "enjoyment of nature"]
          },
          {
            "name": "urban xploration club",
            "description": "we get into abandoned buildings and take photographs",
            "interests": ["curiosity", "urban structures", "photography"]
          },
          {
            "name": "Videography singles",
            "description": "folks in the entertainment industry who want to meet without the snafu of your director being there while you're fliiiiirting",
            "interests": ["visual design", "drinks", "entertainment", "going out"]
          }
      ]
    const [groupDirectory, setGroupDirectory] = useState(groups);

    //Conditionally render child component based on state
    function displayFriendPage(currGroup) {
        if(currGroup){
            return (
                <div className = "flex-grow p-4 w-full pr-2 xl:w-2/3 max-h-fit mb-16">
                    <GroupsPage group = {activeGroup} />
                </div>  
            )
        }
    }

    return (
        <div className="relative min-h-screen bg-gray-200 ">
            <div className="flex flex-col xl:flex-row xl:w-full justify-center align-middle">
                <div className = {`p-2 m-6 ` + (activeGroup ? 'w-full pr-12 xl:w-2/5' : 'w-full')}>
                    <GroupsList mainGroupSetter = {setActiveGroup} groupDirectory = {groupDirectory}/>
                </div>
                {displayFriendPage(activeGroup)}
            </div>
            <Footer/>
        </div>
    )
}

export default MainGroups