import SubmitEventField from "./event-SubmitField"
import {useState} from "react";

function EventDescription(props) {

  const event = props.event;

  return (
    <div> 
      <div>
        <h3 className="text-lg border-b-2 leading-6 font-medium text-gray-900 pb-2 -ml-4 2xl:ml-0 -mt-4">Description</h3>
      </div>
      <div className="p-4 border-t leading-16 ">
        {event.description}
      </div>
    </div> 

  )
}


export default EventDescription