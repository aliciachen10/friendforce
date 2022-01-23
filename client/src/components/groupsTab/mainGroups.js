import {useState,useEffect} from "react";
import GroupsList from "./groupList";
import GroupsPage from "./groupsPage";
import Footer from "../util/footer";
import { useQuery } from "@apollo/client";
import {QUERY_GROUPS, QUERY_SINGLE_GROUP} from '../utils/queries';
import { selectionSetMatchesResult } from "@apollo/client/cache/inmemory/helpers";


function MainGroups () {

    //Display is either the friendlist or a friendpage based on this state.
    const [activeGroup, setActiveGroup] = useState("");

    //Get all Groups via the api and store it as a state
    const { loading, data } = useQuery(QUERY_GROUPS);

    //GroupPage only displays if a specific group has been selected from the list.
    function displayGroupPage(currGroup) {
        if(currGroup){
            return (
                <div className = "flex-grow p-4 w-full pr-2 xl:w-2/3 max-h-fit mb-16">
                    <GroupsPage group = {activeGroup} groupDirectory = {data.groups}/>
                </div>  
            )
        }
    }

    return (
        <div className="relative min-h-screen bg-gray-200 ">
            <div className="flex flex-col xl:flex-row xl:w-full justify-center align-middle">
                <div className = {`p-2 m-6 ` + (activeGroup ? 'w-full pr-12 xl:w-2/5' : 'w-full')}>
                    {/* Will only display list of groups once data has been loaded form api */}
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <GroupsList 
                        mainGroupSetter = {setActiveGroup} 
                        groupDirectory = {data.groups}/>
                    )}
                </div>
                {displayGroupPage(activeGroup)}
            </div>
            <Footer/>
        </div>
    )
}

export default MainGroups