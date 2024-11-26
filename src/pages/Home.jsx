import React, { useEffect, useState } from "react";
import AwardsAndFactsSection from "../components/AwardsSection";
import Form from "../components/formSection";
import Cases from "../components/CasesSection";
import Noise from "../assets/noise.jpg";
import Intro from "../assets/intro.mp4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import testimonialsData from "../testimonials.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowRight } from 'lucide-react';
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
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

const settings = {
  dots: false,
  infinite: true,
  speed: 5000,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  pauseOnHover: false,
  cssEase: "linear",
  navigation: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const services = [
  {
    title: "Website/App Development",
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
  const navigate = useNavigate();
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(testimonialsData);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const circle = document.getElementById("custom-circle");
    let mouseX = 0,
      mouseY = 0;
    let circleX = 0,
      circleY = 0;
    const speed = 0.2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const smoothMove = () => {
      circleX += (mouseX - circleX) * speed;
      circleY += (mouseY - circleY) * speed;

      if (circle) {
        circle.style.left = `${circleX}px`;
        circle.style.top = `${circleY}px`;
      }

      requestAnimationFrame(smoothMove);
    };

    smoothMove();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const circle = document.getElementById("custom-circle");
    const sections = ["banner", "home", "other"];

    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && circle) {
          if (entry.target.id === "home") {
            circle.classList.add("home-style");
            circle.classList.remove("other-style");
          } else {
            circle.classList.add("other-style");
            circle.classList.remove("home-style");
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const circle = document.getElementById("custom-circle");
    const hoverTargets = document.querySelectorAll(".hover-target");

    const handleMouseEnter = (e) => {
      if (circle) {
        circle.style.width = "80px";
        circle.style.height = "80px";
        circle.style.border = "2px solid orange";
        circle.style.backgroundColor = "transparent";
        circle.style.fontSize = "14px";
        const span = circle.querySelector("span");
        if (span) {
          span.style.display = "block";
          span.textContent = e.target.getAttribute("data-text") || "Let's Talk";
        }
      }
    };

    const handleMouseLeave = () => {
      if (circle) {
        circle.style.width = "15px";
        circle.style.height = "15px";
        circle.style.border = "2px solid orange";
        circle.style.backgroundColor = "transparent";
        circle.style.fontSize = "0";
        const span = circle.querySelector("span");
        if (span) {
          span.style.display = "none";
        }
      }
    };

    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", handleMouseEnter);
      target.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      hoverTargets.forEach((target) => {
        target.removeEventListener("mouseenter", handleMouseEnter);
        target.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <Link
        to="#contact"
        id="custom-circle"
        className="custom-circle z-[5000] hidden md:block"
      >
        <span className="h-full w-full flex items-center justify-center mt-12 text-lg"> Let's Talk</span>
      </Link>

      <div id="banner" className="h-screen bg-[#121214] w-full relative">
        <div className="absolute z-[100] w-full h-full flex flex-col items-center justify-center opacity-1 px-4">
          <p className="text-white text-4xl md:text-6xl lg:text-8xl hover-target text-center">
            Innogative
          </p>
          <p className="text-white font-light font-sans text-xs md:text-sm tracking-[8px] md:tracking-[13px] mt-3 uppercase text-center">
            Grow with Innovation
          </p>
        </div>
        <div className="absolute z-[10] w-full h-full bg-[#121214] opacity-[0.7]"></div>
        <div className="absolute w-full h-20 bottom-0 bg-gradient-to-t from-[#121214] to-transparent"></div>
        <video
          src={Intro}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        ></video>
      </div>

      <div
        id="home"
        className="min-h-screen flex items-center justify-center bg-customblack py-12 px-4"
      >
        <section className="text-white w-full md:w-10/12 mx-auto">
          <div className="fixed top-0 left-0 w-full h-screen z-[0] opacity-[0.03]">
            <img src={Noise} alt="" className="w-full h-full" />
          </div>

          <div className="flex flex-col gap-4 mb-8">
            <h2 className="text-lg md:text-xl font-semibold">
              Product Design & Development company for:
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="text-gray-800 bg-white text-center font-semibold py-1 px-3 rounded-2xl text-sm">
                SaaS
              </span>
              <span className="text-gray-800 bg-white text-center font-semibold py-1 px-3 rounded-2xl text-sm">
                Personal Branding
              </span>
              <span className="text-gray-800 bg-white text-center font-semibold py-1 px-3 rounded-2xl text-sm">
                Web & App Development
              </span>
              <span className="text-gray-800 bg-white text-center font-semibold py-1 px-3 rounded-2xl text-sm">
                Video & Graphics
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-[80px] leading-tight md:leading-[100px] font-bold mb-8 w-full lg:w-4/6">
            Get <span className="text-blue-500">user experience</span>
            <br /> design that becomes <br /> your
            <span className="text-blue-500">
              {" "}
              competitive <br />
              advantage
            </span>
          </h1>

          <div className="flex w-full mt-8 md:mt-12">
            <p className="text-lg md:text-2xl w-full lg:w-1/2 lg:ml-auto">
              Achieve product growth with our data-driven design and development
              solutions that avoid common pitfalls, ensuring your SME succeeds
              in the market.
            </p>
          </div>

          <Slider {...settings} className="mt-12 md:mt-20">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
              <div key={index} className="p-4">
                <img
                  src={`https://picsum.photos/500/300?random=${index}`}
                  alt={`Company ${index}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </Slider>
        </section>
      </div>

      <section id="other" className="p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-xl md:text-2xl font-semibold tracking-widest mb-4">
            Services
          </p>
          <h2 className="text-4xl md:text-7xl font-bold mb-8 md:mb-12">
            Boost <span className="text-orange-500">your</span> business
            <br />
            with our <span className="text-orange-500">key services</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-900"
              >
                <div className="absolute inset-0 w-full h-full bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="relative z-10 flex-1 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-white">
                      {service.title}
                    </h3>
                    <p className="group-hover:text-white text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>

                  <div className="relative z-10 w-32 md:w-48">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-32 md:h-48 object-contain group-hover:hidden"
                    />
                    <img
                      src={service.image2}
                      alt={service.title}
                      className="w-full h-32 md:h-48 object-contain hidden group-hover:block"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            <div className="lg:w-[80%] group relative bg-white p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-900">
              <div className="absolute inset-0 w-full h-full bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="relative z-10 flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-white">
                    {websiteDesign.title}
                  </h3>
                  <p className="group-hover:text-white text-sm md:text-base">
                    {websiteDesign.description}
                  </p>
                </div>

                <div className="relative z-10 w-32 md:w-48">
                  <img
                    src={websiteDesign.image}
                    alt={websiteDesign.title}
                    className="w-full h-32 md:h-48 object-contain group-hover:hidden"
                  />
                  <img
                    src={websiteDesign.image2}
                    alt={websiteDesign.title}
                    className="w-full h-32 md:h-48 object-contain hidden group-hover:block"
                  />
                </div>
              </div>
            </div>

            <button
              className="w-48 h-48   rounded-full bg-orange-500 relative overflow-hidden group transition-colors duration-700 hover:bg-transparent"
              onClick={() => navigate("/services")}
            >
              <span className="absolute inset-0 w-full h-full bg-yellow-300 scale-0 group-hover:scale-100 transition-transform duration-700 ease-in-out rounded-full origin-center" />
              <span className="relative z-10 flex items-center justify-center w-full h-full text-black text-xl">
                <ArrowRight height={18} /> All Services
              </span>
            </button>
          </div>
        </div>
      </section>

      <Cases />

      <section className="mt-20 p-4 md:p-8">
        <div className="text-left mb-10 mx-auto w-full md:w-10/12">
          <p className="text-xl md:text-2xl">Industries</p>
          <h2 className="text-4xl md:text-7xl font-bold text-gray-800 w-full md:w-1/2 tracking-wide">
            Our <span className="text-orange-500">main</span> areas
            <br />
            of <span className="text-orange-500">expertise</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full md:w-10/12 mx-auto">
          <div className="relative bg-gray-100 text-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-900 hover:text-white transition duration-300">
            <h3 className="text-3xl md:text-4xl font-semibold mb-8 md:mb-12">
              SaaS
            </h3>
            <p className="text-base md:text-xl mb-4">
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
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="relative bg-gray-100 text-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-900 hover:text-white transition duration-300">
            <h3 className="text-3xl md:text-4xl font-semibold mb-8 md:mb-12">
              Healthcare
            </h3>
            <p className="text-base md:text-xl mb-4">
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
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="relative bg-gray-100 text-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-900 hover:text-white transition duration-300">
            <h3 className="text-3xl md:text-4xl font-semibold mb-8 md:mb-12">
              Content Creation
            </h3>
            <p className="text-base md:text-xl mb-4">
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
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="relative bg-gray-100 text-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-900 hover:text-white transition duration-300">
            <h3 className="text-3xl md:text-4xl font-semibold mb-8 md:mb-12">
              UI/UX
            </h3>
            <p className="text-base md:text-xl mb-4">
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
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#121214] text-white mt-20 p-4 md:p-8 lg:px-32 pt-20">
        <div className="text-4xl md:text-7xl font-semibold">
          <p>
            What do <span className="text-orange-500">people say</span>
          </p>
          <p className="text-orange-500">about us?</p>
        </div>

        <div className="mt-12">
          <Slider {...testimonialsettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2 sm:px-4">
                <div className="relative p-4 sm:p-8 md:p-20">
                  <div className="absolute w-full flex items-center justify-center top-7">
                    <div className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 mr-6 sm:mr-10 rounded-full bg-white"></div>
                  </div>
                  <div className="h-auto md:h-[300px] w-full md:w-[500px] border border-zinc-500 rounded-xl p-3 sm:p-4 md:p-5">
                    <p className="text-3xl sm:text-4xl md:text-6xl font-mono text-orange-500">
                      "
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-zinc-400">
                      {testimonial.content ||
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus praesentium doloremque dignissimos libero dolor recusandae fugit asperiores doloribus quo ratione."}
                    </p>
                    <div className="flex mt-3 sm:mt-4 md:mt-5 items-center">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full mr-2 overflow-hidden bg-white"></div>
                      <div className="flex flex-col">
                        <p className="capitalize text-xs sm:text-sm md:text-base">
                          {testimonial.name || "name of person"}
                        </p>
                        <p className="text-xs md:text-sm text-zinc-400">
                          {testimonial.role || "what they do"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="w-full h-[200px] md:h-[300px] mt-12 md:mt-20 mb-12 md:mb-20 flex items-center justify-center">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="relative text-3xl md:text-6xl w-full h-full font-bold border border-yellow-200 rounded-full overflow-hidden group"
          >
            <span className="absolute inset-0 bg-yellow-200 rounded-full transform scale-0 group-hover:scale-150 group-hover:animate-expand-circle transition-all duration-500 ease-out"></span>
            <span className="relative z-10 pointer-events-auto transition-all duration-500 ease-in-out group-hover:text-black">
              <span className="group-hover:hidden">Get a quote</span>

              <span className="hidden group-hover:inline"> Talk with us</span>
            </span>
          </button>
        </div>
      </section>

      <AwardsAndFactsSection />

      <div id="contact" className="relative z-10 pointer-events-auto">
        <Form />
      </div>
    </>
  );
};

export default Home;
