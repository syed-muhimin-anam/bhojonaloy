import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../custom hooks/useAxiosSecure';
import Loading from '../Shared/Loading';

const MyFoods = () => {
    const [myFoods, setMyFoods] = useState([]);
    const { user, loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (!user?.email) return;
        axiosSecure.get(`/myFoods?email=${user.email}`)
            .then(res => setMyFoods(res.data));
    }, [user?.email, axiosSecure]);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this item??",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                fetch(`https://bhojonaloy-restaurant-server.vercel.app/allFoods/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = myFoods.filter(food => food._id !== id);
                            setMyFoods(remaining);
                        }
                    });
            }
        });
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <div className=' pt-10'>
            <h1 className='text-center text-4xl font-bold text-purple-700 mb-10'>My Foods</h1>
            <div className="px-4 sm:px-6 lg:px-8 w-10/12 mx-auto">
                <div className="h-auto">
                    {
                        myFoods.length === 0 ? (
                            <div className="text-center mt-10 text-lg text-gray-600 font-medium">
                                No food items found.
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full border-collapse border border-gray-300">
                                    <thead>
                                        <tr>
                                            <th className="border border-gray-300 px-4 py-2 text-left">SL</th>
                                            <th className="border border-gray-300 px-4 py-2 text-left">Food Name</th>
                                            <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                                            <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
                                            <th className="border border-gray-300 px-4 py-2 text-left">Origin</th>
                                            <th className="border border-gray-300 px-4 py-2 text-left">Quantity</th>
                                            <th className="border border-gray-300 px-4 py-2 text-left">Up/Del</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {myFoods.map((myFood, index) => (
                                            <tr key={myFood._id}>
                                                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                                <td className="border border-gray-300 px-4 py-2">{myFood.foodName}</td>
                                                <td className="border border-gray-300 px-4 py-2">{myFood.foodCategory}</td>
                                                <td className="border border-gray-300 px-4 py-2">${myFood.price}</td>
                                                <td className="border border-gray-300 px-4 py-2">{myFood.foodOrigin}</td>
                                                <td className="border border-gray-300 px-4 py-2">{myFood.quantity}</td>
                                                <td className="border border-gray-300 px-4 py-2">
                                                    <Link to={`/foodUpdate/${myFood._id}`}>
                                                        <button className='btn btn-sm'>Update</button>
                                                    </Link>
                                                    <button onClick={() => handleDelete(myFood._id)} className='btn btn-sm'>Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MyFoods;
