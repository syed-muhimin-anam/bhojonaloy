import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { ThemeContext } from '../context/ThemeProvider';

const MainLayout = () => {
    const { isDarkMode } = useContext(ThemeContext)
    return (
        <div data-theme={isDarkMode? 'dark' : "light"}>

            <Navbar></Navbar>



         <div >
         <Outlet></Outlet>
         </div>



            <Footer></Footer>


        </div>
    );
};

export default MainLayout;