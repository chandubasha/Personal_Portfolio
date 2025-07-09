import React from 'react';

const Resume = () => (
  <section className="resume-section">
    <h2>Resume</h2>
    <p>Download my resume using the button below:</p>
    <a href="/assets/resume.pdf" download className="resume-download">
      📄 View / Download Resume
    </a>
  </section>
);

export default Resume;
