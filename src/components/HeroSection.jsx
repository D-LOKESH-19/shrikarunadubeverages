
// import { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const HeroSection = () => {
//   const SLIDE_DURATION = 6000;
//   const TRANSITION_DURATION = 700;

//   const LEAF_IMG = "../src/assets/images/Hero/Leaf image.png"
//   const BLUE_LEAF_IMG = "../src/assets/images/Hero/leaf img 1.png"
//   const Logo = "../src/assets/images/Project_Logo.png"
  
//   const heroSlides = [
//     {
//       // blue berry
//       id: 1,
//       logo: Logo,
//       text: "Thirsty Time",
//       paragraph: "Discover our handcrafted drinks made for bringing families together, creating memorable moments and joyful celebrations with every bottle",
//       productImage: "../src/assets/images/Hero/Hero-BuleBerry-heroImage.png",
//       bgColor: "bg-gradient-to-br from-[#00BFFF] via-[#33CCFF] to-[#00A3DA]",
//       accentColor: "text-[#0F172A]",
//       bgAccentColor: "bg-pink-500",
//       decorate1: LEAF_IMG,
//       decorate2: "../src/assets/images/Hero/Hero-BlueBerry-f1.png",
//       decorate3: BLUE_LEAF_IMG,
//       decorate4: "../src/assets/images/Hero/Hero-BlueBerry-f2.png"
//     },
//     {
//       // oranage
//       id: 2,
//       logo: Logo,
//       text: "80's Goli Soda",
//       paragraph: "Uncover our heritage-inspired drinks that celebrate Karnataka's rich flavors, bringing traditional taste to modern tables with pride and authenticity.",
//       productImage: "../src/assets/images/Hero/Hero-Ornage_HeroImage.png",
//       bgColor: "bg-gradient-to-br from-[#FFB400] via-[#FFC133] to-[#FF9100]",
//       accentColor: "text-green-600",
//       bgAccentColor: "bg-green-600",
//       decorate1: LEAF_IMG,
//       decorate2: "../src/assets/images/Hero/Hero-Orange-f1.png",
//       decorate3: BLUE_LEAF_IMG,
//       decorate4: "../src/assets/images/Hero/Hero-Orange-f2.png"
//     },
//     {
//      // Lemon
//       id: 3,
//       logo: Logo ,
//       text: "Thirsty Time",
//       paragraph: "Explore our collection of naturally fresh beverages, prepared with care to offer pure refreshment and wholesome goodness for everyday enjoyment.",
//       productImage: "../src/assets/images/Hero/Hero-Lemon-HeroImage.png",
//       bgColor: "bg-gradient-to-br from-[#FDFFB6] via-[#FEFFE0] to-[#FBFF9E",
//       accentColor: "text-amber-600",
//       bgAccentColor: "bg-amber-600",
//       decorate1: LEAF_IMG,
//       decorate2: "../src/assets/images/Hero/Hero_Lemon-f1.png",
//       decorate3: BLUE_LEAF_IMG,
//       decorate4: "../src/assets/images/Hero/Hero-Lemon-g2.png"
//     },
//     {
//       // Mango
//       id: 4,
//       logo: Logo,
//       text: "80's Goli Soda",
//       paragraph: "Explore our carefully curated beverage collection, where traditional recipes meet modern quality standards for refreshing taste in every bottle.",
//       productImage: "../src/assets/images/Hero/Hero_Mango-HeroImage.png",
//       bgColor: "bg-gradient-to-br from-[#FFEC00] via-[#FFF34D] to-[#FFEC00]",
//       accentColor: "text-[#4A1D96]",
//       bgAccentColor: "bg-[#4A1D96]",
//       decorate1: LEAF_IMG,
//       decorate2: "../src/assets//images/Hero/Hero_Mango-f1.png",
//       decorate3: BLUE_LEAF_IMG,
//       decorate4: "../src/assets/images/Hero/Hero_Mango-f2.png"
//     }
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const slideIntervalRef = useRef(null);
//   const progressBarRef = useRef(null);

//   // Initialize AOS
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: false, // Allow animations to trigger multiple times
//       mirror: true,
//       offset: 10,
//       delay: 100,
//     });

//     // Refresh AOS initially
//     setTimeout(() => {
//       AOS.refresh();
//     }, 100);

//     return () => {
//       AOS.refreshHard(); // Clean up AOS
//     };
//   }, []);

