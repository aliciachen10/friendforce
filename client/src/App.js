import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ActiveTab from './components/ActiveTab.js'
import Navbar from './components/Navbars/Navbar';
import MainFriends from './components/friendsTab/mainFriends';
import Dashboard from './components/dashboardTab/Dashboard'
import MainEvents from './components/eventsTab/mainEvents';
import MainGroups from './components/groupsTab/mainGroups';
import GroupList from './components/groupsTab/groupList';
import Footer from './components/Footer';
import Login from './components/landingPage/loginPage';

/* App.js
    Parent component of app body and navbar (everything).
    Has a unique state for each "tab" in the application.
*/
function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/friends" element={<MainFriends />}/>
        <Route path="/groups" element={<MainGroups />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/events" element={<MainEvents />}/>
      </Routes>
    </div>
  );
}

export default App;
