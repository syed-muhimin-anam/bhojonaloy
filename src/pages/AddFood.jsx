import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const AddFood = () => {
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate()

    if (loading) {
        return <Loading></Loading>;
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

        fetch("https://bhojonaloy-restaurant-server.vercel.app/foods", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFoodItem),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                title: "Successfully added",
                icon: "success",
                draggable: true
            });
            e.target.reset();
            navigate('/')
        });
    };

    return (
        <div className="min-h-screen mt-[60px] flex items-center justify-center py-10">
            <div className="max-w-lg w-full p-8  rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">Add Food Item</h1>
                <form onSubmit={handleAddFood} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="foodName">
                            Food Name
                        </label>
                        <input
                            type="text"
                            id="foodName"
                            name="foodName"
                            placeholder="Enter food name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="foodImage">
                            Food Image URL
                        </label>
                        <input
                            type="text"
                            id="foodImage"
                            name="foodImage"
                            placeholder="Enter food image URL"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="foodCategory">
                            Food Category
                        </label>
                        <input
                            type="text"
                            id="foodCategory"
                            name="foodCategory"
                            placeholder="Enter food category"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="quantity">
                            Quantity
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            placeholder="Enter quantity"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="price">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            placeholder="Enter price"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Added By</label>
                        <input
                            type="text"
                            value={user?.displayName}
                            readOnly
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none mb-2"
                        />
                        <input
                            type="email"
                            value={user?.email}
                            readOnly
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="foodOrigin">
                            Food Origin (Country)
                        </label>
                        <input
                            type="text"
                            id="foodOrigin"
                            name="foodOrigin"
                            placeholder="Enter food origin country"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Enter a short description (ingredients, making procedure, etc.)"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-purple-500 hover:bg-purple-700 rounded-lg transition duration-200"
                    >
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddFood;
