import React from 'react';

import PhotoFemke from '../../assets/img/lucie/femke.jpeg';
import PhotoFleur from '../../assets/img/lucie/fleur.jpeg';
import PhotoPepijn from '../../assets/img/lucie/pepijn.jpeg';
import PhotoParis from '../../assets/img/lucie/paris.jpeg';
import PhotoIvar from '../../assets/img/lucie/ivar.jpeg';
import PhotoDax from '../../assets/img/lucie/dax.jpeg';
import PhotoBenthe from '../../assets/img/lucie/benthe.jpeg';
import './index.scss';

const Team = () => {
    return (
        <div className="Team">
            <div className="Person">
                <div className="Photo-Frame">
                    <img src={PhotoFemke} alt="Huygens"/>
                </div>
                <h4>Femke Knibbe</h4>
                <p>Chair</p>
            </div>
            <div className="Person">
                <div className="Photo-Frame">
                    <img src={PhotoBenthe} alt="Huygens"/>
                </div>
                <h4>Benthe van der Burg</h4>
                <p>Secretary</p>
            </div>
            <div className="Person">
                <div className="Photo-Frame">
                    <img src={PhotoPepijn} alt="Huygens"/>
                </div>
                <h4>Pepijn Raaymakers</h4>
                <p>Treasurer</p>
            </div>
            <div className="Person">
                <div className="Photo-Frame">
                    <img src={PhotoParis} alt="Huygens"/>
                </div>
                <h4>Paris Treffers</h4>
                <p>Promotion</p>
            </div>
            <div className="Person">
                <div className="Photo-Frame">
                    <img src={PhotoDax} alt="Huygens"/>
                </div>
                <h4>Dax van Dijk</h4>
                <p>Logistics</p>
            </div>
            <div className="Person">
                <div className="Photo-Frame">
                    <img src={PhotoFleur} alt="Huygens"/>
                </div>
                <h4>Fleur Maasland</h4>
                <p>Events</p>
            </div>
            <div className="Person">
                <div className="Photo-Frame">
                    <img src={PhotoIvar} alt="Huygens"/>
                </div>
                <h4>Ivar Brits</h4>
                <p>Qualitate Qua</p>
            </div>
        </div>
    );
};

export default Team;