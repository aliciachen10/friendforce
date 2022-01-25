import { PencilAltIcon } from '@heroicons/react/solid'
import DashboardProfile from "./Dashboard-Profile.js"
// import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_FRIENDS, QUERY_SINGLE_FRIEND, QUERY_ME, QUERY_SINGLE_EVENT, QUERY_GROUPS } from '../utils/queries';
import Footer from '../util/footer';
import Auth from '../utils/auth';
import FriendGroup from '../friendsTab/friends-Groups';
import FriendEvent from '../friendsTab/friends-Events';

function Dashboard() {
  // //this is working code below now 
  const friendId = Auth.getProfile().data._id
  const { loading, data } = useQuery(
    // friendId ? QUERY_SINGLE_FRIEND : QUERY_ME,
    QUERY_SINGLE_FRIEND,
    {variables: {friendId: friendId}});
  const friend = data?.friend || [];

  console.log(friend)

    return loading ? (<div>loading...</div>) : (
        <div className = "relative min-h-screen bg-gray-200">
            <div className = "flex-col p-6 ">
                <div className = "font-bold text-3xl py-4">
                    Dashboard
                </div>
                <div className = "grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                    <DashboardProfile/>
                    {/* To be replaced with DashboardFriend  */}
                    <section className="bg-white  w-full rounded-lg p-4 shadow-sm">
                        <div className = "font-semibold text-lg mb-4 pb-1 border-b-2 border-gray-200">
                            About Me
                        </div>
                        <div className = "">
                          {friend.about_me}
                            {/* We may want to merge this with the Profile and have an About Me text area instead of a friend list. */}
                        </div>
                    </section>
                    {/* To be replaced with DashboardGroup  */}
                    <section className="bg-white w-full rounded-lg p-4 shadow-sm">
                        <FriendGroup user = {friend}/>
                    </section>
                    <section className="bg-white w-full rounded-lg p-4 shadow-sm">
                        <FriendEvent user = {friend}/>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Dashboard;