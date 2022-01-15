import {useState} from "react";
import EventsPage from "./eventsPage";
import EventsList from "./eventsList";




function MainEvents () {


    const [eventState, setEventState] = useState("eventlist");


    function displayEventPage(eventOption) {
        if (eventOption === "eventpage") {
            return <EventsPage mainEventSetter = {setEventState}/>
        }
        else if (eventOption === "eventlist"){
            return <EventsList mainEventSetter = {setEventState}/>
        }
    } 








    return (
        <div>
            {displayEventPage(eventState)}
        </div>
    )
}

export default MainEvents