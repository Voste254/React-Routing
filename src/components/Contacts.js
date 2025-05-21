import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="intro-text">We'd love to hear from you. Reach out through any of the ways below.</p>

      <section className="contact-details">
        <h2>Our Office</h2>
        <p>123 Wellness Avenue,<br />Nairobi, Kenya</p>
        <p>Email: <a href="mailto:info@wellnesscentre.com">info@wellnesscentre.com</a></p>
        <p>Phone: +254 712 345 678</p>
      </section>

      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="social-media">
        <h2>Follow Us</h2>
        <ul>
          <li><a href="/">Facebook</a></li>
          <li><a href="/">Instagram</a></li>
          <li><a href="/">Twitter</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
