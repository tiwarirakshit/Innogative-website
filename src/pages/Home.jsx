import React from "react";
import AwardsAndFactsSection from "../components/AwardsSection";
import Form from "../components/formSection";
import Cases from "../components/CasesSection";
import Noise from "../assets/noise.jpg";
import { useEffect, useState } from "react";
import Intro from '../assets/intro.mp4';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import testimonialsData from '../testimonials.json';
import { useNavigate } from "react-router-dom";

const testimonialsettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2.1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

const settings = {
  dots: false,
  infinite: true,
  speed: 5000,
  slidesToShow: 8,  // 8 logos per slide
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  pauseOnHover: false,
  cssEase: "linear",
  navigation: false
};

const services = [
  {
    title: "Website/App Develeopment",
    description:
      "Recapture users and reignite growth by implementing a user-focused product redesign that enhances functionality and user experience. This leads to improved user retention, increased app usage, and a competitive edge by aligning with current user expectations.",
    image:
      "https://phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2023/01/ActiveNo-TypeProduct-des-2.png.webp",
    image2:
      "https://phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2023/01/ActiveYes-TypeProduct-des-2.png.webp",
  },
  {
    title: "MVP Development",
    description:
      "Start generating revenue sooner by developing a functional MVP that prioritizes core features for quick market entry. This approach leads to early monetization opportunities, faster time-to-market, and enhanced adaptability through user feedback.",
    image:
      "https://phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2023/05/ActiveNo-TypeBlockchain-1.png.webp",
    image2:
      "https://phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2023/05/ActiveYes-TypeBlockchain-1.png.webp",
  },
];

const websiteDesign = {
  title: "Social Media Management",
  description:
    "Get an eye-catching, optimized website that communicates your values and engages your audience, driving conversions with a compelling online presence.",
  image:
    "https://phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2023/01/ActiveNo-TypeNo-code-2.png.webp",
  image2:
    "https://phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2023/01/ActiveYes-TypeNo-code-2.png.webp",
};



