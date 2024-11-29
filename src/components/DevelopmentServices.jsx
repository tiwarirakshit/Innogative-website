import React, { useState } from 'react';
import { Globe, Blocks, Database, Smartphone } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Create powerful, custom web solutions that drive business value. Our expert team delivers unique implementations tailored to your specific needs, from simple websites to complex web applications.',
    icon: <Globe className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />,
    tags: ['Web Applications', 'Custom Solutions', 'Responsive Design'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    image2: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'No-Code Solutions',
    description: 'Accelerate your digital presence with powerful no-code platforms. Get your MVP or website launched quickly without compromising on quality or functionality.',
    icon: <Blocks className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />,
    tags: ['Webflow', 'Bubble', 'Rapid Development'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    image2: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Blockchain Development',
    description: 'Harness the power of blockchain technology with secure, innovative solutions. From smart contracts to NFT marketplaces, we help you build the future of decentralized applications.',
    icon: <Database className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />,
    tags: ['Smart Contracts', 'NFT Marketplace', 'DeFi Solutions'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    image2: 'https://images.unsplash.com/photo-1642104704074-907c0698b98d?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Mobile Development',
    description: 'Build exceptional mobile experiences that users love. Our cross-platform and native development expertise ensures your app performs flawlessly across all devices.',
    icon: <Smartphone className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />,
    tags: ['iOS & Android', 'Cross-Platform', 'Native Apps'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    image2: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80'
  }
];

const DevelopmentServices = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Modern <span className="text-orange-600">Development</span> Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transform your ideas into reality with our comprehensive development services powered by cutting-edge technology
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

export default DevelopmentServices;