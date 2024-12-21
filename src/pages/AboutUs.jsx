import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Principles from "../components/Principles";
import LeadershipTeam from "../components/TeamMembers";

const AboutUs = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  // Mouse follow effect with proper cleanup
  useEffect(() => {
    const circle = document.getElementById('custom-circle');
    if (!circle) return;

    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;
    const speed = 0.2;
    let animationFrameId = null;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const smoothMove = () => {
      circleX += (mouseX - circleX) * speed;
      circleY += (mouseY - circleY) * speed;

      if (circle) {
        circle.style.left = `${circleX}px`;
        circle.style.top = `${circleY}px`;
      }

      animationFrameId = requestAnimationFrame(smoothMove);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(smoothMove);

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // Navigation handlers
  const handleNavigation = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  return (
    <>
      <div id="custom-circle" className="fixed custom-circle other-style z-[5000]">
        <a href="#contact" className="block">
          <span>→ Let's Talk</span>
        </a>
      </div>

      <div className="min-h-screen pt-20 bg-white ">
        {/* Section 1: Hero Section */}
        <section className="bg-black text-white lg:p-8  pt-4">
          <div className="container mx-auto w-10/12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-1/2">
                <h1 className="text-4xl lg:text-7xl font-bold mb-4 lg:tracking-wide">
                  International{" "}
                  <span className="text-orange-500">full-cycle</span> product
                  development <span className="text-orange-500">company</span>
                </h1>
                <p className="text-base sm:text-lg mt-4 w-full lg:w-10/12">
                  A team of top performers who leverage their expertise in Business
                  Analysis, UI&UX Design, and Development to build products that 'wow'
                  users.
                </p>
              </div>
              <div className="lg:w-1/2">
                <img
                  src="https://phenomenonstudio.com/wp-content/uploads/2023/05/Services.png"
                  alt="Product Development Services"
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Mission Statement */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto w-10/12">
            <h2 className="text-gray-500 text-xl mb-4">Mission</h2>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-7xl font-bold mb-8 leading-tight">
                  Delivering innovative{" "}
                  <span className="text-orange-500">digital products</span> and
                  solutions, which users do want, for our clients worldwide
                </h2>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse pt-12 items-center gap-12">
              <div className="lg:w-1/2">
                <h3 className="text-2xl lg:text-6xl font-bold mb-4">
                  How did we get{" "}
                  <span className="text-orange-500 underline">here?</span>
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-600 text-lg">
                    Founded in 2019 as a Ukrainian design & development studio, Innogative
                    has grown into a top-rated international agency with offices in
                    Ukraine, Poland, Estonia, and Switzerland.
                  </p>
                  <p className="text-gray-600">
                    In these 5 years, we've assembled a tight-knit team of professionals
                    united by a common aim: to build products that matter.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img
                  src="https://phenomenonstudio.com/wp-content/uploads/2023/05/desktop.png"
                  alt="Innovative digital products"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Company Principles */}
        <section className="w-10/12 mx-auto py-12">
          <Principles />
        </section>

        {/* Section 4: Explore Opportunities */}
        <section className="w-10/12 mx-auto py-12">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-wider">
              Explore opportunities <br className="hidden md:inline" />
              to create{" "}
              <span className="text-orange-500 relative inline-block">
                excellent
                <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500"></span>
              </span>{" "}
              <br className="hidden md:inline" />
              products
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <button
                onClick={() => handleNavigation("/works")}
                className="border p-6 rounded-lg text-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-2xl font-semibold mb-4">Cases</h3>
                <p className="mb-4">
                  Check out the projects we have completed for our clients
                </p>
                <div className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full">
                  <span>View Our Projects</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-2 -rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>

              <button
                onClick={() => handleNavigation("/services")}
                className="border p-6 rounded-lg text-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-2xl font-semibold mb-4">Services</h3>
                <p className="mb-4">
                  Discover the multitude of methods we can use to enhance your product
                </p>
                <div className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full">
                  <span>View Our Services</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-2 -rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Section 5: Leadership Team */}
        <LeadershipTeam />
      </div>
    </>
  );
};

export default AboutUs;