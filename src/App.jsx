import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Attractions from "./pages/Attractions";
import Contact from "./pages/Contact";
import  AboutUs from "./pages/AboutUs";
import TicketsPage from "./pages/TicketsPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/attractions" element={<Attractions />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/about" element={<AboutUs />} />
      <Route path="/tickets" element={<TicketsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
