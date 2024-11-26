import React, { useState } from 'react';
import { UserCircle, PenTool, Users, Trophy } from 'lucide-react';

const services = [
  {
    title: 'Building Your Personal Brand',
    description: 'Develop a powerful, authentic personal brand that sets you apart. We help you craft your unique story, define your values, and create a compelling professional presence.',
    icon: <UserCircle className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />,
    tags: ['Brand Strategy', 'Visual Identity', 'Online Presence'],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    image2: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Engaging Content Creation',
    description: 'Transform your expertise into compelling content that resonates with your audience. From thought leadership articles to social media strategy, we help you share your knowledge effectively.',
    icon: <PenTool className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />,
    tags: ['Content Strategy', 'Social Media', 'Thought Leadership'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    image2: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Effective Networking',
    description: 'Build meaningful professional relationships that accelerate your career growth. Learn strategic networking approaches and leverage digital platforms to expand your influence.',
    icon: <Users className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />,
    tags: ['Relationship Building', 'Digital Networking', 'Community Growth'],
    image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80',
    image2: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Inspiring Leadership',
    description: 'Develop the skills and presence of an influential leader. We guide you in building authority in your field while inspiring and empowering others through authentic leadership.',
    icon: <Trophy className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />,
    tags: ['Leadership Development', 'Public Speaking', 'Mentoring'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    image2: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80'
  }
];

const PersonalBranding = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Elevate Your <span className="text-orange-600">Personal Brand</span>
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

export default PersonalBranding;