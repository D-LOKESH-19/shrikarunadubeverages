

// import { useState, useEffect, useRef } from 'react';

// const HeroSection2 = () => {
//   // ============================================================================
//   // CUSTOMIZABLE SETTINGS - CHANGE THESE VALUES AS NEEDED
//   // ============================================================================
//   const SLIDE_DURATION =6000; // 10 seconds - CHANGE THIS VALUE (in milliseconds)
//   // Example: 5000 = 5 seconds, 7000 = 7 seconds, 15000 = 15 seconds
  
//   const TRANSITION_DURATION = 700; // Transition animation duration (in milliseconds)

//   // ============================================================================
//   // HERO SLIDES DATA ARRAY
//   // ============================================================================
//   const heroSlides = [
//     {
//       id: 1,
//       logo: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=200&h=200&fit=crop",
//       text: "Premium Collection",
//       paragraph: "Discover our exclusive range of premium products designed for excellence and durability.",
//       productImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
//       bgColor: "bg-gradient-to-br from-blue-50 via-white to-purple-50",
//       accentColor: "text-blue-600",
//       bgAccentColor: "bg-blue-600"
//     },
//     {
//       id: 2,
//       logo: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=200&h=200&fit=crop",
//       text: "Innovative Design",
//       paragraph: "Cutting-edge technology meets elegant design. Our products redefine modern living.",
//       productImage: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&h=800&fit=crop",
//       bgColor: "bg-gradient-to-br from-green-50 via-white to-teal-50",
//       accentColor: "text-green-600",
//       bgAccentColor: "bg-green-600"
//     },
//     {
//       id: 3,
//       logo: "https://images.unsplash.com/photo-1567446537710-0e9b8d4d8c4d?w=200&h=200&fit=crop",
//       text: "Sustainable Living",
//       paragraph: "Eco-friendly products that combine style with sustainability. Better for you and the planet.",
//       productImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
//       bgColor: "bg-gradient-to-br from-amber-50 via-white to-orange-50",
//       accentColor: "text-amber-600",
//       bgAccentColor: "bg-amber-600"
//     },
//     {
//       id: 4,
//       logo: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=200&h=200&fit=crop",
//       text: "Luxury Redefined",
//       paragraph: "Experience opulence like never before. Premium materials crafted to perfection.",
//       productImage: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&h=800&fit=crop",
//       bgColor: "bg-gradient-to-br from-purple-50 via-white to-pink-50",
//       accentColor: "text-purple-600",
//       bgAccentColor: "bg-purple-600"
//     }
//   ];

//   // Brand logo (always visible)

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const slideIntervalRef = useRef(null);
//   const progressBarRef = useRef(null);

//   // ============================================================================
//   // AUTO-SLIDE FUNCTION - SIMPLIFIED (NO HOVER PAUSE)
//   // ============================================================================
//   const startAutoSlide = () => {
//     // Clear any existing interval first
//     if (slideIntervalRef.current) {
//       clearInterval(slideIntervalRef.current);
//     }
    
//     // Start new interval - NO HOVER CHECK
//     slideIntervalRef.current = setInterval(() => {
//       goToNextSlide();
//     }, SLIDE_DURATION); // Uses the customizable duration
//   };

//   // ============================================================================
//   // GO TO NEXT SLIDE
//   // ============================================================================
//   const goToNextSlide = () => {
//     if (isTransitioning) return;
    
//     setIsTransitioning(true);
    
//     // Reset progress bar
//     if (progressBarRef.current) {
//       progressBarRef.current.style.animation = 'none';
//       void progressBarRef.current.offsetWidth; // Trigger reflow
//       progressBarRef.current.style.animation = `progress ${SLIDE_DURATION}ms linear forwards`;
//     }
    
//     setTimeout(() => {
//       setCurrentSlide((prev) => {
//         const nextSlide = (prev + 1) % heroSlides.length;
//         return nextSlide;
//       });
//       setIsTransitioning(false);
//     }, TRANSITION_DURATION);
//   };

//   // ============================================================================
//   // GO TO PREVIOUS SLIDE
//   // ============================================================================
//   const goToPrevSlide = () => {
//     if (isTransitioning) return;
    
//     setIsTransitioning(true);
    
