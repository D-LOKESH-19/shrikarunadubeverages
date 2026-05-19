// import React from 'react'
// import AppleGreen from '../assets/images/Decoration/Footer_AppleGreen_img.png';
// import OrangeImg from '../assets/images/Decoration/Footer_orange_img.png';
// import Logo from '../assets/images/Decoration/Project_Logo.png'
// import { Link } from 'react-router-dom';
// import { Facebook, Instagram, Phone, Mail, MapPin, Circle, Heart } from 'lucide-react'

// const Footer = () => {
//     const quickLinks = [
//         {
//             label: "Home",
//             href: "/"
//         },
//         {
//             label: "About Us",
//             href: "/aboutus"
//         },
//         {
//             label: "Our Brands",
//             href: "/ourbrands"
//         },
//         {
//             label: "Contact US",
//             href: "/contact"
//         }
//     ];
    
//     const contactInfo = [
//         {
//             icon: Phone,
//             text: "+91 80504 04035",
//             color: 'text-pink-500'
//         },
//         {
//             icon: Phone,
//             text: "+91 80505 96283",
//             color: 'text-pink-500'
//         },
//         {
//             icon: Phone,
//             text: "+91 81475 68056",
//             color: 'text-pink-500'
//         },
//         {
//             icon: Mail,
//             text: "shrikarunadubeverages@gmail.com",
//             color: 'text-yellow-500'
//         },
//         {
//             icon: MapPin,
//             text: "SY NO. 139/1, NEAR ADURU GANESHA TEMPLE, BIDARAHALLI, VIRGONAGAR POST, BENGALURU, KARNATAKA-560049, INDIA",
//             color: 'text-green-500',
//             mutiline: true
//         },
//         {
//             icon: Instagram,
//             text: "View our products in Instagram",
//             href: 'https://www.instagram.com/shri_karunadu_beverages_2024?igsh=dzA0M2N6Ym9ycWc3&utm_source=qr',
//             color: 'text-pink-500',
//             isLink: true
//         },
//     ];
    
//     const decorativeDots = [
//         {
//             color: 'text-pink-500'
//         },
//         {
//             color: 'text-yellow-500'
//         },
//         {
//             color: 'text-green-500'
//         }
//     ];

//     return (
//         <footer className='relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:py-16 md:py-20 md:px-12 lg:px-20'>
//             <div className='max-w-7xl mx-auto'>
//                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:px-12 mb-12'>
//                     <div className='space-y-6'>
//                         <div className='flex w-40 h-40 items-center text-2xl font-bold'>
//                             <Link to='/'><img src={Logo} alt="logo" /></Link>
//                         </div>
//                     </div>
                    
//                     <div className='space-y-6'>
//                         <h3 className='text-xl font-semibold border-b-2 border-pink-600 pb-2 inline-block'>
//                             Quick Links
//                         </h3>
//                         <ul className='space-y-4'>
//                             {quickLinks.map((link, index) => (
//                                 <li key={index}>
//                                     <a href={link.href} className='text-gray-300 hover:text-pink-500 transition-colors'>
//                                         {link.label}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
                    
//                     {/* Contact Info Section - Now spans 2 columns on medium+ screens */}
//                     <div className='space-y-6 md:col-span-2'>
//                         <h3 className='text-xl font-semibold border-b-2 border-green-600 pb-2 inline-block'>
//                             Contact Info
//                         </h3>
                        
//                         {/* Grid for contact info - 1 column on small, 2 columns on medium+ */}
//                         <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//                             {/* Column 1 */}
//                             <div className='space-y-4'>
//                                 {contactInfo.slice(0, 3).map((contact, idx) => (
//                                     <div key={idx} className='flex items-center gap-3'>
//                                         <div className='w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0'>
//                                             <contact.icon className={`w-5 h-5 ${contact.color}`} />
//                                         </div>
//                                         <div>
//                                             <p className='text-gray-300'>
//                                                 {contact.text}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
                            
//                             {/* Column 2 */}
//                             <div className='space-y-4'>
//                                 {contactInfo.slice(3).map((contact, idx) => (
//                                     <div key={idx} className={`flex items-center gap-3 ${contact.mutiline ? 'items-start' : ''}`}>
//                                         <div className='w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0'>
//                                             <contact.icon className={`w-5 h-5 ${contact.color}`} />
//                                         </div>
//                                         <div className='flex-1'>
//                                             {contact.isLink ? (
//                                                 <a 
//                                                     href={contact.href} 
//                                                     target="_blank" 
//                                                     rel="noopener noreferrer"
//                                                     className="text-gray-300 hover:text-pink-500 transition-colors underline break-words"
//                                                 >
//                                                     {contact.text}
//                                                 </a>
//                                             ) : (
//                                                 <p className='text-gray-300 whitespace-pre-line break-words'>
//                                                     {contact.text}
//                                                 </p>
//                                             )}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
                
//                 <div className='flex justify-center gap-3 mb-8'>
//                     {decorativeDots.map((dot, idx) => (
//                         <Circle key={idx} className={`${dot.color} w-4 h-4`} />
//                     ))}
//                 </div>
                
//                 <div className='border-t border-gray-700 pt-8 text-center'>
//                     <p className='text-gray-400 flex items-center justify-center gap-1'>
//                         © 2024 DOMAIN_NAME_HERE All Rights Reserved. | Developed By D LOKESH 
//                     </p>
//                 </div>
//             </div>
            
