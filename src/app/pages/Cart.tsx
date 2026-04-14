import { motion, AnimatePresence } from 'motion/react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center px-4"
        >
          <ShoppingBag className="w-32 h-32 mx-auto text-gray-200 mb-8" />
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Your cart is empty</h2>
          <p className="text-xl text-gray-600 mb-10">Start shopping to add items to your cart</p>
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 107, 53, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#ff6b35] text-white px-10 py-4 rounded-xl font-semibold hover:bg-[#ff5722] transition-all shadow-lg shadow-orange-500/30"
            >
              Browse Products
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold mb-3 text-gray-900">Shopping Cart</h1>
          <p className="text-xl text-gray-600">{cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence mode="popLayout">
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-gray-50 rounded-2xl border border-gray-100 p-6"
                >
                  <div className="flex gap-6">
                    {/* Image */}
                    <Link to={`/product/${item.id}`}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-28 h-28 bg-white rounded-xl overflow-hidden flex-shrink-0 shadow-md"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </Link>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <Link to={`/product/${item.id}`}>
                        <h3 className="font-bold text-lg mb-1 hover:text-[#ff6b35] transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-gray-500 text-sm mb-3">{item.category}</p>
                      <p className="text-2xl font-bold text-[#ff6b35]">ট {item.price.toFixed(2)}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col items-end justify-between">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-all"
                      >
                        <Trash2 className="w-5 h-5" />
                      </motion.button>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 bg-white rounded-xl p-1 border border-gray-200">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </motion.button>
                        <span className="w-8 text-center font-bold">{item.quantity}</span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-2xl border border-gray-100 p-8 sticky top-24"
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Order Summary</h2>

              <div className="space-y-5 mb-8">
                <div className="flex justify-between text-gray-600 text-lg">
                  <span>Subtotal</span>
                  <span className="font-semibold">ট {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 text-lg">
                  <span>Delivery (Chittagong ভিতরে)</span>
                  <span className="text-green-600 font-semibold">ট 60</span>
                </div>
                <div className="text-xs text-gray-500">
                  * Chittagong বাইরে: ট 150
                </div>
                <div className="border-t border-gray-200 pt-5">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">Total</span>
                    <span className="text-3xl font-bold text-[#ff6b35]">
                      ট {(totalPrice + 60).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(255, 107, 53, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/checkout')}
                className="w-full bg-[#ff6b35] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#ff5722] transition-all mb-4 shadow-lg shadow-orange-500/30"
              >
                Proceed to Checkout
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white border-2 border-gray-900 text-gray-900 py-4 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition-all"
                >
                  Continue Shopping
                </motion.button>
              </Link>

              {/* Promo */}
              <div className="mt-6 p-5 bg-green-50 border border-green-200 rounded-xl">
                <p className="text-sm text-green-800 font-medium">
                  ✓ Cash on Delivery Available
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
