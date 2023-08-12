import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UsersTable from './UsersTable';

const AllUsers = () => {
    const { data: persons, isLoading, error, refetch } = useQuery('persons', () =>
        fetch('https://autoparts.onrender.com/user', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error loading data</div>; // You can provide a more detailed error message here
    }

    if (!Array.isArray(persons)) {
        return <div>Unexpected data format</div>;
    }

    return (
        <div className='mt-8'>
            <div className='overflow-x-auto'>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {persons.map((person, index) => (
                            <UsersTable
                                key={person._id}
                                person={person}
                                refetch={refetch}
                                index={index}
                            ></UsersTable>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
