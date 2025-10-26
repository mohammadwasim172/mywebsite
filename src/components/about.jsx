import React from 'react';

import { motion } from 'framer-motion';

export function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center"
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="About Us"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-base text-gray-600">
              We are a passionate team dedicated to delivering innovative solutions
              that empower businesses and individuals. With years of experience and
              a commitment to excellence, we strive to exceed expectations in every
              project we undertake.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}