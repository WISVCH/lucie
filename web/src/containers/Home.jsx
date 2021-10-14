import React from 'react';
import { Element } from 'react-scroll';
import Merchandise from '../components/Merchandise';
import Nav from '../components/Nav';
import Partners from '../components/Partners';
// import Partners from '../components/Partners';
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
                        <p>During each quarter, a number of bigger events will also be hosted. These events still have to be announced!</p>
                        <p>We are really looking forward to the whole year. We hope to see you at all the different activities!</p>
                    </div>
                </section>
                <section id="partners">
                    <Element name="partners"></Element>
                    <div className="Block">
                        <h2>Partners</h2>
                        <Partners/>
                        <p>Please contact us by email on <a href="mailto:lucie-extern@ch.tudelft.nl">lucie-extern@ch.tudelft.nl</a> if you are interested in collaboration with our lustrum activities.</p>
                        <a href="mailto:lucie-extern@ch.tudelft.nl" target="_blank" rel="noreferrer" className="Button">Become a partner</a>
                    </div>
                </section>
                <section id="merchandise">
                    <Element name="merchandise"></Element>
                    <div className="Block">
                        <h2>Merchandise</h2>
                        <Merchandise/>
                        <p>Until October 22nd, it is possible to order the lustrum longsleeves in 2 colors: <b>pink</b> and <b>blue</b>. The longsleeves has 3 prints: the cute connect owl is placed at your heart, the word 'connect' is on the sleeve, and a small Christiaan Huygens text is placed on the back.</p>
                        <p>It is possible to see the longsleeves in person before ordering them online. There are some samples in the association room of CH, which can also be used for fitting. The samples are subject to change slightly.</p>
                        <a href="https://ch.tudelft.nl/events/76bf1bec-3530-468f-b84e-9447474e0fa9/" target="_blank" rel="noreferrer" className="Button">Buy your longsleeve</a>
                        <a href="https://wisv.ch/lustrummerchform" target="_blank" rel="noreferrer" className="Button">Fill in the form</a>
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