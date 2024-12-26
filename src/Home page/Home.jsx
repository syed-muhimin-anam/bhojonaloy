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
                <div>
                <TopFoods></TopFoods>
                <Link  to={'/allFoods'}><button className='btn'>See All</button></Link>
                </div>

                <div>
                    <Menu></Menu>
                </div>

                <div>
                    <Schedule></Schedule>
                </div>
                
            </main>
        </div>
    );
};

export default Home;