import React from 'react';
import bannerImage from '../assets/banner-Image1.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div
            className="hero min-h-[500px] mt-[68px] "
            style={{
                backgroundImage: `url(${bannerImage})`,
            }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md  p-10 rounded-xl">
                    <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
                    <p className="mb-5 text-white">
                        Welcome to bhojonaloy Resaurant. we are the best  restaurant in the town. we r here to serve you the wolds best food and services i hope you will like it.
                    </p>
                    <Link to={'/allFoods'}>   <button className="btn bg-purple-400">All Foods</button></Link>
                 
                </div>
            </div>
        </div>
    );
};

export default Banner;
