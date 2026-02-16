import React from 'react';

const OtherProjects: React.FC = () => {
  return (
    <section className="py-20 bg-[#FFF9F0]">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a]">
          Another Projects
        </h2>
        <p className="text-gray-500 mt-2 font-bold">
          Additional creative bumpers
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row w-full h-auto md:h-screen px-4 md:px-0 gap-4 md:gap-0">
        
        {/* PROJECT A */}
        <div className="flex-1 h-[50vh] md:h-full relative group overflow-hidden rounded-3xl md:rounded-none">
          
          <video
            src="videos/another_project_1.mp4"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="absolute inset-0 bg-[#FF6B6B]/80 group-hover:bg-transparent transition-colors duration-500 flex items-center justify-center">
            <span className="text-3xl font-black tracking-widest text-white border-4 border-white px-8 py-4 transform -rotate-6 group-hover:rotate-0 transition-transform">
              PROJECT A
            </span>
          </div>
        </div>

        {/* PROJECT B */}
        <div className="flex-1 h-[50vh] md:h-full relative group overflow-hidden rounded-3xl md:rounded-none">
          
          <video
            src="videos/another_project_2.mp4"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="absolute inset-0 bg-[#4ECDC4]/80 group-hover:bg-transparent transition-colors duration-500 flex items-center justify-center">
            <span className="text-3xl font-black tracking-widest text-white border-4 border-white px-8 py-4 transform rotate-6 group-hover:rotate-0 transition-transform">
              PROJECT B
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OtherProjects;
