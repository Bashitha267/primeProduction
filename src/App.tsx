import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import WebDevelopment from './pages/WebDevelopment';
import Events from './pages/Events';
import GraphicDesign from './pages/GraphicDesign';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/events" element={<Events />} />
            <Route path="/graphic-design" element={<GraphicDesign />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;