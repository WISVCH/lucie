import React from 'react';
import { Link } from 'react-scroll';

import './index.scss';

const Nav = () => {
    return (
        <div className="Nav">
            <div className="Nav__mobile">
                <div className="Nav__toggle">MENU</div>
            </div>
            <nav>
                <Link to="information" spy={true} smooth={true} duration={1000}>Information</Link>
                <Link to="partners" spy={true} smooth={true} duration={1000}>Partners</Link>
                <Link to="activities" spy={true} smooth={true} duration={1000}>Activities</Link>
                <Link to="lustrum-committee" spy={true} smooth={true} duration={1000}>Lustrum committee</Link>
                <Link to="contact" spy={true} smooth={true} duration={1000}>Contact</Link>
            </nav>
        </div>
    );
};

export default Nav;