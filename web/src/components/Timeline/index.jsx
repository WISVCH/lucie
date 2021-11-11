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
                <a href="https://ch.tudelft.nl/media/photos/?type_0=gallery&album_gallery_id_0=51" tbuttonrget="_blank" rel="noreferrer" className="Button">Photos</a>
            </div>
            <div data-num="7" className="Activity">
                <h3>Pre lustrum: Canoeing Friday</h3>
                <p>During this activity we will be canoeing in the Abtswoudse Bos in Delft!</p>
                <a href="https://ch.tudelft.nl/media/photos/?type_0=gallery&album_gallery_id_0=51" target="_blank" rel="noreferrer" className="Button">Photos</a>
            </div>
            <div className="Title"><h4>Sep</h4></div>
            <div data-num="15" className="Activity">
                <h3>Beachday</h3>
                <p>Buy a beach ticket for €2 to enjoy some drinks, snacks, and various beach games with us from 15:00 until 18:00.</p>
                <p>If you want to eat dinner, you can buy a ticket for €17,50 which includes a ticket to the beach. The dinner starts on 18:00 at beachclub Whoosah. Fill in the form to select a preference of pizza, a burger or chicken sate.</p>
                {/* <a href="https://ch.tudelft.nl/events/f44ffc82-5426-4bbd-ac89-c91ef874df80" target="_blank" rel="noreferrer" className="Button">Tickets</a> */}
                {/* <a href="https://forms.gle/Bsx7fy4k6N2ThFpz8" target="_blank" rel="noreferrer" className="Button">Dinner form</a> */}
            </div>
            <div className="Title"><h4>Nov</h4></div>
            <div className="Day">
                <div data-num="15" className="Activity">
                    <h3>Week 1: Lustrum opening</h3>
                    <p>On Monday we will kick off our first lustrum week with a grand opening show held on campus. Come join us at this owlsome activity!</p>
                    <a href="https://instagram.com/lucie_wisvch" target="_blank" rel="noreferrer" className="Button Button--beige">Stay posted</a>
                </div>
                <div className="Activity">
                    <h3>Week 1: Lustrum reception</h3>
                    <p>After the grand opening show, a reception will be held for honorary members and members of merit. This reception will take place at the /Pub and is on invite only.</p>
                    <a href="https://instagram.com/lucie_wisvch" target="_blank" rel="noreferrer" className="Button Button--disabled">Invitation only</a>
                </div>
                <div className="Activity">
                    <h3>Week 1: Opening party</h3>
                    <p>Of course our first lustrum week is opened with an opening party. There is no better location for this than the beloved STECK. The opening party will be a themed party, so follow us on Instagram to make sure you do not miss the theme announcement!</p>
                    <a href="https://ch.tudelft.nl/events/4bf7664c-8484-42ff-9113-6272ee187280" target="_blank" rel="noreferrer" className="Button">Tickets</a>
                </div>
            </div>
            <div className="Day">
                <div data-num="16" className="Activity">
                    <h3>Week 1: Lecture Maartje Laterveer</h3>
                    <p>Maartje Laterveer will give a lecture in the first lustrum week. She writes about diversity and inclusion in a fast changing world of business and politics, for het Financieele Dagblad, de Volkskrant and Vogue Netherlands. She is specialized in essays and columns, interviews human interest and profiles. She is going to talk about feminism and women in the business world.</p>
                    <a href="https://ch.tudelft.nl/events/46dd4442-caee-48c3-b42a-0768515663d3" target="_blank" rel="noreferrer" className="Button">Tickets</a>
                </div>
                <div className="Activity">
                    <h3>Week 1: Auction</h3>
                    <p>In week 1 we also will give a nice lustrum Auction. During this evening the lustrum committee will auction different objects ranging from mathematics literature to helpful ‘stuko’ packages. Besides the auction we will drink a beer together in the /Pub. Make sure to attend this event to be able to buy some amazing stuff for student prices!</p>
                    <a href="https://ch.tudelft.nl/events/6ef3439e-7bed-4854-b90d-e21840c81c41" target="_blank" rel="noreferrer" className="Button">Tickets</a>
                </div>
            </div>
            <div className="Day">
                <div data-num="17" className="Activity">
                    <h3>Week 1: Workshop at Da Vinci Derivatives</h3>
                    <p>Learn how to apply the quantitative skills that you have developed during your studies in the world of trading. During this workshop Da Vinci Derivatives will teach you about the ins and outs of trading during interactive trading games, an office tour and a Q &amp; A with employees that have recently graduated from their studies.</p>
                    <a href="https://forms.gle/fggCxVzncSCTghRP6" target="_blank" rel="noreferrer" className="Button">Interest form</a>
                </div>
                <div className="Activity">
                    <h3>Week 1: Comedy Night</h3>
                    <p>During the comedy night laughing is guaranteed. Comedian Mino van Nassau will take care of this. He is a comedian with an Indian flavour. His Indian background plays a major role in his stand-up comedy.</p>
                    <a href="https://ch.tudelft.nl/events/0c920374-07b4-4b31-bc70-f27580a9aeec" target="_blank" rel="noreferrer" className="Button">Tickets</a>
                </div>
            </div>
            <div data-num="18" className="Activity">
                <h3>Week 1: Beer tasting</h3>
                <p>Who has the best taste? On thursday we will gather at Het Proeflokaal (tasting room) of the Delfts brewery De Koperen Kat. In a timespan of 2 hours, several beers will be served. We’d love to see you there!</p>
                <a href="https://ch.tudelft.nl/events/56a00f7f-e02a-44ef-9f98-9efc2546b34a" target="_blank" rel="noreferrer" className="Button">Tickets</a>
            </div>
            <div data-num="19" className="Activity">
                <h3>Week 1: "Uitbrak" high tea</h3>
                <p>As a closer for the first lustrum week we will be having a nice high tea in the /Pub during the lunch break. Come on down to have some delicious traditional scones along with many other different sweet or savory bites!</p>
                <a href="https://ch.tudelft.nl/events/b5aaae15-6bde-4b63-ad55-5fbd832d9cb0" target="_blank" rel="noreferrer" className="Button">Tickets</a>
            </div>
            <div data-num="27" className="Activity">
                <h3>CHess tournament</h3>
                <p>Test your chess skills at the chess tournament on 27 november in hall X3 (in X, the Sports&amp;Culture centre). The event begins at 11:00 and the actual tournament will start at 11:30. Lunch will be provided and there will be free coffee and tea for all participants. This event is open for members of W.I.S.V. 'Christiaan Huygens' and for students with an X membership. Tickets can be bought for only €5!</p>
                <p>The tournament will be a Rapid Chess, Swiss-style tournament where everyone participates in one big group. There will be a total of 5 rounds, each round taking 40 minutes. Each player gets a maximum of 15 minutes per round, including a few seconds per move. Afterwards your next opponent will be selected, pitting you against other players with similar win/loss ratios. At the end of the tournament, prizes will be handed out. If you have more questions about the structure of the tournament, please ask in an email to <a href="mailto:lucie@ch.tudelft.nl">lucie@ch.tudelft.nl</a></p>

                <h4>Time Schedule</h4>
                <ul>
                    <li>11:00 - Opening</li>
                    <li>11.30 - Round 1</li>
                    <li>12.10 - Round 2</li>
                    <li>12.50 - Round 3</li>
                    <li>13.30 - Break</li>
                    <li>14.10 - Round 4</li>
                    <li>14.50 - Round 5</li>
                    <li>16.00 - Prize Ceremony</li>
                </ul>
                <a href="https://ch.tudelft.nl/events/b93a59a0-029b-49bb-a7b5-16c25759f5f1" target="_blank" rel="noreferrer" className="Button">Tickets</a>
            </div>
            <div className="Title"><h4>Dec</h4></div>
            <div data-num="22" className="Activity">
                <h3>Pub marathon</h3>
                <p>Have you missed the /Pub during corona as much as we have? Now is your time to catch up! Come join us for a full 13 hours in the /Pub filled with entertainment and activities. Lunch, dinner and the neccesary refreshments are provided.</p>
                <a href="https://instagram.com/lucie_wisvch" target="_blank" rel="noreferrer" className="Button Button--beige">Stay posted</a>
            </div>
            <div className="Title"><h4>2022</h4></div>
            <div className="Title"><h4>Mar</h4></div>
            <div data-num="14" className="Activity">
                <h3>Week 2: TBA</h3>
                <p>The activities for the second lustrum week are not announced yet.. Follow us on Instagram to stay posted about all our activities!</p>
                <a href="https://instagram.com/lucie_wisvch" target="_blank" rel="noreferrer" className="Button Button--beige">Stay posted</a>
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