//   // Refresh AOS on slide change
//   useEffect(() => {
//     const refreshAOS = setTimeout(() => {
//       AOS.refresh();
//     }, TRANSITION_DURATION + 50); // Wait for transition to complete

//     return () => clearTimeout(refreshAOS);
//   }, [currentSlide]);

//   const startAutoSlide = () => {
//     if (slideIntervalRef.current) {
//       clearInterval(slideIntervalRef.current);
//     }
    
//     slideIntervalRef.current = setInterval(() => {
//       goToNextSlide();
//     }, SLIDE_DURATION);
//   };

//   const goToNextSlide = () => {
//     if (isTransitioning) return;
    
//     setIsTransitioning(true);
    
//     if (progressBarRef.current) {
//       progressBarRef.current.style.animation = 'none';
//       void progressBarRef.current.offsetWidth;
//       progressBarRef.current.style.animation = `progress ${SLIDE_DURATION}ms linear forwards`;
//     }
    
//     setTimeout(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//       setIsTransitioning(false);
//     }, TRANSITION_DURATION);
//   };

//   const goToPrevSlide = () => {
//     if (isTransitioning) return;
    
//     setIsTransitioning(true);
    
//     if (progressBarRef.current) {
//       progressBarRef.current.style.animation = 'none';
//       void progressBarRef.current.offsetWidth;
//       progressBarRef.current.style.animation = `progress ${SLIDE_DURATION}ms linear forwards`;
//     }
    
//     setTimeout(() => {
//       setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
//       setIsTransitioning(false);
//     }, TRANSITION_DURATION);
//   };

//   const goToSlide = (index) => {
//     if (isTransitioning || index === currentSlide) return;
    
//     setIsTransitioning(true);
    
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

//   useEffect(() => {
//     startAutoSlide();
    
//     return () => {
//       if (slideIntervalRef.current) {
//         clearInterval(slideIntervalRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section className="relative -top-2 h-screen w-full overflow-hidden">
//       {/* BACKGROUND CONTAINER */}
//       <div className={`absolute inset-0 ${heroSlides[currentSlide].bgColor} transition-all duration-700`}>
        
//         {/* MAIN GRID LAYOUT */}
//         <div className="container mx-auto px-4 md:px-6 h-full flex items-center">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
            
//             {/* LEFT COLUMN */}
//             <div className="order-2 lg:order-1 space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12">
              
//               {/* Video tag logo */}
//               {/* <div 
//                 key={`logo-${currentSlide}`}
//                 data-aos='fade-right' 
//                 data-aos-delay='100'
//                 className="absolute top-10 left-5 md:top-15 md:left-10 flex items-center space-x-4 md:space-x-6"
//               >
//                 <div className="relative w-25 h-25 md:w-16 md:h-16 lg:w-20 lg:h-20">
//                   <div className="absolute inset-0 rounded-full overflow-hidden">
//                     <video
//                       autoPlay
//                       muted
//                       playsInline
//                       className="w-full h-full object-cover rounded-full"
//                     >
//                       <source src="/public/vedios/KB_Logo_Animation.mp4" type="video/mp4" />
//                       <img 
//                         src={heroSlides[currentSlide].logo} 
//                         alt="Collection Logo"
//                         className="w-full h-full object-cover"
//                         loading="lazy"
//                       />
//                     </video>
//                   </div>
//                   <div className={`absolute inset-0 rounded-full border-2 ${heroSlides[currentSlide].accentColor.replace('text', 'border')} opacity-30 animate-ping`}></div>
//                 </div>
//               </div> */}

//               {/* Text content */}
//               <div className="space-y-4 relative -top-4 md:space-y-6 lg:space-y-8">
//                 <h1 
//                   key={`title-${currentSlide}`}
//                   data-aos='fade-up' 
//                   data-aos-delay='100' 
//                   className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}
//                 >
//                   <span className="block mb-1 md:mb-2 text-gray-800">{heroSlides[currentSlide].text}</span>
//                 </h1>
                
//                 <p 
//                   key={`paragraph-${currentSlide}`}
//                   data-aos='fade-up' 
//                   data-aos-delay='300' 
//                   className={`text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed md:leading-relaxed max-w-xl md:max-w-2xl transition-all duration-700 delay-100 ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}
//                 >
//                   {heroSlides[currentSlide].paragraph}
//                 </p>

