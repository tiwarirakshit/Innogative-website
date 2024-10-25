import React from 'react';
import { Lightbulb, Pencil, Monitor } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Full-cycle support",
      description: "We will support you in producing a product that ticks all your boxes and meets your users' needs."
    },
    {
      icon: <Pencil className="w-8 h-8" />,
      title: "Team as one",
      description: "Our team is made up of specialists from a range of fields. Their comprehensive approach takes care of everything from research and business analysis to design and development."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Ahead of modernity",
      description: "Providing the most up-to-date UI is also a key focus for us. Check out our case studies to see how we've helped other businesses."
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
            By merging aesthetic design with reliable processes, we'll help you achieve your goals
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-6">
              <div className="w-12 h-12 flex items-center justify-center text-zinc-900">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">
                {feature.title}
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;