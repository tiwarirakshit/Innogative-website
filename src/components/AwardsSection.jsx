import React, { useState, useEffect } from "react";

// Constants for images and data
const IMAGES = {
  desktop: "https://phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2024/10/Awards-1-1.png.webp",
  mobile: "https://phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2024/10/image-292.png.webp"
};


const AWARDS = [
  { 
    name: "UX Design Awards", 
    description: "Nomination",
    link: "#ux-awards" 
  },
  { 
    name: "Awwwards", 
    description: "Honorable mentions",
    link: "#awwwards" 
  },
  { 
    name: "Behance", 
    description: "Featured in different galleries",
    link: "#behance" 
  },
  { 
    name: "UpCity", 
    description: "Featured on UpCity",
    link: "#upcity" 
  },
  { 
    name: "The Manifest", 
    description: "The Most Reviewed Company in Switzerland 2023",
    link: "#manifest" 
  }

]
const FACTS = [
  { label: "Revenue increased for clients", value: "$100K" },
  { label: "Launched Projects", value: "200+" },
  { label: "Team members", value: "20+" },
  { label: "Years in the market", value: "3" }
];

const AwardsAndFactsSection = () => {
  const [currentImage, setCurrentImage] = useState(IMAGES.desktop);

  // Handle responsive image switching
  useEffect(() => {
    const handleResize = () => {
      setCurrentImage(window.innerWidth <= 768 ? IMAGES.mobile : IMAGES.desktop);
    };

    // Initial setup
    handleResize();

    // Add event listener with debounce for performance
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 250);
    };

    window.addEventListener("resize", debouncedResize);
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Fact Card Component
  const FactCard = ({ fact, isLast }) => (
    <div
      className={`pb-6 md:pb-0 ${
        !isLast ? 'border-b md:border-b-0 md:border-r border-gray-700' : ''
      }`}
    >
      <p className="text-gray-400 uppercase text-xs md:text-sm mb-1 md:mb-2">
        {fact.label}
      </p>
      <p className="text-2xl md:text-3xl font-semibold">{fact.value}</p>
    </div>
  );

  // Award Card Component
  const AwardCard = ({ award }) => (
    <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-b border-gray-700 py-4 gap-3 sm:gap-0">
      <div className="flex items-center space-x-4 w-full sm:w-auto">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-700 flex items-center justify-center flex-shrink-0 rounded">
          {/* Logo placeholder */}
        </div>
        <div className="font-semibold text-sm md:text-base">{award.name}</div>
      </div>
      <div className="flex items-center justify-between w-full sm:w-auto">
        <div className="text-gray-400 text-sm md:text-base sm:text-right">
          {award.description}
        </div>
        <a
          href={award.link}
          className="transform rotate-180 ml-4 hover:opacity-80 transition-opacity duration-300"
          aria-label={`Visit ${award.name}`}
        >
          <svg
            fill="none"
            height="20"
            viewBox="0 0 9 10"
            width="15"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 md:w-4 md:h-4"
          >
            <path
              clipRule="evenodd"
              d="m.455752.5h8.544248v8.54425h-1.28906v-6.34368l-6.799434 6.79943-.911506-.91151 6.79943-6.79943h-6.343678z"
              fill="#fffefd"
              fillRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );

  return (
    <section className="bg-[#121214] text-white py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 w-full px-4 md:px-32">
          <h2 className="font-bold text-4xl md:text-6xl text-start">
            Innovative <span className="text-orange-500">facts</span> <br /> 
            and <span className="text-orange-500">figures</span>
          </h2>
        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16 px-4 md:px-32">
          {FACTS.map((fact, index) => (
            <FactCard 
              key={fact.label} 
              fact={fact} 
              isLast={index === FACTS.length - 1} 
            />
          ))}
        </div>

        {/* Awards List */}
        <div className="w-full md:w-3/4 lg:w-2/3 mx-auto px-4">
          {AWARDS.map((award) => (
            <AwardCard key={award.name} award={award} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsAndFactsSection;