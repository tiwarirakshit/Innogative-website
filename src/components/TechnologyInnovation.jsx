import React, { useState } from 'react';
import { Cpu, Bot, Scan, Workflow } from 'lucide-react';

const services = [
  {
    title: 'Automation Solutions',
    description: 'We streamline repetitive processes using automation, reducing human effort and increasing efficiency across industries.',
    icon: <Workflow className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />,
    tags: ['Process Optimization', 'Workflow Automation', 'Efficiency'],
    image: 'https://img.freepik.com/free-photo/human-hand-passing-gear-robotic-hand_23-2152006116.jpg?semt=ais_hybrid&w=740&q=80',
    image2: 'https://images.unsplash.com/photo-1581090700227-4c4f50b1e3b6?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'AI-Powered Applications',
    description: 'Leverage artificial intelligence to create smarter, data-driven solutions that can adapt, learn, and enhance decision-making.',
    icon: <Bot className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />,
    tags: ['Machine Learning', 'Predictive Analytics', 'Smart Apps'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    image2: 'https://images.unsplash.com/photo-1633419461186-9b6d00d94fdb?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Advanced AR/VR',
    description: 'Build immersive augmented and virtual reality experiences that transform training, entertainment, and customer engagement.',
    icon: <Scan className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />,
    tags: ['Virtual Reality', 'Augmented Reality', 'Immersive Tech'],
    image: 'https://www.brightviewtechnologies.com/data/uploads/media/image/AR-Applications.jpg?w=1024',
    image2: 'https://images.unsplash.com/photo-1578496781936-9f5c79ac0e1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Innovation in Technology',
    description: 'We improve pre-existing technologies, combine and create new solutions to practical problems, and build better products and services.',
    icon: <Cpu className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />,
    tags: ['Technology Upgrade', 'Custom Solutions', 'Future Ready'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    image2: 'https://images.unsplash.com/photo-1581091215367-59ab6c2b82c9?auto=format&fit=crop&w=800&q=80'
  }
];

const TechnologyInnovation = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Driving <span className="text-orange-600">Innovation</span> in Technology
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We improve pre-existing technologies, combine & create new solutions to practical problems, 
            make processes easier, or create better products and services.
          </p>
          <p className="mt-4 text-orange-600 font-semibold text-lg">
            Automation • AI-powered Applications • Advanced AR/VR
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

export default TechnologyInnovation;
