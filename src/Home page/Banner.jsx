import React from 'react';
import bannerImage from '../assets/banner-Image1.jpg';

const Banner = () => {
    return (
        <div
            className="hero min-h-[600px] mt-10"
            style={{
                backgroundImage: `url(${bannerImage})`,
            }}>
            <div className=""></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md hero-overlay bg-opacity-60 p-10 rounded-xl">
                    <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
                    <p className="mb-5 text-white">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
