// src/components/NextEvent.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useThemeContext } from '../contexts/ThemeContext';
import './NextEvent.css';

const NextEvent: React.FC = () => {
  const { darkMode } = useThemeContext();
  const targetDate = new Date('November 10, 2025 19:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  const scrollToNextEvent = () => {
    const nextEventElement = document.getElementById('event-0');
    if (nextEventElement) {
      nextEventElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <motion.div
      className={`next-event ${darkMode ? 'dark-mode' : 'light-mode'}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
    >
      <motion.h2
        className="countdown-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.6 } }}
      >
        Next Show Countdown
      </motion.h2>
      <motion.div
        className="countdown-display"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.6 } }}
      >
        <div className="time-box">
          <span>{timeLeft.days}</span>
          <p>Days</p>
        </div>
        <div className="time-box">
          <span>{timeLeft.hours}</span>
          <p>Hours</p>
        </div>
        <div className="time-box">
          <span>{timeLeft.minutes}</span>
          <p>Minutes</p>
        </div>
        <div className="time-box">
          <span>{timeLeft.seconds}</span>
          <p>Seconds</p>
        </div>
      </motion.div>
      <motion.button
        className="see-live-btn"
        onClick={scrollToNextEvent}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        See Me Live
      </motion.button>
    </motion.div>
  );
};

export default NextEvent;
