import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Play } from 'lucide-react';

const ProjectPage = ({ projects }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Project not found</h2>
          <p className="mt-4 text-gray-600">The project you're looking for doesn't exist.</p>
          <Link 
            to="/works" 
            className="mt-8 inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const handleTypeClick = (type) => {
    navigate(`/works?filter=${encodeURIComponent(type)}`);
  };

  return (
    <>
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <div className="mb-4 flex items-center text-sm text-gray-500 mt-10">
          <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to="/works" className="hover:text-gray-900 transition-colors">Projects</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-900">{project.title}</span>
        </div>
        
        {/* Project Title */}
        <h1 className="text-6xl font-bold mb-8">{project.title}</h1>
        
        {/* Project Categories/Types */}
        <div className="mb-8">
          {project.type.map((type, index) => (
            <button
              key={index}
              onClick={() => handleTypeClick(type)}
              className="inline-block bg-gray-100 rounded-full px-4 py-1.5 text-xs font-medium text-gray-700 mr-2 mb-2 hover:bg-gray-200 transition-colors"
            >
              {type}
            </button>
          ))}
        </div>
        
        {/* Main Project Image */}
        <div className="relative w-full aspect-video mb-8 overflow-hidden rounded-2xl">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          
        </div>

        {/* Additional Images Grid - Single Line with Hidden Scrollbar */}
        {project.images && project.images.length > 0 && (
          <div className="mb-16">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x">
              {project.images.map((image, index) => (
                <div 
                  key={index}
                  className="relative w-64 flex-none aspect-[4/3] overflow-hidden rounded-xl snap-start"
                >
                  <img 
                    src={image} 
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Project Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </section>

            {/* Video Section */}
            {project.videoUrl && (
              <section className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Project Showcase</h2>
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-gray-900">
                  <iframe
                    src={project.videoUrl}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`${project.title} showcase video`}
                  ></iframe>
                </div>
              </section>
            )}
            
            {project.challenge && (
              <section>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
              </section>
            )}
            
            {project.solution && (
              <section>
                <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                <p className="text-gray-700 leading-relaxed">{project.solution}</p>
              </section>
            )}
            
            {project.results && (
              <section>
                <h2 className="text-2xl font-bold mb-4">Results</h2>
                <p className="text-gray-700 leading-relaxed">{project.results}</p>
              </section>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Project Details</h2>
              <dl className="space-y-4">
                <div>
                  <dt className="font-semibold text-gray-900">Client</dt>
                  <dd className="mt-1 text-gray-700">{project.client || 'N/A'}</dd>
                </div>
                
                <div>
                  <dt className="font-semibold text-gray-900">Timeline</dt>
                  <dd className="mt-1 text-gray-700">{project.date || 'N/A'}</dd>
                </div>
                
                <div>
                  <dt className="font-semibold text-gray-900">Categories</dt>
                  <dd className="mt-1">
                    {project.type.map((type, index) => (
                      <button
                        key={index}
                        onClick={() => handleTypeClick(type)}
                        className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                      >
                        {type}
                        {index < project.type.length - 1 ? ', ' : ''}
                      </button>
                    ))}
                  </dd>
                </div>
                
                {project.website && (
                  <div>
                    <dt className="font-semibold text-gray-900">Website</dt>
                    <dd className="mt-1">
                      <a 
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Visit Website
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </section>
            
            {/* CTA Section */}
            <section className="bg-gray-100 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-3">Interested in similar projects?</h3>
              <p className="text-gray-700 mb-4">Let's discuss how we can help bring your ideas to life.</p>
              <Link 
                to="/contact"
                className="block w-full bg-black text-white text-center px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                Get in Touch
              </Link>
            </section>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="mt-16 flex justify-between items-center pt-8 border-t border-gray-200">
          <Link 
            to="/works"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronRight className="w-4 h-4 mr-2 rotate-180" />
            Back to Projects
          </Link>
        </div>
      </article>
    </>
  );
};

export default ProjectPage;