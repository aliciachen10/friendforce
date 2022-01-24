//A component that lists all the friends in a prop.friendArray
import React, {useState} from "react";

function GroupMembers(props) {

    const people = props.group.friends;


    return (
        <div className="flex flex-col">
            <div>
                <h3 className="text-lg  pb-2 leading-6 font-medium text-gray-900 ">Members</h3>
            </div>
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-auto border-b border-gray-200 sm:rounded-lg bg-gray-200 max-h-96">
                    <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-200">
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
                        </tr>
                    </thead>
                    <tbody>
                        {people.map((person, personIdx) => (
                        <tr key={person.IDx + person.email} className={personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.phone}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
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

export default GroupMembers;