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
                <div className='flex p-5 justify-start items-start bg-white rounded  '>
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
            <div className='p-5 bg-white rounded  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5'>
                <div>
                    <h2 className='border-b text-green-500 text-lg'>{users.education}</h2>
                </div>
                <div>
                <h2 className='border-b text-green-500 text-lg'>{users.location}</h2>
                </div>
                <div>
                <h2 className='border-b text-green-500 text-lg'>
                    <a href={users.profile}>{users.profile}</a>
                </h2>
                </div>
                <div>
                <h2 className='border-b text-green-500 text-lg'>{users.phone}</h2>
                </div>
                <div className='border-b flex justify-center items-center'>
                <img src="https://img.icons8.com/external-filled-outline-lima-studio/38/null/external-role-motivation-filled-outline-lima-studio.png"/>
                  <h2 className=' text-green-500 text-lg'>{users.role}</h2>
                </div>
            </div>
        </div>
    );
};

export default ProfileUpdate;
