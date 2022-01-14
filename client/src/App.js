import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';
import ActiveTab from './components/ActiveTab.js'
import Navbar from './components/Navbars/Navbar';
import GroupList from './components/groupsTab/groupList';
import Footer from './components/Footer';

function App() {
  const [currentTab, setTab] = useState("Dashboard");

  return (
    <div >
      <Navbar tabStateSetter = {setTab} currTab = {currentTab}/>
      <ActiveTab currTab = {currentTab}/>
    </div>
  );
}

export default App;
