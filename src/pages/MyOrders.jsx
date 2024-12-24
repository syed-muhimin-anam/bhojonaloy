import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';

const MyOrders = () => {
    const { user, loading } = useContext(AuthContext);
    const [myOrders, setMyOrders] = useState([]);
   
    useEffect(() => {
        fetch(`http://localhost:5000/purchase?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                
                setMyOrders(data);
            })
    }, [user?.email]);
   
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
                                        {/* <Link to={`/details/${myOrder._id}`}>
                                            <button className="btn">View Details</button>
                                        </Link> */}
                                        {myOrder.foodImage}
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