//                 {/* CTA Button */}
//                 <div 
//                   key={`cta-${currentSlide}`}
//                   className={`pt-2 transition-all duration-700 delay-200 ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}
//                 >
//                   <Link
//                     to="/contact"
//                     data-aos='fade-up' 
//                     data-aos-delay='400'
//                     className={`inline-flex px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-white ${heroSlides[currentSlide].bgAccentColor} hover:opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95 min-w-fit w-auto`}
//                   >
//                     <span className="flex items-center space-x-2">
//                       <span>ENQUIRE NOW</span>
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                       </svg>
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT COLUMN - Product Image with 4 Decorative Images */}
//             <div className="order-1 lg:order-2 relative">
//               <div className={`relative h-56 sm:h-64 md:h-72 lg:h-[500px] xl:h-[600px] transition-all duration-700 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
//                 <div className="relative w-full h-full flex items-center justify-center">
                  
//                   {/* 1. BOTTOM CENTER IMAGE */}
//                   <div 
//                     key={`decorate1-${currentSlide}`}
//                     className="absolute -bottom-5 md:bottom-10 md:left-10 transform -translate-x-1/2 translate-y-8 z-10 animate-float-slow"
//                   >
//                     <div 
//                       data-aos='fade-left' 
//                       data-aos-delay='400'
//                       data-aos-anchor-placement="center-bottom"
//                       className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32"
//                     >
//                       <img 
//                         src={heroSlides[currentSlide].decorate1} 
//                         alt="Decorative 1"
//                         className="w-full h-full object-contain"
//                         style={{
//                           filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.3)) brightness(0.9) opacity(0.9)',
//                         }}
//                       />
//                     </div>
//                   </div>

//                   {/* 2. CENTER RIGHT IMAGE */}
//                   <div 
//                     key={`decorate2-${currentSlide}`}
//                     className="absolute top-20 right-50 md:top-35 md:left-30 transform -translate-y-1/2 -translate-x-8 z-10 animate-float-delayed"
//                   >
//                     <div 
//                       data-aos='fade-up' 
//                       data-aos-delay='500'
//                       data-aos-anchor-placement="center-center"
//                       className="relative w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-28 lg:h-28"
//                     >
//                       <img 
//                         src={heroSlides[currentSlide].decorate2} 
//                         alt="Decorative 2"
//                         className="w-full h-full object-contain"
//                         style={{
//                           filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.3)) brightness(0.9) opacity(0.85)',
//                         }}
//                       />
//                     </div>
//                   </div>

//                   {/* 3. TOP LEFT IMAGE */}
//                   <div 
//                     key={`decorate3-${currentSlide}`}
//                     className="absolute -top-5 left-70 md:left-50 md:top-0 transform -translate-x-4 -translate-y-4 z-10 animate-float-slow"
//                   >
//                     <div 
//                       data-aos='fade-down' 
//                       data-aos-delay='600'
//                       data-aos-anchor-placement="top-center"
//                       className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
//                     >
//                       <img 
//                         src={heroSlides[currentSlide].decorate3} 
//                         alt="Decorative 3"
//                         className="w-full h-full object-contain"
//                         style={{
//                           filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.3)) brightness(0.9) opacity(0.8)',
//                         }}
//                       />
//                     </div>
//                   </div>

//                   {/* 4. TOP RIGHT IMAGE */}
//                   <div 
//                     key={`decorate4-${currentSlide}`}
//                     className="absolute top-5 right-10 md:right-40 md:top-10 transform translate-x-4 -translate-y-4 z-10 animate-float-delayed"
//                   >
//                     <div 
//                       data-aos='fade-down' 
//                       data-aos-delay='700'
//                       data-aos-anchor-placement="top-center"
//                       className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
//                     >
//                       <img 
//                         src={heroSlides[currentSlide].decorate4} 
//                         alt="Decorative 4"
//                         className="w-full h-full object-contain"
//                         style={{
//                           filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.3)) brightness(0.9) opacity(0.8)',
//                         }}
//                       />
//                     </div>
//                   </div>

//                   {/* MAIN CENTER IMAGE */}
//                   <div className="relative top-5 left-15 z-20 animate-float">
//                     <div className="relative w-full h-full max-w-[90%] mx-auto">
//                       <div className="absolute inset-0 blur-lg opacity-30 transform translate-y-4">
//                         <div className="w-full h-full bg-current opacity-20 rounded-full"></div>
//                       </div>
                      
