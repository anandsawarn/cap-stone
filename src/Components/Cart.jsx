import React from "react";

const Cart = ({ cart, removeFromCart, updateQuantity, totalPrice, onBookNow }) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-blue-700 mb-4 font-poppins">
        Your Cart
      </h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {cart.length === 0 ? (
          <p className="text-gray-600 font-inter">Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b border-gray-200 py-4"
              >
                <div>
                  <h4 className="text-xl font-semibold text-blue-700 font-poppins">
                    {item.name}
                  </h4>
                  <p className="text-gray-600 font-inter">
                    ₹{item.price} x {item.quantity} = ₹{item.totalPrice}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <label className="text-gray-700 font-medium">Quantity:</label>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, e.target.value)}
                      className="w-16 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-inter"
                    />
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 font-inter"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-blue-700 font-poppins">
                Total Price: ₹{totalPrice}
              </h4>
              <button
                onClick={onBookNow}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 font-poppins mt-4"
              >
                Proced for booking
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;