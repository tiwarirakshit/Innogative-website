import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Headline from '../assets/headerline.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    if (isOpen) {
      toggleMenu();
    }
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCompanyClick = () => {
    navigate('/company');
    setActiveLink('/company');
    setIsDropdownOpen(true);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  const NavLink = ({ to, children }) => (
    <div className="relative">
      <Link
        to={to}
        className={`hover:text-orange-500 ${activeLink === to ? 'text-orange-500' : ''}`}
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
    <nav className="fixed bg-[#121214] text-white py-4 w-full z-[1000]">
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
            {isOpen ? (
              <span className="text-3xl">&#10005;</span>
            ) : (
              <span className="text-3xl">&#9776;</span>
            )}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-16 z-[1000]">
          <NavLink to="/works">Works</NavLink>
          <div className="relative group">
            <button
              className={`hover:text-orange-500 ${activeLink === '/company' ? 'text-orange-500' : ''}`}
              onClick={handleDropdownToggle}
              onMouseEnter={() => setIsDropdownOpen(true)}
            >
              Company
            </button>
            {/* Dropdown */}
            {isDropdownOpen && (
              <div 
                className="absolute top-8 left-[-680px] bg-[#121214] text-white p-8 rounded-lg shadow-lg w-[100vw] flex space-x-12 z-50 justify-center items-center"
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                {/* Circle Button */}
                <button className="bg-yellow-400 text-black py-4 px-8 rounded-full flex items-center space-x-2">
                  <span>&#10132;</span>
                  <span>Let's Talk</span>
                </button>

                {/* Links */}
                <div className="flex flex-col space-y-2">
                  <h4 className="font-bold text-gray-500 text-lg">Behind the Brand</h4>
                  <Link to="/company" className="hover:text-yellow-400" onClick={handleCompanyClick}>About Us</Link>
                  <Link to="/team-and-advisors" className="hover:text-yellow-400" onClick={() => setIsDropdownOpen(false)}>Team and Advisors</Link>
                </div>
              </div>
            )}
          </div>
          {/* <NavLink to="/blogs">Blogs</NavLink> */}
          <NavLink to="/graphics">Video/Graphics</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>

        {/* Get In Touch Button */}
        <div className="hidden md:block">
          <Link 
            to="/contact" 
            className={`flex items-center space-x-2 bg-[#121214] px-4 py-2 rounded-full ${
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
              className="absolute mt-2 w-full h-2 object-cover"
            />
          )}
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-full bg-black z-20">
          <div className="flex flex-col items-start p-8 space-y-8">
            <button className="text-3xl self-end" onClick={toggleMenu}>
              &#10005;
            </button>
            {[{ to: '/works', text: 'Works' }].map(({ to, text }) => (
              <div key={to} className="w-full relative">
                <Link
                  to={to}
                  className={`text-2xl flex w-full justify-between ${
                    activeLink === to ? 'text-red-500' : 'hover:text-orange-500'
                  }`}
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
                className={`text-2xl flex justify-between w-full ${
                  activeLink === '/company' ? 'text-red-500' : 'hover:text-orange-500'
                }`}
              >
                Company <span>{isMobileDropdownOpen ? '-' : '+'}</span>
              </button>
              {isMobileDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2 flex flex-col">
                  <Link to="/company" className="text-lg hover:text-yellow-400" onClick={() => { handleLinkClick('/company'); toggleMenu(); }}>About Us</Link>
                  <Link to="/team-and-advisors" className="text-lg hover:text-yellow-400" onClick={() => { handleLinkClick('/team-and-advisors'); toggleMenu(); }}>Team and Advisors</Link>
                </div>
              )}
            </div>

            {[{ to: '/blogs', text: 'Blogs' }, { to: '/contact', text: 'Contact Us' }].map(({ to, text }) => (
              <div key={to} className="w-full relative">
                <Link
                  to={to}
                  className={`text-2xl flex w-full justify-between ${
                    activeLink === to ? 'text-red-500' : 'hover:text-orange-500'
                  }`}
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;