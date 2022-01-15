
import React, {useState} from 'react';
import SubmitField from './Dashboard-SubmitField';

function DashboardProfile() {
    const [canEdit, setEdit] = useState(false);

    const [savedPhone, setPhone]       = useState("#"); 
    const [savedEmail, setEmail]       = useState("@");
    const [savedAddress, setAddress]   = useState("$");
    const [savedHobby, setHobby]       = useState(":)");

    return(
        <section className="flex flex-col bg-white w-full rounded-lg p-4 gap-y-4 shadow-sm">
            <div className = "font-semibold text-lg mb-4 pb-1 border-b-2 border-gray-200">
                Profile
            </div>

            {/* Profile Pic and Name*/}
            <div className = "flex-col pb-2 self-center">
                <img className = "rounded-full max-h-32 pb-2 m-auto" src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"></img>
                <div className = "text-lg text-center">Your Name Here</div>
            </div>

            {/* All other info */}
            <div className = "grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                {/* TODO: make these 4 fields subcomponents. */}
                <SubmitField name = "Phone" stateSetter = {setPhone}/>
                <SubmitField name = "Email" stateSetter = {setEmail}/>
                <SubmitField name = "Address" stateSetter = {setAddress}/>
                <SubmitField name = "Favorite Hobby" stateSetter = {setHobby}/>
            </div>
        </section>

    ); 
}

export default DashboardProfile;