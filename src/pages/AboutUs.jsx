import React from "react";
import "./AboutUs.css";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <> 
    <div className="aboutus-page">
      <div className="aboutus-content">
      <h1 className="section-title">About Us</h1>
        <section className="aboutus-section">
          <h2>Our Story</h2>
          
          <p>
    Nestled along the scenic coastline,Keansburg Park is a testament to vision, passion, and dedication.
     The park was brought to life by the renowned Gottlieb Groups of Companies, whose dream was to create a world where adventure, laughter, and cherished memories could thrive.
      After five years of meticulous planning and development, Keansburg Park opened its gates, quickly becoming a beloved destination for families and thrill-seekers alike.
     Keansburg Park has been a cornerstone of family fun and adventure for decades. 
    Our journey began with a simple dream: to create a place where people of all ages could escape the everyday and immerse 
    themselves in a world of excitement and joy. From the very first ride to the latest thrilling attraction, we’ve built a legacy 
    rooted in community, laughter, and cherished memories.
  </p>
  <p>
    Over the years, Keansburg Park has evolved while staying true to its roots. What started as a modest collection of rides and games 
    has grown into a sprawling 45-acre wonderland filled with heart-racing roller coasters, splash-worthy water slides, and enchanting 
    experiences around every corner. Each addition to the park reflects our commitment to innovation and our passion for crafting magical 
    moments that last a lifetime.
  </p>
  <p>
    But our story isn't just about the rides — it's about the people. Generations of families have walked through our gates, shared laughter 
    over cotton candy, and created traditions that span lifetimes. Our dedicated staff, many of whom have grown with the park, work tirelessly 
    to ensure every visitor feels like part of our ever-growing family.
  </p>
  <p>
    Today, Keansburg Park stands as a beacon of nostalgia and adventure, proudly continuing the tradition of bringing people together through 
    fun, laughter, and unforgettable memories. Whether you’re here for the thrills, the food, or the family time, we invite you to become part 
    of our story — one ride at a time.
  </p>

        </section>

        <section className="aboutus-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to provide a safe, enjoyable, and magical environment for guests of all ages. 
            We constantly strive to enhance our attractions and deliver exceptional service to ensure every visit 
            is filled with excitement and joy.
          </p>
        </section>

        <section className="aboutus-section contact">
          <h2>Contact Us</h2>
          <p>Have questions or feedback? Reach out to us at 
            <a href="mailto:info@keansburgpark.com" className="email"> info@keansburgpark.com</a>.
          </p>
        </section>
      </div>

      {/* Disclaimer Section */}
      <div className="disclaimer">
        <h3>Disclaimer</h3>
        <p>
          Keansburg Park reserves the right to change attraction availability, operating hours, and ticket prices 
          without prior notice. Safety regulations and park guidelines must be adhered to at all times for the 
          safety of our guests and staff.
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AboutUs;
