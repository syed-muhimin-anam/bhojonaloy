import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const MainLayout = () => {
    return (
        <div>
           <div>
           <div className='md:w-10/12 mx-auto'><Navbar></Navbar></div>
           </div>
            <div>
            <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default MainLayout;