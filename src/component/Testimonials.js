import React, { useState } from 'react';

const testimonials = [
  {
    name: "Project Members",
    role: "Developers, SVCET",
    message: "Working with Shaik was an absolute pleasure. Delivered on time and beyond expectations."
  },
  {
    name: "Preetha Gouda",
    role: "Senior Developer",
    message: "Shaik’s problem-solving skills and dedication are impressive."
  },
  {
    name: "Nanisha",
    role: "Data Analyst",
    message: "Collaborating with Shaik in Projects showed great teamwork and coding skills."
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => setIndex((index + 1) % testimonials.length);
  const prevTestimonial = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  const { name, role, message } = testimonials[index];

  return (
    <section className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonial-card">
        <p>"{message}"</p>
        <h4>{name}</h4>
        <small>{role}</small>
      </div>
      <div className="testimonial-controls">
        <button onClick={prevTestimonial} aria-label="Previous testimonial">←</button>
        <button onClick={nextTestimonial} aria-label="Next testimonial">→</button>
      </div>
    </section>
  );
};

export default Testimonials;
