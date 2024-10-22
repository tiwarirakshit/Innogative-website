import React from 'react';

const Header = () => (
  <div className="text-left mb-12">
    <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-3">Principles</h2>
    <h1 className="text-4xl md:text-6xl font-bold leading-tight w-10/12 tracking-wider">
      We work with startups &amp; established businesses to help them{' '}
      <span className="text-orange-500 relative">
        meet today's
        <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500"></span>
      </span>{' '}
      evolving business challenges
    </h1>
  </div>
);

const FeatureCard = ({ number, title, description }) => (
  <div className="bg-gray-100 p-6 rounded-lg flex flex-col h-full">
    <div className="flex justify-between items-start mb-10">
      <h3 className="text-3xl font-bold p-2">{title}</h3>
      <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded-full">{number.padStart(2, '0')}</span>
    </div>
    <p className="text-gray-600 text-sm p-2 flex-grow">{description}</p>
  </div>
);

const ResponsiveFeaturesGrid = () => {
  const features = [
    {
      number: '1',
      title: 'Passion and personality',
      description: 'Our team is made up of people with personality, and one thing they have in common is passion for what they do.'
    },
    {
      number: '2',
      title: 'Measure twice, code once',
      description: 'Our dedication and attention to detail allow us to deliver products and services of the highest quality.'
    },
    {
      number: '3',
      title: 'Unconventional — and highly effective',
      description: 'We see our clients as partners, and work alongside them so we can achieve great things together.'
    },
    {
      number: '4',
      title: 'Fresh design, smart business processes',
      description: 'We take a flexible and free-thinking approach to every task, and this allows us to deliver great solutions for our clients.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="h-full">
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveFeaturesGrid;  