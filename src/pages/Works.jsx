import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import projectData from '../data.json';
import Projects from '../components/Projects';
import Form from '../components/formSection';

const projectCategories = [
  'All projects',
  'Web app',
  'Website',
  'Branding',
  'Mobile app',
  '3D motion design',
];

const industryFilters = [
  'All industries',
  'SaaS',
  'FinTech',
  'Healthcare',
  'Education',
  'Web3',
  'AR/VR & Meta',
  'Travel & Booking',
  'Other',
];

const Works = () => {
  const [activeCategory, setActiveCategory] = useState('All projects');
  const [activeIndustry, setActiveIndustry] = useState('All industries');
  const [visibleProjects, setVisibleProjects] = useState(4);

  const filteredProjects = projectData.projects.filter((project) => {
    const categoryMatch =
      activeCategory === 'All projects' || project.type.includes(activeCategory);
    const industryMatch =
      activeIndustry === 'All industries' || project.type.includes(activeIndustry);
    return categoryMatch && industryMatch;
  });

  const showMoreProjects = () => {
    setVisibleProjects((prevVisible) => Math.min(prevVisible + 4, filteredProjects.length));
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-10">
        <div className="mb-4 flex items-center text-sm text-gray-500">
          <Link to="/">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span>Projects</span>
        </div>
        
        <h1 className="text-6xl font-bold mb-12">Explore our projects</h1>
        
        <div className="mb-6">
          <ul className="flex flex-wrap gap-3">
            {projectCategories.map((category) => (
              <li key={category}>
                <button
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="w-full h-px bg-gray-200 mb-6"></div>
        
        <div className="mb-12">
          <ul className="flex flex-wrap gap-3">
            {industryFilters.map((industry) => (
              <li key={industry}>
                <button
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    activeIndustry === industry
                      ? 'bg-yellow-300 text-black'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveIndustry(industry)}
                >
                  {industry}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <Projects projects={filteredProjects.slice(0, visibleProjects)} />
        
        {filteredProjects.length === 0 && (
          <p className="text-gray-500 text-center mt-8">No projects found matching the selected filters.</p>
        )}

        {visibleProjects < filteredProjects.length && (
          <div className="flex justify-center mt-24">
            <button
              onClick={showMoreProjects}
              className="bg-orange-500 text-white rounded-full p-4 flex items-center justify-center hover:bg-orange-600 transition-colors"
            >
              <ChevronDown className=" w-6 h-6 mr-2" />
              
              Show more
            </button>
          </div>
        )}
      </section>

      {/* Full-width Form section */}
      <section className="w-full bg-gray-100 py-16">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <Form />
        </div>
      </section>
    </>
  );
};

export default Works;
