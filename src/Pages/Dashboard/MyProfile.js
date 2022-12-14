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
            <div className="">
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div>
                        <div className="w-full rounded shadow-2xl bg-base-100">
                                    <form onSubmit={handleSubmit} className='grid grid-cols-2  gap-5 mt-2 p-5'>
                                        <input name='email' type="text" value={user.email} className="input input-bordered w-full " />
                                        <input name='displayName' type="text" value={user.displayName} className="input input-bordered w-full " />
                                        <input name='phone' type="text" placeholder="Your Phone Number" className="input input-bordered w-full" />
                                        <input name='location' type="text" placeholder="Your location" className="input input-bordered w-full" />
                                        <input name='education' type="text" placeholder="Your education" className="input input-bordered w-full" />
                                        <input name='profile' type="text" placeholder="Your LinkedIn profile link" className="input input-bordered w-full" />
                                        <input type="submit" value='submit' className="btn btn-secondary w-full" />

                                    </form>
                        </div>
                        <div className="modal-action ">
                            <label for="my-modal-6" className="btn">Close</label>
                        </div>
                    </div>
                </div>
                <div className="text-center lg:text-left">
                    <ProfileUpdate></ProfileUpdate>
                </div>
                <span className='justify-end flex'>
                <label for="my-modal-6" className="btn modal-button text-green-500">Update Your Profile
                <img src="https://img.icons8.com/ios-glyphs/38/null/edit-user-female.png"/>
                </label>
                </span>
            </div>

    );
};

export default MyProfile;