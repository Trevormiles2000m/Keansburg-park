import React, { useState } from "react";
import Modal from "react-modal";
import "./TicketsPage.css"; 
import Footer from "../components/Footer";


Modal.setAppElement("#root");

const TicketsPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState("");

  const openModal = (ticketType) => {
    setSelectedTicket(ticketType);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedTicket("");
  };

  return (
    <> 
    <div className="tickets-page">
      <h1 className="page-title">🎟️ Get Your Tickets</h1>
      <p className="subtitle">Select a ticket type and experience the thrill of Keansburg Park.</p>

      <div className="ticket-options">
        {/* 🎟️ Weekday Ticket */}
        <div className="ticket-card weekday">
          <h2>Weekday Pass</h2>
          <p>Enjoy rides at a discounted rate during weekdays.</p>
          <h3>$24.99</h3>
          <button className="book-btn" onClick={() => openModal("Weekday Pass")}>Book Now</button>
        </div>

        {/* 🎟️ Weekend Ticket */}
        <div className="ticket-card weekend">
          <h2>Weekend Pass</h2>
          <p>Experience all attractions with extended hours.</p>
          <h3>$39.99</h3>
          <button className="book-btn" onClick={() => openModal("Weekend Pass")}>Book Now</button>
        </div>

        {/* 🎟️ Family Pack */}
        <div className="ticket-card family">
          <h2>Family Pack</h2>
          <p>Perfect for families (up to 4 people) with full park access.</p>
          <h3>$89.99</h3>
          <button className="book-btn" onClick={() => openModal("Family Pack")}>Book Now</button>
        </div>
      </div>

      {/* 🏷️ Pop-up Booking Form */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal-content" overlayClassName="modal-overlay">
        <h2>Booking for {selectedTicket}</h2>
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Number of Tickets:</label>
          <input type="number" min="1" required />

          <div className="modal-buttons">
            <button type="submit" className="submit-btn">Submit</button>
            <button type="button" className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </form>
      </Modal>
    </div>
    <Footer />
    </>
  );
};

export default TicketsPage;
