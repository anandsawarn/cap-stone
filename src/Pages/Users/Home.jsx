import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiTool,
  FiZap,
  FiDroplet,
  FiEdit,
  FiHome,
  FiTrash2,
  FiStar,
  FiClock,
  FiCheckCircle,
  FiUsers,
  FiAward
} from "react-icons/fi";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import About from "../Users/About";
import Contact from "./Contact";

// Import customer images
import customer1 from "../../assets/images/ravi.jpg";
import customer2 from "../../assets/radha.jpg";
import customer3 from "../../assets/images/anju.jpg";

const Home = () => {
  // List of Services with their paths & icons
  const services = [
    { name: "Technician", path: "/services/technician", icon: <FiTool /> },
    { name: "Electrician", path: "/services/electrician", icon: <FiZap /> },
    { name: "Plumber", path: "/services/plumber", icon: <FiDroplet /> },
    { name: "Painter", path: "/services/painter", icon: <FiEdit /> },
    { name: "Carpenter", path: "/services/carpenter", icon: <FiHome /> },
    { name: "Cleaning Services", path: "/services/cleaning", icon: <FiTrash2 /> },
  ];

  // Top-rated services with additional details
  const topRatedServices = [
    {
      name: "Emergency Plumbing",
      rating: 4.9,
      completedJobs: 245,
      responseTime: "15-30 mins",
      icon: <FiDroplet className="text-blue-500" />,
      path: "/services/plumber"
    },
    {
      name: "Electrical Repair",
      rating: 4.8,
      completedJobs: 198,
      responseTime: "30-45 mins",
      icon: <FiZap className="text-yellow-500" />,
      path: "/services/electrician"
    },
    {
      name: "Home Cleaning",
      rating: 4.7,
      completedJobs: 312,
      responseTime: "1-2 hours",
      icon: <FiTrash2 className="text-green-500" />,
      path: "/services/cleaning"
    },
    {
      name: "AC Repair",
      rating: 4.85,
      completedJobs: 176,
      responseTime: "45-60 mins",
      icon: <FiTool className="text-blue-400" />,
      path: "/services/technician"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Professional <span className="text-blue-600">Home Services</span> On Demand
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Book trusted professionals for all your home service needs. Fast, reliable, and with a satisfaction guarantee.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link 
                to="/services/technician" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Book a Service Now
              </Link>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Home Services" 
                className="rounded-xl shadow-2xl w-full max-w-md"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg z-10">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-3">
                    <FiUsers className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Happy Customers</p>
                    <p className="font-bold text-gray-800">10,000+</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      

      {/* Top Rated Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our <span className="text-blue-600">Top-Rated</span> Services
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Services our customers love the most, based on ratings and completed jobs.
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {topRatedServices.map((service, index) => (
              <motion.div
                key={service.name}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-blue-50 p-3 rounded-full">
                      {service.icon}
                    </div>
                    <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                      <FiStar className="text-yellow-500 mr-1" />
                      <span className="font-medium text-yellow-700">{service.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <FiCheckCircle className="mr-1 text-green-500" />
                    <span>{service.completedJobs}+ jobs completed</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 text-sm">
                    <FiClock className="mr-1 text-blue-500" />
                    <span>Avg. response: {service.responseTime}</span>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Link 
                    to={service.path} 
                    className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all duration-300"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Book a Service?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of satisfied customers who trust us for their home service needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/services" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </section>


      {/* All Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Explore Our <span className="text-blue-600">Services</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive solutions for all your home maintenance needs.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className="relative group bg-white rounded-xl shadow-lg overflow-hidden"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-8 flex flex-col items-center text-center">
                <motion.div
                  className="text-blue-500 group-hover:text-blue-600 text-5xl mb-6 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-6">
                  Professional {service.name.toLowerCase()} services with certified experts and satisfaction guarantee.
                </p>
                <Link 
                  to={service.path} 
                  className="inline-block px-6 py-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              What Our <span className="text-blue-200">Customers</span> Say
            </motion.h2>
            <motion.p 
              className="text-lg text-blue-100 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Don't just take our word for it - hear from our satisfied customers.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-300 mr-1" />
                ))}
              </div>
              <p className="text-blue-50 mb-4">
                "The electrician arrived within 30 minutes and fixed my wiring issue perfectly. Highly recommended!"
              </p>
              <div className="flex items-center">
                <img 
                  src={customer1} 
                  alt="Sarah Johnson" 
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-blue-200">Delhi</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-300 mr-1" />
                ))}
              </div>
              <p className="text-blue-50 mb-4">
                "The cleaning service was exceptional. My apartment has never looked better. Will definitely use again!"
              </p>
              <div className="flex items-center">
                <img 
                  src={customer2} 
                  alt="Rahul Mehta" 
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-medium">Rahul Mehta</p>
                  <p className="text-sm text-blue-200">Mumbai</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-300 mr-1" />
                ))}
              </div>
              <p className="text-blue-50 mb-4">
                "Quick response for my plumbing emergency. The technician was professional and fixed the issue in no time."
              </p>
              <div className="flex items-center">
                <img 
                  src={customer3} 
                  alt="Priya Sharma" 
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-medium">Priya Sharma</p>
                  <p className="text-sm text-blue-200">Bangalore</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Home;