//     // Reset progress bar
//     if (progressBarRef.current) {
//       progressBarRef.current.style.animation = 'none';
//       void progressBarRef.current.offsetWidth;
//       progressBarRef.current.style.animation = `progress ${SLIDE_DURATION}ms linear forwards`;
//     }
    
//     setTimeout(() => {
//       setCurrentSlide((prev) => {
//         const prevSlide = (prev - 1 + heroSlides.length) % heroSlides.length;
//         return prevSlide;
//       });
//       setIsTransitioning(false);
//     }, TRANSITION_DURATION);
//   };

//   // ============================================================================
//   // GO TO SPECIFIC SLIDE
//   // ============================================================================
//   const goToSlide = (index) => {
//     if (isTransitioning || index === currentSlide) return;
    
//     setIsTransitioning(true);
    
//     // Reset progress bar
//     if (progressBarRef.current) {
//       progressBarRef.current.style.animation = 'none';
//       void progressBarRef.current.offsetWidth;
//       progressBarRef.current.style.animation = `progress ${SLIDE_DURATION}ms linear forwards`;
//     }
    
//     setTimeout(() => {
//       setCurrentSlide(index);
//       setIsTransitioning(false);
//     }, TRANSITION_DURATION);
//   };

//   // ============================================================================
//   // NO HOVER HANDLERS NEEDED - Auto-slide continues always
//   // ============================================================================

//   // ============================================================================
//   // INITIALIZE AUTO-SLIDE
//   // ============================================================================
//   useEffect(() => {
//     startAutoSlide();
    
//     return () => {
//       if (slideIntervalRef.current) {
//         clearInterval(slideIntervalRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* BRAND LOGO - ALWAYS VISIBLE AT TOP RIGHT */}
//       {/* <div className="absolute top-4 right-4 pl-4 z-30">
//         <div className="relative w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
//           <div className="absolute inset-0 bg-white rounded-full shadow-lg p-1">
//             <div className="w-full h-full rounded-full overflow-hidden border-2 border-white">
//               <img 
//                 src={brandLogo} 
//                 alt="Brand Logo"
//                 className="w-full h-full object-cover"
//                 loading="eager"
//               />
//             </div>
//           </div>
//           <div className="absolute inset-0 rounded-full border-2 border-blue-300 opacity-30 animate-ping"></div>
//         </div>
//       </div> */}

//       {/* BACKGROUND CONTAINER */}
//       <div className={`absolute inset-0 ${heroSlides[currentSlide].bgColor} transition-all duration-700`}>
        
//         {/* MAIN GRID LAYOUT */}
//         <div className="container mx-auto px-4 md:px-6 h-full flex items-center">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
            
//             {/* LEFT COLUMN */}
//             <div className="order-2 lg:order-1 space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12">
              
//               {/* Logo section */}
//               <div className="flex items-center space-x-4 md:space-x-6">
//                 <div className="relative w-14 h-14  md:w-16 md:h-16 lg:w-20 lg:h-20">
//                   <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 rounded-full shadow-md p-1">
//                     <div className="w-full h-full rounded-full overflow-hidden border-2 border-white">
//                       <img 
//                         src={heroSlides[currentSlide].logo} 
//                         alt="Collection Logo"
//                         className="w-full h-full object-cover"
//                         loading="lazy"
//                       />
//                     </div>
//                   </div>
//                   <div className={`absolute inset-0 rounded-full border-2 ${heroSlides[currentSlide].accentColor.replace('text', 'border')} opacity-30 animate-ping`}></div>
//                 </div>
//               </div>

//               {/* Text content */}
//               <div className="space-y-4 md:space-y-6 lg:space-y-8">
//                 <h1 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
//                   <span className="block mb-1 md:mb-2 text-gray-800">{heroSlides[currentSlide].text}</span>
//                   <span className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light ${heroSlides[currentSlide].accentColor}`}>
//                     Collection {currentSlide + 1}
//                   </span>
//                 </h1>
                
//                 <p className={`text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed md:leading-relaxed max-w-xl md:max-w-2xl transition-all duration-700 delay-100 ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
//                   {heroSlides[currentSlide].paragraph}
//                 </p>

