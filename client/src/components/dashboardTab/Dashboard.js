import { PencilAltIcon } from '@heroicons/react/solid'
import DashboardProfile from "./Dashboard-Profile.js"
import { useQuery } from '@apollo/client';
import { QUERY_FRIENDS, QUERY_SINGLE_FRIEND } from '../utils/queries';

function Dashboard() {
  const { loading, data } = useQuery(QUERY_FRIENDS);
  const friend = data?.friends[0] || []; //need to change this to the data that i actually need 
    return loading ? (<div>loading...</div>) : (
        <div className = "flex-col">
            <div className = "font-bold text-3xl py-4">Dashboard</div>
            <div className = "grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                
                <DashboardProfile/>

                {/* To be replaced with DashboardFriend  */}
                <section className="bg-white  w-full rounded-lg p-4 shadow-sm">
                    <div className = "font-semibold text-lg mb-4 pb-1 border-b-2 border-gray-200">
                        Friends
                    </div>
                    <div>
                        
                    </div>
                </section>

                {/* To be replaced with DashboardGroup  */}
                <section className="bg-white w-full rounded-lg p-4 shadow-sm">
                    <div className = "font-semibold text-lg mb-4 pb-1 border-b-2 border-gray-200">
                        Groups
                    </div>
                    <div>{friend.groups[0].name}</div>
                </section>
                <section className="bg-white w-full rounded-lg p-4 shadow-sm">
                    <div className = "font-semibold text-lg mb-4 pb-1 border-b-2 border-gray-200">
                        Upcoming Events
                    </div>
                    <div>{friend.events[0].name}</div>
                </section>
            </div>
        </div>
    )
}

export default Dashboard;