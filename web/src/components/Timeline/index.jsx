import React from 'react';
import './index.scss';

const ACTIVITIES_DATA = [
    // sep
    { type: 'month', value: 'SEPTEMBER' },
    {
        type: 'day',
        items: [{ 
            date: '10 Sep', 
            title: 'Opening Party', 
            description: 'Ready for the new study year? Missed all your friends? Join us at the special Lustrum opening party!! ' + 
            'With multiple DJ’s and awesome dance moves, the party in the Steck is going to be one to remember! ' +
            'Bring your +1’s with you for this one, as it’s guaranteed to be a blast.',
            ticketLink: 'https://wisv.ch/party'
        }]
    },
    {
        type: 'day',
        items: [{ 
            date: '14 Sep', 
            title: 'Abseilen', 
            description: 'What???? Asbeiling!! From where? The EWI tower!!! Who? You! Scary? Definitely! Epic? Of course! ',
            ticketLink: 'https://wisv.ch/abseil'
        }]
    },

    // oct
    { type: 'month', value: 'OCTOBER' },
    {
        type: 'day',
        items: [{ 
            date: '6 Oct', 
            title: 'Sumo Chess Tournament', 
            description: 'Ready for a crazy night in the \\Pub. Join this event where you can combine your 2 favourite activities: ' + 
            'sumo wrestling and chess. With shorts round of wrestling in sumo suits alternated with speed chess. ' +
            '2 completely different sports, only 1 winner!',
            ticketLink: 'https://ch.tudelft.nl/'
        }]
    },

    // week 1
    { type: 'header', value: 'Lustrum Week 1' },
    { type: 'month', value: 'NOVEMBER' },
    {
        type: 'day',
        items: [
            { 
                date: '16 Nov', 
                title: 'Owl Show', 
                description: 'Oehooeeeee. Oeehoeeee. Are you an owl? I hope not. Have you ever seen one? I think so. ' +
                'Close by? Probably not. Want to? Duhhhh. See you at this event.',
                ticketLink: 'https://ch.tudelft.nl/'
            },
            { 
                date: '16 Nov', 
                title: 'Running Dinner', 
                description: 'Do you enjoy running? Not necessary. Do you enjoy eating? Necessary. Do you enjoy conversating? ' +
                'Also necessary. At this event you will eat 3 delicious courses at three different houses in Delft. ' +
                'Between each course you will cycle with ≥1 person to your next course! ',
                ticketLink: 'https://ch.tudelft.nl/'
            }
        ]
    },
    {
        type: 'day',
        items: [
            { 
                date: '17 Nov', 
                title: 'Lunch Lecture Company', 
                description: 'Join us for a delicious lunch, while following a lecture from a company. Stay tuned for the speaker of this lunch lecture.',
                ticketLink: 'https://ch.tudelft.nl/'
            },
            { 
                date: '17 Nov', 
                title: 'Sip and Paint', 
                description: 'Another event where you can combine two lovely activities. Everyone can join this event. '+
                'Does not matter if you can paint or not. Does not matter if you can sip or not. '+
                'Once you start combining, everything becomes easier. ',
                ticketLink: 'https://ch.tudelft.nl/'
            }
        ]
    },
    {
        type: 'day',
        items: [{ 
            date: '18 Nov', 
            title: 'Company Drinks', 
            description: 'Whether you’re actively job hunting or simply want to network with cool tech companies, ' +
            'join us for Company Drinks! It’s a great chance to chat, make connections, and see what’s out there.',
            ticketLink: 'https://ch.tudelft.nl/'
        }]
    },
    {
        type: 'day',
        items: [
            { 
                date: '19 Nov', 
                title: 'Workshop Rewire', 
                description: 'Follow a workshop at Rewire. Rewire is a tech company focussed on data & AI.' +
                'Join our free workshop for an engaging and hands-on learning experience!',
                ticketLink: 'https://ch.tudelft.nl/'
            },
            { 
                date: '19 Nov', 
                title: 'Cantus with Live Band', 
                description: 'Mama, just killed a man. Put a gun against his head, pulled my trigger, now he’s dead. ' +
                'Mama, life had just begun. But now I’ve gone and thrown it all away. Enjoy this song? ' +
                'Then keep singing and join us at the cantus with the live band!',
                ticketLink: 'https://ch.tudelft.nl/'
            }
        ]
    },
    {
        type: 'day',
        items: [{ 
            date: '20 Nov', 
            title: 'External Day', 
            description: 'Do you always get questions from your siblings and friends on what Delft is like? ' +
            'Well then now it’s time to show them! Bring all your siblings to this special day. ' +
            'A part of the activities will be at EWI and the \\Pub. Afterwards we will go bowling in Delft! ',
            ticketLink: 'https://ch.tudelft.nl/'
        }]
    },

    // jan
    { type: 'month', value: 'JANUARY' },
    {
        type: 'day',
        items: [{ 
            date: '7 Jan', 
            title: 'Cabaret Night', 
            description: 'Why was 6 afraid of 7? Because 7 8 9. Why did 7 eat 9? ' +
            'Because you are supposed to eat 3 squared meals a day. Interested in more fun jokes and great comedians? ' +
            'Join this special cabaret night in the \\Pub hosted by the Delft Improv Group. ',
            ticketLink: 'https://ch.tudelft.nl/'
        }]
    },

    // feb
    { type: 'month', value: 'FEBRUARY' },
    {
        type: 'day',
        items: [{ 
            date: '11 Feb', 
            title: 'Beer Tasting', 
            description: 'Think you know your beers, or just love a cold one? Join us for an evening of great vibes, ' +
            'discovering your next favorite pint, and tasting a fantastic selection of craft brews ' +
            '(including alcohol-free options)! Grab a glass and cheers with us!',
            ticketLink: 'https://ch.tudelft.nl/'
        }]
    },

    // week 2
    { type: 'header', value: 'Lustrum Week 2' },
    { type: 'month', value: 'MARCH' },
    {
        type: 'day',
        items: [{ 
                date: '15 Mar', 
                title: 'Opening and Reception', 
                description: 'Christiaan Huygens birthday is on March 16th, and we’re kicking off Lustrum Week with a celebration! ' +
                'Swing by the reception for free drinks, congratulate the board on this major milestone, and toast to the occasion with us.',
                ticketLink: 'https://ch.tudelft.nl/'
        }]
    },
    {
        type: 'day',
        items: [{ 
            date: '16 Mar', 
            title: 'Workshop Transtrend', 
            description: 'Follow a workshop at Transtrend. Transtrend is an investment manager that focusses on systematic trading strategies.' +
            'Come join us for a fun, free, and educational workshop!',
            ticketLink: 'https://ch.tudelft.nl/'
        }]
    },
    {
        type: 'day',
        items: [{ 
            date: '17 Mar', 
            title: 'Sports Day', 
            description: 'Do you remember apen kooien from secondary school? We will play this and much more at the sportsday. ' +
            'Bring your special lustrum sports shirt ;)',
            ticketLink: 'https://ch.tudelft.nl/'
        }]
    },
    {
        type: 'day',
        items: [{ 
            date: '18 Mar', 
            title: 'Pool Party', 
            description: 'Join one of your highlights of the year! Not just any party, but a real pool party! ' +
            'Go crazy on the slide, in the hot tub, and in the shallow pool. ' +
            'Together with all our friends, this party is definitely a wet one :)',
            ticketLink: 'https://ch.tudelft.nl/'
        }]
    },
    {
        type: 'day',
        items: [{ 
            date: '19 Mar', 
            title: 'Members of Merit Dinner', 
            description: 'A special night dedicated entirely to the Members of Merit and Honorary Members of our association! ' +
            'Please join us for the Members of Merit Dinner for an evening of warm company, excellent food, ' +
            'and celebrating your incredible contributions to our association.',
            ticketLink: 'https://ch.tudelft.nl/'
        }]
    },

    // apr
    { type: 'month', value: 'APRIL' },
    {
        type: 'day',
        items: [{ 
            date: '22 Apr', 
            title: 'Stock Exchange', 
            description: 'As you all are great mathematicians and computer scientists, you must know how to properly invest, ' +
            'exchange and predict the prices of you drinks! At this event you can do this perfectly. ' +
            'Choose the perfect timing to buy your drinks when they’re at their lowest point!',
            ticketLink: 'https://ch.tudelft.nl/'
        }]
    },

    // may
    { type: 'month', value: 'MAY' },
    {
        type: 'day',
        items: [{ 
            date: '12 May', 
            title: 'Canoeing', 
            description: 'I won’t say what we’re going to do, but pack your swim suit, your canoe and your paddles, ' +
            'cause we’re going canoeing! Okay, you can leave your canoe and paddles at home, we’ll take care of them. ' +
            'We’re still going canoeing!!!!!',
            ticketLink: 'https://ch.tudelft.nl/'
        }]
    },

    // jun
    { type: 'month', value: 'JUNE' },
    {
        type: 'day',
        items: [{ 
            date: '3 Jun', 
            title: 'Beach Day', 
            description: 'If you take the sea, and you take land, and you join those two words: you get sand! ' +
            'That’s right, we are going to the beach! We made a deal with the weathergods that the sun will shine, ' +
            'so pack your sunglasses and sunscreen!',
            ticketLink: 'https://ch.tudelft.nl/'
        }]
    },
    {
        type: 'day',
        items: [{ 
            date: '25 Jun', 
            title: 'EWI Festival', 
            description: 'There are only 2 faculty festivals in Delft: BkBeats and IOFestival. But wait: this year is different! ' +
            'This year is the Lustrum of WISV Christiaan Huygens. Prepare your partyshoes, it’s time for the EWI Festival!!',
            ticketLink: 'https://ch.tudelft.nl/'
        }]
    }
];

const Timeline = () => {
    return (
        <div className="Timeline">
            {ACTIVITIES_DATA.map((element, index) => {
                if (element.type === 'year' || element.type === 'month') {
                    return (
                        <div key={index} className="Title">
                            <h4>{element.value}</h4>
                        </div>
                    );
                }

                if (element.type === 'header') {
                    return (
                        <div key={index} className="Timeline-SectionHeader">
                            <h2>{element.value}</h2>
                        </div>
                    );
                }

                if (element.type === 'footer') {
                    return (
                        <div key={index} className="Timeline-SectionFooter">
                            <span>{element.value}</span>
                        </div>
                    );
                }

                return (
                    <div key={index} className="Day">
                        {element.items && element.items.map((activity, actIndex) => (
                            <div key={actIndex} className="Activity">
                                <div className="Activity-Content">
                                    {activity.date && (
                                        <div className="Date-Marker">{activity.date}</div>
                                    )}
                                    <h3>{activity.title}</h3>
                                    <p>{activity.description}</p>
                                </div>
                                
                                <div className="Activity-Actions">
                                    <a href={activity.ticketLink} target="_blank" rel="noreferrer" className="Timeline-Button">
                                        Get Tickets
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

export default Timeline;