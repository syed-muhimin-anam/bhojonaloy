import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';

const Purchase = () => {
    const { user, loading } = useContext(AuthContext);
    const purchaseFood = useLoaderData();
    const [quantity, setQuantity] = useState(purchaseFood?.purchase);
    const [available, setAvailable] = useState(purchaseFood?.quantity);
    const navigate = useNavigate();

    if (loading) {
        return <h1>Loading.....</h1>;
    }

    const handlePurchase = (e) => {
        e.preventDefault();
        const newPurchase = parseFloat(e.target.quantity.value);
      if (newPurchase > available) {
       return Swal.fire({
            title: "you can't buy more than the available numbers.",
            icon: "error",
            draggable: true
          });
      }
      if (user.email === purchaseFood.addedBy.email) {
      return  Swal.fire({
            title: "you can't buy your own food.",
            icon: "error",
            draggable: true
          });
      }
      else{
      
        const remainingQuantity = available - parseFloat(e.target.quantity.value);
    
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
    
    
    
        
        setQuantity(updatedQuantity);
        setAvailable(remainingQuantity);
    
  
    
       
        fetch("https://bhojonaloy-restaurant-server.vercel.app/purchase", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(purchaseDetails),
        })
            .then((res) => res.json())
            .then((data) => {
               
                 Swal.fire({
                                title: "Successfully purchase",
                                icon: "success",
                                draggable: true
                              });

                                    
                if (data.insertedId) {
                    fetch(`https://bhojonaloy-restaurant-server.vercel.app/allFoods/${purchaseDetails.food_id}`, {
                        method: 'PUT',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ purchase: updatedQuantity, quantity: remainingQuantity }),
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                        })
                        .catch(err => console.error("Error:", err));
                }
            })
            .catch((error) => console.error("Error:", error));
            e.target.reset();
            navigate('/')
      }
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
                    <div>
                        {
                            available < 1 ? <p className='text-red-500'>item is not available</p> :  <p>Available quantity is: {available}</p>
                        }
                       
                    </div>
                    <button
    type="submit"
    className={`w-full px-4 py-2 rounded transition ${
        available > 0 ? 'bg-teal-500 hover:bg-teal-600 text-white' : 'bg-gray-400 text-gray-300 cursor-not-allowed'
    }`}
    disabled={available <= 0} // Disable if available is 0 or less
>
    Purchase
</button>

                </form>
               
            </div>
        </div>
    );
};

export default Purchase;








// {
//     "_id": "6769caf0b3ae63d4789f6ec2",
//     "foodName": "Chicken Biryani",
//     "foodImage": "https://example.com/images/chicken-biryani.jpg",
//     "foodCategory": "Main Course",
//     "quantity": 20,
//     "price": 200,
//     "purchase": 50,
//     "addedBy": {
//       "name": "John Doe",
//       "email": "john.doe@example.com"
//     },
//     "foodOrigin": "India",
//     "description": "Aromatic basmati rice cooked with marinated chicken, spices, and saffron. Ingredients include rice, chicken, yogurt, spices, and onions."
//   },
