import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import projectData from '../data.json';
import Projects from '../components/Projects';
import Form from '../components/formSection';

const projectCategories = [
  'All projects',
  'Web app',
  'Website',
  'Branding',
  'Mobile app',
];

const industryFilters = [
  'All industries',
  'SaaS',
  'Healthcare',
  'Education',
  'Web3',
  'Ecommerce',
  'Other',
];

const Works = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('filter') || 'All projects');
  const [activeIndustry, setActiveIndustry] = useState('All industries');
  const [visibleProjects, setVisibleProjects] = useState(8);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const filterParam = searchParams.get('filter');
    if (filterParam) {
      if (projectCategories.includes(filterParam)) {
        setActiveCategory(filterParam);
      } else if (industryFilters.includes(filterParam)) {
        setActiveIndustry(filterParam);
      }
    }
  }, [searchParams]);

  const filteredProjects = projectData.projects.filter((project) => {
    const categoryMatch =
      activeCategory === 'All projects' || project.type.includes(activeCategory);
    const industryMatch =
      activeIndustry === 'All industries' || project.type.includes(activeIndustry);
    return categoryMatch && industryMatch;
  });

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting && !loading) {
      setLoading(true);
      // Simulate loading delay
      setTimeout(() => {
        setVisibleProjects((prev) => Math.min(prev + 4, filteredProjects.length));
        setLoading(false);
      }, 500);
    }
  }, [loading, filteredProjects.length]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
    
    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [handleObserver]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'All projects') {
      searchParams.delete('filter');
    } else {
      searchParams.set('filter', category);
    }
    setSearchParams(searchParams);
    setVisibleProjects(8); // Reset visible projects when changing category
  };

  const handleIndustryChange = (industry) => {
    setActiveIndustry(industry);
    if (industry === 'All industries') {
      searchParams.delete('filter');
    } else {
      searchParams.set('filter', industry);
    }
    setSearchParams(searchParams);
    setVisibleProjects(8); // Reset visible projects when changing industry
  };

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
      </Link>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-10">
        <div className="mb-4 flex items-center text-sm text-gray-500 mt-10">
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
                  onClick={() => handleCategoryChange(category)}
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
                  onClick={() => handleIndustryChange(industry)}
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
          <div ref={loader} className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
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