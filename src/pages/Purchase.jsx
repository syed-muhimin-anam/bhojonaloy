import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Purchase = ( ) => {
    // const [foodName, setFoodName] = useState('');
    // const [price, setPrice] = useState('');
    // const [quantity, setQuantity] = useState('');
    const {user, loading} = useContext(AuthContext);
    const purchaseFood = useLoaderData();
if (loading) {
    return <h1>loading.....</h1>
}
    const handlePurchase = (e) => {
        e.preventDefault();
        const purchaseDetails = {
            food_id : purchaseFood._id,
            foodName: purchaseFood.foodName,
            price: purchaseFood.price,
            quantity: parseFloat(e.target.quantity.value),
            purchaseBy : {
                name: user?.displayName,
                email : user?.email
            },
            purchaseTime: new Date().toLocaleString()

        }
        console.log(purchaseDetails);
        fetch("http://localhost:5000/purchase", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(purchaseDetails),
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            
          })
        
     
    };
    

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center">
            <div className="max-w-lg w-full bg-gray-800 p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-4">Food Purchase</h1>
                <form onSubmit={handlePurchase}  className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="foodName">
                            Food Name
                        </label>
                        <input
                            type="text"
                            id="foodName"
                            value={purchaseFood.foodName}
                            readOnly
                            className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="price">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            value={purchaseFood.price}
                            readOnly
                            className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="quantity">
                            Quantity
                        </label>
                        <input
                            type="number"
                            name='quantity'
                            placeholder='set your quantity'
                            className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Buyer Name</label>
                        <input
                            type="text"
                            value={user?.displayName}
                            readOnly
                            className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Buyer Email</label>
                        <input
                            type="email"
                            value={user?.email}
                            readOnly
                            className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded transition"
                    >
                        Purchase
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Purchase;
