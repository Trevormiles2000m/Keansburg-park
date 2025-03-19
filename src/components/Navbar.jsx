import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  // Simulating fetching visitor count from backend or localStorage
  useEffect(() => {
    const storedCount = localStorage.getItem("visitorCount") || 0;
    const updatedCount = parseInt(storedCount) + 1;
    localStorage.setItem("visitorCount", updatedCount);
    setVisitorCount(updatedCount);
  }, []);



  return (
    <div className="navbar-container">
    <nav className="navbar navbar-expand-lg sticky-top">

      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
         <img src="/Keansburg-Park.png" alt="Keansburg Park" className="navbar-logo" /> 
         </Link>
         <span className="visitor-count">Visitors: {visitorCount}</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            
            <li className="nav-item">
            <Link className="nav-link" to="/attractions">Attractions</Link>
             </li>
           
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            
            </li> 
            <li className="nav-item">
              <Link className="nav-link" to="/tickets">Tickets</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
