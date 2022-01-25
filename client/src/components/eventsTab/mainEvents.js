import {useState} from "react";
import {QUERY_EVENTS} from '../utils/queries';
import { useQuery } from "@apollo/client";

import Footer from "../util/footer";
import EventsPage from "./eventsPage";
import EventsList from "./eventsList";

function MainGroups () {
    // const { loading, data } = useQuery(QUERY_FRIENDS);
    // const people = data?.groups || [];

    //Display is either the friendlist or a friendpage based on this state.
    const [activeEvent, setActiveEvent] = useState("");

    //Get all Groups via the api and store it as a state
    const { loading, data } = useQuery(QUERY_EVENTS);

    //GroupPage only displays if a specific group has been selected from the list.
    function displayEventPage(currEvent) {
        if(currEvent){
            return (
                <div className = "flex-grow p-4 w-full pr-2 xl:w-2/3 max-h-fit mb-16">
                    <EventsPage event = {activeEvent} eventDirectory = {data.groups}/>
                </div>  
            )
        }
    }

    return (
        <div className="relative min-h-screen bg-gray-200 ">
            <div className="flex flex-col xl:flex-row xl:w-full justify-center align-middle">
                <div className = {`p-2 m-6 ` + (activeEvent ? 'w-full pr-12 xl:w-2/5' : 'w-full')}>
                    {/* Will only display list of groups once data has been loaded form api */}
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <EventsList 
                        mainEventSetter = {setActiveEvent} 
                        eventDirectory = {data.events}/>
                    )}
                </div>
                {displayEventPage(activeEvent)}
            </div>
            <Footer/>
        </div>
    )
}

export default MainGroups