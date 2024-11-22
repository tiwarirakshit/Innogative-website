import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Projects = ({ projects }) => {
  const navigate = useNavigate();

  const handleTypeClick = (type, event) => {
    // Prevent the click from bubbling up to parent elements
    event.stopPropagation();
    // Navigate to works page with the selected filter
    navigate(`/works?filter=${encodeURIComponent(type)}`);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-lg shadow-lg overflow-hidden ${index % 2 === 1 ? 'md:translate-y-16' : ''}`}
          >
            <div className="relative">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-64 object-cover" 
              />
              <div 
                className={`absolute inset-0 bg-gradient-to-tr from-${getGradientColor(index)} to-transparent opacity-50`}
              />
            </div>
            <div className="p-4 pt-2">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <div className="flex justify-between items-center mb-2">
                <div className="flex flex-wrap gap-2">
                  {project.type.map((type, typeIndex) => (
                    <button
                      key={typeIndex}
                      onClick={(e) => handleTypeClick(type, e)}
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm hover:bg-gray-300 transition-colors cursor-pointer"
                    >
                      {type}
                    </button>
                  ))}
                </div>
                <Link 
                  to={`/works/${project.id}`} 
                  className="inline-flex items-center gap-1 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition text-sm"
                >
                  <ArrowUpRight className='w-5 h-5 ' />
                  See case
                </Link>
              </div>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getGradientColor = (index) => {
  const colors = ['yellow-400', 'pink-500', 'blue-500', 'green-500', 'purple-500', 'red-500'];
  return colors[index % colors.length];
};

export default Projects;