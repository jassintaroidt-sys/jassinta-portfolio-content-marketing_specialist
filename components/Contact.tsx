import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF9F0] via-[#FFDEE9] to-[#B5FFFC] px-6 relative overflow-hidden">
      
      {/* Background Shapes */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl w-full space-y-12 relative z-10"
      >
        <div className="space-y-4">
          <h2 className="text-6xl md:text-8xl font-black text-[#1a1a1a]">Let’s Work <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#FF9F43]">Together</span></h2>
          <p className="text-gray-600 text-xl font-bold">Ready to take your brand to the next level?</p>
        </div>

        <div className="flex flex-col items-center space-y-6">
          
          <a href="mailto:jassintaroidt@gmail.com" className="group flex items-center space-x-4 bg-white hover:bg-[#FF6B6B] px-8 py-6 rounded-2xl w-full max-w-md transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            <div className="p-3 bg-black rounded-full text-white group-hover:bg-white group-hover:text-[#FF6B6B] transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-left flex-1 group-hover:text-white transition-colors">
              <p className="text-xs font-bold uppercase tracking-wider opacity-70">Email Me</p>
              <p className="text-lg font-bold break-all">jassintaroidt@gmail.com</p>
            </div>
            <ArrowRight className="text-black group-hover:text-white group-hover:translate-x-2 transition-all" />
          </a>

          <a href="https://www.linkedin.com/in/jassinta-roid-triniti-74380327b/" target="_blank" rel="noreferrer" className="group flex items-center space-x-4 bg-white hover:bg-[#0077B5] px-8 py-6 rounded-2xl w-full max-w-md transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            <div className="p-3 bg-black rounded-full text-white group-hover:bg-white group-hover:text-[#0077B5] transition-colors">
              <Linkedin className="w-6 h-6" />
            </div>
            <div className="text-left flex-1 group-hover:text-white transition-colors">
              <p className="text-xs font-bold uppercase tracking-wider opacity-70">LinkedIn</p>
              <p className="text-lg font-bold">Jassinta Roid Triniti</p>
            </div>
            <ArrowRight className="text-black group-hover:text-white group-hover:translate-x-2 transition-all" />
          </a>

          <a href="https://www.instagram.com/tri_jassinta/" target="_blank" rel="noreferrer" className="group flex items-center space-x-4 bg-white hover:bg-[#E1306C] px-8 py-6 rounded-2xl w-full max-w-md transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            <div className="p-3 bg-black rounded-full text-white group-hover:bg-white group-hover:text-[#E1306C] transition-colors">
              <Instagram className="w-6 h-6" />
            </div>
            <div className="text-left flex-1 group-hover:text-white transition-colors">
              <p className="text-xs font-bold uppercase tracking-wider opacity-70">Instagram</p>
              <p className="text-lg font-bold">@tri_jassinta</p>
            </div>
            <ArrowRight className="text-black group-hover:text-white group-hover:translate-x-2 transition-all" />
          </a>

        </div>

        <footer className="pt-20 text-gray-500 text-sm font-semibold">
          © {new Date().getFullYear()} Jassinta Roid Triniti. All Rights Reserved.
        </footer>
      </motion.div>
    </section>
  );
};

export default Contact;