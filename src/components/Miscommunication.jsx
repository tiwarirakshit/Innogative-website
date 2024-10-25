import React from 'react';
import { Megaphone, Brain, Code } from 'lucide-react';

const features = [
  {
    icon: <Megaphone className="w-12 h-12 text-orange-500" />,
    title: 'Efficient Team Communication',
    description: 'Our development team is in frequent contact with our designers. Thanks to this, any problems are tackled rapidly at source.'
  },
  {
    icon: <Brain className="w-12 h-12 text-orange-500" />,
    title: 'Research-Driven Success',
    description: 'Thorough research at both the beginning of a project and during the discovery stage is key to success. This includes business analysis for large products, as it minimizes the number of edits that are needed.'
  },
  {
    icon: <Code className="w-12 h-12 text-orange-500" />,
    title: 'Future-Proof Development',
    description: 'Our developers are highly trained, and their designs can always be scaled in the future.'
  }
];

const Miscommunication = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative mb-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px]">
            <div className="w-full h-full border-2 border-orange-500 rounded-full absolute top-0 left-0 transform -rotate-6"></div>
          </div>
          
          <div className="relative text-center max-w-4xl mx-auto pt-16">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Did you face
              <span className="text-orange-500 block md:inline"> miscommunication </span>
              between
              <br />
              design & development
              <br />
              teams?
            </h2>
          </div>
        </div>

        <div className="text-center mb-16">
          <p className="text-2xl text-gray-800">
            Our developers and designers cooperate closely to overcome any challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Miscommunication;