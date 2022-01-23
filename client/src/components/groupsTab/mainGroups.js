import {useState} from "react";
import GroupsList from "./groupList";
import GroupsPage from "./groupsPage";
import { useQuery } from '@apollo/client';
import { QUERY_GROUPS } from '../utils/queries';

function MainGroups () {
  // const { loading, data } = useQuery(QUERY_FRIENDS);
  // const people = data?.groups || [];


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