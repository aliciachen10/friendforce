//import { PaperClipIcon } from '@heroicons/react/solid'
import FriendsData from "./friends-Data"
import AboutMe from "./friends-AboutMe"
import FriendSidebar from './friendsList-sidebar';
import FriendGroups from './friends-Groups';
import FriendEvents from './friends-Events';

function FriendsPage () {

  //These probably need to be states so that they dynamically update
  const directory = {
    A: [
      {
        id: 1,
        name: 'Leslie Abbott',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 2,
        name: 'Hector Adams',
        role: 'VP, Marketing',
        imageUrl:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 3,
        name: 'Blake Alexander',
        role: 'Account Coordinator',
        imageUrl:
          'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 4,
        name: 'Fabricio Andrews',
        role: 'Senior Art Director',
        imageUrl:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    B: [
      {
        id: 5,
        name: 'Angela Beaver',
        role: 'Chief Strategy Officer',
        imageUrl:
          'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 6,
        name: 'Yvette Blanchard',
        role: 'Studio Artist',
        imageUrl:
          'https://images.unsplash.com/photo-1506980595904-70325b7fdd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 7,
        name: 'Lawrence Brooks',
        role: 'Content Specialist',
        imageUrl:
          'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    C: [
      {
        id: 8,
        name: 'Jeffrey Clark',
        role: 'Senior Art Director',
        imageUrl:
          'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 9,
        name: 'Kathryn Cooper',
        role: 'Associate Creative Director',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    E: [
      {
        id: 10,
        name: 'Alicia Edwards',
        role: 'Junior Copywriter',
        imageUrl:
          'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 11,
        name: 'Benjamin Emerson',
        role: 'Director, Print Operations',
        imageUrl:
          'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 12,
        name: 'Jillian Erics',
        role: 'Designer',
        imageUrl:
          'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 13,
        name: 'Chelsea Evans',
        role: 'Human Resources Manager',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    G: [
      {
        id: 14,
        name: 'Michael Gillard',
        role: 'Co-Founder / CTO',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 15,
        name: 'Dries Giuessepe',
        role: 'Manager, Business Relations',
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    M: [
      {
        id: 16,
        name: 'Jenny Harrison',
        role: 'Studio Artist',
        imageUrl:
          'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 17,
        name: 'Lindsay Hatley',
        role: 'Front-end Developer',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 18,
        name: 'Anna Hill',
        role: 'Partner, Creative',
        imageUrl:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    S: [
      {
        id: 19,
        name: 'Courtney Samuels',
        role: 'Designer',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 20,
        name: 'Tom Simpson',
        role: 'Director, Product Development',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    T: [
      {
        id: 21,
        name: 'Floyd Thompson',
        role: 'Principal Designer',
        imageUrl:
          'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 22,
        name: 'Leonard Timmons',
        role: 'Senior Designer',
        imageUrl:
          'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 23,
        name: 'Whitney Trudeau',
        role: 'Copywriter',
        imageUrl:
          'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    W: [
      {
        id: 24,
        name: 'Kristin Watson',
        role: 'VP, Human Resources',
        imageUrl:
          'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 25,
        name: 'Emily Wilson',
        role: 'VP, User Experience',
        imageUrl:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    Y: [
      {
        id: 26,
        name: 'Emma Young',
        role: 'Senior Front-end Developer',
        imageUrl:
          'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
  }

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
  
  return (
    <div>
      <div className="flex flex-row">
      
        {/* Sidebar Directory */}
        <FriendSidebar directory = {directory}/>

        {/* Everything besides the scrolling sidebar */}
        <div className="flex flex-col mx-auto bg-white p-4 rounded-lg">
            {/* Profile Pic and Name*/}
            <div className = "flex-col pb-2 self-center">
                <img className = "rounded-full max-h-32 pb-2 m-auto" src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"></img>
                <div className = "text-lg text-center">Friend Name Here</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 space-x-4 space-y-4 p-4">

              <FriendsData/>
              <AboutMe/>
              
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
