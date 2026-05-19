// MyGalleryHeader.jsx (Version with Props)
import React from 'react';
import { Link } from 'react-router-dom';
import defaultBgImage from "../assets/images/OurBrand-img-bg.png";
const MyGalleryHeader = ({
  title = "Explore Our Brands Products",
  subtitle = "Discover breathtaking moments captured from around the world, explore a world of refreshing flavors.",
  backgroundImage = defaultBgImage,
  showButton = true,
  buttonText = "ENQUIRE NOW →",
  height = "30vh",
  minHeight = "300px"
}) => {
  return (
    <div 
      className="relative w-full overflow-hidden"
      style={{
        height: height,
        minHeight: minHeight
      }}
    >
      {/* Background Image Container */}
      <div data-aos="fade-down" data-aos-delay='100' className="absolute inset-0">
        <img 
          src={backgroundImage} 
          alt="Gallery Background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/40 to-black/30"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative h-full flex items-center justify-center px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 data-aos="fade-right" data-aos-delay='250' className=" md:mt-10 text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-3xl font-bold text-white drop-shadow-2xl leading-tight mb-4">
            {title}
          </h1>
          
          <p data-aos="fade-left" data-aos-delay='280' className="text-base sm:text-lg md:text-xl lg:text-xl text-white/90 font-light max-w-2xl mx-auto mb-6 drop-shadow-lg">
            {subtitle}
          </p>
          
          {showButton && (
            <Link data-aos="fade-up" data-aos-delay='320'
  to="/contact"  // Add your route here
  className="inline-flex items-center justify-center px-6 py-2.5 md:px-8 md:py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300"
>
  {buttonText}
</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyGalleryHeader;
