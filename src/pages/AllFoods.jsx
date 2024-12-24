import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllFoods = () => {
    const allFoods = useLoaderData();
    return (
        <div className="p-8  min-h-screen">
        <h1 className="text-3xl font-bold text-center text-white mb-8">All Foods</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allFoods.map(food => (
                <div key={food._id} className="card card-compact rounded-none bg-gray-800 shadow-md">
                    <figure>
                        <img
                            className="w-full h-40 object-cover"
                            src={food.foodImage? "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" : food.foodImage}
                            alt={food.foodName}
                        />
                    </figure>
                    <div className="card-body p-4">
                        <h2 className="text-lg font-semibold text-white">{food.foodName}</h2>
                        <h3 className="text-sm text-gray-400">Origin: {food.foodOrigin}</h3>
                        <p className="text-sm text-gray-300 mb-3">{food.description}</p>
                        <p className="text-sm text-gray-300 mb-3">{food.purchase}</p>
                        <h4 className="text-lg font-bold text-white">${food.price}</h4>

                        <Link to={`/foodDetails/${food._id}`}><button className="btn bg-purple-400 text-black w-full mt-3 rounded-none">Details</button></Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
};

export default AllFoods;