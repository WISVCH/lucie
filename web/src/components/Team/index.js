import React from 'react';

import Huygens from '../../assets/img/huygens.jpg';

import './index.scss';

const Team = () => {
    return (
        <div className="Team">
            <div className="Person">
                <img src={Huygens} alt="Huygens"/>
                <h4>Joep de Jong</h4>
                <p>Chariman</p>
            </div>
            <div className="Person">
                <img src={Huygens} alt="Huygens"/>
                <h4>Jules Fleuren</h4>
                <p>Secretary</p>
            </div>
            <div className="Person">
                <img src={Huygens} alt="Huygens"/>
                <h4>Wouter Versteegh</h4>
                <p>Treasurer</p>
            </div>
            <div className="Person">
                <img src={Huygens} alt="Huygens"/>
                <h4>Doris Aafjes</h4>
                <p>Promotion</p>
            </div>
            <div className="Person">
                <img src={Huygens} alt="Huygens"/>
                <h4>Sebastien van Tiggele</h4>
                <p>Logistics</p>
            </div>
            <div className="Person">
                <img src={Huygens} alt="Huygens"/>
                <h4>Janne Heslenfeld</h4>
                <p>Events</p>
            </div>
            <div className="Person">
                <img src={Huygens} alt="Huygens"/>
                <h4>Bastiaan Bakker</h4>
                <p>Qualitate Qua</p>
            </div>
        </div>
    );
};

export default Team;