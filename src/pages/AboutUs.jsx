import React from 'react'
import AppleGreen from '../assets/images/Decoration/Footer_AppleGreen_img.png';
import OrangeImg from '../assets/images/Decoration/Footer_orange_img.png';
import AboutUs from  '../assets/images/Decoration/About_Us_Img.jpeg'
// import about from '../assets/about.png'
import { ArrowRight, Circle, Target,User,Eye } from 'lucide-react'
const About = () => {
    return (
        <section id='about' className='relative overflow-hidden bg-gradient-to-br from-blue-200 to-purple-300 
        py-12 px-4 sm:py-16 md:py-20 md:px-12 lg:px-20 
        flex flex-col lg:flex-row items-center justify-between'>
            <div className='flex-1 w-full lg:mr-8 xl:mr-12 relative order-2 lg:order-1 mt-10 lg:mt-0'>
                <div className='w-full max-w-md mx-auto lg:max-w-lg xl:max-w-xl h-[450px] sm:h-[450px] md:h-[550px] lg:h-[550px] xl:h-[550pxx] overflow-hidden shadow-lg md:shadow-xl relative z-10 -rotate-2 rounded-2xl hover:rotate-0 transition-transform duration-700' data-aos="fade-right" data-aos-delay="200">
                <img className= ' w-full h-full object-cover' src={AboutUs} alt="AboutUs" />
                </div>
                {/* <div className='hidden md:block absolute border-2 border-pink-500  -bottom-4 -right-4 w-16 h-16 md:w-20 md:h-20  lg:w-24 rounded-full  z-1' data-aos='zoom-in' data-aos-delay='500'>
                  <img src={AppleGreen} alt="about-img" />
                </div>
                <div className='hidden md:block absolute border-2 border-green-500  -top-20 -left-4 w-16  h-16 md:w-20 md:h-20 lg:w-24 rounded-full z-1' data-aos='zoom-in' data-aos-delay='600'>
                  <img src={OrangeImg} alt="about-img" />
                </div> */}
            </div>
            
            <div className='flex-1 w-full max-w-2xl mx-auto lg:mx-0 space-y-6 md:space-y-8 relative z-20 order-1 lg:order-2'>
                <div className='mb-6 md:mb-8' data-aos='fade-left'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl text-gray-900 text-center lg:text-left '>
                        About {" "}
                        <span className='font-bold text-black lg:inline'>
                            Us<span className='text-gray-500'>.</span>
                        </span>
                    </h2>
                    <div className='flex gap-3 mt-4 justify-center lg:justify-start'>
                        <Circle className="text-pink-500 w-5 h-5" />
                        <Circle className="text-yellow-500 w-5 h-5" />
                        <Circle className="text-green-500 w-5 h-5" />
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-1 gap-4 md:gap-6 mt-8 md:mt-10' data-aos='fade-up' data-aos-delay='200'>
                    <div className='bg-white  p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 shadow-md md:shadow-lg transition-all hover:shadow-xl '>
                      <div className='mb-2 flex gap-12 mt-2' >
                          <div className='w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg bg-pink-100 mb-3 md:mb-4'>
                            <Target className='text-pink-600 w-5 h-5 md:w-6 md:h-6' />
                        </div>
                        <h3 className='text-base md:text-lg font-semibold text-gray-800 mb-2'>
                            Our Mission
                        </h3>
                      </div>
                        <div className='flex flex-col gap-4'>
                       <ul className=" pl-18 list-disc space-y-2">
                          <li className=" text-gray-600 text-sm">
                            lorem ipsum dolor sit amet consectetur adipisicing elit.
                           </li>
                          <li className="text-gray-600 text-sm">
                            lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </li>
                        </ul>
                        
                      </div>
                    </div>
                    <div className='bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 shadow-md md:shadow-lg transition-all hover:shadow-xl '>
                      <div className='flex gap-12 mt-2'>
                          <div className='w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg bg-yellow-100 mb-3 md:mb-4'>
                            <Eye className='text-yellow-600 w-5 h-5 md:w-6 md:h-6' />
                          </div>
                          <h3 className='text-base md:text-lg font-semibold text-gray-800 mb-2'>
                            Our Vision
                          </h3>
                      </div>
                      <div className='flex flex-col gap-4'>
                       <ul className=" pl-18 list-disc space-y-2">
                          <li className=" text-gray-600 text-sm">
                            lorem ipsum dolor sit amet consectetur adipisicing elit.
                           </li>
                          <li className="text-gray-600 text-sm">
                            lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </li>
                        </ul>
                        
                      </div>
                        
                    </div>
                </div>
                {/* <div className='flex justify-center lg:justify-start mt-8 md:mt-10' data-aos='fade-up' data-aos-delay='300'>
                    <button className='px-6 py-3 md:px-8 md:py-4 bg-pink-500 text-white rounded-full font-medium hover:bg-pink-600 transition-all shadow-md hover:shadow-lg flex items-center gap-2 text-sm md:text-base'>
                        Learn more About us
                        <ArrowRight className='h-4 w-4 md:h-5 md:w-5'/>
                    </button>
                </div> */}
            </div>
        </section>
    );
}

export default About