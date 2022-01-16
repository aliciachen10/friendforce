import { CalendarIcon, LocationMarkerIcon, UsersIcon } from '@heroicons/react/solid';

function FriendEvents(props) {
    return (
        <div> 
            <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Events</h3>
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul role="list" className="divide-y divide-gray-200">
                    {props.events.map((position) => (
                    <li key={"evt" + position.id}>
                        <a href="#" className="block hover:bg-gray-50">
                        <div className="px-4 py-4 sm:px-6">
                            <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-indigo-600 truncate">{position.title}</p>
                            <div className="ml-2 flex-shrink-0 flex">
                                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {position.type}
                                </p>
                            </div>
                            </div>
                            <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                                <p className="flex items-center text-sm text-gray-500">
                                <UsersIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                {position.department}
                                </p>
                                <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                {position.location}
                                </p>
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                <p>
                                Event on <time dateTime={position.closeDate}>{position.closeDateFull}</time>
                                </p>
                            </div>
                            </div>
                        </div>
                        </a>
                    </li>
                    ))}
                </ul>
            </div>
        </div> 
    )
}

export default FriendEvents;