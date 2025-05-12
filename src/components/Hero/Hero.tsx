import React from 'react';
import { motion } from 'framer-motion';
// import Stats from './Stats';
import Features from './Features';
import CallToAction from './CallToAction';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Insurance and
            <span className="text-indigo-600 block mt-2"> Healthcare Management</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto px-4">
            Empowering insurers, hospitals, and members with seamless, scalable solutions
            built for the future of healthcare in Kenya. Experience the power of integrated
            healthcare technology.
          </p>
          
          <div className="flex justify-center mb-12">
            <motion.button
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors"
              onClick={() => window.location.href = 'mailto:info@afyatele.com'}
            >
              Schedule Demo
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>

          <div className="relative z-10">
            {/* <Stats /> */}
            <Features />
            <CallToAction />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
