import React from 'react';
import { Element } from 'react-scroll';
import Merchandise from '../components/Merchandise';
import Nav from '../components/Nav';
import Partners from '../components/Partners';
import Team from '../components/Team';
import Timeline from '../components/Timeline/index';
import AlbumPoster from '../assets/img/promo/Album_poster.png';

import './Home.scss';

const Home = () => {
    return (
        <div className="Home">
            <Nav />
            <div className="Main">
                {/* info */}
                <section id="information">
                    <Element name="information"></Element>
                    <div className="Block">
                        <h2>General information</h2>
                        <p>
                            This year, study association W.I.S.V. 'Christiaan Huygens' (CH) is 
                            celebrating its 70th anniversary! To mark seven decades of supporting 
                            Computer Science and Applied Mathematics students, the entire academic year 
                            is dedicated to our 14th Lustrum under the theme: 
                            <strong> Highlight</strong>. Last year, we kicked off the excitement 
                            with a pre-lustrum movie night at Pathé and a cocktail party, but now the main celebration 
                            is officially underway!
                        </p>

                        <p>
                            Throughout the year, we are hosting an incredible lineup of events, having 
                            both two dedicated Lustrum Weeks (<strong>16–20 November</strong> and <strong>15–19 March</strong>) 
                            featuring company workshops, a cantus with live band, an owl show, and a pool party, 
                            alongside single-day highlights like an Opening Party, Abseilen, 
                            Sumo Chess, and an EWI Festival.
                        </p>

                        <p>
                            Here on our website, you can explore everything we have planned and get involved:
                        </p>

                        <ul>
                            <li>
                                <strong>Activities & Timeline:</strong> Explore our complete 
                                activity schedule to stay up to date and secure your event tickets.
                            </li>
                            <li>
                                <strong>Ongoing Games & Monthly Competitions:</strong> On the 14th of 
                                every month, join in on fun challenges like our Dart Tournament, 
                                Baking Competition, or Puzzle Competition.
                            </li>
                            <li>
                                <strong>Lustrum Album:</strong> Learn how to contribute your own song 
                                or cover to our official album before the September 14th deadline.
                            </li>
                            <li>
                                <strong>Partners & Committee:</strong> Meet the LuCie team organizing 
                                the year and learn about our corporate partners that made this lustrum possible.
                            </li>
                        </ul>

                        <p>
                            We are thrilled to share this exciting year with you. Explore the rest 
                            of the site to grab your tickets, submit your album entries, and join us 
                            for all the upcoming activities!
                        </p>
                    </div>
                </section>

                {/* partners */}
                <section id="partners">
                    <Element name="partners"></Element>
                    <div className="Block">
                        <h2>Partners</h2>
                        <Partners/>
                        <p>Please contact us by email on <a href="mailto:lucie-extern@ch.tudelft.nl">lucie-extern@ch.tudelft.nl</a> if you are interested in collaboration with our lustrum activities.</p>
                        <a href="mailto:lucie-extern@ch.tudelft.nl" target="_blank" rel="noreferrer" className="Button">Become a partner</a>
                    </div>
                </section>
            
                {/* album */}
                <section id="album">
                    <Element name="album"></Element>
                    <div className="Block Block--with-image">
                        <div className="Block__content">
                            <h2>Lustrum Album</h2>
                            <p>Did you know that you can contribute to the lustrum album? 🎶 You can write your own song or make a cover! The deadline to submit your song is the 14th of September.</p>
                            <p>You can apply for a song using the Google Forms below. If your application gets approved, you can submit your file in the forms aswell!</p>
                            <div className="Button-wrapper">
                                <a href="https://wisv.ch/lustrumalbum" target="_blank" rel="noreferrer" className="Button">Google Forms</a>
                            </div>
                        </div>
                        <div className="Block__image">
                            <img src={AlbumPoster} alt="Lustrum Album Poster" />
                        </div>
                    </div>
                </section>

                {/* merch */}
                <section id="merchandise">
                    <Element name="merchandise"></Element>
                    <div className="Block">
                        <h2>Merchandise</h2>
                        <p>Stay tuned for the LuCie merchandise!</p>
                        
                        <div className="Merch-Loader">
                            <div className="Merch-Loader__bar">
                                <div className="Merch-Loader__progress"></div>
                            </div>
                            <span className="Merch-Loader__text">Loading...</span>
                        </div>

                        <Merchandise />
                    </div>
                </section>

                {/* ongoing games */}
                <section id="ongoing-games">
                    <Element name="ongoing-games"></Element>
                    <div className="Block">
                        <h2>Ongoing Games & Monthly Competitions</h2>
                        <p>Every month, on the 14th, there is an ongoing game or mini-competition organized by the LuCie to honor our 14th Lustrum! </p>

                        <div className="Monthly-Grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px', marginTop: '24px' }}>
    
                            <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <div><strong className="text-highlight-lavender">14 Oct</strong></div>
                                <span>Dart Tournament</span>
                            </div>

                            <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <div><strong className="text-highlight-lavender">14 Nov</strong></div>
                                <span>Album Release</span>
                            </div>

                            <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <div><strong className="text-highlight-lavender">14 Dec</strong></div>
                                <span>Baking Competition</span>
                            </div>

                            <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <div><strong className="text-highlight-lavender">14 Jan</strong></div>
                                <span>Puzzle Competition</span>
                            </div>

                            <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <div><strong className="text-highlight-lavender">14 Feb</strong></div>
                                <span>Valentines Special</span>
                            </div>

                            <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <div><strong className="text-highlight-lavender">14 Mar</strong></div>
                                <span>Promotion Competition</span>
                            </div>

                            <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <div><strong className="text-highlight-lavender">14 Apr</strong></div>
                                <span>HotDog Competition</span>
                            </div>

                            <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <div><strong className="text-highlight-lavender">14 May</strong></div>
                                <span>14 Floors</span>
                            </div>

                            <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <div><strong className="text-highlight-lavender">14 Jun</strong></div>
                                <span>Coloring Contest</span>
                            </div>

                        </div>
                    </div>
                </section>

                {/* activities */}
                <section id="activities">
                    <Element name="activities"></Element>
                    <div className="Block">
                        <h2>Activities</h2>
                        <Timeline/>
                    </div>
                </section>

                {/* committee */}
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