import React from 'react';

// import Huygens from '../../assets/img/huygens.jpg';

// import PhotoJoep from '../../assets/img/joep.png';
// import PhotoJules from '../../assets/img/jules.png';
// import PhotoWouter from '../../assets/img/wouter.png';
// import PhotoDoris from '../../assets/img/doris.png';
// import PhotoSebastien from '../../assets/img/sebastien.png';
// import PhotoJanne from '../../assets/img/janne.png';
// import PhotoGuus from '../../assets/img/guus.png';
import PhotoFemke from '../../assets/img/femke.jpeg';
import PhotoFleur from '../../assets/img/fleur.jpeg';
import PhotoPepijn from '../../assets/img/pepijn.jpeg';
import PhotoParis from '../../assets/img/paris.jpeg';
import PhotoIvar from '../../assets/img/ivar.jpeg';
import PhotoDax from '../../assets/img/dax.jpeg';
import PhotoBenthe from '../../assets/img/benthe.jpeg';
import './index.scss';

const Team = () => {
    return (
        <div className="Team">
            <div className="Person">
                <img src={PhotoFemke} alt="Huygens"/>
                <h4>Femke Knibbe</h4>
                <p>Chair</p>
            </div>
            <div className="Person">
                <img src={PhotoFleur} alt="Huygens"/>
                <h4>Fleur Maasland</h4>
                <p>Secretary</p>
            </div>
            <div className="Person">
                <img src={PhotoPepijn} alt="Huygens"/>
                <h4>Pepijn Raaymakers</h4>
                <p>Treasurer</p>
            </div>
            <div className="Person">
                <img src={PhotoParis} alt="Huygens"/>
                <h4>Paris Treffers</h4>
                <p>Promotion</p>
            </div>
            <div className="Person">
                <img src={PhotoDax} alt="Huygens"/>
                <h4>Dax van Dijk</h4>
                <p>Logistics</p>
            </div>
            <div className="Person">
                <img src={PhotoIvar} alt="Huygens"/>
                <h4>Ivar Brits</h4>
                <p>Events</p>
            </div>
            <div className="Person">
                <img src={PhotoBenthe} alt="Huygens"/>
                <h4>Benthe van der Burg</h4>
                <p>Qualitate Qua</p>
            </div>
        </div>
    );
};

export default Team;