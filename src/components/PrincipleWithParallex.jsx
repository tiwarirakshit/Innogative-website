import React, { useEffect, useRef, useState } from 'react';

const PrinciplesSection = () => {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollPosition = window.pageYOffset;
      const sectionTop = rect.top + scrollPosition;
      const sectionBottom = sectionTop + rect.height;

      if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
        const relativeScroll = scrollPosition - sectionTop;
        setOffset(relativeScroll * 0.3); // Adjust this value to control parallax intensity
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative overflow-hidden bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-6xl font-bold mb-2">
            <span className="text-orange-500">Principles</span> we stand
          </h2>
          <h2 className="text-6xl font-bold mb-6">behind</h2>
          <p className="text-gray-600 max-w-md">
            Innogative is a team of like-minded professionals who are united by similar
            goals, principles, values and approaches to what we do.
          </p>
        </div>
        <div className="md:w-1/2 relative h-64 md:h-96 overflow-hidden">
          <img
            src="https://phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2023/03/Property-1Value4-3-1.png.webp"
            alt="Circular shapes"
            className="absolute w-full h-8/12 object-cover"
            style={{
              transform: `translateY(${offset}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PrinciplesSection;