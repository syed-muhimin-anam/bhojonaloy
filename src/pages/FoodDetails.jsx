import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const foodDetail = useLoaderData();

    return (
        <div className="min-h-screen  flex items-center justify-center">
            <div className="max-w-4xl w-full rounded-lg shadow-lg overflow-hidden">
                <h1 className="text-4xl text-purple-700 text-center mb-10 font-bold">Food Details</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <figure  className=" w-full h-64 flex items-center justify-center bg-gray-700">
                        <img
                            src={foodDetail.foodImage}
                            alt={foodDetail.foodName}
                            className="w-auto h-full object-contain"
                        />
                    </figure>
                    <div className="p-6 space-y-4">
                        <h2 className="text-xl font-semibold">{foodDetail.foodName}</h2>
                        <p className="text-sm text-gray-500">{foodDetail.description}</p>
                        <p>
                            <span className="font-semibold">Category:</span> {foodDetail.foodCategory}
                        </p>
                        <p>
                            <span className="font-semibold">Origin:</span> {foodDetail.foodOrigin}
                        </p>
                        <p>
                            <span className="font-semibold">Price:</span> {foodDetail.price} BDT
                        </p>
                        <p>
                            <span className="font-semibold">Quantity:</span> {foodDetail.quantity}
                        </p>
                        <p>
                            <span className="font-semibold">Added By:</span> {foodDetail.addedBy.name}
                        </p>
                        <p>
                            <span className="font-semibold">Purchase Count:</span> {foodDetail.purchase || 0}
                        </p>
                        <div className="mt-5">
                            <Link to={`/purchase/${foodDetail._id}`}>
                                <button className="w-full px-4 py-2 bg-purple-400 hover:bg-purple-600  rounded transition">
                                    Purchase
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
