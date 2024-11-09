import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const features = [
  'SWOT',
  'User Interview',
  'User Personas',
  'Features breakdown',
  'Features prioritization',
  'Informational architecture',
  'Interaction patterns'
];

const Discovery = ({ scrollToContact }) => {
  return (
    <section className="bg-[#1A1A1A] text-white py-20 mx-auto ">
      <div className="container mx-auto px-4 w-10/12">
        <div className="flex flex-col lg:flex-row items-start gap-20">
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="absolute -top-4 left-0 text-sm text-gray-300">
                Analysis service
              </div>
              <div className="relative mt-8">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-[500px] rounded-2xl object-cover"
                >
                  <source 
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2021/10/Services_webm2-2.webm" 
                    type="video/webm" 
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <h2 className="text-[4.5rem] leading-none font-bold mb-12">
              <span className="text-orange-500 font-normal">Discovery</span>
              <br />
              phase
            </h2>

            <div className="space-y-6 mb-12 max-w-2xl">
              <p className="text-gray-400 text-lg">
                This step helps us turn great ideas into successful products, as it provides us with insights into your needs and how we can cater to them.
              </p>
              <p className="text-gray-400 text-lg">
                So, the discovery stage is crucial for organizing the development process effectively, and linking your business goals with your users' demands. It also helps reduce costs on design and development, as it reduces the number of iterations that are needed.
              </p>
            </div>

            <button 
              onClick={scrollToContact} // Attach click handler here
              className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-orange-500 hover:text-white transition-colors duration-300 mb-12"
            >
              Learn more
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-[#252525] text-gray-300 rounded-full text-sm hover:bg-[#303030] transition-colors duration-300"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discovery;
