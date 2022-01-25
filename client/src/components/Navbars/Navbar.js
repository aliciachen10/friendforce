import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import ffLogo from '../../img/ff.png';
import ffText from '../../img/ff_text.png';

/* Navbar.js
   The navigation bar at the top of the app. Can set the App state so that the component
   in the body of the app changes.
*/
function Navbar(props) {
  const [navOpen, setNav] = useState(false);

  const selectedTabClass = "bg-indigo-700 text-white px-3 py-2 top-0  rounded-md text-sm font-medium";
  const unselectedTabClass = "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  }
  
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">

          {/*This div & its contents are for the mobile-style menu */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" onClick = {() => {setNav(!navOpen)}} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
            
              {/* Icon when menu is closed. */}
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              
              {/* Icon when menu is open. */}
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Flex container for left navbar content (logo and tabs) */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img className="block lg:hidden h-8 w-auto" src={ffLogo} alt="ff_logo"></img>
              <img className="hidden lg:block h-8 w-auto" src={ffText} alt="ff_logo_text"></img>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink to="/dashboard" className={({isActive})=>(isActive ? selectedTabClass : unselectedTabClass )}>Dashboard</NavLink>
                <NavLink to="/friends" className={({isActive})=>(isActive ? selectedTabClass : unselectedTabClass )}>Friends</NavLink>
                <NavLink to="/groups" className={({isActive})=>(isActive ? selectedTabClass : unselectedTabClass )}>Groups</NavLink>
                <NavLink to="/events" className={({isActive})=>(isActive ? selectedTabClass : unselectedTabClass )}>Events</NavLink>
              </div>
            </div>
          </div>

          {/* Container for right navbar content (bell and profile) */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            <div className="ml-3 relative">
            <NavLink to="/" className={({isActive})=>(isActive ? selectedTabClass : unselectedTabClass )} onClick={logout}>Log Out</NavLink>
            </div>
          </div>

        </div>
      </div>
      
      {/* This is the menu that should appear when you click the mobile hamburger icon */}
      <div className={`sm:hidden ` + (navOpen ? "hidden" : "")} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="https://github.com/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>

          <a href="https://github.com/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

          <a href="https://github.com/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

          <a href="https://github.com/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;