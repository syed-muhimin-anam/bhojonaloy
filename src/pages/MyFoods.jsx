    import React, { useContext, useEffect, useState } from 'react';
    import AuthContext from '../context/AuthContext';

    const MyFoods = () => {
        const [myFoods, setMyFoods] = useState([]);
        const { user } = useContext(AuthContext)
        useEffect(() => {
            fetch(`http://localhost:5000/myFoods?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setMyFoods(data)
                })
        }, [user?.email])
        return (
            <div>
            <h1>My Foods</h1>
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
                            {myFoods.map((myFood, index) => (
                                <tr key={myFood._id}>
                                    <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {myFood.foodName}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {myFood.price}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {myFood.foodOrigin}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {myFood.purchaseTime}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {/* <Link to={`/details/${myFood._id}`}>
                                            <button className="btn">View Details</button>
                                        </Link> */}
                                        {myFood.foodImage}
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

    export default MyFoods;