import React from 'react';
import Home from '../containers/Home';
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero';

const MainComponent = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Home/>
            <Footer/>
        </div>
    );
};

export default MainComponent;