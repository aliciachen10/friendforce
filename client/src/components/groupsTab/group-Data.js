import SubmitGroupField from "./group-SubmitField";
import React, {useState} from "react";
import { useQuery } from "@apollo/client";
import {QUERY_GROUPS, QUERY_SINGLE_GROUP} from '../utils/queries';

function GroupData () {


const { loading, data } = useQuery(QUERY_GROUPS);
const group = data?.groups[0] || [];

const [canUpdate, setUpdate] = useState(false);
const [savedName, setName]          = useState(group.name)
const [savedInterest, setInterest]       = useState(group.interests); 
const [savedDateCreated, setDateCreated]       = useState(group.date_created);

console.log(group)


return (

      
  <div> 
    
     <div>
       
     <div>
       <h3 className="text-lg leading-6 font-medium text-gray-900">Group</h3>
     </div>
     </div>
     <div className="mt-5 border-t border-gray-200">
       <dl className="divide-y divide-gray-200">
         <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
           <dt className="text-sm font-medium text-gray-500">Full name</dt>
           <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
               <SubmitGroupField stateSetter = {setName} savedVal = {savedName}/>
             
           </dd>
         </div>
        
 
         <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
           <dt className="text-sm font-medium text-gray-500">Date Created</dt>
           <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
             <SubmitGroupField stateSetter = {setDateCreated} savedVal= {savedDateCreated}/>
             
           </dd>
         </div>
    
         <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
           <dt className="text-sm font-medium text-gray-500">Interests</dt>
           <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
             <SubmitGroupField stateSetter = {setInterest} savedVal = {savedInterest}/>
           
           </dd>
         </div>
       </dl>
     </div>
     </div> 
   
)





}

export default GroupData