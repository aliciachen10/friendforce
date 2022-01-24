//import { PaperClipIcon } from '@heroicons/react/solid'
import { CalendarIcon, LocationMarkerIcon, UsersIcon } from '@heroicons/react/solid'
import EventData from './event-Data'
import EventDescription from './event-Description'
import CreateEvent from './create-Event';
import EventMembers from './event-Members';

function EventsPage (props) {

  //TODO: Set by user clicking something in the list (frontend)
  const event = props.event;
  const directory = props.eventDirectory;

  return (
      <div className="flex flex-row space-x-4 p-4 m-4 lg:mx-4 bg-white rounded-lg shadom-sm overflow-auto">
        {/* Everything besides the scrolling sidebar */}
        <div className="flex flex-col mx-auto bg-white p-4 m-4 space-x-4  max-h-screen mb-16">
            {/* Profile Pic and Name*/}
            <div className = "flex-col pb-2 self-center">
                <img className = "rounded-full max-h-32 pb-2 m-auto" src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"></img>
                <div className = "text-lg text-center">{event.name}</div>
            </div>

            <div className="flex flex-col flex-wrap space-x-4 space-y-4 justify-evenly p-4 xl:flex-row">
              <div className = "flex-grow 2xl:w-2/5">
                <EventData event = {event}/>
              </div>

              <div className = "flex-grow w-full 2xl:w-2/5">
                <EventDescription event = {event}/>
              </div>
                
              <div className = "flex-grow min-w-full 2xl:w-2/5">
                <EventMembers event = {event}/>
              </div>
            </div>
        </div>
      </div>
  )
}

export default EventsPage;
