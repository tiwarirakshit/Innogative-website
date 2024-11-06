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

  return (
    <>
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
                      <path d="M2 17C133.333 7.66667 267.667 3.33333 399 4" stroke="#f97316" strokeWidth="3" strokeLinecap="round"/>
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
      <section id="design" className="min-h-screen">
        <DesignServices />
        <Features />
      </section>

      {/* Discovery Phase Section */}
      <section id="discovery">
        <Discovery />
      </section>

      {/* Development Services Section */}
      <section id="development">
        <DevelopmentServices/>
      </section>

      {/* How We Work Section */}
      <section id="work" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative mb-20">
            <div className="relative text-center">
              <h2 className="sm:text-4xl md:text-5xl font-bold tracking-tight">
                Did you face{' '}
                <span className="text-orange-500 ">miscommunication</span> between
                <br />
                design & development
                <br />
                teams?
              </h2>
              <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto">
                Our developers and designers cooperate closely to overcome any challenges.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <div className="group p-8 rounded-2xl transition-all duration-300 hover:bg-gray-50">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                <MessageSquare className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Efficient Team Communication</h3>
              <p className="text-gray-600 leading-relaxed">
                Our development team is in frequent contact with our designers. Thanks to this, any problems are tackled rapidly at source.
              </p>
            </div>

            <div className="group p-8 rounded-2xl transition-all duration-300 hover:bg-gray-50">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                <Brain className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Research-Driven Success</h3>
              <p className="text-gray-600 leading-relaxed">
                Thorough research at both the beginning of a project and during the discovery stage is key to success. This includes business analysis for large products, as it minimizes the number of edits that are needed.
              </p>
            </div>

            <div className="group p-8 rounded-2xl transition-all duration-300 hover:bg-gray-50">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                <Code2 className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Future-Proof Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Our developers are highly trained, and their designs can always be scaled in the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Empty sections for remaining nav items */}
      <section id="cases" className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="text-4xl font-bold text-center">Our Cases</h2>
        </div>
      </section>

      <section id="reviews" className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="text-4xl font-bold text-center">Client Reviews</h2>
        </div>
      </section>

      <section id="awards" className="min-h-screen bg-gray-50">
        <AwardsAndFactsSection/>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="min-h-screen bg-white">
        <Form/>
      </section>
    </>
  );
};

export default Services;
