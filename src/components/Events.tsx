// src/components/Events.tsx
import React from 'react';
import './Events.css';

const Events: React.FC = () => {
  return (
    <section className="events">
      <h2>Upcoming Events</h2>
      <ul>
        <li>Event 1 - Date/Time</li>
        <li>Event 2 - Date/Time</li>
      </ul>
    </section>
  );
};

export default Events;
