import React from 'react';

import Partner1 from '../../assets/img/partner-1.svg';

import './index.scss';

const Partners = () => {
    return (
        <div className="Partners">
            <a href="https://wisv.ch" target="_blank" rel="noreferrer" className="Partner">
                <img src={Partner1} alt="Partner 1"/>
            </a>
            <a href="https://wisv.ch" target="_blank" rel="noreferrer" className="Partner">
                <img src={Partner1} alt="Partner 1"/>
            </a>
            <a href="https://wisv.ch" target="_blank" rel="noreferrer" className="Partner">
                <img src={Partner1} alt="Partner 1"/>
            </a>
        </div>
    );
};

export default Partners;