import React from 'react';
import { motion } from 'framer-motion';

export function HeroImage() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 🔹 Static IT Background Image */}
      <img
        src="/images/heroimage.png"
        alt="IT Hero Background"
        className="w-full h-full object-cover scale-105"
      />

      {/* 🔹 Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mix-blend-overlay opacity-70"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 12,
          ease: 'linear',
          repeat: Infinity,
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      />

      {/* 🔹 Dark Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </div>
  );
}
