import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const menuItems = (
        <>
            <li><Link to="/" className="hover:bg-gray-300">Home</Link></li>
            <li><Link to="/blog" className="hover:bg-gray-300">Blog</Link></li>
            <li><Link to="/about" className="hover:bg-gray-300">Abou-us</Link></li>
        </>
    );

    return (
        <div className="navbar  mb-5 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden text-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-200 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-2xl font-semibold">Auto Parts</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="relative">
                        <button
                            className="btn btn-ghost"
                            onClick={toggleDropdown}
                        >
                            {user.photoURL ? (
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src={user.photoURL} // Assuming you have the user's image URL
                                    alt="User Profile"
                                />
                            ) : (
                                <CgProfile className="w-8 h-8 text-gray-600" />
                            )}
                        </button>
                        {showDropdown && (
                            <div className="absolute right-0 mt-2 py-2 bg-white border rounded shadow-lg">
                                <Link to="/dashboard">
                                    <button className="block text-black w-full px-4 py-2 text-left hover:bg-gray-800">
                                        Dashboard
                                    </button>
                                </Link>
                                <button
                                    className="block text-black w-full px-4 py-2 text-left hover:bg-gray-800"
                                    onClick={logout}
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <button className="btn btn-ghost">
                        <Link to="/login">Login</Link>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
