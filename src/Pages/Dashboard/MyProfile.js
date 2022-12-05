import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import ProfileUpdate from './ProfileUpdate';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { email, displayName } = user;
    console.log(user);
    const handleSubmit = (even) => {
        even.preventDefault();
        const profile = {
            location: even.target.location.value,
            education: even.target.education.value,
            profile: even.target.profile.value,
            email,
            displayName
        }
        console.log(profile);
        fetch(`https://autoparts.onrender.com/updateuser/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast('update done')

                    even.target.reset();
                }
                else {
                    toast('something wrong')
                }
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <label for="my-modal-6" className="btn modal-button">Update Your Profile</label>
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 mt-5'>
                                        <input name='email' type="text" value={user.email} className="input input-bordered w-full " />
                                        <input name='displayName' type="text" value={user.displayName} className="input input-bordered w-full " />
                                        <input name='phone' type="text" placeholder="Your Phone Number" className="input input-bordered w-full" />
                                        <input name='location' type="text" placeholder="Your location" className="input input-bordered w-full" />
                                        <input name='education' type="text" placeholder="Your education" className="input input-bordered w-full" />
                                        <input name='profile' type="text" placeholder="Your LinkedIn profile link" className="input input-bordered w-full" />
                                        <input type="submit" value='submit' className="btn btn-secondary w-full" />

                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="modal-action">
                            <label for="my-modal-6" className="btn">Close</label>
                        </div>
                    </div>
                </div>
                <div className="text-center lg:text-left">
                    <ProfileUpdate></ProfileUpdate>
                </div>
            </div>
        </div >

    );
};

export default MyProfile;