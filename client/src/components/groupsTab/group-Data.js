import SubmitGroupField from "./group-SubmitField";
import React, {useState} from "react";

function GroupData () {

const [canUpdate, setUpdate] = useState(false);
const [fullName, setName]          = useState("!")
const [savedPhone, setPhone]       = useState("#"); 
const [savedEmail, setEmail]       = useState("@");
const [savedAddress, setAddress]   = useState("$");
const [savedInterest, setInterest]       = useState(":)");





    return (

      
       <div> 
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Andrew Bumgarner</h3>
          </div>
          <div className="mt-5 border-t border-gray-200">
            <dl className="divide-y divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <SubmitGroupField stateSetter = {setName}/>
                  
                </dd>
              </div>
             
              <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <SubmitGroupField stateSetter = {setEmail}/>
                  
                </dd>
              </div>
              <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <SubmitGroupField stateSetter = {setPhone}/>
                  
                </dd>
              </div>
              <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <SubmitGroupField stateSetter = {setAddress} />
                 
                </dd>
              </div>
              <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Interests</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <SubmitGroupField stateSetter = {setInterest}/>
                
                </dd>
              </div>
            </dl>
          </div>
          </div> 
        
    )




}

export default GroupData