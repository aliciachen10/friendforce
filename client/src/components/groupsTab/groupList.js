import { useQuery } from '@apollo/client';
import { QUERY_GROUPS } from '../utils/queries';

function GroupsList(props) {
  const { loading, data } = useQuery(QUERY_GROUPS);
  const people = data?.groups || [];

  const groups = props.groupDirectory;

  //Returns the Friend object corresponding to the friend clicked.
  const handleGroupListClick = (e) => {
    let groupIdentifier = e.target.getAttribute("name");
    let selectedGroup = groups.filter((x) => {return x.name === groupIdentifier}) 
    props.mainGroupSetter(selectedGroup[0]);
  }


  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Interests
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">View Group</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {groups.map((group, groupIdx) => (
                  <tr key={group.name} className={groupIdx % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                    <td className="px-6 py-4  text-sm font-medium text-gray-900">{group.name}</td>
                    <td className="px-6 py-4  text-sm text-gray-500">{group.description}</td>
                    <td className="px-6 py-4  text-sm text-gray-500">{group.interests}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" name = {group.name} onClick={handleGroupListClick} className="text-indigo-600 hover:text-indigo-900">
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupsList;


