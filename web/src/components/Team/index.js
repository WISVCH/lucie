import React from 'react';

// import Huygens from '../../assets/img/huygens.jpg';

import PhotoJoep from '../../assets/img/joep.png';
import PhotoJules from '../../assets/img/jules.png';
import PhotoWouter from '../../assets/img/wouter.png';
import PhotoDoris from '../../assets/img/doris.png';
import PhotoSebastien from '../../assets/img/sebastien.png';
import PhotoJanne from '../../assets/img/janne.png';
import PhotoGuus from '../../assets/img/guus.png';

import './index.scss';

const Team = () => {
    return (
        <div className="Team">
            <div className="Person">
                <img src={PhotoJoep} alt="Huygens"/>
                <h4>Joep de Jong</h4>
                <p>Chairman</p>
            </div>
            <div className="Person">
                <img src={PhotoJules} alt="Huygens"/>
                <h4>Jules Fleuren</h4>
                <p>Secretary</p>
            </div>
            <div className="Person">
                <img src={PhotoWouter} alt="Huygens"/>
                <h4>Wouter Versteegh</h4>
                <p>Treasurer</p>
            </div>
            <div className="Person">
                <img src={PhotoDoris} alt="Huygens"/>
                <h4>Doris Aafjes</h4>
                <p>Promotion</p>
            </div>
            <div className="Person">
                <img src={PhotoSebastien} alt="Huygens"/>
                <h4>Sebastien van Tiggele</h4>
                <p>Logistics</p>
            </div>
            <div className="Person">
                <img src={PhotoJanne} alt="Huygens"/>
                <h4>Janne Heslenfeld</h4>
                <p>Events</p>
            </div>
            <div className="Person">
                <img src={PhotoGuus} alt="Huygens"/>
                <h4>Guus van Daal</h4>
                <p>Qualitate Qua</p>
            </div>
        </div>
    );
};

export default Team;