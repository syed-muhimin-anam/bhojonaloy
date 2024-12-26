import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';
import useAxiosSecure from '../custom hooks/useAxiosSecure';

const MyOrders = () => {
    const { user, loading } = useContext(AuthContext);
    const [myOrders, setMyOrders] = useState([]);
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get(`/purchase?email=${user?.email}`)
        .then(res => setMyOrders(res.data))

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
                   fetch(`http://localhost:5000/allPurchase/${id}`, {
            method: "DELETE",
        })
            .then((res) => {
                // if (loading === true) {
                //     return <Loading />;
                // }
                return res.json();
            })
            .then((data) => {
                // console.log(data);
                
                if (data.deletedCount > 0) {
                    const remaining = myOrders.filter((order) => order._id !== id);
                    setMyOrders(remaining);
                }
            });
                    }
                });
    } 
   
    return (
        <div>
            <h1>my MyOrders</h1>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="mb-4 ">
                    {/* <button onClick={handleSort} className="btn">
                        Sort
                    </button> */}
                </div>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-left">SL</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Item</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Stock</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Details</th>
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
                                        {myOrder.foodImage}
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