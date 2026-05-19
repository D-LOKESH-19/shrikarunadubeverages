// import React from "react";
// import galleryData from "../data/gallery/galleryData";

// // =======================
// // MAIN GALLERY COMPONENT
// // =======================
// const MyGallery = () => {
//   return (
//     <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      
//       {/* Header Section */}
//       <div className="max-w-7xl mx-auto mb-12">
//         <h1 data-aos='zoom-in' className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-6">
//           My Gallery
//         </h1>
//         <p   data-aos='fade-up' className="text-lg text-gray-600 text-justify leading-relaxed max-w-4xl mx-auto px-4">
//           Discover our curated collection of breathtaking moments from around the world.
//           Each photograph tells a unique story, capturing the essence of nature's beauty,
//           urban architecture, and human creativity.
//         </p>
//       </div>

//       {/* Gallery Sections */}
//       <div className="max-w-7xl mx-auto space-y-16 lg:space-y-20">

//         {/* SECTION 1 */}
//         <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

//             {/* Left - 4 small images */}
//             <div  className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
//               {galleryData.slice(0, 4).map((image) => (
//                 <ImageCard data-aos='fade-up' data-aos-delay='100' key={image.id} image={image} size="small" />
//               ))}
//             </div>

//             {/* Right - large image */}
//             <div className="h-full">
//               <ImageCard image={galleryData[4]} size="large" />
//             </div>
//           </div>
//         </div>

//         {/* SECTION 2 */}
//         <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

//             {/* Left - large image */}
//             <div className="h-full lg:order-2">
//               <ImageCard image={galleryData[5]} size="large" />
//             </div>

//             {/* Right - 4 small images */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:order-1">
//               {galleryData.slice(6, 10).map((image) => (
//                 <ImageCard key={image.id} image={image} size="small" />
//               ))}
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// // =======================
// // IMAGE CARD COMPONENT
// // =======================
// const ImageCard = ({ image, size = "small" }) => {
//   const heightClass =
//     size === "large"
//       ? "h-[400px] md:h-[500px]"
//       : "h-[300px] sm:h-[340px]";

//   return (
//     <div className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl border-2 border-transparent hover:border-blue-400">
      
//       {/* Image */}
//       <div className={`${heightClass} w-full overflow-hidden`}>
//         <img
//           src={image.imageUrl}
//           alt={image.title}
//           className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
//           loading="lazy"
//         />

//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//         {/* Shine effect */}
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
//       </div>

//       {/* Title */}
//       <div className="bg-white p-4 border-t border-gray-100">
//         <h3 className="font-semibold text-gray-800">{image.title}</h3>
//       </div>
//     </div>
//   );
// };

// export default MyGallery;








import React, { useEffect } from "react";
import galleryData from "../data/gallery/galleryData";
import AOS from 'aos';
import 'aos/dist/aos.css';

// =======================
// MAIN GALLERY COMPONENT
// =======================
const MyGallery = () => {
  
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      delay: 100,
      easing: 'ease-in-out',
      mirror: false,
    });

    // Refresh AOS after component mounts
    setTimeout(() => {
      AOS.refresh();
    }, 100);

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16 px-4">
        <h1 
          data-aos="zoom-in" 
          data-aos-delay="100"
          className="text-3xl md:text-5xl font-semibold text-gray-900 text-center mb-4 tracking-tight"
        >
          My Gallery
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center md:text-left"
        >
          Discover our curated collection of breathtaking moments from around the world.
          Each photograph tells a unique story, capturing the essence of nature’s beauty,
          urban architecture, and human creativity.
        </p>
      </div>


      {/* Gallery Sections */}
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-20">

        {/* SECTION 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

            {/* Left - 4 small images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {galleryData.slice(0, 4).map((image, index) => (
                <ImageCard 
                  key={image.id} 
                  image={image} 
                  size="small"
                  data-aos='fade-up'
                  data-aos-delay={`${(index + 1) * 100}`}
                  data-aos-duration="600"
                />
              ))}
            </div>

            {/* Right - large image */}
            <div className="h-full">
              <ImageCard 
                image={galleryData[4]} 
                size="large"
                data-aos='fade-left'
                data-aos-delay='500'
                data-aos-duration="800"
              />
              <div className="h-[220px] hidden lg:flex items-center justify-center m-2 rounded-2xl 
                bg-white border border-gray-200 shadow-sm px-8 text-center">
                  <h1 className="text-2xl md:text-3xl font-medium text-gray-800 font-poppins leading-relaxed">
                    A simple bottle, a magical pop, and a refreshing sip.<br />
                    That’s the charm of <span className="font-semibold text-blue-600">Goli Soda</span>.
                  </h1>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

            {/* Left - large image */}
            <div className="h-full lg:order-2">
              <ImageCard 
                image={galleryData[5]} 
                size="large"
                data-aos='fade-right'
                data-aos-delay='100'
                data-aos-duration="800"
              />
              {/* <div className="h-[220px] bg-amber-200 hidden lg:block  m-2 rounded-2xl" >Hellow world</div> */}
              <div className="h-[220px] hidden lg:flex items-center justify-center m-2 rounded-2xl 
                bg-white border border-gray-200 shadow-sm px-8 text-center">
                <h1 className="text-2xl md:text-3xl font-medium text-gray-800 font-poppins leading-relaxed">
                  A simple bottle, a magical pop, and a refreshing sip.<br />
                  That’s the charm of <span className="font-semibold text-blue-600">Goli Soda</span>.
                </h1>
              </div>
            </div>

            {/* Right - 4 small images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:order-1">
              {galleryData.slice(6, 10).map((image, index) => (
                <ImageCard 
                  key={image.id} 
                  image={image} 
                  size="small"
                  data-aos='fade-up'
                  data-aos-delay={`${(index + 1) * 100 + 200}`}
                  data-aos-duration="600"
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// =======================
// UPDATED IMAGE CARD COMPONENT
// =======================
const ImageCard = ({ image, size = "small", ...props }) => {
  const heightClass =
    size === "large"
      ? "h-[400px] md:h-[500px]"
      : "h-[300px] sm:h-[340px]";

  return (
    <div 
      {...props} // This will pass data-aos attributes to the root div
      className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl border-2 border-transparent hover:border-blue-400"
    >
      
      {/* Image */}
      <div className={`${heightClass} w-full overflow-hidden`}>
        <img
          src={image.imageUrl}
          alt={image.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      </div>

      {/* Title */}
      <div className="bg-white p-4 border-t border-gray-100">
        <h3 className="font-semibold text-gray-800">{image.title}</h3>
      </div>
    </div>
  );
};

export default MyGallery;