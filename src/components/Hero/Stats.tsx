import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Activity } from 'lucide-react';
import FloatingCard from '../shared/FloatingCards';

const stats = [
  { icon: Users, value: '50K+', label: 'Active Members', color: 'text-blue-600' },
  { icon: Building2, value: '100+', label: 'Partner Hospitals', color: 'text-indigo-600' },
  { icon: Activity, value: '1M+', label: 'Claims Processed', color: 'text-purple-600' },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 my-8 sm:my-12 lg:my-16 px-4">
      {stats.map((stat, index) => (
        <FloatingCard key={index} delay={index * 0.1}>
          <div className="text-center">
            <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-4`} />
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">{stat.value}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{stat.label}</p>
          </div>
        </FloatingCard>
      ))}
    </div>
  );
};

export default Stats;