import React, { useEffect, useState } from 'react';

const StickyNavbar = ({ onVisibilityChange }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const stickyNavbar = document.getElementById('sticky-navbar');
      const rect = stickyNavbar.getBoundingClientRect();

      // Check if the sticky navbar has reached the top of the viewport
      if (rect.top <= 0) {
        onVisibilityChange(true);
      } else {
        onVisibilityChange(false);
      }

      // Determine the current section in view
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onVisibilityChange]);

  const navItems = [
    { id: 'web', label: 'Web Services' },
    { id: 'personal', label: 'Personal Branding' },
    { id: 'development', label: 'Development Services' },
    { id: 'design', label: 'Video Editing & Designing' },
    { id: 'contact', label: 'Get in Touch' },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="sticky-navbar"
      className={`w-8/12 mx-auto border-2 rounded-full z-50 transition-all duration-300  ${
        window.scrollY > 0
          ? 'fixed top-0 left-0 right-0 bg-white/30 backdrop-blur-md shadow-sm'
          : 'relative bg-white/30 text-black'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 ">
        <div className="flex justify-center">
          <div className="flex space-x-1 py-4 overflow-x-auto scrollbar-hide">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 rounded-full text-md font-bold transition-all duration-200 whitespace-nowrap
                  ${
                    activeSection === item.id
                      ? 'bg-orange-500 text-white'
                      : 'hover:bg-orange-500 hover:text-white'
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default StickyNavbar;
