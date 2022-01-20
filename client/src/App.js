import React, {useEffect, useState} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// universal components
import Navbar from './components/Navbars/Navbar';
import Footer from './components/Footer';

// page components
import MainFriends from './components/friendsTab/mainFriends';
import Dashboard from './components/dashboardTab/Dashboard'
import MainEvents from './components/eventsTab/mainEvents';
import MainGroups from './components/groupsTab/mainGroups';
import Login from './components/loginPage/loginPage';

import GroupList from './components/groupsTab/groupList';
import logo from './logo.svg';
import ActiveTab from './components/ActiveTab.js'



/* App.js
    Parent component of app body and navbar (everything).
    Has a unique state for each "tab" in the application.
*/
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = localStorage.getItem("user");
    u && JSON.parse(u) ? setUser(true) : setUser(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  return (
    <div >
      <Navbar />
      <Routes>
        {!user && (
          <Route 
            path="/login" 
            element={<Login authenticate={() => setUser(true)} />} 
          />
        )}
        {user && (
          <>
            <Route 
              path="/dashboard" 
              element={
                <Dashboard /> }
            />
            <Route 
              path="/friends" 
              element={
                <MainFriends /> }
            />
            <Route 
              path="/groups" 
              element={
                <MainGroups /> }
            />
            <Route 
              path="/events" 
              element={
                <MainEvents /> }
            />
          </>
        )}
        <Route path="*" element={<Navigate to={ user ? "/dashboard" : "/login" } />} />
      </Routes>
    </div>
  );
};

export default App;
