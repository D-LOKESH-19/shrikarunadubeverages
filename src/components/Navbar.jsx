

import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/Decoration/Project_Logo.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/aboutus" },
  { name: "Our Brands", href: "/ourbrands" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [location.pathname]);

  // Function to handle navigation click
  const handleNavClick = () => {
    setIsMenuOpen(false);
    // Scroll to top immediately when clicking a link
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <nav data-aos-easing="ease-out-cubic" data-aos='zoom-in-left' data-aos-delay='200' className="fixed top-0 left-0 w-full z-50 bg-gray-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo - Made it clickable to home */}
        <Link 
          to="/" 
          onClick={handleNavClick} 
          className="w-25 h-10 text-2xl font-bold"
        >
          <img src={Logo} alt="logo.png" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700 items-center">
          {navItems.map(({ name, href }) => (
            <li key={name}>
              <Link
                to={href}
                onClick={handleNavClick}
                className={`transition-all border-b-2 pb-1 ${
                  location.pathname === href
                    ? "border-pink-500 text-pink-500"
                    : "border-transparent hover:text-gray-900 hover:border-gray-300"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop ENQUIRE Button */}
        <Link
          to="/contact"
          onClick={handleNavClick}
          className="hidden md:flex px-6 py-3 md:px-8 md:py-4 
                     bg-pink-500 text-white rounded-full font-medium 
                     hover:bg-pink-600 transition-all shadow-md 
                     hover:shadow-lg items-center gap-2 
                     text-sm md:text-base"
        >
          ENQUIRE NOW
          <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-white/80 backdrop-blur-md border-t mt-10 shadow-lg"
        >
          {navItems.map(({ name, href }) => (
            <Link
              key={name}
              to={href}
              onClick={handleNavClick}
              className="block px-6 py-3 hover:bg-gray-100"
            >
              {name}
            </Link>
          ))}

          {/* Mobile ENQUIRE Button */}
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="block mx-4 my-3 px-6 py-3 bg-pink-500 text-white rounded-full font-medium hover:bg-pink-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm"
          >
            ENQUIRE NOW
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


