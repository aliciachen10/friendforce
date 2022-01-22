import SubmitEventField from "./event-SubmitField";
import React, {useState} from "react";
import { useQuery } from "@apollo/client";
import {QUERY_EVENTS, QUERY_SINGLE_EVENT} from "../utils/queries";



function EventData () {

  // const { loading, data } = useQuery(QUERY_EVENTS);
  // const event = data?.events[0] || [];
  


const [canUpdate, setUpdate] = useState(false);
// const [savedName, setName]          = useState(event.name)
// const [savedLocation, setLocation]       = useState(event.location); 
// const [savedDate, setDate]       = useState(event.date);
// const [savedCreator, setCreator]       = useState(":)");


const [savedName, setName]          = useState("?")
const [savedLocation, setLocation]       = useState("?"); 
const [savedDate, setDate]       = useState("?");
const [savedCreator, setCreator]       = useState(":)");

// console.log(event)
// console.log(event.name)



return (

      
  <div> 
     <div>
       <h3 className="text-lg leading-6 font-medium text-gray-900">Event</h3>
     </div>
     <div className="mt-5 border-t border-gray-200">
       <dl className="divide-y divide-gray-200">
         <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
           <dt className="text-sm font-medium text-gray-500">Event Name</dt>
           <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
               <SubmitEventField stateSetter = {setName} savedVal = {savedName}/>
             
           </dd>
         </div>
        
         <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
           <dt className="text-sm font-medium text-gray-500">Date</dt>
           <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
             <SubmitEventField stateSetter = {setDate} savedVal = {savedDate}/>
             
           </dd>
         </div>
         <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
           <dt className="text-sm font-medium text-gray-500">Location</dt>
           <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
             <SubmitEventField stateSetter = {setLocation} savedVal= {savedLocation}/>
             
           </dd>
         </div>
        
         <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
           <dt className="text-sm font-medium text-gray-500">Interests</dt>
           <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
             <SubmitEventField stateSetter = {setCreator} savedVal = {savedCreator}/>
           
           </dd>
         </div>
       </dl>
     </div>
     </div> 
   
)




}

export default EventData