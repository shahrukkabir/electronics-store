import { AnimatePresence, motion } from 'motion/react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();
  const deliveryFee = 60;
  const outsideDeliveryFee = 150;
  const grandTotal = totalPrice + deliveryFee;

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
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(70, 64, 194, 0.25)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#4640c2] text-white px-10 py-4 cursor-pointer rounded-xl font-semibold transition-all hover:bg-[#3b35a5] shadow-[0_16px_35px_rgba(70,64,194,0.28)]"
            >
              Browse Products
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_rgba(70,64,194,0.08),_transparent_30%),_white] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="inline-flex items-center rounded-full border border-[#d9defd] bg-[#eef1ff] px-4 py-1.5 text-sm font-semibold text-[#4640c2]">
            {totalItems} item{totalItems === 1 ? '' : 's'} ready for checkout
          </div>
          <h1 className="text-5xl font-bold mt-4 mb-3 text-gray-900">Shopping Cart</h1>
          <p className="text-xl text-gray-600">Review your products and adjust quantities before checkout.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-5">
            <AnimatePresence mode="popLayout">
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="rounded-[28px] border border-[#e5e9ff] bg-white p-5 sm:p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <Link to={`/product/${item.id}`} className="shrink-0">
                        <motion.div
                          whileHover={{ scale: 1.04 }}
                          className="h-24 w-24 sm:h-28 sm:w-28 bg-[#f6f8ff] rounded-2xl overflow-hidden shadow-[0_12px_25px_rgba(70,64,194,0.12)]"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </Link>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <Link to={`/product/${item.id}`}>
                              <h3 className="font-bold text-xl text-gray-900 hover:text-[#4640c2] transition-colors break-words">
                                {item.name}
                              </h3>
                            </Link>
                            <div className="mt-3 inline-flex items-center rounded-full bg-[#eef1ff] px-3 py-1 text-xs font-semibold text-[#5a63a5]">
                              {item.category}
                            </div>
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.92 }}
                            onClick={() => removeFromCart(item.id)}
                            className="shrink-0 cursor-pointer p-2 text-black hover:text-blue-600 hover:bg-red-50 rounded-xl transition-all"
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <Trash2 className="w-5 h-5" />
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Unit price</p>
                        <p className="text-2xl font-bold text-[#4640c2]">Tk {item.price.toFixed(2)}</p>
                      </div>

                      <div className="flex items-center justify-between gap-3 rounded-2xl border border-[#dbe1ff] bg-[#f8f9ff] p-1.5 w-full sm:w-auto sm:min-w-[182px]">
                        <motion.button
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.92 }}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-10 w-10 cursor-pointer flex items-center justify-center rounded-xl text-[#2f3654] hover:bg-[#e7ebff] transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </motion.button>

                        <span className="min-w-10 text-center font-bold text-lg text-[#1f2747]">
                          {item.quantity}
                        </span>

                        <motion.button
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.92 }}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-10 w-10 cursor-pointer flex items-center justify-center rounded-xl text-[#2f3654] hover:bg-[#e7ebff] transition-colors"
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

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="sticky top-24 overflow-hidden rounded-[30px] border border-[#dde3ff] bg-[linear-gradient(180deg,#f7f8ff_0%,#ffffff_100%)] shadow-[0_22px_60px_rgba(37,56,134,0.12)]"
            >
              <div className="border-b border-[#e5e9ff] px-8 py-7">
                <div className="inline-flex items-center rounded-full bg-[#e9edff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#4640c2]">
                  Checkout Overview
                </div>
                <h2 className="mt-4 text-3xl font-bold text-gray-900">Order Summary</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Clear totals, delivery info, and quick actions in one place.
                </p>
              </div>

              <div className="px-8 py-7">
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-2xl border border-[#e5e9ff] bg-white px-4 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Subtotal</p>
                      <p className="text-xs text-gray-400">{totalItems} product{totalItems === 1 ? '' : 's'}</p>
                    </div>
                    <span className="text-lg font-semibold text-[#1f2747]">Tk {totalPrice.toFixed(2)}</span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-[#e5e9ff] bg-white px-4 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Delivery</p>
                      <p className="text-xs text-gray-400">Inside Chattogram</p>
                    </div>
                    <span className="text-lg font-semibold text-[#4640c2]">Tk {deliveryFee}</span>
                  </div>

                  <div className="rounded-2xl border border-dashed border-[#cfd6ff] bg-[#f7f8ff] px-4 py-3 text-sm text-[#6670a9]">
                    Outside Chattogram delivery: Tk {outsideDeliveryFee}
                  </div>
                </div>

                <div className="mt-6 rounded-[24px] bg-[#2943b6] p-5 text-white shadow-[0_18px_40px_rgba(18,26,63,0.26)]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-blue-200/90">Grand Total</p>
                      <p className="mt-2 text-3xl font-bold">Tk {grandTotal.toFixed(2)}</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-3">
                      <ShoppingBag className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 18px 35px rgba(70, 64, 194, 0.28)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/checkout')}
                  className="mt-6 cursor-pointer w-full bg-[#4640c2] text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-[#3b35a5] transition-all shadow-[0_16px_35px_rgba(70,64,194,0.3)]"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <Link to="/products">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 cursor-pointer w-full border border-[#cfd6ff] bg-white text-[#1f2747] py-4 rounded-2xl font-semibold hover:bg-[#f3f5ff] transition-all"
                  >
                    Continue Shopping
                  </motion.button>
                </Link>

                <div className="mt-6 rounded-2xl border border-[#dce2ff] bg-[#eef1ff] p-4">
                  <p className="text-sm font-semibold text-[#24305f]">Cash on Delivery Available</p>
                  <p className="mt-1 text-xs text-[#6570aa]">Pay after you receive and check your order.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
