import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Instagram, 
  Linkedin, 
  Facebook, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  const socialLinks = [
    { icon: <Instagram size={20} />, label: "Instagram", url: "https://instagram.com" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", url: "https://linkedin.com" },
    { icon: <Facebook size={20} />, label: "Facebook", url: "https://facebook.com" },
    { icon: <Twitter size={20} />, label: "X", url: "https://x.com" },
  ];

  const navLinks = [
    { label: "Services", path: "/services" },
    { label: "Works", path: "/works" },
    { label: "About", path: "/company" },
    
  ];

  return (
    <footer className="relative z-10 pointer-events-auto bg-gradient-to-br from-lime-50 to-lime-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="space-y-6 md:col-span-4">
            <div 
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => handleNavigation("/")}
              role="button"
              tabIndex={0}
            >
              <Sparkles className="text-lime-600 group-hover:text-lime-700 transition-colors" />
              <span className="text-3xl font-bold bg-gradient-to-r from-lime-700 to-lime-900 bg-clip-text text-transparent">
                Innogative
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Transforming ideas into innovative solutions. 
              Building tomorrow's technology today.
            </p>
          </div>

          {/* Middle Section Container */}
          <div className="grid grid-cols-2 gap-8 md:col-span-4">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <ChevronRight className="text-lime-600" size={20} />
                Explore
              </h3>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <button
                      onClick={() => handleNavigation(link.path)}
                      className="group flex items-center text-gray-600 hover:text-lime-700 transition-colors duration-300"
                    >
                      <span className="w-1 h-1 bg-lime-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <ChevronRight className="text-lime-600" size={20} />
                Connect
              </h3>
              <ul className="space-y-4">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <button
                      onClick={() => handleExternalLink(social.url)}
                      className="group flex items-center space-x-3 text-gray-600 hover:text-lime-700 transition-colors duration-300"
                    >
                      {social.icon}
                      <span>{social.label}</span>
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <ChevronRight className="text-lime-600" size={20} />
              Location
            </h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 flex-shrink-0 text-lime-600" size={20} />
                <div>
                  <p className="font-semibold">Jabalpur Incubation Center (JIC)</p>
                  <p>Second Floor, Udyog Bhawan</p>
                  <p>Madhya Pradesh, 482001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-lime-600" />
                <p>+91 (999) 999-9999</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-lime-600" />
                <p>contact@innogative.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-lime-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} Innogative. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-600">
              <button onClick={() => handleNavigation("/privacy")} className="hover:text-lime-700 transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => handleNavigation("/terms")} className="hover:text-lime-700 transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;