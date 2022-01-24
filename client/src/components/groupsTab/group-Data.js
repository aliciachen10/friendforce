import SubmitGroupField from "./group-SubmitField";
import React, {useState} from "react";
import { useQuery } from "@apollo/client";
import {QUERY_GROUPS, QUERY_SINGLE_GROUP} from '../utils/queries';

function GroupData (props) {
  return ( 
    <div className="m-4"> 
      <div>
        <h3 className="text-lg border-b-2 border-gray-200 pb-2 leading-6 font-medium text-gray-900">About</h3>
      </div>

      <div className="border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {props.selectedGroup.name}
            </dd>
          </div>
          
  
          <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Date Created</dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {props.selectedGroup.date_created}
              
            </dd>
          </div>
      
          <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Interests</dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {(props.selectedGroup.interests).reduce((prev, curr) => prev = (curr + ", " + prev))}            
            </dd>
          </div>
        </dl>
      </div>
    </div> 
   
)

}

export default GroupData