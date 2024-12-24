import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const AddFood = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    const handleAddFood = (e) => {
        e.preventDefault();
        const newFoodItem = {
            foodName: e.target.foodName.value,
            foodImage: e.target.foodImage.value,
            foodCategory: e.target.foodCategory.value,
            quantity: parseFloat(e.target.quantity.value),
            price: parseFloat(e.target.price.value),
            addedBy: {
                name: user?.displayName,
                email: user?.email,
            },
            foodOrigin: e.target.foodOrigin.value,
            description: e.target.description.value,
        };

        console.log(newFoodItem);

        fetch("http://localhost:5000/foods", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFoodItem),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center">
            <div className="max-w-lg w-full bg-gray-800 p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-4">Add Food Item</h1>
                <form onSubmit={handleAddFood} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="foodName">
                            Food Name
                        </label>
                        <input
                            type="text"
                            id="foodName"
                            name="foodName"
                            placeholder="Enter food name"
                            className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="foodImage">
                            Food Image URL
                        </label>
                        <input
                            type="text"
                            id="foodImage"
                            name="foodImage"
                            placeholder="Enter food image URL"
                            className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="foodCategory">
                            Food Category
                        </label>
                        <input
                            type="text"
                            id="foodCategory"
                            name="foodCategory"
                            placeholder="Enter food category"
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
                            id="quantity"
                            name="quantity"
                            placeholder="Enter quantity"
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
                            name="price"
                            placeholder="Enter price"
                            className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Added By</label>
                        <input
                            type="text"
                            value={user?.displayName}
                            readOnly
                            className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none mb-2"
                        />
                        <input
                            type="email"
                            value={user?.email}
                            readOnly
                            className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="foodOrigin">
                            Food Origin (Country)
                        </label>
                        <input
                            type="text"
                            id="foodOrigin"
                            name="foodOrigin"
                            placeholder="Enter food origin country"
                            className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Enter a short description (ingredients, making procedure, etc.)"
                            className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded transition"
                    >
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddFood;
