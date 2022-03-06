import React from 'react';
import { Element } from 'react-scroll';
// import Merchandise from '../components/Merchandise';
import Nav from '../components/Nav';
import Partners from '../components/Partners';
// import Partners from '../components/Partners';
import Team from '../components/Team';
import Timeline from '../components/Timeline/index';

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
                        {/* <p>Please contact us by email on <a href="mailto:lucie-extern@ch.tudelft.nl">lucie-extern@ch.tudelft.nl</a> if you are interested in collaboration with our lustrum activities.</p>
                        <a href="mailto:lucie-extern@ch.tudelft.nl" target="_blank" rel="noreferrer" className="Button">Become a partner</a> */}
                    </div>
                </section>
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
                {/* <section id="merchandise"> */}
                    {/* <Element name="merchandise"></Element>
                    <div className="Block">
                        <h2>Merchandise</h2>
                        <Merchandise/>
                        <p>Until October 22nd, it is possible to order the lustrum longsleeves in 2 colors: <b>pink</b> and <b>blue</b>. The longsleeves has 3 prints: the cute connect owl is placed at your heart, the word 'connect' is on the sleeve, and a small Christiaan Huygens text is placed on the back.</p>
                        <p>It is possible to see the longsleeves in person before ordering them online. There are some samples in the association room of CH, which can also be used for fitting. The samples are subject to change slightly.</p>
                        <div className="Button-wrapper">
                            <a href="https://ch.tudelft.nl/events/76bf1bec-3530-468f-b84e-9447474e0fa9/" target="_blank" rel="noreferrer" className="Button Button--disabled" disabled>Sold out</a>
                        </div>
                    </div> */}
                    {/* <div className="Block">
                        <h2>Calendar</h2>
                        <p>Do you like to be part of our fabulous lustrum CHalendar? Then this is your time!</p>
                        <p>If you are interested in shooting a photo with your friends/committee/board or by yourself, such that you guys will represent a month in our CHalendar, please fill in this form and we will reach out to you! </p>
                        <div className="Button-wrapper">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdSMaQVBzwFjibP832Nk9p0qh0NZpfkEGC4pIU73RPpzGwPLw/viewform?usp=sf_link" target="_blank" rel="noreferrer" className="Button">Fill in the form</a>
                        </div>
                    </div> */}
                {/* </section> */}
                {/* <section id="album">
                    <div className="Block">
                        <h2>Ongoing Game: CHristmas Puzzle</h2>
                        <p>Every month, around the 13th, there is an ongoing game organised by the LuCie. For every month you participate you get at least one "ticket" for the lottery at the end of the lustrumyear. Participating multiple times results in a higher win chance. People who perform best in an ongoing game are awarded with some bonus "tickets", to increase their chances.</p>
                        <p>This month we made a small CHristmas Puzzle, inspired by the yearly <a href="https://www.aivd.nl/onderwerpen/aivd-kerstpuzzel" target="_blank" rel="noreferrer">AIVD Kerstpuzzel</a>. Participating results in 1 ticket, answering the question "Who?" correctly gives you another ticket. Additional tickets may be rewarded for the fastest correct replies on the form and creativity.</p>
                        <p>We kindly ask you to not share solutions with other participants.</p>

                        <h3>The Puzzle:</h3>
                        <textarea>
                            0000101111100000000010100011101001010001010100101000111000000001010000000001111110000000010000000000000000100000111000010111010100001000001010000101110111000000000000000
                        </textarea>
                        <h3>The Question:</h3>
                        <p>Who?</p>
                        <div className="Button-wrapper">
                            <a href="https://forms.gle/go4h3f1htGjSYyD98" target="_blank" rel="noreferrer" className="Button">Submit your answer</a>
                        </div>
                    </div>
                </section> */}
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