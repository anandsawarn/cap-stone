import React, { useState } from "react";
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
    message: "",
    customService: "", // For custom service description
  });

  // State for cart (selected services)
  const [cart, setCart] = useState([]);

  // State for form errors
  const [errors, setErrors] = useState({});

  // State for booking confirmation
  const [isSubmitted, setIsSubmitted] = useState(false);

  // State to control visibility of the booking form
  const [showBookingForm, setShowBookingForm] = useState(false);

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
    setShowBookingForm(true); // Show the booking form
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
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

    // If no errors, proceed with booking
    setIsSubmitted(true); // Show confirmation message
    console.log("Booking Details:", {
      ...formData,
      cart,
      totalPrice: calculateTotalPrice(),
    });
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

      {/* Booking and Enquiry Form */}
      {showBookingForm && !isSubmitted && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-700 mb-4 font-poppins">
            Enter details
          </h3>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2 font-poppins">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className={`w-full px-4 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-inter`}
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1 font-inter">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2 font-poppins">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className={`w-full px-4 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-inter`}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 font-inter">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2 font-poppins">
                Your Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className={`w-full px-4 py-2 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-inter`}
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1 font-inter">{errors.phone}</p>
              )}
            </div>
            {cart.some((item) => item.name === "Other") && (
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2 font-poppins">
                  Describe Your Custom Service
                </label>
                <textarea
                  name="customService"
                  value={formData.customService}
                  onChange={handleInputChange}
                  placeholder="Please describe your requirements (minimum 3 words)..."
                  rows="4"
                  className={`w-full px-4 py-2 border ${
                    errors.customService ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-inter`}
                ></textarea>
                {errors.customService && (
                  <p className="text-red-500 text-sm mt-1 font-inter">
                    {errors.customService}
                  </p>
                )}
              </div>
            )}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2 font-poppins">
                Additional Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Any additional details or instructions..."
                rows="4"
                className={`w-full px-4 py-2 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-inter`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1 font-inter">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 font-poppins"
            >
              Proceed for booking
            </button>
          </form>
        </div>
      )}

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
    </div>
  );
};

export default Electrician;