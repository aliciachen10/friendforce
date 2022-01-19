import SubmitField from "./friends-SubmitField";
import React, {useState} from "react";

function FriendsData (props) {
  //use selected friend prop's attributes instead.
  let user = props.user;

  //TODO: we need to use user to get their groups and events.

  return (
      <div className = "flex flex-col"> 
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900 text-center border-b-4 border-dotted border-indigo-300">Contact</h3>
        </div>
        <div className="bg-white shadow overflow-auto sm:rounded-md border-2 border-gray-200 m-4">
          <dl className="divide-y divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500 pl-2 pt-2">Full name</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2 pt-2 font-semibold">
                  {/* <SubmitField stateSetter = {setName}/> */}
                  {user.name}
              </dd>
            </div>
            
            <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500 pl-2 pt-2">Email address</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2 pt-2 font-semibold">
                {/* <SubmitField stateSetter = {setEmail}/> */}
                {user.email}
              </dd>
            </div>
            <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500 pl-2 pt-2">Phone Number</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2 pt-2 font-semibold">
                {/* <SubmitField stateSetter = {setPhone}/> */}
                {user.phone}
              </dd>
            </div>
            <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500 pl-2 pt-2">Address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 pt-2 font-semibold">
                {/* <SubmitField stateSetter = {setAddress} /> */}
                {user.address}
              </dd>
            </div>

          </dl>
        </div>
        </div>    
  )
}

export default FriendsData