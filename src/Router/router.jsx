import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../Home page/Home";
import FoodDetails from "../pages/FoodDetails";
import Purchase from "../pages/Purchase";
import MyOrders from "../pages/MyOrders";
import AllFoods from "../pages/AllFoods";
import AddFood from "../pages/AddFood";
import MyFoods from "../pages/MyFoods";
import Gallery from "../pages/Gallery";
import PrivateRout from "./PrivateRout";
import FoodUpdate from "../pages/FoodUpdate";
import ErrorPage from "../Shared/ErrorPage";
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
          path:"foodDetails/:id",
          element: <FoodDetails></FoodDetails>,
          loader:({params}) => fetch(`https://bhojonaloy-restaurant-server.vercel.app/allFoods/${params.id}`)
        },
        {
          path: 'purchase/:id',
          element: <PrivateRout><Purchase></Purchase></PrivateRout>,
          loader:({params}) => fetch(`https://bhojonaloy-restaurant-server.vercel.app/allFoods/${params.id}`)
        },
        {
          path: 'myOrders',
          element: <PrivateRout><MyOrders></MyOrders></PrivateRout>
        },
        {
          path: 'allFoods',
          element: <AllFoods></AllFoods>,
          // loader:() => fetch('https://bhojonaloy-restaurant-server.vercel.app/allFoods')
        },
        {
          path: 'addFood',
          element: <PrivateRout><AddFood></AddFood></PrivateRout>
        },
        {
          path: 'myFoods',
          element: <PrivateRout><MyFoods></MyFoods></PrivateRout>,

        },
        {
          path:'gallery',
          element:<Gallery></Gallery>
        },
        {
          path:'foodUpdate/:id',
          element: <FoodUpdate></FoodUpdate>,
          loader:({params}) => fetch(`https://bhojonaloy-restaurant-server.vercel.app/allFoods/${params.id}`)
        },
        
      ]
    },
  ]);

export default router;