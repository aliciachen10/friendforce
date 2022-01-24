
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react'



export default function CreateEvent() {

    const [dateValue, setDateValue] = useState(new Date());

  

  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
      

      <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
        <form action="#" method="POST">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Event Information</h3>
                <p className="mt-1 text-sm text-gray-500">To create even please fill out below information.</p>
              </div>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    Event Name
                  </label>
                  <input
                    type="text"
                    name="event-name"
                    id="event-name"
                    autoComplete="given-name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    autoComplete="location"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    autoComplete="description"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                
                <div className="col-span-6">
                  <label htmlFor="Calendar" className="block text-sm font-medium text-gray-700">
                    Calendar
                  </label>
                  <Calendar
                  onChange={setDateValue}
                  value={dateValue}
                  
                  />
                </div>
                
                
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
