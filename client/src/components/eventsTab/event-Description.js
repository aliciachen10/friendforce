import SubmitEventField from "./event-SubmitField"


function EventDescription() {




    return (

<div> 
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">Group Description</h3>
      </div>
      <div className="mt-5 border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
          
          <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <SubmitEventField/>
              
            </dd>
          </div>
         
        </dl>
      </div>
      </div> 

    )
}


export default EventDescription