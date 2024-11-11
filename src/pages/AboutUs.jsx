import React,{useEffect} from "react";
import Principles from "../components/Principles";
import { useNavigate } from "react-router-dom";
const AboutUs = () => {

  useEffect(() => {
    const circle = document.getElementById('custom-circle');
    let mouseX = 0, mouseY = 0;
    let circleX = 0, circleY = 0;
    const speed = 0.2; // Speed of following the mouse (0.1 = slow, 1 = instant)
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    // Update target position on mouse move
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX; // Use clientX for viewport-relative coordinates
      mouseY = e.clientY; // Use clientY for viewport-relative coordinates
    });

    // Smooth movement using requestAnimationFrame
    const smoothMove = () => {
      // Calculate the difference and apply the speed factor
      circleX += (mouseX - circleX) * speed;
      circleY += (mouseY - circleY) * speed;

      // Update the circle position
      circle.style.left = `${circleX}px`;
      circle.style.top = `${circleY}px`;

      requestAnimationFrame(smoothMove); // Keep the animation going
    };

    smoothMove(); // Start the animation

    return () => {
      document.removeEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
    };
  }, []);
  return (
    <>
    
    <a href="#contact" id="custom-circle" className="custom-circle other-style z-[5000]">
        <span>-> Let's Talk</span>
      </a>
      <div className="">
    {/* Section 1: Hero Section with Product Development Info */}
    <section className="bg-black text-white lg:p-8">
      <div className="container mx-auto w-10/12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left: Text content introducing the company and its services */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl lg:text-7xl font-bold mb-4 lg:tracking-wide">
              International{" "}
              <span className="text-orange-500">full-cycle</span> product
              development <span className="text-orange-500">company</span>
            </h2>
            <p className="text-base sm:text-lg mt-4 w-full lg:w-10/12">
              A team of top performers who leverage their expertise in Business
              Analysis, UI&UX Design, and Development to build products that 'wow'
              users.
            </p>
          </div>
          {/* Right: Image showcasing the product development services */}
          <div className="lg:w-1/2">
            <img
              src="https://phenomenonstudio.com/wp-content/uploads/2023/05/Services.png"
              alt="Product Development Services"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  
    {/* Section 2: Mission Statement */}
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-10/12">
        <h2 className="text-gray-500 text-xl mb-4">Mission</h2>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Mission heading and description */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold mb-8 leading-tight lg:w-[800px]">
              Delivering innovative{" "}
              <span className="text-orange-500">digital products</span> and
              solutions, which users do want, for our clients worldwide
            </h1>
          </div>
        </div>
      </div>
      {/* How We Got Here section: company history and values */}
      <div className="flex flex-col lg:flex-row-reverse pt-12 items-center gap-12 w-10/12 mx-auto">
        {/* Left: Text content with the company's history */}
        <div className="mb-8 lg:mb-0 flex flex-col gap-2">
          <h3 className="text-2xl lg:text-6xl sm:text-3xl font-bold mb-4">
            How did we get{" "}
            <span className="text-orange-500 underline">here?</span>
          </h3>
          <p className="text-gray-600 mb-4 text-lg">
            Founded in 2019 as a Ukrainian design & development studio, Phenomenon
            has grown into a top-rated international agency with offices in
            Ukraine, Poland, Estonia, and Switzerland.
          </p>
          <p className="text-gray-600">
            In these 5 years, we've assembled a tight-knit team of professionals
            united by a common aim: to build products that matter.
          </p>
        </div>
        {/* Right: Image related to innovative digital products */}
        <div className="order-first lg:order-last mb-8 lg:mb-0 w-full lg:w-3/4">
          <img
            src="https://phenomenonstudio.com/wp-content/uploads/2023/05/desktop.png"
            alt="Innovative digital products"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  
    {/* Section 3: Company Principles */}
    <section className="w-10/12 mx-auto">
      {/* Rendering a component called Principles */}
      <Principles />
    </section>
  
    {/* Section 4: Explore Opportunities Section */}
    <section className="w-10/12 mx-auto">
      <div className="container mx-auto px-4 py-8">
        {/* Heading introducing opportunities to explore */}
        <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-wider">
          Explore opportunities <br className="hidden md:inline" />
          to create{" "}
          <span className="text-orange-500 relative">
            excellent
            <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500"></span>
          </span>{" "}
          <br className="hidden md:inline" />
          products
        </h1>
  
        {/* Two Cards: Cases and Services */}
        <div className="grid md:grid-cols-2 gap-8 ">
          {/* Case Card: Button links to projects */}
          <div className="border p-6 rounded-lg flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4">Cases</h2>
            <p className="mb-4">
              Check out the projects we have completed for our clients
            </p>
            <button className="bg-black text-white px-4 py-2 rounded-full flex items-center">
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
              <span onClick={() => navigate("/works")}>View Our Projects</span>
            </button>
          </div>
  
          {/* Services Card: Button links to methods to enhance products */}
          <div className="border p-6 rounded-lg flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4">Services</h2>
            <p className="mb-4">
              Discover the multitude of methods we can use to enhance your product
            </p>
            <button className="bg-black text-white px-4 py-2 rounded-full flex items-center">
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
              <span onClick={() => navigate("/services")} >View Our Services</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
  </>
  );
};

export default AboutUs;
