// src/App.jsx
import CommitmentSection from './components/CommitmentSection';
import Footer from './components/footer';
import Header from './components/header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServiceSection';
import SummerFreshSection from './components/SummerFreshSection';
import TestimonialsSection from './components/TestimonialSection';
import './index.css'; // Keep your global styles
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route from react-router-dom

// Import all your existing sections/components


import AboutPage from './components/AboutPage';

function App() {
  return (
    // The App component will now primarily manage routing.
    // Header and Footer will be rendered conditionally or within specific page components.
    <div className="App"> {/* Keep the overall App div for general styling */}
      <Routes>
        {/* Route for the Home Page */}
        <Route
          path="/"
          element={
            <>
              {/* These components collectively form your Home page */}
              <Header />
              <HeroSection />
              <CommitmentSection />
              <SummerFreshSection />
              <ServicesSection />
              <TestimonialsSection />
              <Footer />
            </>
          }
        />

        {/* Route for the About Page */}
        <Route path="/about" element={<AboutPage />} />

        {/* You can add more routes here for other pages like /services, /contact, etc.
            Example:
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
        */}
      </Routes>
    </div>
  );
}

export default App;