import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FiChevronDown,
  FiSearch,
  FiMessageCircle,
  FiPhone,
  FiMail,
  FiUser,
  FiMenu,
  FiLogIn,
  FiLogOut,
  FiUserPlus,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { contactDetails } from "../config";

const Navbar = () => {
  // State variables
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate login state

  // Refs for handling clicks outside
  const dropdownRef = useRef(null);
  const enquiryRef = useRef(null);
  const searchRef = useRef(null);
  const userRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Services data
  const services = [
    { name: "Technician", path: "/services/technician" },
    { name: "Electrician", path: "/services/electrician" },
    { name: "Plumber", path: "/services/plumber" },
    { name: "Painter", path: "/services/painter" },
    { name: "Carpenter", path: "/services/carpenter" },
    { name: "Cleaning Services", path: "/services/cleaning" },
  ];

  // Toggle functions
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleEnquiry = () => setIsEnquiryOpen(!isEnquiryOpen);
  const toggleUserDropdown = () => setIsUserDropdownOpen(!isUserDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Logout handler
  const handleLogout = () => {
    setIsLoggedIn(false); // Simulate logout
    setIsUserDropdownOpen(false); // Close dropdown after logout
  };

  // Search functionality
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (query) {
      const results = services.filter((service) =>
        service.name.toLowerCase().includes(query)
      );
      setFilteredServices(results);
    } else {
      setFilteredServices([]);
    }
  };

  const handleSearchClick = (servicePath) => {
    setSearchQuery("");
    setFilteredServices([]);
    console.log("Navigating to:", servicePath);
  };

  // Handle clicks outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (dropdownRef.current && !dropdownRef.current.contains(event.target)) &&
        (searchRef.current && !searchRef.current.contains(event.target)) &&
        (enquiryRef.current && !enquiryRef.current.contains(event.target)) &&
        (userRef.current && !userRef.current.contains(event.target)) &&
        (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target))
      ) {
        setIsDropdownOpen(false);
        setFilteredServices([]);
        setIsEnquiryOpen(false);
        setIsUserDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white shadow-lg fixed top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-blue-700 text-4xl font-bold tracking-wide hover:text-blue-800 transition-all duration-300">
            FixBase
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 text-lg items-center">
          <Link to="/" className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-300">
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              onClick={toggleDropdown}
              className="flex items-center text-gray-700 font-medium hover:text-blue-600 transition-all duration-300"
            >
              Services <FiChevronDown className="ml-1" />
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border border-gray-100 rounded-lg py-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-300">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-300">
            Contact
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:block relative" ref={searchRef}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search services..."
            className="bg-gray-50 text-gray-800 rounded-full px-5 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-100 w-64 transition-all duration-300"
          />
          <FiSearch className="absolute right-3 top-2 text-blue-600" size={20} />

          {/* Search Results Dropdown */}
          {filteredServices.length > 0 && (
            <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg border border-gray-100 rounded-lg py-2">
              {filteredServices.map((service) => (
                <Link
                  key={service.name}
                  to={service.path}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                  onClick={() => handleSearchClick(service.path)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          )}
          {searchQuery && filteredServices.length === 0 && (
            <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg border border-gray-100 rounded-lg py-2">
              <p className="px-4 py-2 text-gray-700">Not Found</p>
            </div>
          )}
        </div>

        {/* Enquiry Button */}
        <div className="hidden lg:block relative" ref={enquiryRef}>
          <button
            onClick={toggleEnquiry}
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2"
          >
            <FiMessageCircle className="text-xl" />
            <span>Enquiry</span>
          </button>

          {/* Enquiry Dropdown */}
          {isEnquiryOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg border border-gray-100 rounded-lg py-2">
              <button
                onClick={() => window.location.href = `tel:${contactDetails.phoneNumber}`}
                className="w-full flex items-center space-x-2 text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-all duration-300"
              >
                <FiPhone className="text-blue-600" />
                <span>Call Us</span>
              </button>
              <button
                onClick={() => window.open(`https://wa.me/${contactDetails.whatsappNumber}`, "_blank")}
                className="w-full flex items-center space-x-2 text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-all duration-300"
              >
                <FaWhatsapp className="text-green-600" />
                <span>WhatsApp</span>
              </button>
              <button
                onClick={() => window.location.href = `mailto:${contactDetails.email}`}
                className="w-full flex items-center space-x-2 text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-all duration-300"
              >
                <FiMail className="text-red-600" />
                <span>Email Us</span>
              </button>
            </div>
          )}
        </div>

        {/* User Icon for Login/Signup */}
        <div className="hidden lg:block relative" ref={userRef}>
          <button
            onClick={toggleUserDropdown}
            className="text-gray-700 hover:text-blue-600 transition-all duration-300"
          >
            <FiUser className="text-2xl" />
          </button>

          {/* User Dropdown */}
          {isUserDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg border border-gray-100 rounded-lg py-2">
              {isLoggedIn ? (
                // Logout Button (shown when user is logged in)
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                >
                  <FiLogOut className="mr-2" />
                  <span>Logout</span>
                </button>
              ) : (
                // Login and Signup Buttons (shown when user is not logged in)
                <>
                  <Link
                    to="/login"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                  >
                    <FiLogIn className="mr-2" />
                    <span>Login</span>
                  </Link>
                  <Link
                    to="/signup"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                  >
                    <FiUserPlus className="mr-2" />
                    <span>Sign Up</span>
                  </Link>
                </>
              )}
            </div>
          )}
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-blue-600 transition-all duration-300"
          >
            <FiMenu className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg border-b border-gray-100"
            ref={mobileMenuRef}
          >
            <div className="px-6 py-4">
              <Link to="/" className="block text-gray-700 font-medium hover:text-blue-600 py-2 transition-all duration-300">
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-gray-700 font-medium hover:text-blue-600 py-2 transition-all duration-300"
                >
                  Services <FiChevronDown className="ml-1" />
                </button>

                {isDropdownOpen && (
                  <div className="mt-2 bg-white shadow-lg border border-gray-100 rounded-lg py-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/about" className="block text-gray-700 font-medium hover:text-blue-600 py-2 transition-all duration-300">
                About
              </Link>
              <Link to="/contact" className="block text-gray-700 font-medium hover:text-blue-600 py-2 transition-all duration-300">
                Contact
              </Link>

              {/* Search Bar */}
              <div className="relative mt-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search services..."
                  className="bg-gray-50 text-gray-800 rounded-full px-5 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-100 w-full transition-all duration-300"
                />
                <FiSearch className="absolute right-3 top-2 text-blue-600" size={20} />

                {/* Search Results Dropdown */}
                {filteredServices.length > 0 && (
                  <div className="absolute left-0 mt-2 w-full bg-white shadow-lg border border-gray-100 rounded-lg py-2">
                    {filteredServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                        onClick={() => handleSearchClick(service.path)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
                {searchQuery && filteredServices.length === 0 && (
                  <div className="absolute left-0 mt-2 w-full bg-white shadow-lg border border-gray-100 rounded-lg py-2">
                    <p className="px-4 py-2 text-gray-700">Not Found</p>
                  </div>
                )}
              </div>

              {/* Enquiry Button */}
              <div className="relative mt-4">
                <button
                  onClick={toggleEnquiry}
                  className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 w-full justify-center"
                >
                  <FiMessageCircle className="text-xl" />
                  <span>Enquiry</span>
                </button>

                {/* Enquiry Dropdown */}
                {isEnquiryOpen && (
                  <div className="mt-2 bg-white shadow-lg border border-gray-100 rounded-lg py-2">
                    <button
                      onClick={() => window.location.href = `tel:${contactDetails.phoneNumber}`}
                      className="w-full flex items-center space-x-2 text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-all duration-300"
                    >
                      <FiPhone className="text-blue-600" />
                      <span>Call Us</span>
                    </button>
                    <button
                      onClick={() => window.open(`https://wa.me/${contactDetails.whatsappNumber}`, "_blank")}
                      className="w-full flex items-center space-x-2 text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-all duration-300"
                    >
                      <FaWhatsapp className="text-green-600" />
                      <span>WhatsApp</span>
                    </button>
                    <button
                      onClick={() => window.location.href = `mailto:${contactDetails.email}`}
                      className="w-full flex items-center space-x-2 text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-all duration-300"
                    >
                      <FiMail className="text-red-600" />
                      <span>Email Us</span>
                    </button>
                  </div>
                )}
              </div>

              {/* User Icon for Login/Signup */}
              <div className="relative mt-4">
                <button
                  onClick={toggleUserDropdown}
                  className="text-gray-700 hover:text-blue-600 transition-all duration-300"
                >
                  <FiUser className="text-2xl" />
                </button>

                {/* User Dropdown */}
                {isUserDropdownOpen && (
                  <div className="mt-2 bg-white shadow-lg border border-gray-100 rounded-lg py-2">
                    {isLoggedIn ? (
                      // Logout Button (shown when user is logged in)
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                      >
                        <FiLogOut className="mr-2" />
                        <span>Logout</span>
                      </button>
                    ) : (
                      // Login and Signup Buttons (shown when user is not logged in)
                      <>
                        <Link
                          to="/login"
                          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                        >
                          <FiLogIn className="mr-2" />
                          <span>Login</span>
                        </Link>
                        <Link
                          to="/signup"
                          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                        >
                          <FiUserPlus className="mr-2" />
                          <span>Sign Up</span>
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;