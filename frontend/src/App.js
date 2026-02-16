import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import HowItWorks from "./components/HowItWorks";
import BeforeAfter from "./components/BeforeAfter";
import SavingsCalculator from "./components/SavingsCalculator";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import CGU from "./components/CGU";
import Privacy from "./components/Privacy";
import LegalNotice from "./components/LegalNotice";
import CGV from "./components/CGV";

const HomePage = () => (
  <main>
    <Hero />
    <TrustBar />
    <HowItWorks />
    <BeforeAfter />
    <SavingsCalculator />
    <Pricing />
    <Testimonials />
    <FAQ />
  </main>
);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/legal" element={<LegalNotice />} />
          <Route path="/cgv" element={<CGV />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
