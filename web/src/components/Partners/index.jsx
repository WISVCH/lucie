import React from 'react';

import Netcompany from '../../assets/img/partners/netcompany.png';

import './index.scss';

const Partners = () => {
    return (
        <div className="Partners">
            <a href="https://netcompany.com" target="_blank" rel="noreferrer" className="Partner">
                <img src={Netcompany} alt="Netcompany"/>
            </a>
            {/* <a href="https://wisv.ch" target="_blank" rel="noreferrer" className="Partner">
                <img src={Partner1} alt="Partner 1"/>
            </a>
            <a href="https://wisv.ch" target="_blank" rel="noreferrer" className="Partner">
                <img src={Partner1} alt="Partner 1"/>
            </a> */}
        </div>
    );
};

export default Partners;