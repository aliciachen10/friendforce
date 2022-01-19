//A component that lists all the friends in a prop.friendArray
import React, {useState} from "react";

function FriendList(props) {

    const people = props.directory;

    //Returns the Friend object corresponding to the friend clicked.
    const handleFriendPageClick = (e) => {
        let emailIdentifier = e.target.getAttribute("email");
        let selectedUser = people.filter((x) => {return x.email === emailIdentifier}) 
        props.mainFriendSetter(selectedUser[0]);
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
                        Email
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Number
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">View Profile</span>
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((person, personIdx) => (
                    <tr key={person.email} className={personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.phone}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a email = {person.email} href="#" onClick={handleFriendPageClick} className="text-indigo-600 hover:text-indigo-900">
                            View Profile
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

export default FriendList;