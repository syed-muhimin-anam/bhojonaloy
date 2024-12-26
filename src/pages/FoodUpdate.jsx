import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const FoodUpdate = () => {
    // const{user} = useContext(AuthContext);
    const navigate = useNavigate();
    const prevFoodDtls = useLoaderData();
    const handleUpdate = e => {
        e.preventDefault();
        const newFoodItem = {
            // event.target.photo.value === "" ? loadedEquipment.photo : event.target.photo.value;
            foodName: e.target.foodName.value === '' ? prevFoodDtls.foodName : e.target.foodName.value,
            foodImage: e.target.foodImage.value === '' ? prevFoodDtls.foodImage : e.target.foodImage.value,
            foodCategory: e.target.foodCategory.value === '' ? prevFoodDtls.foodCategory : e.target.foodCategory.value,
            quantity: e.target.quantity.value === '' ? prevFoodDtls.quantity :  parseFloat(e.target.quantity.value),
            price: e.target.price.value === '' ? prevFoodDtls.price : parseFloat(e.target.price.value),
            // addedBy: {
            //     name: user?.displayName,
            //     email: user?.email,
            // },
            foodOrigin: e.target.foodOrigin.value === '' ? prevFoodDtls.foodOrigin : e.target.foodOrigin.value,
            description: e.target.description.value === '' ? prevFoodDtls.description : e.target.description.value,
        };

        console.log(newFoodItem);

        fetch(`http://localhost:5000/allFoods/${prevFoodDtls._id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newFoodItem),
          })
            .then((res) => res.json())
            .then((data) => {
              Swal.fire({
                title: "Congratulations!",
                text: "successfully updated your Food!",
                icon: "success"
      
              });

            console.log(data);
            
      
              e.target.reset();
              navigate('/')
            });
    }
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center">
        <div className="max-w-lg w-full bg-gray-800 p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center mb-4">Update your Food Item</h1>
            <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="foodName">
                        Food Name
                    </label>
                    <input
                        type="text"
                        id="foodName"
                        name="foodName"
                        placeholder={prevFoodDtls.foodName}
                        className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none"
                        
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
                        placeholder={prevFoodDtls.foodImage}
                        className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none"
                        
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
                        placeholder={prevFoodDtls.foodCategory}
                        className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none"
                        
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
                        placeholder={prevFoodDtls.quantity}
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
                        name="price"
                        placeholder={prevFoodDtls.price}
                        className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none"
                        
                    />
                </div>
                {/* <div>
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
                </div> */}
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="foodOrigin">
                        Food Origin (Country)
                    </label>
                    <input
                        type="text"
                        id="foodOrigin"
                        name="foodOrigin"
                        placeholder={prevFoodDtls.foodOrigin}
                        className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none"
                        
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder={prevFoodDtls.description}
                        className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none"
                        
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded transition"
                >
                   Update
                </button>
            </form>
        </div>
    </div>
    );
};

export default FoodUpdate;