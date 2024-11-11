import React from "react";
import projectData from '../data.json';
import { useNavigate,Link } from "react-router-dom";
export default function Cases() {
  // Extract the first four items from the portfolioData
  const projects = projectData.projects.slice(0, 4);
  const navigate=useNavigate();

  return (
    <section className=" px-4 py-16 bg-white">
      <div className="relative z-10 pointer-events-auto max-w-7xl mx-auto">
        <div className="flex justify-between">
          <p className="text-gray-600 mb-4">Selected works</p>

          <p className="text-4xl md:text-5xl lg:text-8xl leading-[10px] font-bold mb-16">
            See <span className="text-blue-500 leading-[50px] ">the results</span>
            <br />
            of our work
            <br />
            across <span className="text-blue-500 relative leading-3">industries</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((item, index) => (
            <div key={item.id} className="group relative">
              <div className="relative overflow-hidden rounded-lg aspect-video md:aspect-square lg:aspect-video">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                {/* Decorative elements */}
                {index === 0 && (
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-yellow-300"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-yellow-300"></div>
                  </div>
                )}
                {index === 1 && (
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-full opacity-50 blur-xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-50 blur-xl"></div>
                  </div>
                )}
              </div>

              <div className="mt-6">
                <div className="flex justify-around items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.type.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to={`/works/${item.id}`} 
                    className="inline-flex items-center text-white bg-black rounded-full px-3 py-2 font-semibold group-hover:text-blue-500 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 ml-2 mr-1 -rotate-45"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    </Link>

                   
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center items-center">
        <button 
              onClick={() => navigate('/works')}
              className="relative z-10 w-48 h-48 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-semibold 
                 overflow-hidden focus:outline-none focus:ring-4 focus:ring-orange-300 
                 transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              All Projects
            </button>
        </div>
      </div>
    </section>
  );
}
