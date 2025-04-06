// const Cleaning = () => {
//     return (
//       <div className="p-6">
//         <h1 className="text-3xl font-bold text-blue-600">Cleaning Services</h1>
//         <p>Professional cleaning services for homes and offices.</p>
//       </div>
//     );
//   };
  
//   export default Cleaning;
  


  import React, { useState } from "react";

const Cleaning = () => {
// Cleaning services data with image URLs
const services = [
  {
    id: 1,
    name: "1BHK Cleaning",
    description: "Thorough cleaning for 1BHK apartments, including living room, kitchen, and bathroom.",
    image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // 1BHK cleaning image
    price: 1500, // Price as a number for calculation
  },
  {
    id: 2,
    name: "2BHK Cleaning",
    description: "Complete cleaning for 2BHK apartments, including all rooms, kitchen, and bathrooms.",
    image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // 2BHK cleaning image
    price: 2500, // Price as a number for calculation
  },
  {
    id: 3,
    name: "3BHK Cleaning",
    description: "Deep cleaning for 3BHK apartments, covering all rooms, kitchen, bathrooms, and balconies.",
    image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // 3BHK cleaning image
    price: 3500, // Price as a number for calculation
  },
  {
    id: 4,
    name: "4BHK Cleaning",
    description: "Comprehensive cleaning for 4BHK apartments, including all rooms, kitchen, bathrooms, and terraces.",
    image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // 4BHK cleaning image
    price: 4500, // Price as a number for calculation
  },
  {
    id: 5,
    name: "5BHK Cleaning",
    description: "Full cleaning for 5BHK apartments, covering all rooms, kitchen, bathrooms, terraces, and more.",
    image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // 5BHK cleaning image
    price: 5500, // Price as a number for calculation
  },
  {
    id: 6,
    name: "Garden Cleaning",
    description: "Professional cleaning for gardens, including lawn care, pruning, and waste removal.",
    image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Garden cleaning image
    price: 2000, // Price as a number for calculation
  },
  {
    id: 7,
    name: "Roof Cleaning",
    description: "Cleaning and maintenance of roofs, including moss removal and waterproofing.",
    image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Roof cleaning image
    price: 3000, // Price as a number for calculation
  },
  {
    id: 8,
    name: "Terrace Cleaning",
    description: "Deep cleaning for terraces, including sweeping, mopping, and stain removal.",
    image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Terrace cleaning image
    price: 2500, // Price as a number for calculation
  },
  {
    id: 9,
    name: "Bathroom Cleaning",
    description: "Sanitization and deep cleaning of bathrooms, including tiles, fixtures, and drains.",
    image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Bathroom cleaning image
    price: 1000, // Price as a number for calculation
  },
  {
    id: 10,
    name: "Washroom Cleaning",
    description: "Thorough cleaning of washrooms, including toilets, sinks, and mirrors.",
    image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Washroom cleaning image
    price: 1000, // Price as a number for calculation
  },
  {
    id: 11,
    name: "Water Tank Cleaning",
    description: "Cleaning and disinfection of water tanks to ensure safe and clean water supply.",
    image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Water tank cleaning image
    price: 4000, // Price as a number for calculation
  },
  {
    id: 12,
    name: "Water Purifier Cleaning",
    description: "Maintenance and cleaning of water purifiers for optimal performance.",
    image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Water purifier cleaning image
    price: 1500, // Price as a number for calculation
  },
  {
    id: 13,
    name: "AC Cleaning",
    description: "Deep cleaning of air conditioners, including filters, coils, and ducts.",
    image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // AC cleaning image
    price: 2000, // Price as a number for calculation
  },
  {
    id: 14,
    name: "Office Cleaning",
    description: "Professional cleaning for offices, including desks, floors, and common areas.",
    image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Office cleaning image
    price: 5000, // Price as a number for calculation
  },
  {
    id: 15,
    name: "Post-Construction Cleaning",
    description: "Cleaning after construction, including debris removal and deep cleaning.",
    image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg", // Post-construction cleaning image
    price: 6000, // Price as a number for calculation
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
    customService: "",
  });

  const [cart, setCart] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const addToCart = (service, quantity = 1) => {
    const isServiceInCart = cart.some((item) => item.id === service.id);
    if (!isServiceInCart) {
      setCart([...cart, { ...service, quantity, totalPrice: service.price * quantity }]);
    } else {
      alert("Service already added to cart!");
    }
  };

  const removeFromCart = (serviceId) => {
    setCart(cart.filter((item) => item.id !== serviceId));
  };

  const updateQuantity = (serviceId, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === serviceId
        ? { ...item, quantity: parseInt(quantity, 10), totalPrice: item.price * parseInt(quantity, 10) }
        : item
    );
    setCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.totalPrice || 0), 0);
  };

  const handleBookNow = () => {
    if (cart.length === 0) {
      alert("Please add at least one service to the cart.");
      return;
    }
    setShowBookingForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      console.log("Booking Details:", {
        ...formData,
        cart,
        totalPrice: calculateTotalPrice(),
      });
      resetForm();
    }, 2000);
  };

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
    setShowBookingForm(false);
  };

  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl mx-4 overflow-y-auto max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
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
      <h2 className="text-4xl font-bold text-blue-700 mb-6 text-center font-poppins">
        Cleaning Services
      </h2>
      <p className="text-gray-600 mb-8 text-center text-lg font-inter">
        We offer professional cleaning services at affordable prices. Our certified cleaners ensure spotless results for all your cleaning needs.
      </p>

      <div className="mb-8">
        <img
          src="https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg"
          alt="Cleaning Services"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service) => {
          const isInCart = cart.some((item) => item.id === service.id);
          const [quantity, setQuantity] = useState(1);

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
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-40">
          <h3 className="font-bold text-lg mb-2">Your Cart ({cart.length})</h3>
          <ul className="mb-4 max-h-40 overflow-y-auto">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-2">
                <span className="text-sm">{item.name} (x{item.quantity})</span>
                <span className="font-semibold">₹{item.totalPrice}</span>
              </li>
            ))}
          </ul>
          <div className="font-bold text-lg mb-4">
            Total: ₹{calculateTotalPrice()}
          </div>
          <button
            onClick={handleBookNow}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full"
          >
            Proceed to Book
          </button>
        </div>
      )}

      {/* Booking Form Modal */}
      <Modal isOpen={showBookingForm} onClose={() => setShowBookingForm(false)}>
        {isSubmitted ? (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Booking Confirmed!</h3>
            <p className="mb-4">Thank you for your booking. Our team will contact you shortly.</p>
            <button
              onClick={resetForm}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3 className="text-2xl font-bold text-blue-700 mb-6">Booking Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Alternate Phone (Optional)</label>
                <input
                  type="tel"
                  name="otherNumber"
                  value={formData.otherNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  rows="3"
                ></textarea>
                {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                />
                {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}
              </div>
              {cart.some((item) => item.name === "Other") && (
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">Custom Service Description</label>
                  <textarea
                    name="customService"
                    value={formData.customService}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                    rows="3"
                    placeholder="Please describe your custom service in detail (minimum 3 words)"
                  ></textarea>
                  {errors.customService && (
                    <p className="text-red-500 text-sm">{errors.customService}</p>
                  )}
                </div>
              )}
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Additional Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  rows="3"
                  placeholder="Any special instructions or details"
                ></textarea>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="font-bold mb-2">Selected Services</h4>
              <ul className="border rounded-lg p-4">
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between mb-2">
                    <span>
                      {item.name} (x{item.quantity})
                    </span>
                    <span>₹{item.totalPrice}</span>
                  </li>
                ))}
                <li className="flex justify-between font-bold pt-2 mt-2 border-t">
                  <span>Total</span>
                  <span>₹{calculateTotalPrice()}</span>
                </li>
              </ul>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full disabled:bg-blue-400"
            >
              {isLoading ? "Processing..." : "Confirm Booking"}
            </button>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default Cleaning;