import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Attractions.css";
import rollerCoaster from "../assets/roller.jpg";
import ferrisWheel from "../assets/rides.jpg";
import waterSlide from "../assets/waterslides.jpg";
import hauntedHouse from "../assets/haunted.jpg";
import kidsZone from "../assets/kidszone.jpg";
import foodCourt from "../assets/foodcourt.jpg";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery6 from "../assets/gallery6.jpg";
import gallery7 from "../assets/gallery7.jpg";
import gallery8 from "../assets/gallery8.jpg";
import Footer from "../components/Footer";



const Attractions = () => {
    const galleryImages = [gallery1, gallery2, gallery4, gallery6, gallery7, gallery8,];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: { slidesToShow: 2 },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 1 },
          },
        ],
      };


  return (
    <>
    <div className="attractions-content"> 
    <div className="attractions-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Explore Our Attractions</h1>
        <p>Thrilling rides, family fun, and unforgettable experiences await!</p>
      </div>

      {/* Attractions Grid */}
      <div className="attractions-grid">
        <div className="attraction-card">
          <img src={rollerCoaster} alt="Roller Coaster" />
          <h3>🎢 Extreme Roller Coaster</h3>
          <p>Feel the adrenaline rush with high-speed loops and drops!</p>
        </div>

        <div className="attraction-card">
          <img src={ferrisWheel} alt="Ferris Wheel" />
          <h3>🎡 Ferris Wheel</h3>
          <p>Enjoy breathtaking views from the top!</p>
        </div>

        <div className="attraction-card">
          <img src={waterSlide} alt="Water Slide" />
          <h3>💦 Water Slides</h3>
          <p>Cool off with exciting twists and turns in our water park!</p>
        </div>

        <div className="attraction-card">
          <img src={hauntedHouse} alt="Haunted House" />
          <h3>👻 Haunted House</h3>
          <p>Enter if you dare! Spooky surprises await.</p>
        </div>

        <div className="attraction-card">
          <img src={kidsZone} alt="Kids Zone" />
          <h3>🧸 Kids Zone</h3>
          <p>Safe and fun rides for the little ones.</p>
        </div>

        <div className="attraction-card">
          <img src={foodCourt} alt="Food Court" />
          <h3>🍔 Food Court</h3>
          <p>Delicious treats, snacks, and drinks to keep you energized.</p>
        </div>
      </div>
      
{/* Gallery Section */}
 <section className="gallery">
 <h2>Gallery</h2>
 <Slider {...settings} className="gallery-slider">
   {galleryImages.map((image, index) => (
     <div className="slide" key={index}>
       <img src={image} alt={`Gallery ${index + 1}`} />
     </div>
   ))}
 </Slider>
</section>
</div>
</div>
<Footer />
</>
  );
};

export default Attractions;
