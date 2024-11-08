import React, { useState, useEffect } from "react";
import LeadershipTeam from "../components/TeamMembers";
import AdvisorSection from "../components/AdvisorSection";
import { FaChartBar } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import PrinciplesSection from "../components/PrincipleWithParallex";
const TeamAndAdvisors = () => {
  const navigate = useNavigate();
  const [advisors, setAdvisors] = useState([]);
  useEffect(() => {
    const fetchAdvisors = async () => {
      // Simulate API call
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              name: "Oleg Zubchenok",
              position: "CBDO, CDTO, Commercial Director, Board Advisor",
              description:
                "Oleg, an MBA graduate, is a seasoned business consultant, mentor, and advisor specializing in offering valuable insights to business owners and management teams. He has also worked closely with global market leaders in creating strategic business partnerships and technological innovations.",
              image:
                "https://phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2023/09/Cover.jpg.webp",
            },
            {
              name: "Oleg Zubchenok",
              position: "CBDO, CDTO, Commercial Director, Board Advisor",
              description:
                "Oleg, an MBA graduate, is a seasoned business consultant, mentor, and advisor specializing in offering valuable insights to business owners and management teams. He has also worked closely with global market leaders in creating strategic business partnerships and technological innovations.",
              image:
                "https://phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2023/09/adv5-4.png.webp",
            },
            // Add more advisor objects here
          ]);
        }, 1000);
      });

      setAdvisors(response);
    };

    fetchAdvisors();
  }, []);

  return (
    <>
    <a href="#contact" id="custom-circle" className="custom-circle other-style z-[5000]">
        <span>-> Let's Talk</span>
      </a>
      <section className="bg-gray-900 text-white py-16 px-4 md:px-8 lg:px-24 ">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between mx-auto w-10/12 relative">
          {/* Left Text Section */}
          <div className="text-center lg:text-left lg:max-w-lg space-y-8">
            <h1 className="text-4xl md:text-7xl font-bold leading-tight">
              Phenomenon <span className="text-orange-500">Team</span> &
              Advisors
            </h1>
            <p className="text-gray-400 mt-4">
              Meet a team of trusted experts & savvy advisors dedicated to
              delivering profound business results by driving innovation and
              excellence.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="mt-8 lg:mt-0">
            <div className="relative">
              <img
                src="https://phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2023/09/adv1.png.webp"
                alt="Team Advisors Gears"
                className="w-64 h-auto mx-auto lg:w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center lg:justify-start mt-12">
          <a
            href="#contact"
            className="bg-orange-500 text-white rounded-full h-16 w-16 lg:h-36 lg:w-36 flex items-center justify-center font-semibold text-xl hover:bg-orange-600 transition duration-300"
            onClick={() => navigate("/contact")}
          >
            Let's talk
            <span className="ml-2 hidden lg:inline">→</span>
          </a>
        </div>
      </section>

      <section className="w-10/12 mx-auto">
        {/* Placeholder for LeadershipTeam */}
        <LeadershipTeam />
      </section>

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="relative w-full h-64 sm:h-80 lg:h-96">
                <img
                  src="https://phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2023/09/adv2-3.png.webp"
                  alt="Abstract shapes"
                  className="absolute inset-y-0 lg:-left-12 w-full h-full object-contain lg:scale-150"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-2/3 lg:pl-12">
              <h2 className="text-6xl font-bold mb-4 lg:7xl">
                Company
                <br />
                <span className="text-orange-500">
                  Advisors
                  <span className="text-black inline-block transform -rotate-12 ml-1">
                    ′
                  </span>
                </span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Phenomenon is guided and supported by a distinguished team of
                best-in-class and accomplished advisors. With their strategic
                guidance, product vision and business consulting, we empower our
                customers to adopt a forward-thinking approach, seize
                opportunities, and make well-informed decisions that drive their
                companies to new heights of success.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        {advisors.map((advisor, index) => (
          <AdvisorSection
            key={index}
            advisorData={advisor}
            number={index + 1}
          />
        ))}
      </div>

      <section className="w-10/12 mx-auto">
        <PrinciplesSection />
      </section>
      <section className="py-12 mx-auto w-10/12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Card */}
            <div className="p-6 bg-white rounded-lg ">
              <FaChartBar className="text-4xl text-black mb-4" />
              <h3 className="text-2xl font-semibold mb-3">
                Focus on business results
              </h3>
              <p className="text-gray-600 text-lg">
                We do not just create for the sake of creating - we're focused
                on building products that bring results. With our full-cycle
                product services and trusted business advisors, we know how to
                design & develop a product, find its product/market fit, and
                expand it to new markets. Simply saying, how to make your
                product even more successful.
              </p>
            </div>

            {/* Second Card */}
            <div className="p-6 bg-white rounded-lg ">
              <img
                src="https://phenomenonstudio.com/wp-content/uploads/2023/09/8.svg"
                alt=""
                className="w-12 h-12"
              />
              <h3 className="text-2xl font-semibold mb-3">
                Transparency in everything
              </h3>
              <p className="text-gray-600 text-lg">
                We promote transparency everywhere - in our daily communication
                with our dedicated team and customers. We are guided by it on
                every project and every interaction. We believe that
                transparency is key to fruitful collaboration and trust.
              </p>
            </div>

            {/* Third Card */}
            <div className="p-6 bg-white rounded-lg">
              <FaHandshakeSimple className="text-4xl text-black mb-4" />
              <h3 className="text-2xl font-semibold mb-3">
                Partners, not just vendors
              </h3>
              <p className="text-gray-600 text-lg">
                We are not just your vendor, but a reliable partner that cares
                about your product as much as you do. We dive into each process,
                offer our expertise, and make every effort to give you maximum
                value. We're a part of your team and will always have your back.
              </p>
            </div>
          </div>

          {/* Call-to-action Button */}
          <div className="flex justify-center mt-8">
            <button
              className="bg-lime-400 text-black py-3 px-8 rounded-full text-lg flex items-center hover:bg-lime-500 transition"
              onClick={() => navigate("/company")}
            >
              <span>About us</span>
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamAndAdvisors;
