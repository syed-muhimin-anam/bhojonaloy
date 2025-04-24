import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';
import useAxiosSecure from '../custom hooks/useAxiosSecure';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [myOrders, setMyOrders] = useState([]);
    const [loadingOrders, setLoadingOrders] = useState(true);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        setLoadingOrders(true);
        axiosSecure.get(`/purchase?email=${user?.email}`)
            .then(res => {
                setMyOrders(res.data);
                setLoadingOrders(false);
            })
            .catch(() => {
                setLoadingOrders(false);
            });
    }, [user?.email]);

    const handleDelete = (id) => {
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
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

                fetch(`https://bhojonaloy-restaurant-server.vercel.app/allPurchase/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            const remaining = myOrders.filter(order => order._id !== id);
                            setMyOrders(remaining);
                        }
                    });
            }
        });
    };

    return (
        <div className='w-10/12 mx-auto mt-[60px] pt-10 mb-10'>
            <h1 className='text-center text-4xl font-bold text-purple-700 mb-4'>My Orders</h1>
            {loadingOrders && (
                <div className="flex justify-center mb-6">
                    <div className="animate-spin rounded-full h-10 w-10 border-4 border-purple-500 border-t-transparent"></div>
                </div>
            )}

            {!loadingOrders && myOrders.length === 0 && (
                <p className="text-center text-xl text-gray-600">No orders found.</p>
            )}

            {!loadingOrders && myOrders.length > 0 && (
                <div className="overflow-x-auto h-screen">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-left">SL</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Food name</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Origin</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Date & time</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Quantity</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myOrders.map((myOrder, index) => (
                                <tr key={myOrder._id}>
                                    <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                    <td className="border border-gray-300 px-4 py-2">{myOrder.foodName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{myOrder.price}</td>
                                    <td className="border border-gray-300 px-4 py-2">{myOrder.foodOrigin}</td>
                                    <td className="border border-gray-300 px-4 py-2">{myOrder.purchaseTime}</td>
                                    <td className="border border-gray-300 px-4 py-2">{myOrder.purchase}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <button onClick={() => handleDelete(myOrder._id)} className='btn btn-sm'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyOrders;
