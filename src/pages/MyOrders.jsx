import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';
import useAxiosSecure from '../custom hooks/useAxiosSecure';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    const { user, loading } = useContext(AuthContext);
    const [myOrders, setMyOrders] = useState([]);
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get(`/purchase?email=${user?.email}`)
        .then(res => {
            if (loading ) {
                return <Loading />;
            }
            setMyOrders(res.data)})

    }, [user?.email]);
    const handleDelete= (id) => {
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
            .then((res) => {
                if (loading ) {
                    return <Loading />;
                }
                return res.json();
            })
            .then((data) => {
                // console.log(data);
                if (loading ) {
                    return <Loading />;
                }
                if (data.deletedCount > 0) {
                    const remaining = myOrders.filter((order) => order._id !== id);
                    setMyOrders(remaining);
                }
            });
                    }
                });
    } 
   
    return (
        <div className='w-10/12 mx-auto mt-[60px] pt-10 '>
            <h1 className='text-center text-4xl font-bold text-purple-700 mb-10'>My Orders</h1>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="mb-4 ">
                    {/* <button onClick={handleSort} className="btn">
                        Sort
                    </button> */}
                </div>
                <div className="overflow-x-auto h-screen">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-left">SL</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Food name</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Origin</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Date & time</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">quantity</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myOrders.map((myOrder, index) => (
                                <tr key={myOrder._id}>
                                    <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {myOrder.foodName}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {myOrder.price}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {myOrder.foodOrigin}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {myOrder.purchaseTime}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {myOrder.purchase}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                       <button onClick={() => handleDelete(myOrder._id)} className='btn btn-sm'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;