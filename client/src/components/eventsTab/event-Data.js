function EventData (props) {
  //use selected friend prop's attributes instead.
  let event = props.event;

  //TODO: we need to use user to get their groups and events.

  return (
    <div className = "flex flex-col"> 
      <div>
        <h3 className="text-lg border-b-2 border-gray-200 pb-2 leading-6 font-medium text-gray-900">Information</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="ml-2 text-sm font-medium text-gray-500">Event Name</dt>
            <dd className="mt-1 font-semibold flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {/* <SubmitField stateSetter = {setName}/> */}
              {event.name}
            </dd>
            </div>
            
            <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500 pl-2 pt-2">Date</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2 pt-2 font-semibold">
                {/* <SubmitField stateSetter = {setEmail}/> */}
                {event.date}
              </dd>
            </div>
            <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500 pl-2 pt-2">Location</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2 pt-2 font-semibold">
                {/* <SubmitField stateSetter = {setPhone}/> */}
                {event.location}
              </dd>
            </div>
         </dl>
      </div>
    </div>    
  )
}

export default EventData;