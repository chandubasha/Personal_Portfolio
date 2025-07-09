import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => (
  <section className="home-hero">
    <div className="home-text">
    <div className="home-image">
        <img src="/Profile.jpg" alt="Shaik Chandu Basha" /> {/* ✅ public folder usage */}
      </div>
      <h1>Hello, I'm <span className="name-highlight">Shaik Chandu Basha</span></h1>
      <h2>Data Analyst | Frontend Developer | Python Developer</h2>
      <p>
      Data Analyst with a strong foundation in data analysis, data, cleaning, visualization, and interpretation. Proficient in Python and statistical analysis using Matplotlib, Numpy, and Pandas.
      I design and build beautiful, performante web applications using modern technologies like ReactJS, JavaScript, and Node.js.
      </p>
      <div className="home-buttons">
        <Link to="/projects"><button className="primary">View Projects</button></Link>
        <Link to="/contact"><button className="secondary">Hire Me</button></Link>
      </div>
     
    </div>
  </section>
);

export default Home;
