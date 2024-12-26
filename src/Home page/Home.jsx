import React from 'react';
import Banner from './Banner';
import TopFoods from './TopFoods';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Schedule from './Schedule';

const Home = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <header>
                <Banner></Banner>
            </header>

            <main>
                <div className='my-20'>
                <TopFoods></TopFoods>
                <div className='text-center'>
                <Link  to={'/allFoods'}><button className='btn '>See All</button></Link>
                </div>
                </div>

                <div className='my-20'>
                    <Menu></Menu>
                </div>

                <div className='my-20'>
                    <Schedule></Schedule>
                </div>
                
            </main>
        </div>
    );
};

export default Home;