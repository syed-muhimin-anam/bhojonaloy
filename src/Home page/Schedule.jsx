import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import image1 from '../assets/gallery/schedule.jpg'

const Schedule = () => {
    return (
        <div className='grid md:grid-cols-3'>
            <div className='text-center space-y-7'>
                <h1 className='text-2xl text-purple-400'>Opening Hours</h1>
                <div>
                    <p className='text-purple-900'>Monday - Thursday</p>
                    <p>11.00am - 10.30pm</p>
                </div>

                <div>
                    <p className='text-purple-900' >Friday - Sunday</p>
                    <p>05.00pm - 12.30pm</p>
                </div>

                <p>Restaurant is closed on holidays.</p>
            </div>
            <div className='flex justify-center items-center'>
                <img className='w-5/12' src={image1}  />
            </div>

            <div className='text-center space-y-7'>
                <h1 className='text-2xl text-purple-400'>Contact Info</h1>
                <div>
                    <p className='text-purple-900'>Syed Muhimin Anam</p>
                    <p>Chittagong University</p>
                </div>

                <div>
                    <p className='text-purple-900'>01759648297</p>
                    <p>syed.muhimin.anam@gmail.com</p>
                </div>
                <div className='flex items-center justify-center space-x-5'>
                    <FaFacebookSquare />
                    <FaInstagramSquare />
                    <FaWhatsappSquare />
                </div>
            </div>
        </div>
    );
};

export default Schedule;