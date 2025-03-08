// src/components/Events.tsx
import React from 'react';
import { motion } from 'framer-motion';
import './Events.css';
import NextEvent from './NextEvent';

const Events: React.FC = () => {
  const eventsData = [
    {
      title: 'Citizen Kane Live at The Comedy Cellar',
      date: 'June 10, 2025',
      time: '7:00 PM',
      venue: 'The Comedy Cellar, New York',
      website: 'https://citizenkanenyc.example.com',
      tickets: 'https://tickets.example.com/citizenkaneNYC',
      description: 'Join Citizen Kane for an unforgettable night of stand-up comedy in the heart of NYC.',
      image: '/images/event_photos/event1.png'
    },
    {
      title: 'Citizen Kane Special - Night of Laughs',
      date: 'July 5, 2025',
      time: '8:30 PM',
      venue: 'Laugh Factory, Los Angeles',
      website: 'https://citizenkaneLA.example.com',
      tickets: 'https://tickets.example.com/citizenkaneLA',
      description: 'Experience Citizen Kane live with brand-new material and special guest performers.',
      image: '/images/event_photos/event2.png'
    },
    {
      title: 'Holiday Comedy Bash with Citizen Kane',
      date: 'August 20, 2025',
      time: '9:00 PM',
      venue: 'Punch Line, San Francisco',
      website: 'https://holidaycomedybash.example.com',
      tickets: 'https://tickets.example.com/holidaycomedybash',
      description: 'Celebrate the holiday season with Citizen Kane and his hilarious festive show.',
      image: '/images/event_photos/event3.png'
    },
    {
      title: 'Citizen Kane New Year Extravaganza',
      date: 'Septmeber 1, 2026',
      time: '10:00 PM',
      venue: 'Gotham Comedy Club, New York',
      website: 'https://citizenkanenewyear.example.com',
      tickets: 'https://tickets.example.com/citizenkanenewyear',
      description: 'Ring in the new year with Citizen Kane and a night of uproarious laughter.',
      image: '/images/event_photos/event4.png'
    },
    {
      title: 'Citizen Kane International Tour Kickoff',
      date: 'February 14, 2026',
      time: '8:00 PM',
      venue: 'The Comedy Store, London',
      website: 'https://citizenkaneinttour.example.com',
      tickets: 'https://tickets.example.com/citizenkaneinttour',
      description: 'Witness the start of Citizen Kane’s international tour with a show packed with surprises.',
      image: '/images/event_photos/event5.png'
    }
  ];

  return (
    <motion.section
      id="events"
      className="events"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }}
    >
      <NextEvent />
      <h2>Upcoming Events</h2>
      <motion.ul
        className="events-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.1
            }
          }
        }}
      >
        {eventsData.map((event, index) => (
          <motion.li
            className="event-item"
            id={`event-${index}`}
            key={index}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <div className="event-content">
              <img src={event.image} alt={event.title} className="event-image" />
              <h3>{event.title}</h3>
              <p>{event.date} | {event.time}</p>
              <p>{event.venue}</p>
              <p>{event.description}</p>
              <p className="event-extra">Expect guest appearances and behind-the-scenes stories!</p>
              <div className="event-links">
                <a href={event.website} target="_blank" rel="noopener noreferrer" className="event-link site-link">Official Site</a>
                <a href={event.tickets} target="_blank" rel="noopener noreferrer" className="event-link tickets-link">Buy Tickets</a>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
};

export default Events;
