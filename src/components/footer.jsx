import React from 'react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">

        {/* Top Section: Logo + Passion (Left) and Links + Contact (Right) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between mb-8"
        >
          {/* Left Side: Logo + Passion */}
          <div className="flex flex-col items-start mb-8 md:mb-0 md:w-1/2">
            <img 
              src="/images/logo.png" 
              alt="Company Logo" 
              className="w-28 h-auto mb-4"
            />
            <h3 className="text-lg font-bold mb-2">We Are Passionate</h3>
            <p className="text-sm text-gray-300 max-w-md">
              We work with a passion of taking challenges and creating web apps 
              keeping in view latest technology and market demands.
            </p>
          </div>

          {/* Right Side: Links + Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-300 md:w-1/2">
            <div>
              <h4 className="font-semibold mb-2">Company</h4>
              <ul className="space-y-1">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Business</h4>
              <ul className="space-y-1">
                <li>Project</li>
                <li>Our Team</li>
                <li>Facts</li>
                <li>Customers</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Get In Touch</h4>
              <ul className="space-y-1">
                <li>Panchkula, Haryana, 134109</li>
                <li>info@nexfalconlabs.com</li>
                <li>Mon – Fri: 9:30 am – 6:30pm</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section: Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>Copyright © 2024 | Powered by NexFalconLabs</p>
        </div>
      </div>
    </footer>
  );
}