const Home = () => {
  const navigate=useNavigate();
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Load testimonials from the JSON file
    setTestimonials(testimonialsData);
  }, []);

  useEffect(() => {
    const circle = document.getElementById('custom-circle');
    let mouseX = 0, mouseY = 0;
    let circleX = 0, circleY = 0;
    const speed = 0.2; // Speed of following the mouse (0.1 = slow, 1 = instant)

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




  useEffect(() => {
    const circle = document.getElementById('custom-circle');
    const bannerSection = document.getElementById('banner'); // Assuming your home section has this id
    const homeSection = document.getElementById('home'); // Assuming your home section has this id
    const otherSection = document.getElementById('other'); // Example for other sections

    const observerOptions = {
      root: null, // Use the viewport as the root
      threshold: 0.5, // 50% of the section must be visible for it to be considered "in view"
    };

    // IntersectionObserver callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'home') {
            circle.classList.add('home-style');
            circle.classList.remove('other-style');
          } else if(entry.target.id === 'banner') {
            circle.classList.add('other-style');
            circle.classList.remove('home-style');
          }
          else{
            circle.classList.add('other-style');
            circle.classList.remove('home-style');
          }
        }
      });
    };

    // Create the observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe both home and other sections
    if (homeSection) observer.observe(homeSection);
    if (otherSection) observer.observe(otherSection);
    if(bannerSection) observer.observe(bannerSection);

    return () => {
      // Clean up the observer on unmount
      if (homeSection) observer.unobserve(homeSection);
      if (otherSection) observer.unobserve(otherSection);
      if(bannerSection) observer.unobserve(bannerSection);
    };
  }, []);




  useEffect(() => {
    const circle = document.getElementById('custom-circle');
    const hoverTargets = document.querySelectorAll('.hover-target');
  
    // Function to change the cursor on hover
    const handleMouseEnter = (e) => {
      circle.style.width = '80px'; // Increase size
      circle.style.height = '80px';
      circle.style.border = '2px solid orange'; // Add border for small circle

      circle.style.backgroundColor = 'transparent'; // Change background color
      circle.style.fontSize = '14px'; // Show text inside circle
      circle.querySelector('span').style.display = 'block'; // Show the span text
      circle.querySelector('span').textContent = e.target.getAttribute('data-text') || "Let's Talk"; // Change text dynamically based on data-text attribute
    };
  
    // Function to reset the cursor when mouse leaves the element
    const handleMouseLeave = () => {
      circle.style.width = '15px'; // Reset size
      circle.style.height = '15px';
      circle.style.border = '2px solid orange'; // Add border for small circle
      circle.style.backgroundColor = 'transparent'; // Reset background color
      circle.style.fontSize = '0'; // Hide text inside circle
      circle.querySelector('span').style.display = 'none'; // Hide the span text
    };
  
    // Add event listeners to each hover-target
    hoverTargets.forEach((target) => {
      target.addEventListener('mouseenter', handleMouseEnter);
      target.addEventListener('mouseleave', handleMouseLeave);
    });
  
    // Cleanup event listeners when component unmounts
    return () => {
      hoverTargets.forEach((target) => {
        target.removeEventListener('mouseenter', handleMouseEnter);
        target.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
  



  return (
    <>
        <a href="#contact" id="custom-circle" className="custom-circle z-[5000]">
          <span>-> Let's Talk</span>
        </a>
      <div id="banner" className="h-screen bg-[#121214] w-full relative ">
        <div className="absolute z-[100] w-full h-full flex flex-col items-center justify-center opacity-1">
          <p className="text-white text-8xl hover-target">Innogative</p>
          <p className="text-white font-light font-sans text-sm tracking-[13px] mt-3 uppercase">Grow with Innovation</p>
        </div>
        <div className="absolute z-[10] w-full h-full bg-[#121214] opacity-[0.7]">
        </div>
        <div className="absolute w-full h-20 bottom-0 bg-gradient-to-t from-[#121214] to-transparent">
        </div>

        <video
          src={Intro}
          autoPlay
          muted
          loop
          // controls
          className="w-full h-full object-cover">
        </video>

      </div>


      <div id="home" className="min-h-screen flex items-center justify-center bg-customblack"

      >
        <section className="text-white w-10/12 mx-auto">
          <div className="fixed top-0 left-0 w-full h-screen z-[0] opacity-[0.03]">
            <img src={Noise} alt="" className="w-full h-full " />
          </div>
          <div className="flex flex-col md:flex-row gap-2 mb-4 items-start md:items-center">
            <h2 className="text-xl font-semibold">
              Product Design & Development company for:
            </h2>
            <div className="flex flex-wrap">
              <span className="text-gray-800 bg-white text-center font-semibold py-1 px-3 rounded-2xl mr-2 mb-2">
                SaaS
              </span>
              <span className="text-gray-800 bg-white text-center font-semibold py-1 px-3 rounded-2xl mr-2 mb-2">
                FinTech
              </span>
              <span className="text-gray-800 bg-white text-center font-semibold py-1 px-3 rounded-2xl mr-2 mb-2">
                Healthcare
              </span>
              <span className="text-gray-800 bg-white text-center font-semibold py-1 px-3 rounded-2xl mr-2 mb-2 ">
                EdTech
              </span>
            </div>
          </div>

          <h1 className=" lg:gap-5 text-3xl sm:text-4xl lg:text-[80px] leading-[100px] font-bold  mb-4 w-full lg:w-4/6">
            Get <span className="text-blue-500 leading-[90px]">user experience</span><br /> design
            that becomes <br /> your
            <span className="text-blue-500 leading-[70px]"> competitive <br />advantage</span>
          </h1>

          <div className="flex w-full mt-12">
            <p className="text-base lg:text-2xl flex w-full lg:w-1/2 items-end lg:ml-[650px]">
              Achieve product growth with our data-driven design and development
              solutions that avoid common pitfalls, ensuring your SME succeeds
              in the market.
            </p>
          </div>


          <Slider {...settings} className="mt-20">
            <div className="p-4">
              <img src="https://picsum.photos/500/300?random=1" alt="Company 1" className="w-full h-auto" />
            </div>
            <div className="p-4">
              <img src="https://picsum.photos/500/300?random=2" alt="Company 2" className="w-full h-auto" />
            </div>
            <div className="p-4">
              <img src="https://picsum.photos/500/300?random=3" alt="Company 3" className="w-full h-auto" />
            </div>
            <div className="p-4">
              <img src="https://picsum.photos/500/300?random=4" alt="Company 3" className="w-full h-auto" />
            </div>
            <div className="p-4">
              <img src="https://picsum.photos/500/300?random=5" alt="Company 3" className="w-full h-auto" />
            </div>
            <div className="p-4">
              <img src="https://picsum.photos/500/300?random=6" alt="Company 3" className="w-full h-auto" />
            </div>
            <div className="p-4">
              <img src="https://picsum.photos/500/300?random=7" alt="Company 3" className="w-full h-auto" />
            </div>
            <div className="p-4">
              <img src="https://picsum.photos/500/300?random=1" alt="Company 3" className="w-full h-auto" />
            </div>
            <div className="p-4">
              <img src="https://picsum.photos/500/300?random=1" alt="Company 3" className="w-full h-auto" />
            </div>
            {/* Add remaining logos similarly */}
          </Slider>

        </section>
      </div>

      {/* Company's logo needed to be added  here  which are moving */}

      {/* ---------- Services Section --------   */}
      <section id="other" className="p-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-2xl font-semi-bold tracking-widest   mb-2">
            Services
          </p>
          <h2 className="text-7xl font-bold mb-12 ">
            Boost <span className="text-orange-500">your</span> business
            <br />
            with our{" "}
            <span className="text-orange-500 ">key services</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-900 cursor-pointer flex flex-col-reverse md:flex-row justify-between items-center md:items-start"
              >
                <div className="absolute inset-0 w-full h-full bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                <div className="relative z-10 flex-1 md:pr-4 mt-6 md:mt-0 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="group-hover:text-white">
                    {service.description}
                  </p>
                </div>

                <div className="relative z-10 flex-shrink-0 w-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-contain group-hover:hidden"
                  />
                  <img
                    src={service.image2}
                    alt={service.title}
                    className="w-full h-48 object-contain hidden group-hover:block"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-[80%] group relative bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-900 cursor-pointer flex flex-col-reverse md:flex-row justify-between items-center md:items-start">
              <div className="absolute inset-0 w-full h-full bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

              <div className="relative z-10 flex-1 md:pr-4 mt-6 md:mt-0 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white">
                  {websiteDesign.title}
                </h3>
                <p className="group-hover:text-white">
                  {websiteDesign.description}
                </p>
              </div>

              <div className="relative z-10 flex-shrink-0 w-48">
                <img
                  src={websiteDesign.image}
                  alt={websiteDesign.title}
                  className="w-full h-48 object-contain group-hover:hidden"
                />
                <img
                  src={websiteDesign.image2}
                  alt={websiteDesign.title}
                  className="w-full h-48 object-contain hidden group-hover:block"
                />
              </div>
            </div>

            <button 
            className="w-full lg:w-48 h-48 lg:mt-12 cursor-pointer bg-orange-500 text-black rounded-full flex items-center justify-center text-lg hover:bg-black transition-colors duration-300 flex-shrink-0"
            onClick={() => navigate("/services")}>
              {'All services ->'}
            </button>
          </div>
        </div>
      </section>
      {/* ----------Selected Cases --------------*/}
      <Cases />
      {/* --------------industries -------------- */}
      <section>
        <div className="text-left mb-10 mx-auto w-10/12">
          <p className="text-2xl">Industries</p>
          <h2 className="text-7xl font-bold text-gray-800 w-1/2 tracking-wide">
            Our <span className="text-orange-500 ">main</span> areas
            <br />of <span className="text-orange-500">expertise</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-10/12 mx-auto">
          {/* SaaS Card */}
          <div className="relative bg-gray-100 text-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out">
            <h3 className="text-4xl font-semibold mb-12">SaaS</h3>
            <p className="mb-4 text-xl">
              We help you create SaaS platforms that are intuitive, scalable,
              and tailored to meet your users' needs, ensuring they stay engaged
              and satisfied with your product.
            </p>
            <div className="absolute top-4 right-4">
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

          {/* Healthcare Card */}
          <div className="relative bg-gray-100 text-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out">
            <h3 className="text-4xl font-semibold mb-12"></h3>
            <p className="mb-4 text-xl ">
              We develop patient-centric designs that simplify complex
              processes, enhance patient outcomes, and ensure secure, compliant
              handling of sensitive information, all while improving overall
              user satisfaction.
            </p>
            <div className="absolute top-4 right-4">
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

          {/* FinTech Card */}
          <div className="relative bg-gray-100 text-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out">
            <h3 className="text-4xl font-semibold mb-12">Content Creation</h3>
            <p className="mb-4 text-xl">
              We design secure, user-friendly interfaces that not only meet
              regulatory standards but also build customer confidence, driving
              adoption and loyalty in a competitive market.
            </p>
            <div className="absolute top-4 right-4">
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

          {/* EdTech Card */}
          <section className="relative bg-gray-100 text-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out">
            <h3 className="text-4xl font-semibold mb-12">UI/UX</h3>
            <p className="mb-4 text-xl">
              Our designs focus on creating interactive and accessible learning
              environments that cater to diverse user needs, helping you deliver
              impactful education that keeps learners motivated.
            </p>
            <div className="absolute top-4 right-4">
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
          </section>
        </div>
      </section>

      {/*----------Mission Section -------------  */}
      <section className="bg-[#121214] text-white mt-12 p-2 px-32 pt-20">
        <div className="text-7xl font-semibold">
          <p>What do <span className="text-orange-500">people say</span></p>
          <p className="text-orange-500">about us?</p>
        </div>

        {/* Slick Carousel for Testimonials */}
        <div className="mt-12">
          <Slider {...testimonialsettings}>
            {testimonials.map((testimonial, index) => (
              <div className="w-[500px] h-[400px] relative p-20">
                <div className="absolute w-full flex items-center justify-center top-7">
                  <div className="h-20 w-20 mr-10 rounded-full bg-white"></div>
                </div>
                <div className="h-[300px] w-[500px] border border-zinc-500 rounded-xl px-5 py-5">
                  <p className="text-orange-500 text-6xl font-mono ">"</p>
                  <p className="text-zinc-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus praesentium doloremque dignissimos libero dolor recusandae fugit asperiores doloribus quo ratione. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, voluptatum. Lorem ipsum dolor sit amet.</p>
                  <div className="flex mt-5 items-center">
                    <div className="h-14 w-14 rounded-full mr-2 overflow-hidden bg-white "><img src="" alt="" /></div>
                    <div className="flex flex-col">
                      <p className="capitalize">name of person</p>
                      <p className="text-zinc-400">what they do</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="w-full h-[300px] mt-20 mb-20 flex items-center justify-center">
          <button className="relative text-6xl w-full h-full font-bold border border-yellow-200 rounded-full overflow-hidden group">

            {/* Background Circle */}
            <span className="absolute inset-0 bg-yellow-200 rounded-full transform scale-0 group-hover:scale-150 group-hover:animate-expand-circle transition-all duration-500 ease-out"></span>

            {/* Button Text */}
            <span className="relative z-10 transition-all duration-500 ease-in-out group-hover:text-black">
              <span className="group-hover:hidden">Get a quote</span>
              <span className="hidden group-hover:inline">
              -> Talk with us
              </span>
            </span>

          </button>
        </div>

      </section>
      {/*--------- Awards Section  ----------*/}
      <AwardsAndFactsSection />

      {/* --------- Form Section ------------  */}
      <Form />
    </>
  );
};

export default Home;