import React from 'react';
import '../App.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p className="intro-text">
        Welcome to our platform! We aim to provide high-quality resources and services to improve your experience.
      </p>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          To empower users through easy access to books, resources, and support that promote lifelong learning and development.
        </p>
      </section>

      <section className="team-section">
        <h2>Meet the Team</h2>
        <ul className="team-list">
          <li>👩 Jane Doe - Founder & CEO</li>
          <li>👨 John Smith - CTO</li>
          <li>👩‍💻 Alice Johnson - Lead Developer</li>
        </ul>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Got questions? Reach out via email at <a href="mailto:support@example.com">support@example.com</a>.</p>
      </section>
    </div>
  );
};

export default About;
