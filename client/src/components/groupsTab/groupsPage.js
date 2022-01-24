//import { PaperClipIcon } from '@heroicons/react/solid'
import React, {useState} from 'react'
import { CalendarIcon, LocationMarkerIcon, UsersIcon } from '@heroicons/react/solid'
import GroupData from './group-Data';
import GroupDescription from './group-Description'
import GroupMembers from './group-Members';
import CreateEvent from './create-Group';

function GroupsPage (props) {
  const selectedGroup = props.group;

  //Placeholder: need a useQuery to get events of a group.
  const events = [
    {
      id: 1,
      title: 'Rufus-du-sol',
      type: 'upcoming',
      location: 'CocoBooth Theater',
      department: 'music',
      closeDate: '2020-01-07',
      closeDateFull: 'January 7, 2020',
    },
    {
      id: 2,
      title: 'Rufus-du-sol',
      type: 'upcoming',
      location: 'CocoBooth Theater',
      department: 'music',
      closeDate: '2020-01-07',
      closeDateFull: 'January 7, 2020',
    },
    {
      id: 3,
      title: 'Rufus-du-sol',
      type: 'upcoming',
      location: 'CocoBooth Theater',
      department: 'music',
      closeDate: '2020-01-07',
      closeDateFull: 'January 7, 2020',
    },
  ]

  const [eventsState, setEvents] = useState(events)
  
  return (
    <div className="flex flex-row space-x-4 p-4 m-4 lg:mx-4 bg-white rounded-lg shadom-sm overflow-auto">
      {/* Everything besides the scrolling sidebar */}
      <div className="flex flex-col mx-auto bg-white p-4 m-4 space-x-4  max-h-screen mb-16">
          {/* Profile Pic and Name*/}
          <div className = "flex-col pb-2 self-center">
              <img className = "rounded-full max-h-32 pb-2 m-auto" src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"></img>
              <div className = "text-lg text-center">{selectedGroup.name}</div>
          </div>

          <div className="flex flex-col flex-wrap space-x-4 space-y-4 justify-evenly p-4 xl:flex-row">
            <div className = "flex-grow xl:w-2/5">
              <GroupData selectedGroup = {selectedGroup}/>
            </div>

            <div className = "flex-grow xl:w-2/5">
              <GroupDescription selectedGroup = {selectedGroup}/>
            </div>
            
            {/* Events section--Idk how to get a specific group's events! */}
            <div className = "flex-grow w-full">
              <GroupMembers  group = {selectedGroup} />
            </div>
          </div>
      </div>
    </div>
  )
}

export default GroupsPage;



/* This example requires Tailwind CSS v2.0+ */
