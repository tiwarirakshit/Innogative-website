import React, { useState } from 'react';
import { Globe, Smartphone, Palette, Layout } from 'lucide-react';

const services = [
  {
    title: 'Web app design',
    description: 'Get the most comprehensive approach to building your product and a solution that will grow your business by solving the needs of its users',
    icon: <Layout className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" />,
    tags: ['Web app', 'CRM', 'Dashboard'],
    image: 'https://cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2023/01/ActiveNo-TypeProduct-des-2.png.webp',
    image2: 'https://cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2023/01/ActiveYes-TypeProduct-des-2.png.webp'
  },
  {
    title: 'Mobile app design',
    description: 'We create visually appealing, easy-to-use mobile app interfaces that improve user engagement and customer experience to help grow your business.',
    icon: <Smartphone className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" />,
    image: 'https://cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2023/02/ActiveNo-TypeMobile-app-des-1.png.webp',
    image2: 'https://cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2023/02/ActiveYes-TypeMobile-app-des-2.png.webp'
  },
  {
    title: 'Website design',
    description: 'We create eye-catchy & highly-optimized websites able to transmit your values to the audience telling about the business and solving your marketing needs.',
    icon: <Globe className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" />,
    tags: ['Website'],
    image: 'https://cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2023/03/ActiveNo-TypeWeb-des.png.webp',
    image2: 'https://cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2023/03/ActiveYes-TypeWeb-des-2.png.webp'
  },
  {
    title: 'Branding',
    description: 'Make brand identity one of the main points of your business differentiation, stand out and become recognizable to stay in minds of your audience.',
    icon: <Palette className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" />,
    tags: ['Brand identity', 'Logotype'],
    image: 'https://cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2023/01/ActiveNo-TypeBranding-1.png.webp',
    image2: 'https://cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2023/01/ActiveYes-TypeBranding-2.png.webp'
  }
];

const DesignServices = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="w-10/12 mx-auto py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-orange-500">Web</span> services
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white hover:bg-black rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="flex flex-col h-full">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
                  <div className="flex-1">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-300 mb-4 transition-colors duration-300 text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>
                  <img 
                    src={hoverIndex === index ? service.image2 : service.image} 
                    alt={service.title}
                    className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-lg ml-0 sm:ml-4 transition-transform duration-300"
                  />
                </div>
                
                {service.tags && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 group-hover:bg-gray-900 group-hover:text-gray-300 rounded-full text-xs transition-colors duration-300"
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

export default DesignServices;
