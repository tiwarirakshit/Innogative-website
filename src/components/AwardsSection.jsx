import React, { useState, useEffect } from "react";

const image2 =
  "https://phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2024/10/image-292.png.webp";
const image =
  "https://phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2024/10/Awards-1-1.png.webp";

const awards = [
  
];

const facts = [
  { label: "Revenue increased for clients", value: "$100K" },
  { label: "Launched Projects", value: "200+" },
  { label: "Team members", value: "20+" },
  { label: "Years in the market", value: "3" },
];

const AwardsAndFactsSection = () => {
  const [currentImage, setCurrentImage] = useState(image);

  // Detect screen size and set appropriate image
  useEffect(() => {
    const handleResize = () => {
      // Check for small screen (e.g., 768px and below)
      if (window.innerWidth <= 768) {
        setCurrentImage(image2);
      } else {
        setCurrentImage(image);
      }
    };

    // Initial check on component mount
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-[#121214] text-white py-10">
      <div className="container mx-auto px-5">
        {/* Facts Section */}
        <div className="text-center mb-12 flex w-full px-32 text-start">
          <h2 className=" font-bold mb-4 flex items-start text-6xl">
            <p>Innogative <span className="text-blue-500">facts</span> <br /> and <span className="text-blue-500">figures</span></p>
          </h2>
        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center px-32">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="border-b md:border-b-0 md:border-r border-gray-700 pb-8 md:pb-0 md:pr-8"
            >
              <p className="text-gray-400 uppercase text-sm mb-2">
                {fact.label}
              </p>
              <p className="text-3xl font-semibold">{fact.value}</p>
            </div>
          ))}
        </div>

        {/* Responsive Image */}
        

        {/* Awards Section */}
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-gray-700 py-4"
            >
              <div className="flex items-center space-x-4">
                {/* Placeholder for Logo */}
                <div className="w-12 h-12 bg-gray-700 flex items-center justify-center">
                  {/* Logo here */}
                </div>
                <div className="font-semibold">{award.name}</div>
              </div>
              <div className="text-gray-400 text-right">{award.description}</div>
              <div className="transform rotate-180">
                <a
                  href="#"
                  className="text-xl hover:scale-105 transition transform duration-200"
                >
                  <svg
                    fill="none"
                    height="20"
                    viewBox="0 0 9 10"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="m.455752.5h8.544248v8.54425h-1.28906v-6.34368l-6.799434 6.79943-.911506-.91151 6.79943-6.79943h-6.343678z"
                      fill="#fffefd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsAndFactsSection;

