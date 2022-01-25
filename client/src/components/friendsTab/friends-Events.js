import { CalendarIcon, LocationMarkerIcon, UsersIcon } from '@heroicons/react/solid';

function FriendEvents(props) {
    let eventsList = props.user.events;
    console.log(eventsList)
    return (
        <div> 
            <div>
                <h3 className="text-lg  pb-2 leading-6 font-medium text-gray-900 ">Events</h3>
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-md border-2 border-gray-200">
                <ul role="list" className="divide-y divide-gray-200">
                    {eventsList.map((event) => (
                    <li key={"evt-" + event._id}>
                        <a href="#" className="block hover:bg-gray-50">
                        <div className="px-4 py-4 sm:px-6">
                            <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-indigo-600 truncate">{event.name}</p>
                            <div className="ml-2 flex-shrink-0 flex">
                                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {event.location}
                                </p>
                            </div>
                            </div>
                            <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                                <p className="flex items-center text-sm text-gray-500">
                                <UsersIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                {`23` + " going" /* This is just a placeholder. */}
                                </p>
                                <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                {event.location}
                                </p>
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                <p>
                                Event on <time dateTime={event.date}>{event.date}</time>
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