import React from 'react';
import Banner from './Banner';
import TopFoods from './TopFoods';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Schedule from './Schedule';
import Category from './Category';

const Home = () => {
    return (
        <div>
            <header>
                <Banner></Banner>
            </header>

            <main className='w-10/12 mx-auto'>
                <div className='my-10'>
                <TopFoods></TopFoods>
                <div className='text-center'>
                <Link  to={'/allFoods'}><button className='btn bg-purple-400 text-black '>See All</button></Link>
                </div>
                </div>

                <div className='my-20'>
                    <Menu></Menu>
                </div>

                <div>
                    <Category></Category>
                </div>

                <div className='my-20'>
                    <Schedule></Schedule>
                </div>
                
            </main>
        </div>
    );
};

export default Home;