import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllFoods = () => {
    const[search, setSearch] = useState('')
    const[allFoods, setAllFoods] = useState([])

    
    useEffect(() => {
        axios.get( `https://bhojonaloy-restaurant-server.vercel.app/allFoods?search=${search}`)
        .then(res => setAllFoods(res.data))
    },[search])
    return (
        <div className=" min-h-screen w-10/12 mx-auto">
            <h1 className="text-3xl font-bold text-center  mb-8">All Foods</h1>
            <div className='w-6/12 mx-auto my-7'>
                <label className="input input-bordered flex items-center gap-2">
                    <input onChange={e => setSearch(e.target.value)} type="text" className="grow" placeholder="Search by food name"   />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allFoods.map(food => (
                    <div key={food._id} className="card card-compact rounded-none shadow-md">
                        <figure>
                            <img
                                className="w-full h-60 object-cover"
                                src={ food.foodImage}
                                alt={food.foodName}
                            />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="text-lg font-semibold t">{food.foodName}</h2>
                            <h3 className="text-sm ">Origin: {food.foodOrigin}</h3>
                            <p className="text-sm te mb-3">Total Purchase: {food.purchase}</p>
                            <h4 className="text-lg font-bold t">${food.price}</h4>
                            <p className="text-sm te mb-3">{food.description}</p>
                            

                            <Link to={`/foodDetails/${food._id}`}><button className="btn bg-purple-400 text-black w-full mt-3 rounded-none">Details</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllFoods;