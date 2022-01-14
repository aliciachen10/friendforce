import { PencilAltIcon } from '@heroicons/react/solid'

function Dashboard() {
    return(
        <div className = "flex-col">
            <div className = "font-bold text-3xl py-4">Dashboard</div>
            <div className = "grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                <section className="flex flex-col bg-white w-full rounded-lg p-4 gap-y-4 shadow-sm">
                    <div className = "font-semibold text-lg mb-4 pb-1 border-b-2 border-gray-200">
                        Profile
                    </div>

                    {/* Profile Pic and Name*/}
                    <div className = "flex-col pb-2 self-center">
                        <img className = "rounded-full max-h-32 pb-2 m-auto" src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"></img>
                        <div className = "text-lg text-center">Your Name Here</div>
                    </div>

                    {/* All other info */}
                    <div className = "grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                        {/* TODO: make these 4 fields subcomponents. */}
                        <div className = "flex flex-col">
                            <div>Phone</div>
                            <div className = "flex justify-between bg-gray-100 border-gray-200 border-2 rounded-md p-1">
                                <div>336-336-3636</div>
                                <PencilAltIcon className= "w-6 h-auto opacity-50"/>
                            </div>
                        </div>

                        <div className = "flex flex-col">
                            <div>Email</div>
                            <div className = "flex justify-between bg-gray-100 border-gray-200 border-2 rounded-md p-1">
                                <div>YourNameHere@yahoo.com</div>
                                <PencilAltIcon className= "w-6 h-auto opacity-50"/>
                            </div>
                        </div>

                        <div className = "flex flex-col">
                            <div>Address</div>
                            <div className = "flex justify-between bg-gray-100 border-gray-200 border-2 rounded-md p-1">
                                <div>6 Mirkwood Forest</div>
                                <PencilAltIcon className= "w-6 h-auto opacity-50"/>
                            </div>
                        </div>

                        <div className = "flex flex-col">
                            <div>Favorite Hobbies</div>
                            <div className = "flex justify-between bg-gray-100 border-gray-200 border-2 rounded-md p-1">
                                <div>YourNameHere@yahoo.com</div>
                                <PencilAltIcon className= "w-6 h-auto opacity-50"/>
                            </div>
                        </div>
                    </div>
                </section>

                {/*  */}
                <section className="bg-white  w-full rounded-lg p-4 shadow-sm">
                    <div className = "font-semibold text-lg mb-4 pb-1 border-b-2 border-gray-200">
                        Friends
                    </div>
                    <div>
                        
                    </div>
                </section>

                <section className="bg-white w-full rounded-lg p-4 shadow-sm">
                    <div className = "font-semibold text-lg mb-4 pb-1 border-b-2 border-gray-200">
                        Groups
                    </div>
                </section>
                <section className="bg-white w-full rounded-lg p-4 shadow-sm">
                    <div className = "font-semibold text-lg mb-4 pb-1 border-b-2 border-gray-200">
                        Upcoming Events
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Dashboard;