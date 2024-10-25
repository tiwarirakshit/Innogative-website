import React from 'react';
import PropTypes from 'prop-types';

// ServiceCard component
const ServiceCard = ({ title, description, tags, imageSrc }) => (
  <div className={`rounded-3xl p-4 md:p-8 transition-all duration-300 ease-in-out shadow-lg relative overflow-hidden hover:bg-black hover:text-white`}>
    <div className="max-w-[60%] mb-4">
      <h3 className={`text-2xl md:text-3xl font-bold mb-2`}>
        {title}
      </h3>
      <p className={`mb-4 text-sm md:text-base`}>
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 text-xs md:text-sm rounded-full border-white border-2 bg-white text-black`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
      <img src={imageSrc} alt={title} className="w-32 h-32 object-contain md:w-48 md:h-48" />
    </div>
  </div>
);

// Prop types for ServiceCard
ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageSrc: PropTypes.string.isRequired,
};

// DevelopmentServices component
const DevelopmentServices = () => {
  const services = [
    {
      title: "Web development",
      description: "In custom code, there are no facets of what is possible if the implementation contains business value. We help to find unique custom solutions and offer simpler, but no less effective solutions thanks to our experience.",
      tags: ['Web applications', 'Websites'],
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=300&h=300",
    },
    {
      title: "No-code solutions",
      description: "Find your easy to implement and still highly-optimized decision to get the website shortly or create an MVP version of your product with investing fewer resources.",
      tags: ['Webflow', 'Bubble'],
      imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=300&h=300",
    },
    {
      title: "Blockchain development",
      description: "We help clients unlock the potential of the blockchain, focusing on the security and privacy of their users and the implementation of custom solutions that go beyond those offered by protocols.",
      tags: ['NFT Marketplace', 'Token Development', 'Smart contract development', 'DAO Development', 'Consulting', 'Exchange platforms'],
      imageSrc: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=300&h=300",
    },
    {
      title: "Mobile development",
      description: "We offer cross-platform and native mobile development services to build high-quality, feature-rich apps that work seamlessly. Experienced team, custom solutions, user-friendly design, and comprehensive testing.",
      tags: ['Native iOS & Android', 'Cross-platform'],
      imageSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=300&h=300",
    },
  ];

  return (
    <section className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-orange-500 border-b-2 border-orange-500">Development</span>{' '}
          services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentServices;
