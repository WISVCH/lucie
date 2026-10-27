import React from 'react';
import { Element } from 'react-scroll';
import './index.scss'; 

export default function Battle() {
    const participants = [
        { name: 'Julian K.', points: 14 },
        { name: 'Vic V.', points: 12 },
        { name: 'Jaari vd K.', points: 10 },
        { name: 'Julien L.', points: 10 },
        { name: 'Iker J.', points: 9 },
        { name: 'Amir D.', points: 8 },
        { name: 'Dylan S.', points: 7 },
        { name: '-', points: 0 },
        { name: '-', points: 0 },
        { name: '-', points: 0 },
        { name: '-', points: 0 },
        { name: '-', points: 0 },
        { name: '-', points: 0 },
        { name: '-', points: 0 },
    ];

    return (
        <section id="battle">
            <Element name="battle"></Element>

            <div className="Block">
                {/* Information */}
                <h2>14th Activities Battle</h2>
                <p>
                    Every month, on the 14th, there is an ongoing game or mini-competition organized by the LuCie to honor our 14th Lustrum! 
                    For this, you are able to earn points by participating in monthly activities.
                    At the end of the year the top 3 players will receive a /Pub card worth 50 euros, 30 euros, and 20 euros.
                    You can find more information about the 14th battle and how to earn points 
                    <a href="https://docs.google.com/document/d/1ScaYsTjGHg4zIg56uJrrDUkuLcd5_LxAWCm_WyfZdw0/edit?tab=t.0#heading=h.o3r71uk1slab" 
                    target="_blank" rel="noopener noreferrer"> here</a>.
                    Interested and want to participate? You can sign up <a href="https://wisv.ch/signup14th" target="_blank" rel="noopener noreferrer"> here</a>.
                    And who knows, maybe you will see your name on the leaderboard soon!!
                </p>

                {/* Side-by-side grid below the text */}
                <div className="Ongoing-Games-Layout">
                    
                    {/* Activity cards */}
                    <div className="Monthly-Grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
                        <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.250)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <div><strong className="text-highlight-lavender">14 Oct</strong></div>
                            <span>Pool Tournament</span>
                        </div>

                        <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.250)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <div><strong className="text-highlight-lavender">14 Nov</strong></div>
                            <span>Album Release</span>
                        </div>

                        <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.250)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <div><strong className="text-highlight-lavender">14 Dec</strong></div>
                            <span>Baking Competition</span>
                        </div>

                        <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.250)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <div><strong className="text-highlight-lavender">14 Jan</strong></div>
                            <span>Puzzle Competition</span>
                        </div>

                        <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.250)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <div><strong className="text-highlight-lavender">14 Feb</strong></div>
                            <span>Valentines Special</span>
                        </div>

                        <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.250)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <div><strong className="text-highlight-lavender">14 Mar</strong></div>
                            <span>Promotion Competition</span>
                        </div>

                        <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.250)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <div><strong className="text-highlight-lavender">14 Apr</strong></div>
                            <span>HotDog Competition</span>
                        </div>

                        <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.250)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <div><strong className="text-highlight-lavender">14 May</strong></div>
                            <span>14 Floors</span>
                        </div>

                        <div className="Game-Card" style={{ background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.250)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <div><strong className="text-highlight-lavender">14 Jun</strong></div>
                            <span>Coloring Contest</span>
                        </div>
                    </div>

                    {/* Leaderboard */}
                    <div className="Leaderboard-Card">
                        <h3>Top 14 Leaderboard</h3>
                        <ol className="Leaderboard-List">
                            {participants.map((p, index) => {
                                const rankClass = index < 3 ? `top-3 rank-${index + 1}` : '';
                                return (
                                    <li className={`Leaderboard-Item ${rankClass}`} key={index}>
                                        <span className="Rank">{index + 1}.</span>
                                        <span className="Name">{p.name}</span>
                                        <span className="Points">{p.points} pts</span>
                                    </li>
                                );
                            })}
                        </ol>
                    </div>

                </div>
            </div>
        </section>
    );
}
