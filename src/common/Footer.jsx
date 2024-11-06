import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scrolls to top after navigation
  };

  // Function to handle external links
  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <footer className="bg-lime-100 text-black py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-5">
        {/* Logo and Main Title */}
        <div className="flex flex-col items-start space-y-4">
          <span 
            className="font-bold text-2xl cursor-pointer hover:text-gray-700 transition-colors"
            onClick={() => handleNavigation("/")}
            role="button"
            tabIndex={0}
          >
            Innogative
          </span>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li 
              className="cursor-pointer hover:text-gray-700 transition-colors"
              onClick={() => handleNavigation("/services")}
              role="button"
              tabIndex={0}
            >
              Services
            </li>
            <li 
              className="cursor-pointer hover:text-gray-700 transition-colors"
              onClick={() => handleNavigation("/works")}
              role="button"
              tabIndex={0}
            >
              Works
            </li>
            <li 
              className="cursor-pointer hover:text-gray-700 transition-colors"
              onClick={() => handleNavigation("/company")}
              role="button"
              tabIndex={0}
            >
              About
            </li>
            <li 
              className="cursor-pointer hover:text-gray-700 transition-colors"
              onClick={() => handleNavigation("/blogs")}
              role="button"
              tabIndex={0}
            >
              Blog
            </li>
          </ul>
        </div>

        {/* Follow us */}
        <div>
          <h3 className="font-semibold mb-4">Follow us</h3>
          <ul className="space-y-2">
            <li 
              className="cursor-pointer hover:text-gray-700 transition-colors"
              onClick={() => handleExternalLink("https://instagram.com")}
              role="button"
              tabIndex={0}
            >
              Instagram
            </li>
            <li 
              className="cursor-pointer hover:text-gray-700 transition-colors"
              onClick={() => handleExternalLink("https://linkedin.com")}
              role="button"
              tabIndex={0}
            >
              LinkedIn
            </li>
            <li 
              className="cursor-pointer hover:text-gray-700 transition-colors"
              onClick={() => handleExternalLink("https://facebook.com")}
              role="button"
              tabIndex={0}
            >
              Facebook
            </li>
            <li 
              className="cursor-pointer hover:text-gray-700 transition-colors"
              onClick={() => handleExternalLink("https://x.com")}
              role="button"
              tabIndex={0}
            >
              X
            </li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h3 className="font-semibold mb-4">Locations</h3>
          <ul className="space-y-4">
            <li>
              <strong>Jabalpur Incubation Center (JIC)</strong>
              <br />
              Second Floor, Udyog Bhawan<br />
              Madhya Pradesh, 482001
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-300 pt-4 text-sm text-gray-500 text-center">
        <div>copyright &copy; 2024 | Innogative</div>
      </div>
    </footer>
  );
};

export default Footer;