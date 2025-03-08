// src/components/ContactSuccess.tsx
import React from 'react';
import './ContactSuccess.css';

const ContactSuccess: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>Your message has been sent. An email notification has been sent to the comedian regarding your booking request.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ContactSuccess;
