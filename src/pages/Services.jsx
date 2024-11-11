import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Brain, MessageSquare, Code2 } from 'lucide-react';
import DesignServices from '../components/DesignServices';
import Features from '../components/Features';
import Discovery from '../components/Discovery';
import StickyNavbar from '../common/StickyNavbar';
import DevelopmentServices from '../components/DevelopmentServices';
import Form from '../components/formSection';
import AwardsAndFactsSection from '../components/AwardsSection';

const Services = ({ setIsNavbarVisible }) => {
  const contactRef = useRef(null); // Reference to the contact section

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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
    window.scrollTo(0, 0);
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

  return (
    <>
      <a href="#contact" id="custom-circle" className="custom-circle other-style z-[5000]">
        <span>-> Let's Talk</span>
      </a>
      <section className="min-h-screen flex items-center justify-center bg-zinc-900 py-32">
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col gap-16 max-w-6xl mx-auto">
            <div className="relative">
              <Sparkles className="text-white absolute -top-8 -left-4 w-8 h-8" />
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight max-w-4xl">
                Get all the <span className="text-orange-500">benefits</span><br />
                <span className="text-white">of</span> working with<br />
                <span className="text-orange-500 relative">
                  full-cycle studio
                  <div className="absolute top-full left-0 right-0 -mt-2">
                    <svg className="w-full" viewBox="0 0 400 20" fill="none">
                      <path d="M2 17C133.333 7.66667 267.667 3.33333 399 4" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>
                </span>
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative group justify-self-start md:justify-self-center">
                <div className="w-48 h-48 bg-[#e5fb52] rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105">
                  <button 
                    onClick={scrollToContact} // Attach click handler
                    className="flex items-center gap-2 text-zinc-900 font-semibold text-lg">
                    Let's talk
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="max-w-xl">
                <p className="text-white text-xl leading-relaxed">
                  Learn more about the team of professionals who care about your product as much as you do and the fields we can help you with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Navbar Section */}
      <section className="sticky-nav">
        <StickyNavbar onVisibilityChange={setIsNavbarVisible} />
      </section>

      {/* Design Services Section */}
      <section id="web" className="min-h-screen">
        <DesignServices />
        <Features />
      </section>

      {/* Design Services Section */}
      <section id="personal" className="min-h-screen">
        <DesignServices />
        <Features />
      </section>

      {/* Development Services Section */}
      <section id="development">
        <DevelopmentServices />
      </section>

      {/* Design Services Section */}
      <section id="design" className="min-h-screen">
        <DesignServices />
        <Features />
      </section>

      

      {/* Empty sections for remaining nav items */}
      <section id="cases" className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="text-4xl font-bold text-center">Our Cases</h2>
        </div>
      </section>

    

      <section id="contact" className="min-h-screen bg-white">
        <Form />
      </section>
    </>
  );
};

export default Services;
