import {useState} from "react";
import SubmitGroupField from "./group-SubmitField";
import { useQuery } from "@apollo/client";
import {QUERY_GROUPS, QUERY_SINGLE_GROUP} from '../utils/queries';


function GroupDescription() {
  
  const { loading, data } = useQuery(QUERY_GROUPS);
  const group = data?.groups[0] || [];

  const [savedDescription, setDescription] = useState(group.description)



    return (

<div> 
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">Group Description</h3>
      </div>
      <div className="mt-5 border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
          
          <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <SubmitGroupField stateSetter = {setDescription} savedVal = {savedDescription}/>
              
            </dd>
          </div>
         
        </dl>
      </div>
      </div> 

    )
}


export default GroupDescription