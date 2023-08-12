import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/UseAdmin';

// react Icon 
import { CgProfile } from 'react-icons/cg';
import { AiOutlineCreditCard } from 'react-icons/ai';
import {MdOutlineDashboardCustomize, MdOutlineReviews, MdNotificationsActive } from 'react-icons/md';
import { AiOutlineLogout } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import { FcServices } from 'react-icons/fc';
import { GrServices, GrStatusInfo } from 'react-icons/gr';
import { GrBusinessService } from 'react-icons/gr';


const Dashboard = ({ role }) => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    return (
        <div className="drawer drawer-mobile ">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content border-t rounded">
                <Outlet>
                </Outlet>
            </div>
            <div className="drawer-side border  rounded border-b-0">
                <label for="dashboard-sidebar" className="drawer-overlay">                    
                </label>

                <ul className="menu  overflow-y-auto  text-base-content">
            <h2 className='text-center text-xl border-b'> Auto-Parts</h2>

                    <div>
                        <h2 className='text-lg text-left'>MAN</h2>
                    <li className='text-lg '><Link to="/dashboard">
                        <MdOutlineDashboardCustomize />
                        Dashboard</Link></li>
                    </div>
                    <div>
                        {/* <h2 className='text-lg text-left'>USEFULL</h2> */}
                    
                        <li className='text-lg'><Link to="/dashboard/myprofile">
                        <CgProfile />
                        Profile</Link></li>
                        {/* <li className='text-lg'><Link to="/dashboard/myprofile">
                        <GrStatusInfo />
                        Status</Link></li>
                        <li className='text-lg'><Link to="/dashboard/myprofile">
                        <MdNotificationsActive />
                        Notification</Link></li> */}
                    </div>

                    {admin ?
                        <>
                        <h2 className='text-lg text-left'>ADMIN</h2>
                            <li className='text-lg'><Link to="/dashboard/users">
                                <FaUsers />
                                User</Link></li>
                            <li className='text-lg'><Link to="/dashboard/addservice">
                                <FcServices/>
                                Service</Link></li>
                            <li><Link to="/dashboard/manageorder">
                                <GrServices />
                                Products</Link></li> </>
                        : <>
                        <h2 className='text-lg text-left'>LIST</h2>
                            <li className='text-lg '><Link to="/dashboard/myCard">
                                <AiOutlineCreditCard />
                                Card</Link></li>
                            <li className='text-lg'><Link to="/dashboard/addreview">
                                <MdOutlineReviews />
                                Overview</Link></li>
                        </>}
                </ul>
            </div>
            <div>
                <li

                    className='text-xl list-none  border rounded-b hover:text-red-500 text-green-500'><a className='flex items-center justify-center gap-1 ' onClick={logout} href="">
                        SignOut <AiOutlineLogout />
                    </a></li>
            </div>

        </div>
    );
};

export default Dashboard;