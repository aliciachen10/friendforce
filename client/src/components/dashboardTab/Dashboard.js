import { PencilAltIcon } from '@heroicons/react/solid'
import DashboardProfile from "./Dashboard-Profile.js"
// import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_FRIENDS, QUERY_SINGLE_FRIEND, QUERY_ME, QUERY_SINGLE_EVENT, QUERY_GROUPS } from '../utils/queries';
import Footer from '../util/footer';
import Auth from '../utils/auth';

function Dashboard() {
  // const { loading, data } = useQuery(QUERY_FRIENDS);
  // const people = data?.friends || [];
  // console.log(Object.values(people));
  
  const friendId = '61ee13c13925462bc406eee7';
  console.log("PROFILEID", friendId);
  const { loading, data } = useQuery(
    // friendId ? QUERY_SINGLE_FRIEND : QUERY_ME,
    QUERY_SINGLE_FRIEND,
    {variables: {friendId: friendId}});
  const people = data?.friend || [];
  console.log("PEOPLE", data);
  // const eventId = '61ee13c13925462bc406eedf';
  // const {loading, data} = useQuery(
  //   QUERY_SINGLE_EVENT,
  //   {variables : {_id: eventId}}
  // )

  // console.log("data", data)
  // const friend = data?.friend || []; //need to change this to the data that i actually need 

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
                            Friends
                        </div>
                        <div className = "">
                            We may want to merge this with the Profile and have an About Me text area instead of a friend list.
                        </div>
                    </section>
                    {/* To be replaced with DashboardGroup  */}
                    <section className="bg-white w-full rounded-lg p-4 shadow-sm">
                        <div className = "font-semibold text-lg mb-4 pb-1 border-b-2 border-gray-200">
                            Groups
                        </div>
                        {/* <div>{friend.groups[0].name}</div> */}
                    </section>
                    <section className="bg-white w-full rounded-lg p-4 shadow-sm">
                        <div className = "font-semibold text-lg mb-4 pb-1 border-b-2 border-gray-200">
                            Upcoming Events
                        </div>
                        {/* <div>{friend.events[0].name}</div> */}
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Dashboard;