import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import "./Contact.css";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtext">We'd love to hear from you! Reach out anytime.</p>

      <div className="contact-content">
        {/* Left - Contact Info */}
        <div className="contact-info">
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p>Keansburg Park, 45 Acres, NJ</p>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <p>+1 234 567 890</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>info@keansburgpark.com</p>
          </div>
          <div className="social-icons">
            <a href="#"><FiFacebook /></a>
            <a href="#"><FiInstagram /></a>
            <a href="#"><FiTwitter /></a>
            <a href="#"><FiYoutube /></a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

      {/* Google Map */}
      <div className="contact-map">
        <iframe
          title="Keansburg Park Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7856403587263!2d-74.12838218459443!3d40.44088117936239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2545f7f0c5db7%3A0x7fa5b2d87c5d7f5!2sKeansburg%20Amusement%20Park!5e0!3m2!1sen!2sus!4v1648135012119!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;
