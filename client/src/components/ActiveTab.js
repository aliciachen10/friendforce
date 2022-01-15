import React, {useState} from 'react';
//import FriendsList from './friendsTab/mainFriends';
import GroupList from './groupsTab/groupList'
import EventsList from './eventsTab/eventsList';
import MainFriends from './friendsTab/mainFriends';
import MainEvents from './eventsTab/mainEvents';
import MainGroups from './groupsTab/mainGroups';
/*  ActiveTab.js
    The 'body' of the app below the navbar. The body 
    (aka active tab) is either the dashboard, the friends 
    tab, the group tab, or the events tab. 
*/
function ActiveTab(props) {
    function chooseTab(tabName) {
        if(tabName === "Friends"){
            return <MainFriends/>
        }
        else if (tabName === "Groups") {
            return <MainGroups/>
        }
        else if (tabName === "Events" ) {
            return <MainEvents/>
        }
    }

    return (  
        <div className = "p-6">
            {chooseTab(props.currTab)}
        </div>
    );

    
}

export default ActiveTab;