import React, { useState } from 'react';
import { Video, Palette, Film, Monitor } from 'lucide-react';

const services = [
    {
      title: 'Video Production',
      description: 'Professional video production services for your brand. From concept to final cut, we create compelling visual stories that capture your audiences attention.',
      icon: <Video className="w-8 h-8 text-rose-600 group-hover:text-white transition-colors duration-300" />,
      tags: ['Commercial', 'Corporate', 'Social Media'],
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
      image2: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Motion Graphics',
      description: 'Eye-catching motion graphics and animations that bring your ideas to life. Perfect for explainer videos, brand stories, and social media content.',
      icon: <Palette className="w-8 h-8 text-rose-600 group-hover:text-white transition-colors duration-300" />,
      tags: ['2D Animation', '3D Animation', 'Visual Effects'],
      image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?auto=format&fit=crop&w=800&q=80',
      image2: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Post-Production',
      description: 'Advanced post-production services including color grading, sound design, and special effects to give your videos a professional, cinematic feel.',
      icon: <Film className="w-8 h-8 text-rose-600 group-hover:text-white transition-colors duration-300" />,
      tags: ['Color Grading', 'Sound Design', 'VFX'],
      image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=800&q=80',
      image2: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Content Strategy',
      description: 'Strategic planning and optimization of your video content to maximize engagement and achieve your marketing goals across all platforms.',
      icon: <Monitor className="w-8 h-8 text-rose-600 group-hover:text-white transition-colors duration-300" />,
      tags: ['Content Planning', 'Distribution', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=800&q=80',
      image2: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=800&q=80'
    }
  ];

const EditAndDesign = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Video and <span className="text-orange-600"> Graphics</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transform your professional presence and unlock your full potential with our comprehensive personal branding services
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white hover:bg-black rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="flex flex-col h-full">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
                  <div className="flex-1">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-black group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-300 mb-4 transition-colors duration-300 text-sm md:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="relative w-32 h-32 sm:w-48 sm:h-48 rounded-lg overflow-hidden ml-0 sm:ml-4">
                    <img 
                      src={hoverIndex === index ? service.image2 : service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                {service.tags && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 group-hover:bg-gray-900 group-hover:text-white rounded-full text-xs font-medium transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditAndDesign;