import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone, ShoppingCart, Cpu, LayoutDashboard } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-blue-600 mx-auto" />,
      title: 'Web Development',
      description: 'Build responsive and modern web applications tailored to your business needs.',
    },
    {
      icon: <LayoutDashboard className="h-12 w-12 text-green-600 mx-auto" />,
      title: 'Zoho Development Services',
      description: 'Automate workflows and integrate Zoho apps to enhance productivity and efficiency.',
    },
    {
      icon: <Database className="h-12 w-12 text-yellow-600 mx-auto" />,
      title: 'Data Solutions',
      description: 'Manage, analyze, and visualize data effectively with secure data tools.',
    },
    {
      icon: <Smartphone className="h-12 w-12 text-purple-600 mx-auto" />,
      title: 'Mobile App Development',
      description: 'Create high-performance iOS and Android mobile applications with seamless UX.',
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-pink-600 mx-auto" />,
      title: 'eCommerce Development',
      description: 'Launch and scale your online store with powerful, custom eCommerce solutions.',
    },
    {
      icon: <Cloud className="h-12 w-12 text-blue-600 mx-auto" />,
      title: 'Cloud Services',
      description: 'Leverage secure, scalable cloud infrastructure for your digital transformation.',
    },
    {
      icon: <Cpu className="h-12 w-12 text-red-600 mx-auto" />,
      title: 'Internet of Things (IoT)',
      description: 'Connect, monitor, and control devices with smart IoT development and integration.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">{service.title}</h3>
              <p className="text-base text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
