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
               
                <Outlet>
                </Outlet>
            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48  text-base-content">
                    <li><Link to="/dashboard/myprofile">
                    <img src="https://img.icons8.com/ios/30/null/test-account.png"/>
                         PROFILE</Link></li>
                    {admin ?
                        <>
                            <li><Link to="/dashboard/users">
                                 <img src="https://img.icons8.com/ios/30/null/conference-call--v1.png"/>
                                USERS</Link></li>
                            <li><Link to="/dashboard/addservice">
                            <img src="https://img.icons8.com/ios/30/null/add--v1.png"/>
                                SERVICES</Link></li>
                            <li><Link to="/dashboard/manageorder">
                            <img src="https://img.icons8.com/ios/30/null/request-service.png"/>
                                PRODUCTS</Link></li> </>
                        : <>
                            <li><Link to="/dashboard/myCard">
                            <img src="https://img.icons8.com/ios/30/null/report-card.png"/>
                                CARD</Link></li>
                            <li><Link to="/dashboard/addreview">
                            <img src="https://img.icons8.com/ios/30/null/overview-pages-2.png"/>
                            OVERVIEW</Link></li>
                        </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;