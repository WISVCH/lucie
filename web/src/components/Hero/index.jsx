import React from 'react';

import Logo from '../../assets/img/logo-connect-subtitle.svg';

import './index.scss'

const Hero = () => {
    return (
        <div className="Hero">
            <div className="Hero__logo">
                <img src={Logo} alt="Connect Logo"/>
            </div>
            <div className="Line Line--bl Ball--tl"></div>
        </div>
    );
};

export default Hero;