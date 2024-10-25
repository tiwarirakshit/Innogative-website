import React, { useState } from 'react';

const navItems = [
  'Design services',
  'Discovery phase',
  'Development services',
  'How we work',
  'Cases',
  'Reviews',
  'Awards',
  'Get in Touch'
];

const Hero = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleNavClick = (item) => {
    setActiveItem(item);
  };

  return (
    <section className="min-h-screen bg-[#faf9f6]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 pt-12 pb-24">
        {/* Top Navigation */}
        <div className="mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between gap-6 overflow-x-auto hide-scrollbar py-2 px-4 bg-white/50 backdrop-blur-sm rounded-full border border-zinc-100">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={() => handleNavClick(item)}
                  className={`text-sm whitespace-nowrap transition-colors duration-200 py-2 px-4 rounded-full ${
                    activeItem === item
                      ? 'bg-black text-white'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-stretch gap-16">
          {/* Left - 3D Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-square max-w-[500px]">
              <img
                src="https://cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2023/03/3d-illustrations-30-rotation.png.webp"
                alt="Abstract 3D rings"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="w-full md:w-1/2 flex  items-center ">
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6 ">
                Is it <span className="relative inline-block">
                  possible
                  <div className="absolute top-full left-0 right-0 -mt-2">
                    <svg className="w-full" viewBox="0 0 200 20" fill="none">
                      <path d="M2 17C66.6667 7.66667 133.333 3.33333 198 4" stroke="#f97316" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </div>
                </span> to blend technology, professionalism, and aesthetics?
              </h2>
              
            </div>
            
          </div>
          
        </div>
       
      </div>
    </section>
  );
};

export default Hero;