//             <div className='absolute border-2 border-pink-500 bottom-20 left-10 w-16 h-16 rounded-full'>
//                 <img className='w-full h-full object-cover rounded-full' src={AppleGreen} alt="footer_img" />
//             </div>
//             <div className='absolute border-2 border-yellow-500 top-20 right-10 w-20 h-20 rounded-full'>
//                 <img className='w-full h-full object-cover rounded-full' src={OrangeImg} alt="footer_img" />
//             </div>
//         </footer>
//     )
// }

// export default Footer





import React from 'react'
import AppleGreen from '../assets/images/Decoration/Footer_AppleGreen_img.png';
import OrangeImg from '../assets/images/Decoration/Footer_orange_img.png';
import Logo from '../assets/images/Decoration/Project_Logo.png'
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin, Circle, Heart } from 'lucide-react'

const Footer = () => {
    const quickLinks = [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "About Us",
            href: "/aboutus"
        },
        {
            label: "Our Brands",
            href: "/ourbrands"
        },
        {
            label: "Contact US",
            href: "/contact"
        }
    ];
    
    const contactInfo = [
        {
            icon: Phone,
            text: "+91 80504 04035",
            color: 'text-pink-500'
        },
        {
            icon: Phone,
            text: "+91 80505 96283",
            color: 'text-pink-500'
        },
        {
            icon: Phone,
            text: "+91 81475 68056",
            color: 'text-pink-500'
        },
        {
            icon: Mail,
            text: "shrikarunadubeverages@gmail.com",
            color: 'text-yellow-500'
        },
        {
            icon: MapPin,
            text: "SY NO. 139/1, NEAR ADURU GANESHA TEMPLE, BIDARAHALLI, VIRGONAGAR POST, BENGALURU, KARNATAKA-560049, INDIA",
            color: 'text-green-500',
            mutiline: true
        },
        {
            icon: Instagram,
            text: "View our products in Instagram",
            href: 'https://www.instagram.com/shri_karunadu_beverages_2024?igsh=dzA0M2N6Ym9ycWc3&utm_source=qr',
            color: 'text-pink-500',
            isLink: true
        },
    ];
    
    const decorativeDots = [
        {
            color: 'text-pink-500'
        },
        {
            color: 'text-yellow-500'
        },
        {
            color: 'text-green-500'
        }
    ];

    // Function to scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className='relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:py-16 md:py-20 md:px-12 lg:px-20'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:px-12 mb-12'>
                    <div className='space-y-6'>
                        <div className='flex w-40 h-30 items-center text-2xl font-bold'>
                            <Link 
                                to='/' 
                                onClick={scrollToTop}
                            >
                                <img src={Logo} alt="logo" />
                            </Link>
                        </div>
                    </div>
                    
                    <div className='space-y-6'>
                        <h3 className='text-xl font-semibold border-b-2 border-pink-600 pb-2 inline-block'>
                            Quick Links
                        </h3>
                        <ul className='space-y-4'>
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        to={link.href} 
                                        onClick={scrollToTop}
                                        className='text-gray-300 hover:text-pink-500 transition-colors'
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Contact Info Section - Now spans 2 columns on medium+ screens */}
                    <div className='space-y-6 md:col-span-2'>
                        <h3 className='text-xl font-semibold border-b-2 border-green-600 pb-2 inline-block'>
                            Contact Info
                        </h3>
                        
                        {/* Grid for contact info - 1 column on small, 2 columns on medium+ */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {/* Column 1 */}
                            <div className='space-y-4'>
                                {contactInfo.slice(0, 3).map((contact, idx) => (
                                    <div key={idx} className='flex items-center gap-3'>
                                        <div className='w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0'>
                                            <contact.icon className={`w-5 h-5 ${contact.color}`} />
                                        </div>
                                        <div>
                                            <p className='text-gray-300'>
                                                {contact.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Column 2 */}
                            <div className='space-y-4'>
                                {contactInfo.slice(3).map((contact, idx) => (
                                    <div key={idx} className={`flex items-center gap-3 ${contact.mutiline ? 'items-start' : ''}`}>
                                        <div className='w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0'>
                                            <contact.icon className={`w-5 h-5 ${contact.color}`} />
                                        </div>
                                        <div className='flex-1'>
                                            {contact.isLink ? (
                                                <a 
                                                    href={contact.href} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-gray-300 hover:text-pink-500 transition-colors underline break-words"
                                                >
                                                    {contact.text}
                                                </a>
                                            ) : (
                                                <p className='text-gray-300 whitespace-pre-line break-words'>
                                                    {contact.text}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='flex justify-center gap-3 mb-8'>
                    {decorativeDots.map((dot, idx) => (
                        <Circle key={idx} className={`${dot.color} w-4 h-4`} />
                    ))}
                </div>
                
                <div className='border-t border-gray-700 pt-1 text-center'>
                    <p className='text-gray-400 flex items-center justify-center gap-1'>
                        © 2024 DOMAIN_NAME_HERE All Rights Reserved. | Developed By D LOKESH 
                    </p>
                </div>
            </div>
            
            <div className='absolute border-2 border-pink-500  bottom-30 md:bottom-40 left-10 w-16 h-16 rounded-full'>
                <img className='w-full h-full object-cover rounded-full' src={AppleGreen} alt="footer_img" />
            </div>
            <div className='absolute border-2 border-yellow-500 top-15 right-10 w-20 h-20 rounded-full'>
                <img className='w-full h-full object-cover rounded-full' src={OrangeImg} alt="footer_img" />
            </div>
        </footer>
    )
}

export default Footer