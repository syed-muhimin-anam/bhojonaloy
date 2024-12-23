import React from 'react';
import Banner from './Banner';
import TopFoods from './TopFoods';

const Home = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <header>
                <Banner></Banner>
            </header>

            <main>
                <div>
                <TopFoods></TopFoods>
                </div>
                
            </main>
        </div>
    );
};

export default Home;