import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { FaStar } from "react-icons/fa";
import Footer from "../components/Footer";

const Home = () => {
  const testimonials = [
    {
      quote: "Best amusement park ever! My kids loved every moment!",
      name: "Miriam W.",
      rating: 5,
    },
    {
      quote: "Amazing rides, delicious food, and wonderful staff!",
      name: "Trevor L.",
      rating: 4,
    },
    {
      quote: "An unforgettable experience! Highly recommended.",
      name: "Nancy M.",
      rating: 5,
    },
    {
      quote: "Fantastic family experience. Will definitely come back!",
      name: "John D.",
      rating: 4,
    },
    {
      quote: "So much fun! Great rides and friendly staff.",
      name: "Samantha P.",
      rating: 5,
    },
    {
      quote: "The kids had a blast. Highly recommended for families!",
      name: "Rachel T.",
      rating: 4,
    },
    {
      quote: "A perfect getaway spot with thrilling rides.",
      name: "Chris B.",
      rating: 5,
    },
    {
      quote: "Best water park experience ever!",
      name: "Olivia G.",
      rating: 4,
    },
    {
      quote: "Worth every penny. Awesome rides!",
      name: "Liam K.",
      rating: 5,
    },
    {
      quote: "Great food and even better roller coasters!",
      name: "Sophia J.",
      rating: 5,
    },
    {
      quote: "Perfect spot for a weekend adventure.",
      name: "Michael W.",
      rating: 4,
    },
    {
      quote: "Wonderful time with the kids. We’ll be back!",
      name: "Emily R.",
      rating: 5,
    },
  ];

  return (
    <>
      <div className="homepage">
        <div className="overlay"></div> {/* Dark overlay for readability */}
        <div className="content">
          <h1>Welcome to Keansburg Park</h1>
          <p>Experience thrilling rides, fun attractions, and entertainment for the whole family!</p>
          <Link to="/tickets" className="btn btn-warning btn-lg">Book Your Tickets</Link>
        </div>
      </div> 

      <div className="container text-center mt-5">
        {/* Featured Attractions */}
        <h2 className="section-title">Featured Attractions</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card">
              <img src="/Images/rollercoster.jpg" className="card-img-top" alt="Roller Coaster" />
              <div className="card-body">
                <h5 className="card-title">Thrill Rides</h5>
                <p className="card-text">Experience the most exhilarating roller coasters!</p>
                <Link to="/attractions" className="btn btn-primary">View More</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="/Images/waterpark.jpg" className="card-img-top" alt="Water Park" />
              <div className="card-body">
                <h5 className="card-title">Water Park</h5>
                <p className="card-text">Cool off in our amazing water slides and pools.</p>
                <Link to="/attractions" className="btn btn-primary">View More</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="/Images/kidszone.jpg" className="card-img-top" alt="Kids Zone" />
              <div className="card-body">
                <h5 className="card-title">Kids Zone</h5>
                <p className="card-text">Fun, Exciting and safe rides for kids of all ages!</p>
                <Link to="/attractions" className="btn btn-primary">View More</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <section className="testimonials mt-5">
          <h2 className="section-title">What Our Visitors Say</h2>
          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {testimonials.map((testimonial, index) => (
                index % 3 === 0 && (
                  <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <div className="row justify-content-center">
                      {testimonials.slice(index, index + 3).map((item, i) => (
                        <div key={i} className="col-md-4 mb-4">
                          <div className="testimonial-card">
                            <p className="testimonial-quote">"{item.quote}"</p>
                            <div className="rating">
                              {[...Array(item.rating)].map((_, starIndex) => (
                                <FaStar key={starIndex} color="#fdd835" />
                              ))}
                            </div>
                            <p className="testimonial-name">- {item.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

  {/* Newsletter Section */}
  <section className="newsletter-section mt-5">
          <h2 className="section-title">Join Our Newsletter</h2>
          <p>Stay updated with the latest news, offers, and events at Keansburg Park!</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn btn-warning">Subscribe</button>
          </form>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default Home;
