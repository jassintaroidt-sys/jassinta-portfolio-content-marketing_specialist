import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-6 md:p-12 lg:p-24 bg-[#FFDEE9] bg-gradient-to-b from-[#FFF9F0] to-[#B5FFFC]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto relative z-10">
        
        {/* Floating Shapes */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce delay-700"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>

        {/* Left Side: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[3rem] shadow-xl border-2 border-white"
        >
          <div className="inline-block relative">
             <div className="absolute -inset-1 bg-[#FF6B6B] rounded-lg transform -rotate-2 opacity-50"></div>
            <h2 className="relative text-5xl font-black mb-2 text-[#1a1a1a]">About Me</h2>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-700">
            Hi, I'm <span className="text-[#5f27cd] underline decoration-wavy decoration-yellow-400">Jassinta Roid Triniti</span>.
          </h3>
          
          <p className="text-gray-800 text-lg leading-relaxed text-justify font-medium">
            I am a Content Marketing Specialist and Creative Marketer who loves turning ideas into engaging digital experiences. With a year of professional journey, I have successfully navigated diverse industries — from the elegance of Beauty and Travel to the dynamic worlds of Property, Training, and Culinary.
          </p>
          
          <p className="text-gray-800 text-lg leading-relaxed text-justify font-medium">
            My strength lies in adaptability. Whether crafting a strategic campaign or designing creative visuals, I ensure that every piece of content resonates with the brand’s unique audience.
          </p>
          
          <p className="text-xl font-bold text-[#FF6B6B] italic">
            Let’s create something impactful together!
          </p>
        </motion.div>

        {/* Right Side: Photo */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-full flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[500px] aspect-square">
            {/* Blob behind the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF9A9E] to-[#FECFEF] rounded-full transform rotate-6 scale-110 z-0" />
            
            <img 
              src="images/foto_jassinta_duduk.png" 
              alt="Jassinta Half Body"
              // Transparent, no stroke
              className="relative z-10 w-full h-full object-cover rounded-3xl"
              style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }} // Optional fade at bottom for blend
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;