//import { PaperClipIcon } from '@heroicons/react/solid'
import React, {useState} from 'react'
import { CalendarIcon, LocationMarkerIcon, UsersIcon } from '@heroicons/react/solid'
import GroupData from './group-Data';
import GroupDescription from './group-Description'
import CreateGroup from './create-Group';

function GroupsPage (props) {
  const selectedGroup = props.group;
  const groupDirectory = props.groupDirectory;

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
              <div className = "text-lg text-center">{console.log(selectedGroup.name)}</div>
          </div>
          <ul role="list" className="relative z-0 divide-y divide-gray-200">
            {directory[letter].map((person) => (
              <li key={person.id} className="bg-white">
                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <a href="#" className="focus:outline-none">
                      {/* Extend touch target to entire panel */}
                      <span className="absolute inset-0" aria-hidden="true" />
                      <p className="text-sm font-medium text-gray-900">{person.name}</p>
                      <p className="text-sm text-gray-500 truncate">{person.role}</p>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          
        </div>
      ))}
    </nav>
    </div>


   <div className="col-span-4"> 
    <CreateGroup/>
            
    <> 
     <div className="grid grid-cols-2 gap-10">
    
              <GroupData/>
      {/* end of first details container*/}
      <GroupDescription/> 

  <div> 
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">Groups</h3>
       
      </div>
      <ul role="list" className="divide-y divide-gray-200">
      {people.map((person) => (
        <li key={person.email} className="py-4 flex">
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{person.name}</p>
            <p className="text-sm text-gray-500">{person.email}</p>


          <div className="flex flex-col flex-wrap space-x-4 space-y-4 justify-evenly p-4 xl:flex-row">
            <div className = "flex-grow xl:w-2/5">
              <GroupData selectedGroup = {selectedGroup}/>
            </div>

            <div className = "flex-grow xl:w-2/5">
              <GroupDescription selectedGroup = {selectedGroup}/>
            </div>
            
            {/* Events section--Idk how to get a specific group's events! */}
            <div className = "flex-grow w-full">
              <GroupEvents events = {events}/>
            </div>

          </div>
      </div>
    </>
  
      
   
    </div>
    </div>

    </div>
  )
}

export default GroupsPage;



/* This example requires Tailwind CSS v2.0+ */
