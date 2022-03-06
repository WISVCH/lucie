import React from 'react';

import './index.scss'
const Timeline = () => {
    return (
        <div className="Timeline">
            <div className="Title"><h4>2022</h4></div>
            <div className="Title"><h4>Mar</h4></div>
            <div data-num="14" className="Activity">
                <h3>Lustrum Debate</h3>
                <p>If you want to learn how to defend yourself, get over your stage fright or if you want to just have a fun time with your friends and talk about current subjects, the lustrum debate is something for you!<br/>
                At the debate you and your teammates are going to play against another team and perform a debate.<br/>
                Together with professional judges and game masters you can learn and gain experience in debating about current and hot topics!</p>
                <a href="https://ch.tudelft.nl/events/78850fe7-6ecb-47e0-a3b6-4e3e484f8e7c" tbuttonrget="_blank" rel="noreferrer" className="Button">Tickets</a>
            </div>

            <div className="Day">
            <div data-num="15" className="Activity">
                    <h3>Lustrum Lecture: Andries Tunru</h3>
                    <p>The speaker of our second lustrum lecture is Andries Tunru! Andries is a comedian known from tv-shows such as <i>Lingo</i> and <i>De Slimste Mens</i>. Want to hear how he created an algorithm to win the game show Lingo? Come listen to him while enjoying a sandwich!</p>
                    <a href="https://ch.tudelft.nl/events/9dd27160-158a-4a38-ab49-ab1261a6c71f" target="_blank" rel="noreferrer" className="Button">Tickets</a>
                </div>
                <div className="Activity">
                    <h3>Lustrum Darts</h3>
                    <p>During the darts tournament you can show off your darts skills (if you have them) and compete against fellow CH members. The tournament structure depends on the number of participants, but we start with an Around the World game in the group phases. 8 winners of the group phases can take part in the quarter final, where they will play a 301 or 501 game. The semifinals and final are also a 301 or 501 game.</p>
                    <p>Darts experience is not required, before the tournament starts there is some time to practice throwing darts. When you are done playing, it is possible to watch other games and drink a soda or a beer. Every participants gets 3 free drinks. </p>
                    <a href="https://ch.tudelft.nl/events/f3d4441e-db2f-4f86-a538-1005f56e2c38" target="_blank" rel="noreferrer" className="Button">Tickets</a>
                </div>
            </div>
            <div data-num="16" className="Activity">
                <h3>Lustrum Workshop</h3>
                <p>What are containers, why are containers practical, and how are applications placed in containers? You can become wiser on these topics when Netcompany invites you to a programming workshop on March 16th, where these themes are in focus. The workshop will give you a basic understanding of containerization and will teach you how to containerize your own applications using Docker and Docker Compose. The workshop is adapted to all levels.</p>
                <p>We start at 13.00. Here Netcompany will introduce you to the case, after which you and your team will get started. We end the evening with a review of the case with an example of the result.</p>
                <a href="https://ch.tudelft.nl/events/2fd63895-312d-4e8c-96e1-a64a9ccc4393" target="_blank" rel="noreferrer" className="Button">Tickets</a>
            </div>
            <div className="Day">
                <div data-num="17" className="Activity">
                    <h3>Lustrum Danceworkshop</h3>
                    <p>Are you done with having dance skills like you are a wooden plank? Then we have just the activity for you! On Thursday evening, we will have a salsa dancing workshop given by the student dance association SoSalsa themselves. The workshop will be given in the Bierfabriek.</p>
                    <a href="https://ch.tudelft.nl/events/2443eaaa-ac7f-46ba-97da-b3f515a9a6a0" target="_blank" rel="noreferrer" className="Button">Tickets</a>
                </div>
                <div className="Activity">
                    <h3>Lustrum Cocktailparty</h3>
                    <p>A lustrum classic; On Thursday evening we will have the traditional lustrum cocktail party in the Bierfabriek. On this evening you will get a variety of cocktails while enjoying some music! First there will be a DJ who will be playing some songs to which your hips will not lie... After that we have two more DJ duos who will spin some tunes and even a dance performance in between!</p>
                    <a href="https://ch.tudelft.nl/events/bcd8da87-51b3-4893-94c4-b5a38edc6672" target="_blank" rel="noreferrer" className="Button">Tickets</a>
                </div>
            </div>
            <div data-num="18" className="Activity">
                <h3>Lustrum Tikibad</h3>
                <p>To conclude our second lustrum week we will be doing a swimming pool trip to the tropical Tikibad. Buy a ticket and join us from Delft where we will be taking a Kwibus to Wassenaar to slide down 21 different water slides and much more! Afterwards the Kwibus will take you back to Delft. </p>
                <a href="https://ch.tudelft.nl/events/679b655b-5e59-4567-946a-d0509bd3f36e" target="_blank" rel="noreferrer" className="Button">Tickets</a>
            </div>
            <div className="Line Line--bl Line--pink Ball--br Ball--pink"></div>
        </div>
    );
};

export default Timeline;