import React, { useEffect, useRef, lazy, Suspense } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from "react-router-dom";
import StickyNavbar from '../common/StickyNavbar';

const DesignServices = lazy(() => import('../components/DesignServices'));
const Features = lazy(() => import('../components/Features'));
const DevelopmentServices = lazy(() => import('../components/DevelopmentServices'));
const Form = lazy(() => import('../components/formSection'));
const PersonalBranding = lazy(() => import('../components/PersonalBranding'));

const Services = ({ setIsNavbarVisible }) => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const stickyNavPosition = document.querySelector('.sticky-nav').offsetTop;
      const currentScroll = window.pageYOffset;

      // Toggle visibility of the main navbar
      if (currentScroll >= stickyNavPosition) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsNavbarVisible]);

   useEffect(() => {
      const circle = document.getElementById('custom-circle');
      let mouseX = 0, mouseY = 0;
      let circleX = 0, circleY = 0;
      const speed = 0.2;
  
      const handleMouseMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };
  
      document.addEventListener('mousemove', handleMouseMove);
  
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
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

  return (
    <>
      <a href="#contact" id="custom-circle" className="custom-circle other-style z-[5000]">
        <span>Let's Talk</span>
      </a>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 py-32">
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col gap-16 max-w-6xl mx-auto">
            <div className="relative">
              <Sparkles className="text-white absolute -top-8 -left-4 w-8 h-8" />
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight max-w-4xl">
                Get all the <span className="text-orange-500">benefits</span>
                <br />
                <span className="text-white">of</span> working with
                <br />
                <span className="text-orange-500 relative">
                  full-cycle studio
                  <div className="absolute top-full left-0 right-0 -mt-2">
                    <svg
                      className="w-full"
                      viewBox="0 0 400 20"
                      fill="none"
                    >
                      <path
                        d="M2 17C133.333 7.66667 267.667 3.33333 399 4"
                        stroke="#f97316"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </span>
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative group justify-self-start md:justify-self-center">
                <div className="w-48 h-48 bg-[#e5fb52] rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300">
                  <button
                    onClick={scrollToContact}
                    className="flex items-center gap-2 text-zinc-900 font-semibold text-lg"
                  >
                    Let's talk
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="max-w-xl">
                <p className="text-white text-xl leading-relaxed">
                  Learn more about the team of professionals who care about your
                  product as much as you do and the fields we can help you with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Navbar */}
      <section className="sticky-nav shadow-lg">
        <StickyNavbar onVisibilityChange={setIsNavbarVisible} />
      </section>

      {/* Lazy-loaded sections */}
      <Suspense fallback={<div>Loading...</div>}>
        <section id="web" className="bg-white">
          <DesignServices />
        </section>

        <section id="personal">
          <PersonalBranding />
        </section>

        <section id="development" className="min-h-screen">
          <DevelopmentServices />
        </section>
      </Suspense>

      {/* Contact Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <section
          id="contact"
          ref={contactRef}
          className="min-h-screen bg-white"
        >
          <Form />
        </section>
      </Suspense>
    </>
  );
};

export default Services;
