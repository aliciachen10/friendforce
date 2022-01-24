import { printIntrospectionSchema } from "graphql";
import { useQuery } from '@apollo/client';
import { QUERY_EVENTS } from '../utils/queries';

function EventsList(props) {

  const { loading, data } = useQuery(QUERY_EVENTS);
  const eventsObject = data?.events || [];
  const people = Object.values(eventsObject)
  console.log("people", people)

  //add to people object OR update database 
  // useEffect()

  const handleEventPageClick = () => {
    props.mainEventSetter("eventpage");
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
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                  {/* <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Friends
                  </th> */}
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {people.map((person, personIdx) => (
                  // <tr key={person.email} className={personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.description}</td>
                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.friends.map(
                      (friend) => (
                        <ul>{friend}</ul>
                      )
                    )}</td> */}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" onClick={handleEventPageClick} className="text-indigo-600 hover:text-indigo-900">
                        Edit
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

export default EventsList;