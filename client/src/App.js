import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';
import ActiveTab from './components/ActiveTab.js'
import Navbar from './components/Navbars/Navbar';
import GroupList from './components/groupsTab/groupList';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
/* App.js
    Parent component of app body and navbar (everything).
    Has a unique state for each "tab" in the application.
*/
function App() {
  //The appearance of the app's body and navbar depend on this state.
  //setTab is passed to the navbar so that the navbar can change this state.
  const [currentTab, setTab] = useState("Dashboard");

  return (
    <div >
      <Navbar tabStateSetter = {setTab} currTab = {currentTab}/>
      <ActiveTab currTab = {currentTab}/>
    </div>
  );
}

export default App;
