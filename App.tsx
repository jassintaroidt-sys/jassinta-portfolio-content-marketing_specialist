import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import BrandMarquee from './components/BrandMarquee';
import ProjectShowcase from './components/ProjectShowcase';
import OtherProjects from './components/OtherProjects';
import Contact from './components/Contact';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  return (
    <main className="bg-[#FFF9F0] text-gray-900 selection:bg-[#FF6B6B] selection:text-white overflow-hidden">
      {/* Page 1 */}
      <Hero />
      
      {/* Page 2 */}
      <About />
      
      {/* Page 3 */}
      <Experience />
      
      {/* Page 4 */}
      <BrandMarquee />
      
      {/* Pages 5-7 (Elsthetic) */}
      <ProjectShowcase project={PROJECTS[0]} />
      
      {/* Pages 8-10 (Karamina) */}
      <ProjectShowcase project={PROJECTS[1]} />
      
      {/* Pages 11-13 (Elspresso) */}
      <ProjectShowcase project={PROJECTS[2]} />
      
      {/* Pages 14-15 (Aishi - No videos, just bumper) */}
      <ProjectShowcase project={PROJECTS[3]} showVideos={false} />
      
      {/* Page 16 */}
      <OtherProjects />
      
      {/* Page 17 */}
      <Contact />
      
    </main>
  );
};

export default App;