import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Headline from '../assets/headerline.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsMobileDropdownOpen(false);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsOpen(false);
    setIsMobileDropdownOpen(false);
  };

  const handleCompanyClick = () => {
    navigate('/company');
    setActiveLink('/company');
    setIsDropdownOpen(false);
    setIsOpen(false);
  };

  const toggleMobileDropdown = (e) => {
    e.stopPropagation();
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(true);
    }, 200);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
  };

  const NavLink = ({ to, children }) => (
    <div className="relative">
      <Link
        to={to}
        className={`hover:text-orange-500 transition-colors duration-200 ${activeLink === to ? 'text-orange-500' : ''}`}
        onClick={() => handleLinkClick(to)}
      >
        {children}
      </Link>
      {activeLink === to && (
        <img
          src={Headline}
          alt="Underline"
          className="absolute -bottom-4 left-0 w-full h-2 object-cover"
        />
      )}
    </div>
  );

  return (
    <nav className={`fixed w-full z-[1000] ${isSticky ? 'bg-gray-800' : 'bg-[#121214]'} text-white py-4 transition-colors duration-300`}>
      <div className="container flex justify-between items-center w-11/12 mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer z-[1000]">
          <Link to="/" onClick={() => setActiveLink(null)}>
            Inno<span className="text-blue-500">gative</span>
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden z-[1000]">
          <button onClick={toggleMenu}>
            {isOpen ? <span className="text-3xl">&#10005;</span> : <span className="text-3xl">&#9776;</span>}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-16 z-[1000]">
          <NavLink to="/works">Works</NavLink>
          <NavLink to="/services">Services</NavLink>

          {/* Company Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={dropdownRef}
          >
            <button
              className={`hover:text-orange-500 transition-colors duration-200 ${activeLink === '/company' ? 'text-orange-500' : ''}`}
            >
              Company
            </button>
            {isDropdownOpen && (
              <div
                className="absolute top-8 left-[-680px] bg-[#121214] text-white p-8 rounded-lg shadow-lg w-[100vw] flex space-x-12 z-50 justify-center items-center transition-opacity duration-300"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <button className=" bg-yellow-400 text-black py-4 px-8 rounded-full flex items-center space-x-2 hover:bg-yellow-500 transition-colors duration-200"
                onClick={()=>navigate('/contact')}>
                  <span>&#10132;</span>
                  <span>Let's Talk</span>
                </button>
                <div className="flex flex-col space-y-4">
                  <h4 className="font-bold text-gray-500 text-lg">Behind the Brand</h4>
                  <Link 
                    to="/company" 
                    className="hover:text-yellow-400 transition-colors duration-200" 
                    onClick={handleCompanyClick}
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/team-and-advisors" 
                    className="hover:text-yellow-400 transition-colors duration-200" 
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Team and Advisors
                  </Link>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/graphics">Video/Graphics</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>

        {/* Get In Touch Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className={`flex items-center space-x-2 bg-[#121214] px-4 py-2 rounded-full transition-colors duration-200 ${
              activeLink === "/contact-button" ? 'text-red-500' : 'text-white hover:text-orange-500'
            }`}
            onClick={() => handleLinkClick("/contact-button")}
          >
            <span className="inline-flex items-center justify-center bg-white text-black rounded-full h-7 w-7">&#10132;</span>
            <span>Get in touch</span>
          </Link>
          {activeLink === "/contact-button" && (
            <img
              src={Headline}
              alt="Underline"
              className="absolute w-24 h-2"
            />
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black z-20">
          <div className="flex flex-col items-start p-8 space-y-8">
            <button className="text-3xl self-end" onClick={toggleMenu}>
              &#10005;
            </button>
            {[{ to: '/works', text: 'Works' }, { to: '/services', text: 'Services' }].map(({ to, text }) => (
              <div key={to} className="w-full relative">
                <Link
                  to={to}
                  className={`text-2xl flex w-full justify-between transition-colors duration-200 ${activeLink === to ? 'text-red-500' : 'hover:text-orange-500'}`}
                  onClick={() => handleLinkClick(to)}
                >
                  {text} <span>+</span>
                </Link>
                {activeLink === to && (
                  <img
                    src={Headline}
                    alt="Underline"
                    className="absolute -bottom-4 left-0 w-full h-2 object-cover"
                  />
                )}
              </div>
            ))}

            {/* Company Dropdown for Mobile */}
            <div className="w-full relative">
              <button
                onClick={toggleMobileDropdown}
                className={`text-2xl flex justify-between w-full transition-colors duration-200 ${activeLink === '/company' ? 'text-red-500' : 'hover:text-orange-500'}`}
              >
                Company <span>{isMobileDropdownOpen ? '-' : '+'}</span>
              </button>
              {isMobileDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2 flex flex-col">
                  <Link 
                    to="/company" 
                    className="text-lg hover:text-yellow-400 transition-colors duration-200" 
                    onClick={() => { handleLinkClick('/company'); toggleMenu(); }}
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/team-and-advisors" 
                    className="text-lg hover:text-yellow-400 transition-colors duration-200" 
                    onClick={() => { handleLinkClick('/team-and-advisors'); toggleMenu(); }}
                  >
                    Team and Advisors
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/graphics">Video/Graphics</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;