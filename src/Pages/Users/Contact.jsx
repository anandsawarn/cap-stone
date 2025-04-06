import React, { useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaClock, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import founderImage from "../../assets/images/ravi.jpg";
import teamImage1 from "../../assets/images/anju.jpg";
import teamImage2 from "../../assets/radha.jpg";
import teamImage3 from "../../assets/images/ravi.jpg";
import { contactDetails } from "../../config";
import Footer from "../../Components/Footer";

const Contact = () => {
  const whatsappMessage = `Hello FixEase Team,

I am interested in your services. Please send me more information about:

1. Home Repairs
2. Plumbing Services
3. Electrical Services
4. Appliance Maintenance
5. Cleaning Services

Thank you!`;

  const handleCall = () => {
    window.location.href = `tel:${contactDetails.phoneNumber}`;
  };

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${contactDetails.whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  const handleEmail = () => {
    window.location.href = `mailto:${contactDetails.email}`;
  };

  const teamMembers = [
    {
      name: "Ravindra Kumar",
      role: "Founder & CEO",
      image: founderImage,
      bio: "With over 10 years of experience in home services, Ravindra founded FixEase to revolutionize how people access quality home maintenance."
    },
    {
      name: "Anju Sharma",
      role: "Operations Manager",
      image: teamImage1,
      bio: "Ensuring seamless service delivery and customer satisfaction across all our operations."
    },
    {
      name: "Radha Kumari",
      role: "Technical Lead",
      image: teamImage2,
      bio: "Oversees our team of skilled technicians and maintains our high service standards."
    },
    {
      name: "Neha Gupta",
      role: "Customer Support",
      image: teamImage3,
      bio: "Leads our 24/7 customer support team to ensure your queries are always addressed."
    }
  ];

  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16 flex-grow w-full">
        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <motion.button
            onClick={handleWhatsApp}
            className="bg-green-500 text-white p-4 rounded-full shadow-xl flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaWhatsapp className="text-2xl" />
            <span className="sr-only">WhatsApp Support</span>
          </motion.button>
        </div>

        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16 pt-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-700 mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Connect With <span className="text-blue-500">FixEase</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our team is always ready to assist you with your home service needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={handleCall}
            >
              Get Instant Help
            </button>
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <section className="mb-20">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Our <span className="text-blue-600">Expert Team</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">{member.name}</h3>
                    <p className="text-blue-200 group-hover:text-blue-100 transition-colors">{member.role}</p>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-gray-600">{member.bio}</p>
                  <div className="mt-4 flex space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-blue-700 mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Have questions or need assistance? Our team is available 24/7 to help with all your home service needs.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <FaMapMarkerAlt className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Our Location</h3>
                      <p className="text-gray-600">{contactDetails.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <FaClock className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Working Hours</h3>
                      <p className="text-gray-600">24/7 Emergency Services</p>
                      <p className="text-gray-600">Mon-Sun: 8:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Methods */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <FaPhoneAlt className="text-blue-600 text-2xl" />,
                      title: "Call Us",
                      action: handleCall,
                      text: contactDetails.phoneNumber,
                      subtext: "Tap to call immediately",
                      bg: "bg-blue-100",
                      hover: "hover:bg-blue-50"
                    },
                    {
                      icon: <FaWhatsapp className="text-green-600 text-2xl" />,
                      title: "WhatsApp",
                      action: handleWhatsApp,
                      text: contactDetails.whatsappNumber,
                      subtext: "Chat with our team",
                      bg: "bg-green-100",
                      hover: "hover:bg-green-50"
                    },
                    {
                      icon: <FaEnvelope className="text-red-600 text-2xl" />,
                      title: "Email Us",
                      action: handleEmail,
                      text: contactDetails.email,
                      subtext: "We reply within 2 hours",
                      bg: "bg-red-100",
                      hover: "hover:bg-red-50"
                    },
                    {
                      icon: <FaMapMarkerAlt className="text-purple-600 text-2xl" />,
                      title: "Visit Us",
                      action: () => window.open("https://maps.google.com", "_blank"),
                      text: "Schedule an office visit",
                      subtext: "View on Google Maps",
                      bg: "bg-purple-100",
                      hover: "hover:bg-purple-50"
                    }
                  ].map((method, i) => (
                    <motion.div 
                      key={i}
                      className={`${method.bg} ${method.hover} p-6 rounded-xl shadow-md transition-all cursor-pointer flex items-start h-full`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={method.action}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && method.action()}
                    >
                      <div className="bg-white p-3 rounded-full mr-4 shadow-sm flex-shrink-0">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">{method.title}</h3>
                        <p className="text-blue-600 font-medium">{method.text}</p>
                        {method.subtext && <p className="text-gray-500 text-sm mt-1">{method.subtext}</p>}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Our <span className="text-blue-600">Customers</span> Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                rating: 5,
                quote: "FixEase saved me during a plumbing emergency at midnight! Their technician arrived in just 25 minutes and fixed the issue professionally.",
                name: "Rajesh Kumar",
                location: "Delhi"
              },
              {
                rating: 5,
                quote: "The electrician from FixEase was extremely knowledgeable. He not only fixed the issue but also explained what caused it and how to prevent it in future.",
                name: "Priya Sharma",
                location: "Mumbai"
              },
              {
                rating: 5,
                quote: "I've used FixEase for multiple services - cleaning, AC repair, and painting. Each time the service was impeccable and reasonably priced.",
                name: "Amit Patel",
                location: "Bangalore"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help Right Now?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our emergency response team is available 24/7 to assist you with urgent home service needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              onClick={handleCall}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Emergency Hotline
            </motion.button>
            <motion.button
              onClick={handleWhatsApp}
              className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              WhatsApp Support
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Full-width Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;