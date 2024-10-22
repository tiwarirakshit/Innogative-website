import React from "react";

const Footer = () => {
  return (
    <footer className="bg-lime-100 text-black py-10 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-5">
        {/* Logo and Main Title */}
        <div className="flex flex-col items-start space-y-4">
          <span className="font-bold text-2xl">Innogative</span>
          {/* <div className="h-16 w-16 border-2 border-orange-500 rounded-full flex items-center justify-center">
            <span className="text-xl text-orange-500">* </span>
          </div> */}
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li>Services</li>
            <li>Works</li>
            <li>About</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Follow us */}
        <div>
          <h3 className="font-semibold mb-4">Follow us</h3>
          <ul className="space-y-2">
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>X</li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h3 className="font-semibold mb-4">Locations</h3>
          <ul className="space-y-4">
            <li>
              <strong>Jabalpur Incubation Center (JIC)</strong>
              <br />
              Second Floor, Udyog Bhawan<br />
              Madhya Pradesh, 482001
            </li>
           
            
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" mt-10 border-t border-gray-300 pt-4 text-sm text-gray-500 text-center">
        <div>copyright &copy; 2024 | Innogative</div>
      </div>
    </footer>
  );
};

export default Footer;


// https://phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2024/10/Awards-1-1.png.webp
//https://phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2024/10/image-292.png.webp