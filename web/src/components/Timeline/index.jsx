import React from 'react';
import './index.scss';

const ACTIVITIES_DATA = [
    // sep
    { type: 'month', value: 'SEPTEMBER' },
    {
        type: 'day',
        items: [{ 
            date: '10 Sep', 
            title: 'Abseilen', 
            description: 'Description',
            ticketLink: 'https://ch.tudelft.nl/'
        }]
    },

    // oct
    { type: 'month', value: 'OCTOBER' },
    {
        type: 'day',
        items: [{ 
            date: '6 Oct', 
            title: 'Sumo Chess Tournament', 
            description: 'Description',
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
                description: 'Description',
                ticketLink: 'https://ch.tudelft.nl/'
            },
            { 
                date: '16 Nov', 
                title: 'Running Dinner', 
                description: 'Description',
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
                description: 'Description',
                ticketLink: 'https://ch.tudelft.nl/'
            },
            { 
                date: '17 Nov', 
                title: 'Sip and Paint', 
                description: 'Description',
                ticketLink: 'https://ch.tudelft.nl/'
            }
        ]
    },
    {
        type: 'day',
        items: [{ 
            date: '18 Nov', 
            title: 'Company Drinks', 
            description: 'Description',
            ticketLink: 'https://ch.tudelft.nl/'
        }]
    },
    {
        type: 'day',
        items: [
            { 
                date: '19 Nov', 
                title: 'Workshop Company', 
                description: 'Description',
                ticketLink: 'https://ch.tudelft.nl/'
            },
            { 
                date: '19 Nov', 
                title: 'Cantus with Live Band', 
                description: 'Description',
                ticketLink: 'https://ch.tudelft.nl/'
            }
        ]
    },
    {
        type: 'day',
        items: [{ 
            date: '20 Nov', 
            title: 'External Day', 
            description: 'Description',
            ticketLink: 'https://ch.tudelft.nl/'
        }]
    },

    // dec
    { type: 'month', value: 'DECEMBER' },
    {
        type: 'day',
        items: [{ 
            date: '3 Dec', 
            title: 'AkCie Collab for Sinterklaas', 
            description: 'Description',
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
            description: 'Description',
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
            description: 'Description',
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
                description: 'Description',
                ticketLink: 'https://ch.tudelft.nl/'
        }]
    },
    {
        type: 'day',
        items: [{ 
            date: '16 Mar', 
            title: 'Workshop Company', 
            description: 'Description',
            ticketLink: 'https://ch.tudelft.nl/'
        }]
    },
    {
        type: 'day',
        items: [{ 
            date: '17 Mar', 
            title: 'Sports Day', 
            description: 'Description',
            ticketLink: 'https://ch.tudelft.nl/'
        }]
    },
    {
        type: 'day',
        items: [{ 
            date: '18 Mar', 
            title: 'Pool Party', 
            description: 'Description',
            ticketLink: 'https://ch.tudelft.nl/'
        }]
    },
    {
        type: 'day',
        items: [{ 
            date: '19 Mar', 
            title: 'Honorary Faculty Members Dinner', 
            description: 'Description',
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
            description: 'Description',
            ticketLink: 'https://ch.tudelft.nl/'
        }]
    },

    // may
    { type: 'month', value: 'MAY' },
    {
        type: 'day',
        items: [{ 
            date: '12 May', 
            title: 'Kanoeing', 
            description: 'Description',
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
            description: 'Description',
            ticketLink: 'https://ch.tudelft.nl/'
        }]
    },
    {
        type: 'day',
        items: [{ 
            date: '10 Jun', 
            title: 'SjaarCie Collab', 
            description: 'Description',
            ticketLink: 'https://ch.tudelft.nl/'
        }]
    },
    {
        type: 'day',
        items: [{ 
            date: '25 Jun', 
            title: 'Lustrum Finale: The Grand Highlight Party', 
            description: 'Description',
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