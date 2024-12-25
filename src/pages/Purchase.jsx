import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Purchase = () => {
    const { user, loading } = useContext(AuthContext);
    const purchaseFood = useLoaderData();
    const [quantity, setQuantity] = useState(purchaseFood?.purchase);

    if (loading) {
        return <h1>Loading.....</h1>;
    }

    const handlePurchase = (e) => {
        e.preventDefault();
    
        const newPurchase = parseFloat(e.target.quantity.value);
    
        const updatedQuantity = quantity + newPurchase;
    
        const purchaseDetails = {
            food_id: purchaseFood._id,
            foodName: purchaseFood.foodName,
            price: purchaseFood.price,  
            purchase: newPurchase,
            purchaseBy: {
                name: user?.displayName,
                email: user?.email,
            },
            purchaseTime: new Date().toLocaleString(),
        };
    
        console.log("Purchase Details:", purchaseDetails);
    
        
        setQuantity(updatedQuantity);
    
        console.log("Total Quantity (after update):", updatedQuantity);
    
       
        fetch("http://localhost:5000/purchase", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(purchaseDetails),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Server Response:", data);
                if (data.insertedId) {
                    fetch(`http://localhost:5000/allFoods/${purchaseDetails.food_id}`, {
                        method: 'PUT',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ purchase: updatedQuantity }),
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                        })
                        .catch(err => console.error("Error:", err));
                }
            })
            .catch((error) => console.error("Error:", error));
    };
    
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center">
            <div className="max-w-lg w-full bg-gray-800 p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-4">Food Purchase</h1>
                <form onSubmit={handlePurchase} className="space-y-4">
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
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="quantity">
                            Quantity
                        </label>
                        <input
                            type="number"
                            name="quantity"
                            placeholder="Set your quantity"
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
                {/* <p className="mt-4 text-sm text-gray-400">
                    Total Quantity: <span className="font-bold">{quantity}</span>
                </p> */}
            </div>
        </div>
    );
};

export default Purchase;
