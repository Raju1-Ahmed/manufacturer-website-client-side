import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/UseAdmin';

const Dashboard = ({ role }) => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile ">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side border-r-4">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48  text-base-content">
                    <li><Link to="/dashboard/myprofile">My Profile</Link></li>
                    {admin ?
                        <>
                            <li><Link to="/dashboard/users">All Users</Link></li>
                            <li><Link to="/dashboard/addservice">Add Service</Link></li>
                            <li><Link to="/dashboard/manageorder">Manage Products</Link></li> </>
                        : <>
                            <li><Link to="/dashboard/myCard">My Card</Link></li>
                            <li><Link to="/dashboard/addreview">Review</Link></li>
                        </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;