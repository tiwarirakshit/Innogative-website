import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Play } from 'lucide-react';

const ProjectPage = ({ projects }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const slideInterval = useRef(null);

  // Combine main image with additional images for slideshow
  const allImages = project ? [project.imageUrl, ...(project.images || [])] : [];

  useEffect(() => {
    // Start the slideshow
    if (allImages.length > 1) {
      slideInterval.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change image every 5 seconds
    }

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [allImages.length]);

  // Reset slideshow when changing projects
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

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

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    // Reset the interval when manually changing images
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
  };

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
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
      <Link
        to="#contact"
        id="custom-circle"
        className="custom-circle z-[5000] hidden md:block bg-white"
      >
      </Link>
      <article className=" px-4 sm:px-6 lg:px-28 py-16 bg-white">
        {/* Breadcrumb */}
        <div className="mb-4 flex items-center text-sm text-gray-500 mt-10 ">
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
        
        {/* Main Project Image with Slideshow */}
        <div className="relative w-full  aspect-video mb-8 overflow-hidden rounded-2xl group">
          {allImages.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt={`${project.title} - Slide ${index + 1}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          {/* Slide indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {allImages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleImageClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-white w-4' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Images Grid - Single Line with Hidden Scrollbar and Drag Scroll */}
        {project.images && project.images.length > 0 && (
          <div className="mb-16">
            <div
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className={`
                flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x cursor-grab
                ${isDragging ? 'cursor-grabbing select-none' : ''}
              `}
              style={{
                scrollBehavior: isDragging ? 'auto' : 'smooth',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {allImages.map((image, index) => (
                <div 
                  key={index}
                  onClick={() => handleImageClick(index)}
                  className={`
                    relative w-64 flex-none aspect-[6/3] md:aspect-[4/3] lg:aspect-[4/3] overflow-hidden rounded-xl snap-start cursor-pointer
                    ${currentImageIndex === index ? 'ring-2 ring-blue-500' : ''}
                  `}
                  style={{ userSelect: 'none' }}
                >
                  <img 
                    src={image} 
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    draggable="false"
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