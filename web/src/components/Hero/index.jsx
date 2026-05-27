import React from 'react';

import Logo from '../../assets/img/Logo-highlight-cropped.png';

import './index.scss'

const Hero = () => {
    return (
        <div className="Hero">
            <div className="Hero__logo">
                <img src={Logo} alt="Highlight Logo"/>
            </div>
            <div className="Line Line--bl Ball--tl"></div>
        </div>
    );
};

export default Hero;