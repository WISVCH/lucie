import React from 'react';
import { Element } from 'react-scroll';
import Merchandise from '../components/Merchandise';
import Nav from '../components/Nav';
import Partners from '../components/Partners';
import Team from '../components/Team';
import Timeline from '../components/Timeline/index';

import './Home.scss';

const Home = () => {
    return (
        <div className="Home">
            <Nav/>
            <div className="Main">
                {/* Information Section */}
                <section id="information">
                    <Element name="information"></Element>
                    <div className="Block">
                        <h2>General information</h2>
                        <p>Next year W.I.S.V. 'Christiaan Huygens' will celebrate its 70th anniversary. That is why next year will be all about the 14th lustrum of the study association. The entire academic year will be filled with special and exciting activities with the recurring theme Highlight.</p>
                        <p>This year we started to spread the news with an activity: a movie night in Pathé. Next year we will celebrate this lustrum with many different events. There will be 2 lustrum weeks with social events, business events and some educational workshops.</p>
                        <p>The first lustrum week will be from the 16th of November until the 20th of November, the second week is from the 15h of March until the 19th of March!</p>
                        <p>During each quarter, a number of bigger events will also be hosted. You can find these activities in the timeline.</p>
                        <p>We are really looking forward to the whole year. We hope to see you at all the different activities!</p>
                    </div>
                </section>

                {/* Partners Section */}
                <section id="partners">
                    <Element name="partners"></Element>
                    <div className="Block">
                        <h2>Partners</h2>
                        <Partners/>
                        <p>Please contact us by email on <a href="mailto:lucie-extern@ch.tudelft.nl">lucie-extern@ch.tudelft.nl</a> if you are interested in collaboration with our lustrum activities.</p>
                        <a href="mailto:lucie-extern@ch.tudelft.nl" target="_blank" rel="noreferrer" className="Button">Become a partner</a>
                    </div>
                </section>
            
                {/* Album Section */}
                <section id="album">
                    <Element name="album"></Element>
                    <div className="Block">
                        <h2>Lustrum Album</h2>
                        <p>Did you know that you can contribute to the lustrum album? 🎶 You can write your own song or make a cover! Claim your song through the forms in bio to make sure you will be heard on the one and only lustrum album! The deadline to submit your song is 19 December.</p>
                        <p>Finsihed songs can be submitted via e-mail (<a href="mailto:lucie@ch.tudelft.nl">lucie@ch.tudelft.nl</a>). If the size of the attachment is too large, we suggest to use WeTransfer.</p>
                        <div className="Button-wrapper">
                            <a href="https://soundcloud.com/chlustrum/sets/lustrum-uilbum" target="_blank" rel="noreferrer" className="Button" disabled>Listen to the album!</a>
                            <a href="https://wetransfer.com/" target="_blank" rel="noreferrer" className="Button">WeTransfer</a>
                        </div>
                    </div>
                </section>

                {/* Merchandise Section */}
                <section id="merchandise">
                    <Element name="merchandise"></Element>
                    <div className="Block">
                        <h2>Merchandise</h2>
                        <p>More info to come!</p>
                        <Merchandise/>
                    </div>
                </section>

                {/* Ongoing game section */}
                <section id="ongoing-games">
                    <Element name="ongoing-games"></Element>
                    <div className="Block">
                        <h2>Ongoing Games & Monthly Competitions</h2>
                        <p>Every month, on the 14th, there is an ongoing game or mini-competition organized by the LuCie to honor our 14th Lustrum! </p>

                        <div className="Monthly-Grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px', marginTop: '24px' }}>
                            <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <strong>14 Oct</strong> — Dart Tournament 
                            </div>
                            <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <strong>14 Nov</strong> — Album Release 
                            </div>
                            <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <strong>14 Dec</strong> — Baking Competition 
                            </div>
                            <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <strong>14 Jan</strong> — Puzzle Competition 
                            </div>
                            <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <strong>14 Feb</strong> — Valentines Special 
                            </div>
                            <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <strong>14 Mar</strong> — Promotion Competition 
                            </div>
                            <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <strong>14 Apr</strong> — Knakworst Competition 
                            </div>
                            <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <strong>14 May</strong> — 14 Floors 
                            </div>
                            <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <strong>14 Jun</strong> — Coloring Contest 
                            </div>
                        </div>
                    </div>
                </section>

                {/* Activities Section */}
                <section id="activities">
                    <Element name="activities"></Element>
                    <div className="Block">
                        <h2>Activities</h2>
                        <Timeline/>
                    </div>
                </section>

                {/* Committee Section */}
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