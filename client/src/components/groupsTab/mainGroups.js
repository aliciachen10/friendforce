import {useState} from "react";
import GroupsList from "./groupList";
import GroupsPage from "./groupsPage";


function MainGroups () {


    const [groupState, setGroupState] = useState("grouplist");


    function displayGroupPage(groupOption) {
        if(groupOption === "grouppage"){
            return <GroupsPage mainGroupSetter = {setGroupState}/>

        }
        else if (groupOption === "grouplist") {
            return <GroupsList mainGroupSetter = {setGroupState}/>
        }
    }



    return (
        <div>
            {displayGroupPage(groupState)}
        </div>
    )
}

export default MainGroups