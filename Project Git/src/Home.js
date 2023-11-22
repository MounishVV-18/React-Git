import React from 'react';
import './Home.css';
import Link from '@mui/material/Link';


const Home = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo"></div>
          <ul className="nav-links">
          
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>

          </ul>
        </div>
      </nav>

      <div className='maincont'>
      <header className="header">
        <h1>FundFlare</h1>
        <p>Where Finances Meet Colors</p>
      </header>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Start Managing Your Finances Today!</h2>
          <p>Unlock the Power of Colorful Accounting.</p>
          <a className="cta-button" href='/log'>Get started</a>
        </div>
      </section>
      </div>
     
    </div>
  );
};

export default Home;