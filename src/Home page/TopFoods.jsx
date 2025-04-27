import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TopFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch('https://bhojonaloy-restaurant-server.vercel.app/foods')
      .then(res => res.json())
      .then(data => {
        setFoods(data);
        setLoading(false); 
      });
  }, []);

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-700">Top Foods</h1>

      {loading ? (
        <div className="flex justify-center my-16">
          <div className="w-12 h-12 border-4 border-purple-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {foods.slice(0, 4).map(food => (
            <div key={food._id} className="card card-compact rounded-none shadow-md flex flex-col">
              <figure>
                <img
                  className="w-full h-60 object-cover"
                  src={food.foodImage}
                  alt={food.foodName}
                />
              </figure>
              <div className="p-3 flex-grow">
                <h2 className="text-lg font-semibold text-purple-700">{food.foodName}</h2>
                <h3 className="text-sm">Origin: {food.foodOrigin}</h3>
                <p className="text-lg">
                  Total purchase: <span className="text-2xl text-purple-700">{food.purchase}</span>
                </p>
                <h4 className="text-lg font-bold text-purple-700">${food.price}</h4>
                <p className="text-sm">{food.description}</p>
              </div>
              <Link to={`/foodDetails/${food._id}`}>
                <button className="btn bg-purple-400 text-black w-full rounded-none">Details</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopFoods;
