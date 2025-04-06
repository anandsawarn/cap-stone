import React, { useState } from "react";
import Footer from "../../Components/Footer";

import Cart from "../../Components/Cart"; // Adjust the path based on your folder structure


const Electrician = () => {
  // Service data with image URLs
  const services = [
    {
      id: 1,
      name: "Fan Installation",
      description: "Installation of ceiling, table, or exhaust fans. *Extra charges may apply for complex installations.",
      image: "http://www.sacramentohandyman.com/images/ceiling-fan-installation-2.jpg", // Fan installation image
      price: 200, // Price as a number for calculation
    },
    {
      id: 2,
      name: "Light Fitting",
      description: "Installation of LED lights, chandeliers, and bulbs. *Extra charges may apply for complex setups.",
      image: "https://moonlightretail.com/wp-content/uploads/2021/03/IMG_6684-1536x1536.jpg", // Light fitting image
      price: 200, // Price as a number for calculation
    },
    {
      id: 3,
      name: "Wiring Repair",
      description: "Repair and replacement of faulty wiring. *Extra charges may apply for extensive repairs.",
      image: "https://www.electricianinperth.com.au/wp-content/uploads/2021/12/repairing-wiring.jpg", // Wiring repair image
      price: 500, // Price as a number for calculation
    },
    {
      id: 4,
      name: "Switchboard Repair",
      description: "Repair and replacement of switchboards and circuit breakers. *Extra charges may apply for complex repairs.",
      image: "https://i.ytimg.com/vi/Qh03XCUuYkQ/maxresdefault.jpg", // Switchboard repair image
      price: 350, // Price as a number for calculation
    },
    {
      id: 5,
      name: "Electrical Inspection",
      description: "Comprehensive inspection of electrical systems. *Extra charges may apply for large properties.",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg", // Electrical inspection image
      price: 1000, // Price as a number for calculation
    },
    {
      id: 6,
      name: "Generator Setup",
      description: "Installation and setup of backup generators. *Extra charges may apply for complex installations.",
      image: "https://i.pinimg.com/originals/13/7a/82/137a8249d4e34cc60be0ab1a51443ac8.png", // Generator setup image
      price: 1500, // Price as a number for calculation
    },
    {
      id: 7,
      name: "Other",
      description: "Any other electrical service not listed above. *Extra charges may apply based on the scope of work.",
      image: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg", // General electrician image
      price: "Custom", // Custom price (handled separately)
    },
  ];

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    otherNumber: "",
    message: "",
    customService: "", // For custom service description
  });

  // State for cart (selected services)
  const [cart, setCart] = useState([]);

  // State for form errors
  const [errors, setErrors] = useState({});

  // State for booking confirmation
  const [isSubmitted, setIsSubmitted] = useState(false);

  // State to control visibility of the booking form modal
  const [showBookingForm, setShowBookingForm] = useState(false);

  // State for loading
  const [isLoading, setIsLoading] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear errors when input changes
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  // Add service to cart
  const addToCart = (service, quantity = 1) => {
    const isServiceInCart = cart.some((item) => item.id === service.id);
    if (!isServiceInCart) {
      setCart([...cart, { ...service, quantity, totalPrice: service.price * quantity }]);
    } else {
      alert("Service already added to cart!");
    }
  };

  // Remove service from cart
  const removeFromCart = (serviceId) => {
    setCart(cart.filter((item) => item.id !== serviceId));
  };

  // Update quantity of a service in the cart
  const updateQuantity = (serviceId, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === serviceId
        ? { ...item, quantity: parseInt(quantity, 10), totalPrice: item.price * parseInt(quantity, 10) }
        : item
    );
    setCart(updatedCart);
  };

  // Calculate total price of all services in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.totalPrice || 0), 0);
  };

  // Handle "Proceed for booking" button click
  const handleBookNow = () => {
    if (cart.length === 0) {
      alert("Please add at least one service to the cart.");
      return;
    }
    setShowBookingForm(true); // Show the booking form modal
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.pincode) newErrors.pincode = "Pincode is required.";
    if (cart.some((item) => item.name === "Other") && !formData.customService) {
      newErrors.customService = "Please describe your custom service (minimum 3 words).";
    } else if (
      cart.some((item) => item.name === "Other") &&
      formData.customService.split(" ").length < 3
    ) {
      newErrors.customService = "Please enter at least 3 words.";
    }

    // If there are errors, set them and stop submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate form submission (replace with actual API call)
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true); // Show confirmation message
      console.log("Booking Details:", {
        ...formData,
        cart,
        totalPrice: calculateTotalPrice(),
      });

      // Reset form and cart
      resetForm();
    }, 2000);
  };

  // Reset form and cart
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      pincode: "",
      otherNumber: "",
      message: "",
      customService: "",
    });
    setCart([]);
    setShowBookingForm(false); // Close the modal
  };

  // Modal component
  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
        onClick={onClose} // Close modal when clicking outside
      >
        <div
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl mx-4 overflow-y-auto max-h-[90vh]"
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-blue-700 mb-6 text-center font-poppins">
        Electrician Services
      </h2>
      <p className="text-gray-600 mb-8 text-center text-lg font-inter">
        We offer professional electrical services at affordable prices. Our certified electricians ensure safe and reliable solutions for all your electrical needs.
      </p>

      {/* Image Banner */}
      <div className="mb-8">
        <img
          src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg" // Electrician banner image
          alt="Electrician Services"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Services in Card Format */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service) => {
          const isInCart = cart.some((item) => item.id === service.id);
          const [quantity, setQuantity] = useState(1); // State for quantity input

          return (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-2 font-poppins">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 font-inter">{service.description}</p>
                <p className="text-lg font-semibold text-blue-700 font-poppins">
                  ₹{service.price} (Minimum)
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-16 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-inter"
                  />
                  {isInCart ? (
                    <button
                      onClick={() => removeFromCart(service.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 font-inter"
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      onClick={() => addToCart(service, quantity)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 font-inter"
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart Section */}
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        totalPrice={calculateTotalPrice()}
        onBookNow={handleBookNow}
      />

      {/* Booking Form Modal */}
      <Modal isOpen={showBookingForm} onClose={() => setShowBookingForm(false)}>
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full mx-4 overflow-y-auto max-h-[90vh]">
          <h3 className="text-3xl font-bold text-blue-700 mb-6 font-poppins text-center">
            Enter Details for Further Booking
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form Fields */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 font-poppins">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className={`w-full px-4 py-3 border-2 ${
                  errors.name ? "border-red-500" : "border-gray-200"
                } rounded-lg focus:outline-none focus:border-blue-600 transition-all duration-300 font-inter`}
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1 font-inter">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 font-poppins">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className={`w-full px-4 py-3 border-2 ${
                  errors.email ? "border-red-500" : "border-gray-200"
                } rounded-lg focus:outline-none focus:border-blue-600 transition-all duration-300 font-inter`}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 font-inter">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 font-poppins">
                Your Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className={`w-full px-4 py-3 border-2 ${
                  errors.phone ? "border-red-500" : "border-gray-200"
                } rounded-lg focus:outline-none focus:border-blue-600 transition-all duration-300 font-inter`}
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1 font-inter">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 font-poppins">
                Your Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your address"
                rows="3"
                className={`w-full px-4 py-3 border-2 ${
                  errors.address ? "border-red-500" : "border-gray-200"
                } rounded-lg focus:outline-none focus:border-blue-600 transition-all duration-300 font-inter`}
                required
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1 font-inter">{errors.address}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 font-poppins">
                Pincode
              </label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                placeholder="Enter your pincode"
                className={`w-full px-4 py-3 border-2 ${
                  errors.pincode ? "border-red-500" : "border-gray-200"
                } rounded-lg focus:outline-none focus:border-blue-600 transition-all duration-300 font-inter`}
                required
              />
              {errors.pincode && (
                <p className="text-red-500 text-sm mt-1 font-inter">{errors.pincode}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 font-poppins">
                Other Number (Optional)
              </label>
              <input
                type="tel"
                name="otherNumber"
                value={formData.otherNumber}
                onChange={handleInputChange}
                placeholder="Enter another phone number"
                className={`w-full px-4 py-3 border-2 ${
                  errors.otherNumber ? "border-red-500" : "border-gray-200"
                } rounded-lg focus:outline-none focus:border-blue-600 transition-all duration-300 font-inter`}
              />
              {errors.otherNumber && (
                <p className="text-red-500 text-sm mt-1 font-inter">{errors.otherNumber}</p>
              )}
            </div>

            {cart.some((item) => item.name === "Other") && (
              <div>
                <label className="block text-gray-700 font-semibold mb-2 font-poppins">
                  Describe Your Custom Service
                </label>
                <textarea
                  name="customService"
                  value={formData.customService}
                  onChange={handleInputChange}
                  placeholder="Please describe your requirements (minimum 3 words)..."
                  rows="4"
                  className={`w-full px-4 py-3 border-2 ${
                    errors.customService ? "border-red-500" : "border-gray-200"
                  } rounded-lg focus:outline-none focus:border-blue-600 transition-all duration-300 font-inter`}
                ></textarea>
                {errors.customService && (
                  <p className="text-red-500 text-sm mt-1 font-inter">
                    {errors.customService}
                  </p>
                )}
              </div>
            )}

            <div>
              <label className="block text-gray-700 font-semibold mb-2 font-poppins">
                Additional Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Any additional details or instructions..."
                rows="4"
                className={`w-full px-4 py-3 border-2 ${
                  errors.message ? "border-red-500" : "border-gray-200"
                } rounded-lg focus:outline-none focus:border-blue-600 transition-all duration-300 font-inter`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1 font-inter">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-300 font-poppins font-semibold shadow-md"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Book"}
            </button>
          </form>
        </div>
      </Modal>

      {/* Booking Confirmation */}
      {isSubmitted && (
        <div className="bg-green-100 p-6 rounded-lg shadow-md text-green-700 font-inter mb-12">
          <p className="text-lg font-semibold">Thank you for your booking!</p>
          <p>We will contact you shortly to confirm your booking.</p>
        </div>
      )}

      {/* Call to Action */}
      <div className="text-center bg-blue-100 p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-blue-700 mb-4 font-poppins">
          Ready to Get Started?
        </h3>
        <p className="text-gray-600 mb-6 font-inter">
          Contact us today for reliable and professional electrical services.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-poppins">
          Call Us Now
        </button>
      </div>
      <section>
        <Footer/>
      </section>
    </div>
  );
};

export default Electrician;