import React from 'react';
import { FaHouse, FaHouseMedical } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className=" md:px-40 bg-purple-400 mx-auto footer  text-base-content p-10">
            <aside>
               <FaHouse className='text-2xl text-black'></FaHouse>
                <p className='text-black'>
                  <span className='text-2xl font-bold text-black'>  BHOJONALOY RESTAURANT. </span>
                    <br />
                    we are exist since 1982. WE have a culture
                </p>
            </aside>
            <nav className='text-black'>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Hospitality</a>
                <a className="link link-hover">Services</a>
                <a className="link link-hover">Food Making</a>
                <a className="link link-hover">Schef Course</a>
            </nav>
            <nav className='text-black'>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav className='text-black'>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer> 
    );
};

export default Footer;