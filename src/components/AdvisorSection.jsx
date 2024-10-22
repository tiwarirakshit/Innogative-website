import React, { useState } from "react";


const AdvisorSection = ({ advisorData, number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const additionalText = "With over 15 years of experience, Oleg has a proven track record in leading organizations toward sustainable growth.";

  return (
    <section className="py-16 px-2 lg:px-24">
      {/* Top Section: Advisors Heading */}
      <div className="text-center lg:text-left mb-8 mx-auto w-10/12">
        <h3 className="text-gray-500 mb-2">Our advisors</h3>
        <div className="flex justify-center lg:justify-start items-center">
          <h1 className="text-5xl font-bold text-gray-900">{number < 10 ? `0${number}` : number}</h1>
          <span className="mx-2 text-4xl font-bold text-gray-300">-</span>
          <h1 className="text-5xl font-bold text-gray-900">03</h1>
        </div>
      </div>

      {/* Bottom Section: Image and Text */}
      <div className="lg:max-w-6xl lg:mx-auto lg:flex lg:gap-16 items-start transition-all duration-700 mx-auto w-10/12">
        {/* Left Side: Image */}
        <div
          className={`lg:w-1/2 h-auto overflow-hidden rounded-2xl transition-all duration-700 ${
            isExpanded ? "lg:h-full lg:overflow-hidden" : "lg:h-auto"
          }`}
        >
          <img
            src={advisorData.image}
            alt={advisorData.name}
            className={`w-full h-full object-cover transition-all duration-700 ease-in-out transform ${
              isExpanded ? "scale-110" : "scale-100"
            }`}
            style={{ borderRadius: "inherit" }} // Ensure border-radius remains constant during scaling
          />
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 text-center lg:text-left transition-all duration-700 ease-in-out">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">{advisorData.name}</h2>
          <p className="text-gray-500 mb-4">{advisorData.position}</p>
          <button
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full mb-6 transition hover:bg-gray-800"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span>↗ Visit website</span>
          </button>
          <p className="text-gray-700 mb-6">
            {advisorData.description}{" "}
            {isExpanded && (
              <span className="block mt-4">{additionalText}</span>
            )}
          </p>

          <a
            href="#readmore"
            className="text-orange-500 font-semibold mt-4 inline-block cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read less" : "Read more"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdvisorSection;