//                 {/* CTA Button */}
//                 <div className={`pt-2 transition-all duration-700 delay-200 ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
//                   <button className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-white ${heroSlides[currentSlide].bgAccentColor} hover:opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95`}>
//                     <span className="flex items-center space-x-2">
//                       <span>ENQUIRE NOW</span>
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                       </svg>
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT COLUMN - Product Image */}
//             <div className="order-1 lg:order-2 relative">
//               <div className={`relative h-56 sm:h-64 md:h-72 lg:h-[500px] xl:h-[600px] transition-all duration-700 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
//                 <div className="relative w-full h-full">
//                   {/* Decorative background */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className={`w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px] rounded-full ${heroSlides[currentSlide].bgAccentColor} bg-opacity-5 blur-xl animate-pulse`}></div>
//                   </div>
                  
//                   {/* Product Image */}
//                   <div className="relative z-10 flex items-center justify-center h-full animate-float">
//                     <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]">
//                       <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-transparent rounded-3xl blur-md transform translate-y-4 opacity-60"></div>
                      
//                       <div className="relative w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white">
//                         <img 
//                           src={heroSlides[currentSlide].productImage} 
//                           alt={`Product ${currentSlide + 1}`}
//                           className="w-full h-full object-cover"
//                           loading="lazy"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* DECORATIVE ELEMENTS */}
//         <div className="absolute top-4 right-4 sm:top-8 sm:right-8 lg:top-16 lg:right-32 w-24 h-24 sm:w-32 sm:h-32 lg:w-64 lg:h-64">
//           <div className={`w-full h-full rounded-full ${heroSlides[currentSlide].bgAccentColor} bg-opacity-5 blur-xl animate-spin-slow`}></div>
//         </div>

//         <div className="absolute bottom-4 right-2 sm:bottom-8 sm:right-4 lg:bottom-16 lg:right-16 w-20 h-20 sm:w-24 sm:h-24 lg:w-48 lg:h-48">
//           <div className={`w-full h-full rounded-full ${heroSlides[currentSlide].bgAccentColor} bg-opacity-5 blur-xl animate-pulse`}></div>
//         </div>

//         {/* SLIDER CONTROLS */}
//         <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
//           {heroSlides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`transition-all duration-300 flex items-center justify-center ${index === currentSlide ? 'w-8 sm:w-10' : 'w-2 sm:w-3 hover:w-4'}`}
//               aria-label={`Go to slide ${index + 1}`}
//             >
//               <div className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide ? `w-full ${heroSlides[currentSlide].bgAccentColor}` : 'w-full bg-gray-400 hover:bg-gray-600'}`}></div>
//             </button>
//           ))}
//         </div>

//         {/* Previous/Next buttons */}
//         <button
//           onClick={goToPrevSlide}
//           className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all z-20 backdrop-blur-sm"
//           aria-label="Previous slide"
//         >
//           <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         <button
//           onClick={goToNextSlide}
//           className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all z-20 backdrop-blur-sm"
//           aria-label="Next slide"
//         >
//           <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>

//         {/* Slide counter */}
//         {/* <div className="absolute bottom-6 sm:bottom-8 right-2 sm:right-4 md:right-8 text-xs sm:text-sm text-gray-600 z-20 font-mono">
//           <span className="font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
//           <span className="mx-1 sm:mx-2">/</span>
//           <span className="font-light">{String(heroSlides.length).padStart(2, '0')}</span>
//         </div> */}
//       </div>

//       {/* PROGRESS BAR - Uses customizable duration */}
//       <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gray-200/50 z-10">
//         <div 
//           ref={progressBarRef}
//           className={`h-full ${heroSlides[currentSlide].bgAccentColor} animate-progress`}
//           style={{ 
//             animationDuration: `${SLIDE_DURATION}ms`,
//             animationPlayState: 'running' 
//           }}
//         ></div>
//       </div>

//       {/* CUSTOM CSS ANIMATIONS */}
//       <style jsx>{`
//         @keyframes progress {
//           0% { width: 0%; }
//           100% { width: 100%; }
//         }
        
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
        
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
        
//         .animate-progress {
//           animation: progress linear forwards;
//           animation-play-state: running;
//         }
        
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
        
//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection2;