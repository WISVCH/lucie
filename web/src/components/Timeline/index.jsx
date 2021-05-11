import React from 'react';

import './index.scss'
const Timeline = () => {
    return (
        <div className="Timeline">
            <div className="Title"><h4>2021</h4></div>
            <div className="Title"><h4>May</h4></div>
            <div data-num="6" className="Activity">
                <h3>Pre lustrum: Canoeing Thursday</h3>
                <p>During this activity we will be canoeing in the Abtswoudse Bos in Delft!</p>
                <a href="https://wisv.ch" tbuttonrget="_blank" rel="noreferrer" className="Button Button--disabled">Sold out</a>
            </div>
            <div data-num="7" className="Activity">
                <h3>Pre lustrum: Canoeing Friday</h3>
                <p>During this activity we will be canoeing in the Abtswoudse Bos in Delft!</p>
                <a href="https://wisv.ch" target="_blank" rel="noreferrer" className="Button  Button--disabled" disabled>Sold out</a>
            </div>
            <div className="Title"><h4>Nov</h4></div>
            <div data-num="15" className="Activity">
                <h3>Week 1: TBA</h3>
                <p>The activities for the first lustrum week are not announced yet.. Follow us on Instagram to stay posted about all our activities!</p>
                <a href="https://instagram.com/lucie_wisvch" target="_blank" rel="noreferrer" className="Button">Stay posted</a>
            </div>
            <div className="Title"><h4>2022</h4></div>
            <div className="Title"><h4>Mar</h4></div>
            <div data-num="14" className="Activity">
                <h3>Week 2: TBA</h3>
                <p>The activities for the second lustrum week are not announced yet.. Follow us on Instagram to stay posted about all our activities!</p>
                <a href="https://instagram.com/lucie_wisvch" target="_blank" rel="noreferrer" className="Button">Stay posted</a>
            </div>
            {/* <div className="Title"><h4>TBA</h4></div>
            <div data-num="?" className="Activity">
                <h3>Darts</h3>
                <p>During this activity we will be canoeing in the Abtswoudse Bos in Delft!</p>
            </div> */}
            <div className="Line Line--bl Line--pink Ball--br Ball--pink"></div>
        </div>
    );
};

export default Timeline;