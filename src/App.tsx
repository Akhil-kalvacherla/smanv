import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Features from './components/sections/Features';
import Industries from './components/sections/Industries';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Process from './components/sections/Process';
import Portfolio from './components/sections/Portfolio';
import CTA from './components/sections/CTA';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <Industries />
      <WhyChooseUs />
      <Process />
      <Portfolio />
      <CTA />
      <FAQ />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/website-development-services" replace />} />
          <Route path="/website-development-services" element={<Home />} />
          <Route path="*" element={<Navigate to="/website-development-services" replace />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}
