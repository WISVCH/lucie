import React from 'react';
import { Element } from 'react-scroll';

import './index.scss';

const Footer = () => {
    return (
        <div className="Footer">
            <Element name="contact"></Element>
            <h2>Contact</h2>
            <p>W.I.S.V. ‘Christiaan Huygens’ (CH) is the study association for students of Applied Mathematics and Computer Science at the Delft University of Technology.</p>

            <p>
                Mekelweg 4,<br/>
                2628CD Delft<br/>
                <b>T:</b> <a href="tel:31152782532">015 278 2532</a><br/>
                <b>E:</b> <a href="mailto:lucie-extern@ch.tudelft.nl">lucie-extern@ch.tudelft.nl</a><br/>
            </p>
        </div>
    );
};

export default Footer;