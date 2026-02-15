import React from 'react';
import { motion } from 'framer-motion';
import { HERO_STATS, HERO_TAGS } from '../constants';

const Hero: React.FC = () => {
  const bgColors = [
    "bg-[#FF6B6B]", "bg-[#4ECDC4]", "bg-[#FFE66D]", "bg-[#FF9F43]", "bg-[#54A0FF]", "bg-[#5f27cd]"
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-20 pb-10 bg-[#FFF9F0]">
      
      {/* Decorative Blobs Background */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-[#FFD93D] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-[#FF6B6B] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#4ECDC4] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Top Text */}
      <div className="text-center z-10 px-4 relative">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-medium text-gray-600 tracking-wide"
        >
          Hello I'm Jassinta
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#FF9F43] to-[#54A0FF] drop-shadow-sm"
        >
          A Content Marketing Specialist
        </motion.h1>
      </div>

      {/* Center Image & Floating Words */}
      <div className="relative flex-1 flex items-center justify-center my-8 z-10">
        
        {/* Floating Words */}
        {HERO_TAGS.map((tag, index) => {
          const positions = [
            "top-0 left-10 md:left-1/4 rotate-[-6deg]",
            "top-10 right-10 md:right-1/4 rotate-[6deg]",
            "bottom-1/3 left-4 md:left-1/3 rotate-[-3deg]",
            "bottom-1/4 right-4 md:right-1/3 rotate-[3deg]",
            "top-1/2 -left-4 md:left-20 rotate-[-12deg]",
            "top-1/2 -right-4 md:right-20 rotate-[12deg]"
          ];
          
          return (
            <motion.div
              key={tag}
              className={`absolute ${positions[index % positions.length]} z-20`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: [0, -15, 0],
              }}
              transition={{ 
                opacity: { delay: 0.5 + index * 0.1 },
                y: { 
                  repeat: Infinity, 
                  duration: 4 + index, 
                  ease: "easeInOut" 
                }
              }}
            >
              <span className={`${bgColors[index % bgColors.length]} text-white px-6 py-3 rounded-full text-sm md:text-lg font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]`}>
                {tag}
              </span>
            </motion.div>
          );
        })}

        {/* Hero Image - Transparent, No Stroke */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
          {/* Abstract background shape for the image */}
          <div className="absolute inset-4 bg-[#FF9F43]/20 rounded-full blur-2xl transform scale-110" />
          
          <motion.img 
            src="images/foto_jassinta_setengah_badan.png" 
            alt="Jassinta Roid Triniti"
            // Using mix-blend-normal to ensure it sits on top, rounded-full assuming placeholder is square but we want a circle cut
            // No border, no stroke
            className="w-full h-full object-cover rounded-full relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      {/* Bottom Marquee Stats */}
      <div className="w-full overflow-hidden bg-white border-y-4 border-black py-6 shadow-[0px_4px_0px_0px_rgba(0,0,0,0.1)] rotate-[-1deg] scale-105 mb-[-20px] z-20">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          {[...Array(6)].map((_, i) => (
             <div key={i} className="flex items-center space-x-12 mx-6">
               {HERO_STATS.map((stat, idx) => (
                 <div key={`${i}-${idx}`} className="flex flex-col items-center group cursor-default">
                   <span className="text-4xl md:text-5xl font-black text-[#1a1a1a] group-hover:text-[#FF6B6B] transition-colors">{stat.value}</span>
                   <span className="text-sm md:text-base uppercase tracking-widest font-bold text-gray-500 mt-1">{stat.label}</span>
                 </div>
               ))}
               <div className="text-[#FF6B6B] text-4xl font-black">★</div>
             </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;