import React from "react";
import projectData from "../data.json";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Cases() {
  const projects = projectData.projects.slice(0, 4);
  const navigate = useNavigate();

  return (
    <section className=" px-4 py-16 bg-white">
      <div className="relative z-10 pointer-events-auto max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-2">
          <h3 className="text-gray-600 text-xl font-medium">Selected works</h3>

          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              See <span className="text-blue-500">the results</span>
              <br className="hidden md:block" />
              of our work
              <br className="hidden md:block" />
              across{" "}
              <span className="text-blue-500 relative">
                industries
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500/20 rounded-full"></div>
              </span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((item, index) => (
            <Link
              key={item.id}
              className="group relative"
              to={`/works/${item.id}`}
            >
              <div className="relative overflow-hidden rounded-lg aspect-video md:aspect-square lg:aspect-video ">
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
                  <div className="absolute inset-0 z-10 pointer-events-none ">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-full opacity-50 blur-xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-50 blur-xl"></div>
                  </div>
                )}
              </div>

              <div className="mt-6">
                <div className="flex flex-row justify-between items-center py-1">
                  <div className="flex flex-wrap items-center gap-2">
                    {item.type.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-2 bg-gray-100 rounded-full text-sm text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <Link
                      to={`/works/${item.id}`}
                      className="flex items-center text-white bg-black rounded-full px-3 py-2 font-semibold group-hover:text-blue-500 transition-colors whitespace-nowrap"
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
                      See Case
                    </Link>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="w-full flex justify-center items-center">
          <button
            className="w-48 h-48   rounded-full bg-orange-500 relative overflow-hidden group transition-colors duration-700 hover:bg-transparent"
            onClick={() => navigate("/works")}
          >
            <span className="absolute inset-0 w-full h-full bg-yellow-300 scale-0 group-hover:scale-100 transition-transform duration-700 ease-in-out rounded-full origin-center" />
            <span className="relative z-10 flex items-center justify-center w-full h-full text-black text-xl">
              <ArrowRight height={18} /> All Projects
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
