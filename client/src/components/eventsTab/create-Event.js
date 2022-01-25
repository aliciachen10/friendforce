import { useMutation, refetch } from "@apollo/client";
import { ADD_EVENT } from "../utils/mutations";
import { QUERY_EVENTS } from "../utils/queries";
import React, { useState } from 'react';
import Auth from '../utils/auth';

function CreateEvent (props) {
  // $name: String!, $date:String, $location:String, 
	// 	$description:String, $friends:[ID], $creator:String
  const [formState, setFormState] = useState({
    name: '',
    date: '',
    location: '',
    description: '',
    friends: '',
    creator: ''
  });

  const [addEvent, {error, data}] = useMutation(ADD_EVENT, 
    {
      refetchQueries: [
        {query:QUERY_EVENTS}
      ]
    });

 const handleChange = (event) => {
   const { name, value } = event.target;

   setFormState({
     ...formState,
     [name]: value,
   });
 };

 const handleFormSubmit = async (event) => {
   event.preventDefault();
   props.setModalState(false);

  //  const arrayOfGibberish = ['61e8f075e326f3108c23e375']
  //  const loggedInCreator = '61e8f075e326f3108c23e375'
  const friendId = Auth.getProfile().data._id
  console.log(friendId)

   try {
    //  const { data } = 
     await addEvent({
       variables: {
       "name": formState.name,
       "date": formState.date,
       "location": formState.location,
       "description": formState.description,
       "friends": [friendId],
       "creator": friendId
       }
     });
   } catch (e) {
     console.log(e);
   }
 }


    return (
      <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Event Information</h3>
          <p className="mt-1 text-sm text-gray-500">Tell us about your event here.</p>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  Event name
                </label>
                <input
                  type="text"
                  name="name"
                  id="event-name"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={formState.name}
                  onChange={handleChange}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="text"
                  name="date"
                  id="date"
                  autoComplete="family-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={formState.date}
                  onChange={handleChange}
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  autoComplete="location"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={formState.location}
                  onChange={handleChange}
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  autoComplete="description"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={formState.description}
                  onChange={handleChange}
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  Friends
                </label>
                <input
                  type="text"
                  name="friends"
                  id="friends"
                  autoComplete="friends"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={formState.friends}
                  onChange={handleChange}
                />
              </div>

              {/* <div className="col-span-6 sm:col-span-4">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  Creator
                </label>
                <input
                  type="text"
                  name="creator"
                  id="creator"
                  autoComplete="creator"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={formState.creator}
                  onChange={handleChange}
                />
              </div> */}

              </div>
              <button
        type="submit"
        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Create Event
      </button>
          </form>
          
          
        </div>
      </div>

    
     
    </div>

    )

}

export default CreateEvent