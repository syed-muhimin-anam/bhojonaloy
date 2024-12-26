import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TopFoods = () => {
    const [foods, setFoods] = useState([]);
    

    useEffect(() => {
        fetch('https://bhojonaloy-restaurant-server.vercel.app/foods')
            .then(res => res.json())
            .then(data => {
                setFoods(data);
            });
    }, []);

    return (
        <div className="p-8  min-h-screen">
            <h1 className="text-3xl font-bold text-center  mb-8">Top Foods</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {foods.map(food => (
                    <div key={food._id} className="card card-compact rounded-none  shadow-md">
                        <figure>
                            <img
                                className="w-full h-60 object-cover"
                                src={food.foodImage}
                                alt={food.foodName}
                            />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="text-lg font-semibold text-purple-700">{food.foodName}</h2>
                            <h3 className="text-sm ">Origin: {food.foodOrigin}</h3>
                            <p className="text-lg  mb-3">Total purchase:<span className='text-2xl text-purple-700'>{food.purchase}</span> </p>
                            <h4 className="text-lg font-bold text-purple-700">${food.price}</h4>
                            <p className="text-sm  mb-3">{food.description}</p>
                           

                            <Link to={`/foodDetails/${food._id}`}><button className="btn bg-purple-400 text-black w-full mt-3 rounded-none">Details</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopFoods;
