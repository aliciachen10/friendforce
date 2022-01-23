import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_FRIEND } from '../utils/queries';

function FriendGroups(props) {
  const { loading, data } = useQuery(QUERY_SINGLE_FRIEND);
  const person = data?.friend?.groups || [];
    let dbGroups = props.groups;

    return(
    <div> 
        <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2 text-center border-b-4 border-dotted border-indigo-300">Active Groups</h3>
        </div>

      <ul role="list" className="divide-y divide-gray-200 bg-white  rounded-lg border-2 border-gray-200">
        {dbGroups.map((group) => (
          <li key={`fg_` + group.email} className="py-4 flex">
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{group.name}</p>
              <p className="text-sm text-gray-500">{group.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div> 
    );
}

export default FriendGroups;