import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../Home page/Home";
import FoodDetails from "../pages/FoodDetails";
import Purchase from "../pages/Purchase";
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h1>path not found</h1>,
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
          loader:({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
        },
        {
          path: 'purchase/:id',
          element: <Purchase></Purchase>,
          loader:({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
        }
      ]
    },
  ]);

export default router;