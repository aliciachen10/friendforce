import { useMutation } from "@apollo/client";
import { ADD_GROUP } from "../utils/mutations";
import React, { useState } from 'react';
import Auth from '../utils/auth';
import { QUERY_GROUPS } from "../utils/queries";

function CreateGroup (props) {
  const friendId = Auth.getProfile().data._id

  const [formState, setFormState] = useState({
    name: '',
    description: '',
    interests: '',
    friends: '',
  });

  const [addGroup, {error, data}] = useMutation(ADD_GROUP,
    {
      refetchQueries: [
        {query:QUERY_GROUPS}
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
  //  console.log(formState);
    props.setModalState(false);


   try { //       variables: { ...formState,}
     const { data } = await addGroup({
      variables: {
       "name": formState.name,
       "description": formState.description,
       "interests": [formState.interests],
       "friends": [friendId]
      }
     });
   } catch (e) {
     console.log(e);
   }
 }


    return (

      <div className="bg-gray-100 shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Group Information</h3>
          <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  Group name
                </label>
                <input
                  type="text"
                  name="name"
                  id="group-name"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={formState.name}
                  onChange={handleChange}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  autoComplete="family-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={formState.description}
                  onChange={handleChange}
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  Interests
                </label>
                <input
                  type="text"
                  name="interests"
                  id="interests"
                  autoComplete="interests"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={formState.interests}
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

              </div>
              <button
                type="submit"

                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create Group
              </button>
          </form>
          
          
        </div>
      </div>

    
     
    </div>

    )

}

export default CreateGroup