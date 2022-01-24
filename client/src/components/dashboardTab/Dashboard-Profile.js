import { useQuery } from '@apollo/client';
import { QUERY_FRIENDS, QUERY_SINGLE_FRIEND, QUERY_ME } from '../utils/queries';
import React, {useState} from 'react';
import SubmitField from './Dashboard-SubmitField';
import Auth from '../utils/auth';

function DashboardProfile() {
    const friendId = Auth.getProfile().data._id
    const { loading, data } = useQuery(
      // friendId ? QUERY_SINGLE_FRIEND : QUERY_ME,
      QUERY_SINGLE_FRIEND,
      {variables: {friendId: friendId}});
    const friend = data?.friend || [];
    
    const [canEdit, setEdit] = useState(false);

    //these were jared's/andrew's original values 
    const [savedPhone, setPhone]       = useState(friend.phone); 
    const [savedEmail, setEmail]       = useState(friend.email);
    const [savedAddress, setAddress]   = useState(friend.address);
    const [savedHobby, setHobby]       = useState(friend.interests);

    return(
        <section className="flex flex-col bg-white w-full rounded-lg p-4 gap-y-4 shadow-sm">
            <div className = "font-semibold text-lg mb-4 pb-1 border-b-2 border-gray-200">
                Profile
            </div>

            {/* Profile Pic and Name*/}
            <div className = "flex-col pb-2 self-center">
                <img className = "rounded-full max-h-32 pb-2 m-auto" src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"></img>
                <div className = "text-lg text-center">{friend.name}</div>
            </div>

            {/* All other info */}
            <div className = "grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                {/* TODO: make these 4 fields subcomponents. */}
                <SubmitField name = "Phone" stateSetter = {setPhone} savedVal = {savedPhone}/>
                <SubmitField name = "Email" stateSetter = {setEmail} savedVal = {savedEmail}/>
                <SubmitField name = "Address" stateSetter = {setAddress} savedVal = {savedAddress}/>
                <SubmitField name = "Hobby" stateSetter = {setHobby} savedVal = {savedHobby}/>
            </div>
        </section>

    ); 
}

export default DashboardProfile;