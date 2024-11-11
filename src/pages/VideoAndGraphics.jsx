import React, { useState,useEffect } from 'react';
import Slider from 'react-slick';
import './VideoAndGraphics.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoAndGraphics = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
    // Add more items here
  ];

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
    const speed = 0.2; // Speed of following the mouse (0.1 = slow, 1 = instant)

    // Update target position on mouse move
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX; // Use clientX for viewport-relative coordinates
      mouseY = e.clientY; // Use clientY for viewport-relative coordinates
    });

    // Smooth movement using requestAnimationFrame
    const smoothMove = () => {
      // Calculate the difference and apply the speed factor
      circleX += (mouseX - circleX) * speed;
      circleY += (mouseY - circleY) * speed;

      // Update the circle position
      circle.style.left = `${circleX}px`;
      circle.style.top = `${circleY}px`;

      requestAnimationFrame(smoothMove); // Keep the animation going
    };

    smoothMove(); // Start the animation

    return () => {
      document.removeEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
    };
  }, []);

  return (
    <>
      <a href="#contact" id="custom-circle" className="custom-circle other-style z-[5000]">
        <span>-> Let's Talk</span>
      </a>
      <div className="video-and-graphics-container overflow-hidden">
        {/* Full-Screen Preview */}
        <div className="preview-container brightness-75">
          {selectedMedia ? (
            selectedMedia.type === 'image' ? (
              <img src={selectedMedia.src} alt="Preview" className="preview-media w-full h-full object-cover " />
            ) : (
              <video src={selectedMedia.src} controls autoPlay className="preview-media" />
            )
          ) : (
            <div className="preview-placeholder">Select a media to preview</div>
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
