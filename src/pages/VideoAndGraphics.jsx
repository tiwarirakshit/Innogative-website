import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './VideoAndGraphics.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoAndGraphics = () => {
  const mediaItems = [
    { type: 'image', src: 'https://picsum.photos/500/300?random=1' },
    { type: 'image', src: 'https://picsum.photos/500/300?random=2' },
    { type: 'image', src: 'https://picsum.photos/500/300?random=4' },
    { type: 'image', src: 'https://picsum.photos/500/300?random=3' },
    { type: 'image', src: 'https://picsum.photos/500/300?random=5' },
    { type: 'image', src: 'https://picsum.photos/500/300?random=6' },
    { type: 'image', src: 'https://picsum.photos/500/300?random=7' },
    { type: 'image', src: 'https://picsum.photos/500/300?random=8' },
    { type: 'image', src: 'https://picsum.photos/500/300?random=9' },
  ];

  // Initialize selectedMedia with the first item
  const [selectedMedia, setSelectedMedia] = useState(mediaItems[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    focusOnSelect: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const handleSelect = (media) => {
    setSelectedMedia(media);
  };

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
      <div className="video-and-graphics-container overflow-hidden ">
        {/* Full-Screen Preview */}
        <div className="preview-container brightness-75 ">
          {selectedMedia.type === 'image' ? (
            <img src={selectedMedia.src} alt="Preview" className="preview-media w-[70vw] h-[70vh] object-cover rounded-lg" />
          ) : (
            <video src={selectedMedia.src} controls autoPlay className="preview-media" />
          )}
        </div>

        {/* Carousel Overlay */}
        <div className="carousel-container">
          <Slider {...settings}>
            {mediaItems.map((item, index) => (
              <div
                key={index}
                onClick={() => handleSelect(item)}
                className="carousel-item rounded-md overflow-hidden h-38 w-[220px]"
              >
                {item.type === 'image' ? (
                  <img src={item.src} alt={`Media ${index}`} className="carousel-thumbnail rounded-md object-cover h-full w-full shadow-xl" />
                ) : (
                  <video src={item.src} className="carousel-thumbnail" muted />
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default VideoAndGraphics;