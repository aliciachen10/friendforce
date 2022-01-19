import React, {useEffect, useState} from 'react';
import FriendsData from "./friends-Data";
import AboutMe from "./friends-AboutMe";
import FriendSidebar from './friendsList-sidebar';
import FriendGroups from './friends-Groups';
import FriendEvents from './friends-Events';

function FriendsPage (props) {

  //TODO: Set by user clicking something in the list (frontend)
  const user = props.user;
  const directory = props.directory;

  //TODO: Set by initial db call in useEffect (backend/frontend). Directory is a placeholder value.
  const [directoryState, setDirectory] = useState(directory);

  //TODO: Set by initial db call in useEffect (backend/frontend). Groups is a placeholder value.
  const groups = [
    {
      name: 'Groupo-de-seis',
      email: "placeholder"
    },
    {
      name: 'Nerf Herders',
      email: "another placeholder"
    },
    {
      name: 'Chess Club',
      email: "Yet another ph"
     
    },
  ]
  const [groupsState, setGroups] = useState(groups)

  //TODO: Set by initial db call in useEffect (backend/frontend). Events is a placeholder value.
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
    <div>
      <div className="flex flex-row space-x-4 m-0 lg:mx-4">
    

        {/* Everything besides the scrolling sidebar */}
        <div className="flex flex-col mx-auto bg-white p-4 m-4 space-x-4 rounded-lg ">
            {/* Profile Pic and Name*/}
            <div className = "flex-col pb-2 self-center">
                <img className = "rounded-full max-h-32 pb-2 m-auto" src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"></img>
                <div className = "text-lg text-center">{user.name}</div>
            </div>

            <div className="grid grid-cols-1 space-x-4 space-y-4 p-4">

              <FriendsData user = {user}/>
              <AboutMe user = {user}/>
              
              {/* Groups section */}
              <FriendGroups groups = {groups}/>

              {/* Events section */}
              <FriendEvents events = {events}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FriendsPage;



/* This example requires Tailwind CSS v2.0+ */
