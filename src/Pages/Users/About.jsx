import React, { useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FiCheckCircle, FiDollarSign, FiClock, FiUsers, FiAward } from "react-icons/fi";
import { BiLeaf, BiHappyHeartEyes } from "react-icons/bi";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Footer from "../../Components/Footer";

const About = () => {
  // Sample team members data
  const teamMembers = [
    {
      name: "Ravi Kumar",
      role: "Founder & CEO",
      bio: "With 15+ years in home services, Ravi founded FixBase to revolutionize home maintenance.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Priya Sharma",
      role: "Operations Head",
      bio: "Ensures seamless service delivery across all our operations.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Amit Patel",
      role: "Technical Director",
      bio: "Oversees our team of skilled technicians and service standards.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const allReviews = [
    { 
      name: "Anju Sharma", 
      feedback: "FixBase exceeded my expectations! Their service was incredibly fast, efficient, and highly professional.", 
      rating: 5,
      location: "Jalandhar"
    },
    { 
      name: "Neha", 
      feedback: "I love their eco-friendly approach. Highly recommended!", 
      rating: 5,
      location: "Ludhiana"
    },
    { 
      name: "Aditya Pathaniya", 
      feedback: "Affordable, reliable, and top-quality service!", 
      rating: 4,
      location: "Amritsar"
    },
    { 
      name: "Riya Mehta", 
      feedback: "Super smooth booking process. Definitely using FixBase again!", 
      rating: 5,
      location: "Chandigarh"
    },
    { 
      name: "Priya Kapoor", 
      feedback: "Professional team and great service quality!", 
      rating: 4,
      location: "Patiala"
    }
  ];

  const [visibleReviews, setVisibleReviews] = useState(3);
  const stats = [
    { value: "100+", label: "Skilled Professionals", icon: <FiUsers className="text-3xl" /> },
    { value: "24/7", label: "Customer Support", icon: <FiClock className="text-3xl" /> },
    { value: "98%", label: "Satisfaction Rate", icon: <BiHappyHeartEyes className="text-3xl" /> },
    { value: "5,000+", label: "Happy Customers", icon: <FiAward className="text-3xl" /> }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-blue-600">FixBase</span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your trusted partner for premium home services in Punjab. We deliver excellence through certified professionals and eco-friendly solutions.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-600 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-12">
            <motion.div 
              className="lg:w-1/2 mb-10 lg:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2018, FixBase began with a simple mission: to make home maintenance hassle-free for families in Punjab. What started as a small team of 5 professionals has now grown into a trusted network of 100+ certified experts.
              </p>
              <p className="text-gray-600 mb-4">
                We recognized the gap in the market for reliable, transparent, and eco-conscious home services. Today, we're proud to serve thousands of happy customers across the region.
              </p>
              <p className="text-gray-600">
                Our commitment to quality and customer satisfaction has earned us numerous accolades, including the "Best Home Service Provider" award in 2022.
              </p>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Our team at work" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose <span className="text-blue-600">FixBase</span>?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Verified Professionals", 
                description: "Every technician undergoes rigorous background checks and training to ensure top-quality service.", 
                icon: <FiCheckCircle className="text-blue-600 text-4xl mb-4" />,
                bg: "bg-blue-50"
              },
              { 
                title: "Eco-Friendly Solutions", 
                description: "We use environmentally safe products and sustainable practices in all our services.", 
                icon: <BiLeaf className="text-green-500 text-4xl mb-4" />,
                bg: "bg-green-50"
              },
              { 
                title: "Transparent Pricing", 
                description: "No hidden charges. Get upfront quotes with detailed breakdowns before any work begins.", 
                icon: <FiDollarSign className="text-yellow-500 text-4xl mb-4" />,
                bg: "bg-yellow-50"
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`${feature.bg} p-8 rounded-xl shadow-sm hover:shadow-md transition-all`}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  {feature.icon}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Our <span className="text-blue-600">Leadership</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Customer <span className="text-blue-600">Testimonials</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allReviews.slice(0, visibleReviews).map((review, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`text-${i < review.rating ? 'yellow' : 'gray'}-400 mr-1`}
                    />
                  ))}
                </div>
                <FaQuoteLeft className="text-gray-300 text-2xl mb-4" />
                <p className="text-gray-700 italic mb-6">"{review.feedback}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-gray-500 text-sm">{review.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {visibleReviews < allReviews.length && (
            <div className="text-center mt-8">
              <button
                onClick={() => setVisibleReviews(prev => prev + 3)}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Load More Testimonials
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Experience the FixBase Difference?
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of satisfied customers who trust us for their home service needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition-colors">
              Book a Service Now
            </button>
          </motion.div>
        </div>
      </section>
    <section>
      <Footer/>
    </section>
    </div>
  );
};

export default About;