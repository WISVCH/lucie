import React, { useState } from 'react';
import { Link } from 'react-scroll';

import menuIcon from '../../assets/icons/menu.svg';

import './index.scss';

const Nav = () => {
    const [active, setActive] = useState(false)
    return (
        <div className={'Nav '+ (active?'Nav--active':'')} onClick={() => setActive(!active)}>
            <div className="Nav__mobile">
                <div className="Nav__toggle" onClick={() => setActive(!active)}><img src={menuIcon} alt="Menu"/></div>
            </div>
            <nav>
                <Link to="information" onClick={() => setActive(false)} spy={true} smooth={true} duration={1000}>Information</Link>
                <Link to="partners" onClick={() => setActive(false)} spy={true} smooth={true} duration={1000}>Partners</Link>
                <Link to="album" onClick={() => setActive(false)} spy={true} smooth={true} duration={1000}>Album</Link>
                {/* <Link to="merchandise" onClick={() => setActive(false)} spy={true} smooth={true} duration={1000}>Merchandise</Link> */}
                <Link to="activities" onClick={() => setActive(false)} spy={true} smooth={true} duration={1000}>Activities</Link>
                <Link to="lustrum-committee" onClick={() => setActive(false)} spy={true} smooth={true} duration={1000}>Lustrum committee</Link>
                <Link to="contact" onClick={() => setActive(false)} spy={true} smooth={true} duration={1000}>Contact</Link>
            </nav>
        </div>
    );
};

export default Nav;