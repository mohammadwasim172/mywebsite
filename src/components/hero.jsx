import React from 'react'; // Yeh line add karein
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { HeroImage } from './HeroImage';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <HeroImage />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute text-center text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to NexFalconLabs</h1>
        <p className="text-base md:text-xl mb-6">
          Delivering innovative IT solutions that empower businesses to thrive in the digital era..
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Learn More
        </Button>
      </motion.div>
    </section>
  );
}