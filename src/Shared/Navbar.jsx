import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';
import { FaMoon, FaSun } from 'react-icons/fa';
import  { ThemeContext } from '../context/ThemeProvider';

const Navbar = () => {
    const {user, logout} = useContext(AuthContext)
    const {isDarkMode, handleDarkMode} = useContext(ThemeContext)

    console.log(isDarkMode);
    
    const item = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='allFoods'>All Foods</NavLink></li>
        <li><NavLink to='/gallery'>Gallery</NavLink></li>
        <li><NavLink to='/addFood'>Add Food</NavLink></li>
        <li><NavLink to='/myFoods'>My Food</NavLink></li>
        <li><NavLink to='/myOrders'>My Orders</NavLink></li>
    </>;
    const handleLogout = () => {
            logout();
             Swal.fire({
                            title: "Successfully logged Out",
                            icon: "success",
                            draggable: true
                          });
    }
    
    return (
        <div className="navbar bg-purple-400 w-full px-5 md:px-12 fixed top-0 z-10 text-black mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={50} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={50}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow">
                        {item}
                    </ul>
                </div>
                <a className="text-sm md:text-xl font-bold">Bhojonaloy</a>
              
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {item}
                </ul>
            </div>
            <div className="navbar-end flex items-center">
            <button onClick={handleDarkMode} className='text-2xl mr-3'>{isDarkMode? <FaSun></FaSun> : <FaMoon></FaMoon>}</button>

                {
                    user?.email ?<>
                    <div className="dropdown dropdown-end flex mr-3">
       
                   <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                       <div className="w-10 rounded-full">
                           <img
                               alt="Tailwind CSS Navbar component"
                               src= {user.photoURL} />
                       </div>
                   </div>
                   <ul
                       tabIndex={0}
                       className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       <Link to={'myOrders'}> <li className='btn btn-sm w-full'>My Orders</li> </Link>
                       <Link to={'addFood'}> <li className='btn btn-sm w-full'>Add food</li> </Link>
                       <Link to={'myFoods'}> <li className='btn btn-sm w-full'>My Foods</li> </Link>
                      
                   </ul>
                   
               </div> 
               <button onClick={handleLogout} className='font-bold' >Logout</button> </>: <Link to={'login'} className='font-bold'>Login</Link>
                }
                
                

            </div>

        </div>
    );
};

export default Navbar;