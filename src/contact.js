import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('_READY');
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus('_TRANSMITTING...');

    // Replace placeholders with your actual EmailJS IDs
    emailjs.sendForm(
      'service_i3u3mmn', 
      'template_e07ztbr', 
      form.current, 
      'maYMzkUVuy7snGdrw'
    )
      .then((result) => {
        setStatus('_SUCCESS');
        alert("Data packet received. Protocol complete.");
        e.target.reset();
      }, (error) => {
        setStatus('_ERROR');
        alert("Transmission failed. System error: " + error.text);
      })
      .finally(() => {
        setIsSending(false);
        setTimeout(() => setStatus('_READY'), 5000);
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Me</h2>
        <p>
          Initiating communication protocols. System status: <span className="status-glow">{status}</span>
        </p>
        <div className="contact-details">
          <p><strong>[NODE_EMAIL]:</strong> <a href="mailto:mwangiasford12@gmail.com" className="terminal-link">mwangiasford12@gmail.com</a></p>
        </div>
      </div>

      <div className="contact-form">
        <h3>Secure Transmission</h3>
        <form ref={form} onSubmit={sendEmail}>
          <div className="input-group">
            <label htmlFor="name">&gt; IDENTIFY_NAME:</label>
            <input type="text" id="name" name="name" placeholder="..." required />
          </div>
          <div className="input-group">
            <label htmlFor="email">&gt; RETURN_PATH_EMAIL:</label>
            <input type="email" id="email" name="email" placeholder="..." required />
          </div>
          <div className="input-group">
            <label htmlFor="message">&gt; INPUT_DATA:</label>
            <textarea id="message" name="message" rows="5" placeholder="..." required></textarea>
          </div>
          <button type="submit" disabled={isSending}>
            {isSending ? "_UPLOADING..." : "_TRANSMIT"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;