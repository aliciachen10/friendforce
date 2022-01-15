import { PencilAltIcon } from '@heroicons/react/solid'
import DashboardProfile from "./Dashboard-Profile.js"

function Dashboard() {
    return(
        <div className = "flex-col">
            <div className = "font-bold text-3xl py-4">Dashboard</div>
            <div className = "grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                <DashboardProfile/>

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