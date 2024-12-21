import React,{useState,useEffect} from 'react';
import { FileText, AlertCircle, Users, Scale } from 'lucide-react';
import { Link } from "react-router-dom";

const Terms = () => {
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
      circle.classList.add("other-style");
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
                <span className="h-full w-full flex items-center justify-center mt-12 text-lg">
                  {" "}
                  Let's Talk
                </span>
              </Link>
    <div className=" px-4 sm:px-6 lg:px-8 py-12 pt-20 bg-white">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-12">
          <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-12">
          <section>
            <div className="flex items-center mb-4">
              <AlertCircle className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">Acceptance of Terms</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using this platform, you accept and agree to be bound by the
              terms and provision of this agreement. If you do not agree to abide by the
              above, please do not use this service.
            </p>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">User Responsibilities</h2>
            </div>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
              <li>You must be at least 18 years old to use this service</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You agree not to engage in any harmful or malicious activities</li>
              <li>You must provide accurate and complete information</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Scale className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">Limitation of Liability</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages, including without limitation, loss of profits, data,
              use, goodwill, or other intangible losses.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            For any questions regarding these Terms of Service, please contact us at:
            <a href="mailto:legal@example.com" className="text-blue-600 hover:text-blue-800">
              {' '}
              legal@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Terms;