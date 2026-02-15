import React from 'react';

const BrandMarquee: React.FC = () => {
  const images = [
    "images/logo_1.png",
    "images/logo_2.png",
    "images/logo_3.png",
    "images/logo_4.png",
    "images/logo_5.png",
    "images/logo_6.png",
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
       {/* Decor line */}
       <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400"></div>

       <h3 className="text-center text-[#1a1a1a] font-black uppercase tracking-[0.3em] mb-12 text-lg">Trusted Brands</h3>
       <div className="w-full overflow-hidden">
        <div className="flex animate-[marquee_20s_linear_infinite] items-center">
          {/* Double map for infinite loop illusion */}
          {[...images, ...images, ...images].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 mx-8 bg-gray-50 rounded-3xl p-4 border-2 border-gray-100 hover:border-violet-300 transition-all cursor-pointer transform hover:scale-110 shadow-lg">
              <img 
                src={src} 
                alt="Brand Logo" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
       {/* Decor line */}
       <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-pink-400 to-red-400"></div>
    </section>
  );
};

export default BrandMarquee;