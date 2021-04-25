import React from 'react';

import './index.scss'
const Timeline = () => {
    return (
        <div className="Timeline">
            <div className="Title"><h4>May</h4></div>
            <div data-num="6" className="Activity">
                <h3>Pre lustrum: Canoeing Thursday</h3>
                <p>During this activity we will be canoeing in the Abtswoudse Bos in Delft!</p>
                <a href="https://wisv.ch" target="_blank" rel="noreferrer" className="Button">Tickets</a>
            </div>
            <div data-num="7" className="Activity">
                <h3>Pre lustrum: Canoeing Friday</h3>
                <p>During this activity we will be canoeing in the Abtswoudse Bos in Delft!</p>
                <a href="https://wisv.ch" target="_blank" rel="noreferrer" className="Button">Tickets</a>
            </div>
            <div className="Title"><h4>Aug</h4></div>
            <div data-num="10" className="Activity">
                <h3>Freshmen Weekend</h3>
                <p>During this activity we will be canoeing in the Abtswoudse Bos in Delft!</p>
            </div>
            <div className="Title"><h4>Sep</h4></div>
            <div data-num="8" className="Activity">
                <h3>Freshmen Weekend</h3>
                <p>During this activity we will be canoeing in the Abtswoudse Bos in Delft!</p>
            </div>
            <div data-num="23" className="Activity">
                <h3>Freshmen Weekend</h3>
                <p>During this activity we will be canoeing in the Abtswoudse Bos in Delft!</p>
            </div>
        </div>
    );
};

export default Timeline;