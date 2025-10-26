import React from 'react';

import { motion } from 'framer-motion';

export function WelcomeMessage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center py-8"
    >
      <h2 className="text-2xl font-bold">Welcome to Our Platform</h2>
      <p className="text-base text-gray-600 mt-2">
        We're excited to have you here! Explore our services and get started today.
      </p>
    </motion.div>
  );
}