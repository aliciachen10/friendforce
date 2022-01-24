import React, {useState} from "react";
import { useMutation } from "@apollo/client";
import { ADD_GROUP } from "../utils/mutations";



export default function CreateGroup() {

  
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    interests: '',
    friends: '',
  });

  const [addGroup, {error, data}] = useMutation(ADD_GROUP);

 const handleChange = (event) => {
   const { name, value } = event.target;

   setFormState({
     ...formState,
     [name]: value,
   });
 };

 const handleFormSubmit = async (event) => {
   event.preventDefault();
   console.log(formState);
   console.log("test")


   try { //       variables: { ...formState,}
     const { data } = await addGroup({
      variables: {
       "name": formState.name,
       "description": formState.description,
       "interests": [formState.interests],
       "friends": ["61e8f075e326f3108c23e375"]
      }
     });
   } catch (e) {
     console.log(e);
   }


 }

 //we can use this to make it disappear
 const [showModal, setShowModal] = React.useState(false);
  
  return (
    <>
      <button
        className="bg-indigo-500 text-white active:bg-indigo-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create New Group
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Create new group
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {/* <CreateGroup/> */}
                  <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Group Information</h3>
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
        //this will close the modal but doesn't seem to submit...
        onClick={() => setShowModal(false)}
        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Create Group
      </button>
      <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
          </form>
        </div>
      </div>

    </div>
                </div>
                {/*footer*/}
              
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}