import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const cardColors = [
    "bg-[#FFEDD5] border-[#F97316]", // Orange
    "bg-[#DCFCE7] border-[#22C55E]", // Green
    "bg-[#DBEAFE] border-[#3B82F6]", // Blue
    "bg-[#FCE7F3] border-[#EC4899]", // Pink
    "bg-[#F3E8FF] border-[#A855F7]", // Purple
    "bg-[#FEF9C3] border-[#EAB308]", // Yellow
    "bg-[#E0F2FE] border-[#0EA5E9]", // Cyan
  ];

  return (
    <section className="min-h-screen py-20 px-4 md:px-12 bg-[#FFF9F0]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">My Career</span>
          <h2 className="text-5xl md:text-6xl font-black mt-4 text-[#1a1a1a]">
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Journey</span>
          </h2>
        </div>

        <div className="relative border-l-4 border-dashed border-gray-300 ml-4 md:ml-10 space-y-12">
          {EXPERIENCE_DATA.map((item, index) => {
            const colorClass = cardColors[index % cardColors.length];
            const borderColor = colorClass.split(' ')[1].replace('border-[', '').replace(']', ''); // Hacky extraction for dot color

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Dot on Timeline */}
                <div className={`absolute -left-[14px] top-4 w-6 h-6 rounded-full border-4 border-white ${borderColor.replace('border-', 'bg-')}`} style={{ backgroundColor: borderColor }} />

                <div className={`flex flex-col md:flex-row md:items-start md:justify-between p-6 rounded-2xl border-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-2 ${colorClass}`}>
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-black text-gray-800 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-gray-700" />
                      {item.role}
                    </h3>
                    <h4 className="text-lg font-bold text-gray-700 mt-1">{item.company}</h4>
                    <p className="text-gray-600 text-sm mt-1 font-medium">{item.type}</p>
                  </div>
                  <div className="md:text-right">
                    <span className="inline-block bg-white/50 text-gray-800 text-xs font-bold px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                      {item.period}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;