//                       <div 
//                         key={`product-${currentSlide}`}
//                         data-aos='zoom-in' 
//                         data-aos-delay='200'
//                         data-aos-duration="1000"
//                         className="relative z-10 w-full h-full flex items-center justify-center"
//                       >
//                         <img 
//                           data-aos='fade-left'
//                           data-aos-delay='300'
//                           src={heroSlides[currentSlide].productImage} 
//                           alt={`Product ${currentSlide + 1}`}
//                           className="w-full h-full max-w-[400px] max-h-[350px] md:max-w-[400px] md:max-h-[400px] lg:max-w-[500px] lg:max-h-[500px] object-contain"
//                           loading="lazy"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
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
//           className="absolute left-4 sm:left-6 top-1/2 md:top-3/4  transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all z-20 backdrop-blur-sm"
//           aria-label="Previous slide"
//         >
//           <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         <button
//           onClick={goToNextSlide}
//           className="absolute right-4 sm:right-6 top-1/2 md:top-3/4 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all z-20 backdrop-blur-sm"
//           aria-label="Next slide"
//         >
//           <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>

//       {/* PROGRESS BAR */}
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
//       <style jsx="true">{`
//         @keyframes progress {
//           0% { width: 0%; }
//           100% { width: 100%; }
//         }
        
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//         }
        
//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
        
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-8px); }
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
//           animation: float 4s ease-in-out infinite;
//         }
        
//         .animate-float-slow {
//           animation: float-slow 5s ease-in-out infinite;
//         }
        
//         .animate-float-delayed {
//           animation: float-delayed 6s ease-in-out infinite;
//           animation-delay: 1s;
//         }
        
//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection;

















