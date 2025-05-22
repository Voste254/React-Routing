import React from 'react';
import '../App.css'; 

const Home = () => {
  return (
    <div className="home-page">
            
      <header className="home-header">
        <h1>Home Page</h1>
        <p>Welcome to the home page of our React app.</p>
      </header>

      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Fast and responsive design</li>
          <li>Reusable components</li>
          <li>Easy routing integration</li>
        </ul>
      </section>

      <section className="home-cards">
        <div className="card">
          <h3>Getting Started</h3>
          <p>Learn how to build and scale your React apps.</p>
        </div>
        <div className="card">
          <h3>Documentation</h3>
          <p>Access full documentation and guides for developers.</p>
        </div>
        <div className="card">
          <h3>Community</h3>
          <p>Join our React community and get help from other devs.</p>
        </div>
      </section>
    
    </div>
  );
};

export default Home;
