import React from 'react';
import { Element } from 'react-scroll';
import Nav from '../components/Nav';
import Partners from '../components/Partners';
import Team from '../components/Team';
import Timeline from '../components/Timeline';

import './Home.scss';

const Home = () => {
    return (
        <div className="Home">
            <Nav/>
            <div className="Main">
                <section id="information">
                    <Element name="information"></Element>
                    <div className="Block">
                        <h2>General information</h2>
                        <p>Next year W.I.S.V. 'Christiaan Huygens' will celebrate its 65th anniversary. That is why next year will be all about the 13th lustrum of the study association. The entire academic year will be filled with special and exciting activities with the recurring theme Connect.</p>
                        <p>This year we started to spread the news with an activity: canoening in the Abtswoudse Bos. Next year we will celebrate this lustrum with many different events. There will be 2 lustrum weeks with social events, business events and some educational workshops.</p>
                        <p>During each quarter, a number of bigger events will also be hosted. These events sttill have to be anounced!</p>
                        <p>We are really looking forward to the whole year. We hope to see you at all the different activities!</p>
                    </div>
                </section>
                <section id="partners">
                    <Element name="partners"></Element>
                    <div className="Block">
                        <h2>Partners</h2>
                        {/* <Partners/> */}
                        <p>We are still looking for partners. Please contact us by email on <a href="mailto:lucie-extern@ch.tudelft.nl">lucie-extern@ch.tudelft.nl</a> if you are interested in collaboration with our lustrum activities.</p>
                        <a href="mailto:lucie-extern@ch.tudelft.nl" className="Button">Become a partner</a>
                    </div>
                </section>
                <section id="activities">
                    <Element name="activities"></Element>
                    {/* <div className="Line Line--pink Line--tr Ball--tl Ball--pink"></div> */}
                    <div className="Block">
                        <h2>Activities</h2>
                        <Timeline/>
                    </div>
                </section>
                <section id="lustrum-committee">
                    <Element name="lustrum-committee"></Element>
                    <h2>Lustrum Committee</h2>
                    <Team/>
                </section>
            </div>
        </div>
    );
};

export default Home;