import React from 'react'; // Yeh line add karein
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { CallToAction } from './components/CallToAction';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useToast } from './components/ui/use-toast.jsx'; // ya use-toast.js
import { motion } from "framer-motion";


function App() {
  const { ToastComponent } = useToast();
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <About />
      <Services />
      <CallToAction />
      <Contact />
      <Footer />
      {ToastComponent}
    </div>
  );
}

export default App;