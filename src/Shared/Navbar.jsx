import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
    const {user, logout} = useContext(AuthContext)
    const item = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='allFoods'>All Foods</NavLink></li>
        <li><NavLink to='/'>Gallery</NavLink></li>
    </>;
    const handleLogout = () => {
            logout();
    }
    return (
        <div className="navbar bg-base-100  md:w-10/12 mx-auto">
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
                <a className="text-sm md:text-xl">Bhojonaloy</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {item}
                </ul>
            </div>
            <div className="navbar-end flex items-center ">
                {
                    user?.email ?
                     <div className="dropdown dropdown-end">
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
                        <li>My Foods</li>
                        <li>Add food</li>
                        <Link to={'myOrders'}> <li className='btn btn-sm w-full'>My Orders</li> </Link>
                       
                    </ul>
                    <button onClick={handleLogout} className='btn'>Logout</button>
                </div> : <Link to={'login'} className='btn'>Login</Link>
                }
                
                

            </div>

        </div>
    );
};

export default Navbar;