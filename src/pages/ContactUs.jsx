import React,{useState,useEffect} from 'react'
import Form from '../components/formSection'
const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        <span> Let's Talk</span>
      </a>
    <div>
      <Form/>
    </div>
    </>
  )
}

export default ContactUs
