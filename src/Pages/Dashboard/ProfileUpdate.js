import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ProfileUpdate = () => {
    const [users, setUsers] = useState({});
    console.log(users);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `https://autoparts.onrender.com/users/${user.email}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }
        , []);
    return (
        <div className="p-5 container">
            <h2 className=" text-3xl  ">User Information</h2>
            {/* <div className='flex p-5 justify-start items-start  rounded  '>
                <div class="avatar">
                    <div class="w-20 rounded-full border border-green-500">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                <div className='p-2'>
                    <h2 className='text-green-500 text-lg'>{user.displayName}</h2>
                    <h2 className='text-green-500 text-lg'>{user.email}</h2>
                </div>
            </div> */}

            <div class=" h-screen">
            <div className='flex p-5 justify-start items-start  rounded  '>
                    <div class="avatar">
                        <div class="w-20 rounded-full border border-green-500">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                    <div className='p-2'>
                        <h2 className='text-green-500 text-lg'>{user.displayName}</h2>
                        <h2 className='text-green-500 text-lg'>{user.email}</h2>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                    <div class="bg-black rounded-lg shadow-md p-4">
                        <h2 class="text-green-500 text-lg border-b pb-2">Education</h2>
                        <p>{users.education}</p>
                    </div>
                    <div class="bg-black rounded-lg shadow-md p-4">
                        <h2 class="text-green-500 text-lg border-b pb-2">Location</h2>
                        <p>{users.location}</p>
                    </div>
                    <div class="bg-black rounded-lg shadow-md p-4">
                        <h2 class="text-green-500 text-lg border-b pb-2">Profile</h2>
                        <p><a href="{{ users.profile }}" class="hover:underline">{users.profile}</a></p>
                    </div>
                    <div class="bg-black rounded-lg shadow-md p-4">
                        <h2 class="text-green-500 text-lg border-b pb-2">Phone</h2>
                        <p>{users.phone}</p>
                    </div>
                    <div class="bg-black rounded-lg shadow-md p-4 ">
                    <h2 class="text-green-500 text-lg border-b pb-2">Role</h2>
                    <div class="flex items-center">
                        <img src="https://img.icons8.com/external-filled-outline-lima-studio/38/null/external-role-motivation-filled-outline-lima-studio.png" alt="Role Icon" class="mr-2" />
                        <h2 class="text-green-500 text-lg">{users.role}</h2>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProfileUpdate;
