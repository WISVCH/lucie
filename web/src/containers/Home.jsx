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
                        <p>This year W.I.S.V. 'Christiaan Huygens' will celebrate its 60th anniversary. That is why this year will be all about the 12th lustrum of the study association. This entire academic year will be filled with special and exciting activities with the recurring theme Trending.</p>
                        <p>Last year we started to spread the news with two activities, the announcement of our theme with a mural and a cantus. This year we will celebrate this lustrum with many different events. There will be 2 lustrum weeks with social events, business events and some educational workshops.</p>
                        <p>During each quarter of this year, a number of bigger events will also be hosted. Among these will be a gala, a hitchhiking competition, a symposium and the biggest event will be the hackathon. The attendees of the hackathon come up with interesting ideas based on data delivered by companies and process this in some kind of result, for instance an app or model. The most interesting results will receive a prize for their effort.</p>
                        <p>We are really looking forward to the whole year. We hope to see you at the different activities! And if you want there is also some lustrum merchandise for sale at CH.</p>
                    </div>
                </section>
                <section id="partners">
                    <Element name="partners"></Element>
                    <div className="Block">
                        <h2>Partners</h2>
                        <Partners/>
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