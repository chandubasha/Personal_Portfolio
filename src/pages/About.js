import React from 'react';
import Testimonials from '../components/Testimonials';
const About = () => (
  <section className="about-section">
    <h2>About Me</h2>
    <div className="about-container">
      <p>
        I’m <strong>Shaik Chandu Basha</strong>, a passionate developer based in Bengaluru. Completed B.Tech in IT, I specialize in Data Analysis, Frontend development and love to solving real-world problems with technologies.
      </p>
      <div className="about-grid">
        <div>
          <h3>🎓 Education</h3>
          <ul>
            <li><strong>B.Tech (IT):</strong> SVCET, CGPA 8.6</li>
            <li><strong>Intermediate:</strong> 91%</li>
            <li><strong>SSC:</strong> 9.8 CGPA</li>
          </ul>
        </div>
        <div>
          <h3>🛠 Tech Stack</h3>
          <ul>
            <li>Python, SQL, Libraries(Pandas, Numpy, Matplotlib)</li>
            <li>ReactJS, JavaScript, HTML, CSS</li>
            <li>Git, VS Code, Google Colab</li>
          </ul>
        </div>
        <div>
          <h3>🎯 Interests</h3>
          <ul>
            <li>Problem Solving</li>
            <li>Desiging</li>
            <li>Analysis of Data</li>
            <li>Application Development</li>
          </ul>
        </div>
      </div>
    </div>
    <Testimonials />
  </section>
  
);

export default About;
