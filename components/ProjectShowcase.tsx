import React from 'react';
import { motion } from 'framer-motion';
import { ProjectData } from '../types';
import { PlayCircle, Star, ThumbsUp, Users, Eye } from 'lucide-react';

interface ProjectShowcaseProps {
  project: ProjectData;
  showVideos?: boolean;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ project, showVideos = true }) => {
  const isEven = project.id.length % 2 === 0;
  const bgColor = isEven ? "bg-[#F0F9FF]" : "bg-[#FFF5F5]";
  const accentColor = isEven ? "text-blue-500" : "text-red-500";

  return (
    <>
      {/* --- Section 1: Overview --- */}
      <section className={`min-h-screen py-20 px-6 md:px-12 flex items-center relative overflow-hidden ${bgColor}`}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-50 -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-50 -ml-32 -mb-32 blur-3xl"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          
          {/* Left */}
          <div className="space-y-8">
            <div>
              <h2 className={`text-5xl md:text-7xl font-black mb-4 ${accentColor}`}>
                {project.name}
              </h2>
              <p className="text-gray-700 text-xl leading-relaxed font-medium">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.objectives.length > 0 && (
                <div className="bg-white p-6 rounded-3xl border-2 border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Objectives</h3>
                  <ul className="space-y-2">
                    {project.objectives.map((obj, i) => (
                      <li key={i} className="text-sm text-gray-600 flex gap-2">
                        <span className={`${accentColor}`}>•</span> {obj}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.results.length > 0 && (
                <div className="bg-white p-6 rounded-3xl border-2 border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-green-600">Results</h3>
                  <ul className="space-y-3">
                    {project.results.map((res, i) => (
                      <li key={i} className="text-sm font-bold flex items-center gap-2">
                        {res.includes('view') ? <Eye className="w-4 h-4" /> :
                         res.includes('like') ? <ThumbsUp className="w-4 h-4" /> :
                         res.includes('star') ? <Star className="w-4 h-4" /> :
                         <Users className="w-4 h-4" />}
                        {res}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right */}
          <div className="relative flex flex-col items-center justify-center">
            <motion.div 
              whileHover={{ scale: 1.03, rotate: 1 }}
              className="w-64 h-96 rounded-[2.5rem] overflow-hidden border-8 border-gray-900 shadow-xl"
            >
              <img 
                src={project.visualRight.mobile} 
                alt="Preview" 
                className="w-full h-full object-cover" 
              />
            </motion.div>

            <div className="absolute -bottom-6 right-10 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src={project.visualRight.logo} 
                alt="Logo" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Best Videos --- */}
      {showVideos && project.videos.length > 0 && (
        <section className="min-h-screen py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-black">Best Video Content</h3>
              <p className="text-gray-500 mt-2">Curated high-performing videos</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.videos.map((vid, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  
                  <div className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden shadow-xl bg-black">
                    
                    {/* 🚀 FAST LOADING VIDEO */}
                    <video
                      src={vid.thumbnail}
                      preload="none"
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/0 transition">
                      <PlayCircle className="w-12 h-12 text-white drop-shadow-lg" />
                    </div>
                  </div>

                  <a 
                    href={vid.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-6 py-2 bg-black text-white rounded-full text-sm font-bold hover:bg-red-500 transition"
                  >
                    See More
                  </a>

                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- Section 3: Bumper --- */}
      <section className="h-screen w-full relative group overflow-hidden bg-black">
        
        <div className="absolute top-8 left-8 z-10 bg-white/90 backdrop-blur px-6 py-3 rounded-full text-sm font-bold shadow-lg">
          {project.name} Bumper
        </div>

        {/* 🚀 FAST LOADING BUMPER */}
        <video
          src={project.bumper}
          preload="none"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-6xl md:text-9xl font-black text-white opacity-30 uppercase">
            Bumper
          </h2>
        </div>

      </section>
    </>
  );
};

export default ProjectShowcase;
