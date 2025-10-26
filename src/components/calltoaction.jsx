import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

export function CallToAction() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-base mb-6">
            Join us today and take your business to the next level with our
            cutting-edge solutions.
          </p>
          <a href="https://www.upwork.com" target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md border border-white">
              Join Us
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}