import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Fix: Use correct import paths (remove the extra '../' since you're already in the right directory)
import leafImg from "../assets/images/Hero/Leaf image.png";
import blueLeafImg from "../assets/images/Hero/leaf img 1.png";
import logoImg from "../assets/images/Decoration/Project_Logo.png";

import blueberryHero from "../assets/images/Hero/Hero-BuleBerry-heroImage.png";
import blueberryF1 from "../assets/images/Hero/Hero-BlueBerry-f1.png";
import blueberryF2 from "../assets/images/Hero/Hero-BlueBerry-f2.png";

import orangeHero from "../assets/images/Hero/Hero-Ornage_HeroImage.png";
import orangeF1 from "../assets/images/Hero/Hero-Orange-f1.png";
import orangeF2 from "../assets/images/Hero/Hero-Orange-f2.png";

import lemonHero from "../assets/images/Hero/Hero-Lemon-HeroImage.png";
import lemonF1 from "../assets/images/Hero/Hero_Lemon-f1.png";
import lemonF2 from "../assets/images/Hero/Hero-Lemon-g2.png";

import mangoHero from "../assets/images/Hero/Hero_Mango-HeroImage.png";
import mangoF1 from "../assets/images/Hero/Hero_Mango-f1.png";
import mangoF2 from "../assets/images/Hero/Hero_Mango-f2.png";

// Add missing constants at the top
const SLIDE_DURATION = 6000;
const TRANSITION_DURATION = 700;

const heroSlides = [
  {
    id: 1,
    logo: logoImg,
    text: "Thirsty Time",
    paragraph:
      "Discover our handcrafted drinks made for bringing families together, creating memorable moments and joyful celebrations with every bottle",
    productImage: blueberryHero,
    bgColor: "bg-gradient-to-br from-[#00BFFF] via-[#33CCFF] to-[#00A3DA]",
    accentColor: "text-[#0F172A]",
    bgAccentColor: "bg-pink-500",
    decorate1: leafImg,
    decorate2: blueberryF1,
    decorate3: blueLeafImg,
    decorate4: blueberryF2,
  },
  {
    id: 2,
    logo: logoImg,
    text: "80's Goli Soda",
    paragraph:
      "Uncover our heritage-inspired drinks that celebrate Karnataka's rich flavors.",
    productImage: orangeHero,
    bgColor: "bg-gradient-to-br from-[#FFB400] via-[#FFC133] to-[#FF9100]",
    accentColor: "text-green-600",
    bgAccentColor: "bg-green-600",
    decorate1: leafImg,
    decorate2: orangeF1,
    decorate3: blueLeafImg,
    decorate4: orangeF2,
  },
  {
    id: 3,
    logo: logoImg,
    text: "Thirsty Time",
    paragraph:
      "Explore our collection of naturally fresh beverages.",
    productImage: lemonHero,
    bgColor: "bg-gradient-to-br from-[#FDFFB6] via-[#FEFFE0] to-[#FBFF9E]",
    accentColor: "text-amber-600",
    bgAccentColor: "bg-amber-600",
    decorate1: leafImg,
    decorate2: lemonF1,
    decorate3: blueLeafImg,
    decorate4: lemonF2,
  },
  {
    id: 4,
    logo: logoImg,
    text: "80's Goli Soda",
    paragraph:
      "Explore our carefully curated beverage collection.",
    productImage: mangoHero,
    bgColor: "bg-gradient-to-br from-[#FFEC00] via-[#FFF34D] to-[#FFEC00]",
    accentColor: "text-[#4A1D96]",
    bgAccentColor: "bg-[#4A1D96]",
    decorate1: leafImg,
    decorate2: mangoF1,
    decorate3: blueLeafImg,
    decorate4: mangoF2,
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideIntervalRef = useRef(null);
  const progressBarRef = useRef(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 10,
      delay: 100,
    });

    setTimeout(() => {
      AOS.refresh();
    }, 100);

    return () => {
      AOS.refreshHard();
    };
  }, []);

  // Refresh AOS on slide change
  useEffect(() => {
    const refreshAOS = setTimeout(() => {
      AOS.refresh();
    }, TRANSITION_DURATION + 50);

    return () => clearTimeout(refreshAOS);
  }, [currentSlide]);

  const startAutoSlide = () => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }
    
    slideIntervalRef.current = setInterval(() => {
      goToNextSlide();
    }, SLIDE_DURATION);
  };

  const goToNextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    if (progressBarRef.current) {
      progressBarRef.current.style.animation = 'none';
      void progressBarRef.current.offsetWidth;
      progressBarRef.current.style.animation = `progress ${SLIDE_DURATION}ms linear forwards`;
    }
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setIsTransitioning(false);
    }, TRANSITION_DURATION);
  };

  const goToPrevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    if (progressBarRef.current) {
      progressBarRef.current.style.animation = 'none';
      void progressBarRef.current.offsetWidth;
      progressBarRef.current.style.animation = `progress ${SLIDE_DURATION}ms linear forwards`;
    }
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      setIsTransitioning(false);
    }, TRANSITION_DURATION);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    
    if (progressBarRef.current) {
      progressBarRef.current.style.animation = 'none';
      void progressBarRef.current.offsetWidth;
      progressBarRef.current.style.animation = `progress ${SLIDE_DURATION}ms linear forwards`;
    }
    
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, TRANSITION_DURATION);
  };

  useEffect(() => {
    startAutoSlide();
    
    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, []);

  return (
    <section className="relative -top-2 h-screen w-full overflow-hidden">
      {/* BACKGROUND CONTAINER */}
      <div className={`absolute inset-0 ${heroSlides[currentSlide].bgColor} transition-all duration-700`}>
        
        {/* MAIN GRID LAYOUT */}
        <div className="container mx-auto px-4 md:px-6 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
            
            {/* LEFT COLUMN */}
            <div className="order-2 lg:order-1 space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12">
              
              {/* Text content */}
              <div className="space-y-4 relative -top-4 md:space-y-6 lg:space-y-8">
                <h1 
                  key={`title-${currentSlide}`}
                  data-aos='fade-up' 
                  data-aos-delay='100' 
                  className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}
                >
                  <span className="block mb-1 md:mb-2 text-gray-800">{heroSlides[currentSlide].text}</span>
                </h1>
                
                <p 
                  key={`paragraph-${currentSlide}`}
                  data-aos='fade-up' 
                  data-aos-delay='300' 
                  className={`text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed md:leading-relaxed max-w-xl md:max-w-2xl transition-all duration-700 delay-100 ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}
                >
                  {heroSlides[currentSlide].paragraph}
                </p>

                {/* CTA Button */}
                <div 
                  key={`cta-${currentSlide}`}
                  className={`pt-2 transition-all duration-700 delay-200 ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}
                >
                  <Link
                    to="/contact"
                    data-aos='fade-up' 
                    data-aos-delay='400'
                    className={`inline-flex px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-white ${heroSlides[currentSlide].bgAccentColor} hover:opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95 min-w-fit w-auto`}
                  >
                    <span className="flex items-center space-x-2">
                      <span>ENQUIRE NOW</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Product Image with 4 Decorative Images */}
            <div className="order-1 lg:order-2 relative">
              <div className={`relative h-56 sm:h-64 md:h-72 lg:h-[500px] xl:h-[600px] transition-all duration-700 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <div className="relative w-full h-full flex items-center justify-center">
                  
                  {/* Decorative images with responsive positioning */}
                  <div 
                    key={`decorate1-${currentSlide}`}
                    className="absolute md:bottom-10 md:left-10 z-10 animate-float-slow"
                    style={{ bottom: '0%', left: '0%' }}
                  >
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32">
                      <img 
                        src={heroSlides[currentSlide].decorate1} 
                        alt="Decorative 1"
                        className="w-full h-full object-contain"
                        style={{
                          filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.3)) brightness(0.9) opacity(0.9)',
                        }}
                      />
                    </div>
                  </div>

                  <div 
                    key={`decorate2-${currentSlide}`}
                    className="absolute md:top-35 md:left-30 z-10 animate-float-delayed"
                    style={{ top: '20%', left: '15%' }}
                  >
                    <div className="relative w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-28 lg:h-28">
                      <img 
                        src={heroSlides[currentSlide].decorate2} 
                        alt="Decorative 2"
                        className="w-full h-full object-contain"
                        style={{
                          filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.3)) brightness(0.9) opacity(0.85)',
                        }}
                      />
                    </div>
                  </div>

                  <div 
                    key={`decorate3-${currentSlide}`}
                    className="absolute md:left-50 md:top-0 z-10 animate-float-slow"
                    style={{ top: '5%', left: '70%' }}
                  >
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                      <img 
                        src={heroSlides[currentSlide].decorate3} 
                        alt="Decorative 3"
                        className="w-full h-full object-contain"
                        style={{
                          filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.3)) brightness(0.9) opacity(0.8)',
                        }}
                      />
                    </div>
                  </div>

                  <div 
                    key={`decorate4-${currentSlide}`}
                    className="absolute md:right-40 md:top-10 z-10 animate-float-delayed"
                    style={{ top: '10%', right: '10%' }}
                  >
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                      <img 
                        src={heroSlides[currentSlide].decorate4} 
                        alt="Decorative 4"
                        className="w-full h-full object-contain"
                        style={{
                          filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.3)) brightness(0.9) opacity(0.8)',
                        }}
                      />
                    </div>
                  </div>

                  {/* MAIN CENTER IMAGE */}
                  <div className="relative z-20 animate-float">
                    <div className="relative w-full h-full max-w-[90%] mx-auto">
                      <div className="absolute inset-0 blur-lg opacity-30 transform translate-y-4">
                        <div className="w-full h-full bg-current opacity-20 rounded-full"></div>
                      </div>
                      
                      <div 
                        key={`product-${currentSlide}`}
                        className="relative z-10 w-full h-full flex items-center justify-center"
                      >
                        <img 
                          src={heroSlides[currentSlide].productImage} 
                          alt={`Product ${currentSlide + 1}`}
                          className="w-full h-full max-w-[400px] max-h-[350px] md:max-w-[400px] md:max-h-[400px] lg:max-w-[500px] lg:max-h-[500px] object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDER CONTROLS */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 flex items-center justify-center ${index === currentSlide ? 'w-8 sm:w-10' : 'w-2 sm:w-3 hover:w-4'}`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide ? `w-full ${heroSlides[currentSlide].bgAccentColor}` : 'w-full bg-gray-400 hover:bg-gray-600'}`}></div>
            </button>
          ))}
        </div>

        {/* Previous/Next buttons */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-4 sm:left-6 top-1/2 md:top-3/4 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all z-20 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNextSlide}
          className="absolute right-4 sm:right-6 top-1/2 md:top-3/4 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all z-20 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* PROGRESS BAR */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gray-200/50 z-10">
        <div 
          ref={progressBarRef}
          className={`h-full ${heroSlides[currentSlide].bgAccentColor} animate-progress`}
          style={{ 
            animationDuration: `${SLIDE_DURATION}ms`,
            animationPlayState: 'running' 
          }}
        ></div>
      </div>

      {/* CUSTOM CSS ANIMATIONS */}
      <style jsx="true">{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .animate-progress {
          animation: progress linear forwards;
          animation-play-state: running;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;