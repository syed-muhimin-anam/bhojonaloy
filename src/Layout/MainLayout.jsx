import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const MainLayout = () => {
    return (
        <div>
           <div>
              <Navbar></Navbar>
            </div>

            <div>
               <Outlet></Outlet>
            </div>

            <div>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default MainLayout;