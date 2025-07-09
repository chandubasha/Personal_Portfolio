import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_eu6cxh6',      // Replace with your EmailJS service ID
      'template_46dutii',     // Replace with your EmailJS template ID
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      '9wiGRoTW3UTm9CzVV'       // Replace with your EmailJS public key
    )
    .then(() => {
      alert('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
