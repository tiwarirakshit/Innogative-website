import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2, Minimize2 } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './VideoAndGraphics.css';
const mediaItems = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=2940',
    title: 'Coastal Sunset'
  },
  {
    type: 'video',
    src: 'https://player.vimeo.com/external/517090081.sd.mp4?s=60b8a1c9b89f6cd40971f722f0fd8a8b83b7fe1f&profile_id=165&oauth2_token_id=57447761',
    title: 'Ocean Waves'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1682687220015-186f63b8850a?auto=format&fit=crop&q=80&w=2940',
    title: 'Mountain Vista'
  },
  {
    type: 'video',
    src: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=165&oauth2_token_id=57447761',
    title: 'Forest Stream'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?auto=format&fit=crop&q=80&w=2940',
    title: 'Desert Dunes'
  }
];

const VideoAndGraphics = () => {
  const [selectedMedia, setSelectedMedia] = useState(mediaItems[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [sliderRef, setSliderRef] = useState(null);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') sliderRef?.slickPrev();
      if (e.key === 'ArrowRight') sliderRef?.slickNext();
      if (e.key === 'f') toggleFullscreen();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying(!isPlaying);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [sliderRef, isPlaying]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    autoplay: isPlaying,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    beforeChange: (_, next) => setSelectedMedia(mediaItems[next]),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const circle = document.getElementById('custom-circle');
    let mouseX = 0, mouseY = 0;
    let circleX = 0, circleY = 0;
    const speed = 0.2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);

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
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  
  return (
    <>
     <a href="#contact" id="custom-circle" className="custom-circle other-style z-[5000]">
        <span>Let's Talk</span>
      </a>
    <div className="relative h-screen w-full bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedMedia.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-0"
        >
          {selectedMedia.type === 'image' ? (
            <img
              src={selectedMedia.src}
              alt={selectedMedia.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              src={selectedMedia.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 to-transparent pt-20">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="container mx-auto px-4 pb-8"
        >
          <h2 className="text-white text-3xl font-bold mb-6">{selectedMedia.title}</h2>
          
          <div className="relative">
            <button
              onClick={() => sliderRef?.slickPrev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full z-20 p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <Slider ref={setSliderRef} {...settings} className="gallery-slider">
              {mediaItems.map((item, index) => (
                <div key={index} className="px-2">
                  <div className="relative rounded-lg overflow-hidden aspect-video">
                    {item.type === 'image' ? (
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    ) : (
                      <video
                        src={item.src}
                        muted
                        loop
                        className="w-full h-full object-cover"
                      />
                    )}
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-8 h-8 text-white/80" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </Slider>

            <button
              onClick={() => sliderRef?.slickNext()}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full z-20 p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white" />
          )}
        </button>
        <button
          onClick={toggleFullscreen}
          className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
        >
          {isFullscreen ? (
            <Minimize2 className="w-6 h-6 text-white" />
          ) : (
            <Maximize2 className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
    </div>
    </>
  );
};

export default VideoAndGraphics;

