import {useState} from "react";
import SubmitGroupField from "./group-SubmitField";
import { useQuery } from "@apollo/client";
import {QUERY_GROUPS, QUERY_SINGLE_GROUP} from '../utils/queries';


function GroupDescription(props) {
  
  const { loading, data } = useQuery(QUERY_GROUPS);
  const group = data?.groups[0] || [];

  const [savedDescription, setDescription] = useState(group.description)



    return (

      <div> 
        <div>
          <h3 className="text-lg border-b-2 border-gray-200 pb-2 leading-6 font-medium text-gray-900">Group Description</h3>
        </div>
        <div className="p-4 border-t leading-16 ">
          {props.selectedGroup.description}
        </div>
      </div> 

    )
}


export default GroupDescription