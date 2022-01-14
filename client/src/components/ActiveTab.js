import React, {useState} from 'react';
//import FriendsList from './friendsTab/mainFriends';
import GroupList from './groupsTab/groupList'
import EventsList from './eventsTab/eventsList';
import MainFriends from './friendsTab/mainFriends';

function ActiveTab(props) {
    function chooseTab(tabName) {
        if(tabName === "Friends"){
            return <MainFriends/>
        }
        else if (tabName === "Groups") {
            return <GroupList/>
        }
        else if (tabName === "Events" ) {
            return <EventsList/>
        }
    }

    return (  
        <div className = "p-6">
            {chooseTab(props.currTab)}
        </div>
    );

    
}

export default ActiveTab;