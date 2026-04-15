import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Building2, Check, FileText, Hash, MapPin, Phone, ShoppingBag, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router';
import { Seo } from '../components/Seo';

export function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [deliveryLocation, setDeliveryLocation] = useState('inside');

  const deliveryFee = deliveryLocation === 'inside' ? 60 : 150;
  const totalAmount = totalPrice + deliveryFee;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setOrderComplete(true);

    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (cart.length === 0 && !orderComplete) {
    navigate('/cart');
    return null;
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_rgba(70,64,194,0.10),_transparent_30%),_white] flex items-center justify-center px-4">
        <Seo
          title="Order Confirmed"
          description="Your order has been placed successfully."
          robots="noindex, nofollow"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full rounded-[30px] border border-[#dbe2ff] bg-white p-10 text-center shadow-[0_28px_80px_rgba(37,56,134,0.14)]"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#eef1ff]"
          >
            <Check className="h-12 w-12 text-[#4640c2]" />
          </motion.div>
          <h2 className="text-4xl font-bold text-[#111b38]">অর্ডার সফলভাবে সম্পন্ন হয়েছে</h2>
          <p className="mt-4 text-lg text-[#5f688c]">আমরা খুব শিগগিরই আপনার সাথে যোগাযোগ করব।</p>
          <p className="mt-6 text-sm text-[#7a83a9]">হোম পেজে নেওয়া হচ্ছে...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_rgba(70,64,194,0.08),_transparent_30%),_white] py-12">
      <Seo
        title="Checkout"
        description="Complete your delivery information and place your order with cash on delivery."
        robots="noindex, nofollow"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="inline-flex items-center rounded-full border border-[#d9defd] bg-[#eef1ff] px-4 py-1.5 text-sm font-semibold text-[#4640c2]">
            নিরাপদ ক্যাশ অন ডেলিভারি চেকআউট
          </div>
          <h1 className="mt-4 text-5xl font-bold text-[#121c39]">চেকআউট</h1>
          <p className="mt-3 text-xl text-[#5d678b]">অর্ডার সম্পন্ন করতে আপনার তথ্যগুলো পূরণ করুন।</p>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="rounded-[30px] border border-[#dde3ff] bg-white p-6 md:p-8 shadow-[0_22px_60px_rgba(37,56,134,0.10)]">
                <div className="mb-8">
                  <p className="text-sm font-semibold tracking-[0.18em] text-[#5d66a7]">
                    ডেলিভারি তথ্য
                  </p>
                  <h2 className="mt-2 text-3xl font-bold text-[#141d3a]">ডেলিভারি তথ্য</h2>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-[#253056]">আপনার নাম</label>
                    <div className="relative">
                      <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6b75a7]" />
                      <input
                        type="text"
                        required
                        placeholder="আপনার নাম লিখুন"
                        className="w-full rounded-2xl border border-[#d8def6] bg-[#fbfcff] py-3.5 pl-12 pr-4 text-[#1c2543] outline-none transition focus:border-[#4640c2] focus:ring-4 focus:ring-[#4640c2]/10"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-[#253056]">মোবাইল নাম্বার</label>
                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6b75a7]" />
                      <input
                        type="tel"
                        required
                        placeholder="মোবাইল নাম্বার লিখুন"
                        className="w-full rounded-2xl border border-[#d8def6] bg-[#fbfcff] py-3.5 pl-12 pr-4 text-[#1c2543] outline-none transition focus:border-[#4640c2] focus:ring-4 focus:ring-[#4640c2]/10"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-[#253056]">সম্পূর্ণ ঠিকানা</label>
                    <div className="relative">
                      <MapPin className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-[#6b75a7]" />
                      <textarea
                        required
                        rows={4}
                        placeholder="রাস্তার নাম, এলাকা, থানা, জেলা সহ সম্পূর্ণ ঠিকানা লিখুন"
                        className="w-full resize-none rounded-2xl border border-[#d8def6] bg-[#fbfcff] py-3.5 pl-12 pr-4 text-[#1c2543] outline-none transition focus:border-[#4640c2] focus:ring-4 focus:ring-[#4640c2]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#253056]">শহর / জেলা</label>
                    <div className="relative">
                      <Building2 className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6b75a7]" />
                      <input
                        type="text"
                        required
                        placeholder="শহর বা জেলা"
                        className="w-full rounded-2xl border border-[#d8def6] bg-[#fbfcff] py-3.5 pl-12 pr-4 text-[#1c2543] outline-none transition focus:border-[#4640c2] focus:ring-4 focus:ring-[#4640c2]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#253056]">পোস্ট কোড</label>
                    <div className="relative">
                      <Hash className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6b75a7]" />
                      <input
                        type="text"
                        required
                        placeholder="পোস্ট কোড লিখুন"
                        className="w-full rounded-2xl border border-[#d8def6] bg-[#fbfcff] py-3.5 pl-12 pr-4 text-[#1c2543] outline-none transition focus:border-[#4640c2] focus:ring-4 focus:ring-[#4640c2]/10"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-[#253056]">
                      ডেলিভারি লোকেশন
                    </label>

                    <div className="relative">
                      {/* Left icon */}
                      <MapPin className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6b75a7]" />

                      {/* Select */}
                      <select
                        value={deliveryLocation}
                        onChange={(e) => setDeliveryLocation(e.target.value)}
                        required
                        className="w-full appearance-none rounded-2xl border border-[#d8def6] bg-[#fbfcff] py-3.5 pl-12 pr-12 text-[#1c2543] outline-none transition focus:border-[#4640c2] focus:ring-4 focus:ring-[#4640c2]/10"
                      >
                        <option value="inside">চট্টগ্রাম ভিতরে (Tk 60)</option>
                        <option value="outside">চট্টগ্রাম বাইরে (Tk 150)</option>
                      </select>

                      {/* Right arrow */}
                      <svg
                        className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6b75a7]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-[#253056]">অতিরিক্ত তথ্য</label>
                    <div className="relative">
                      <FileText className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-[#6b75a7]" />
                      <textarea
                        rows={3}
                        placeholder="যদি কোনো বিশেষ নির্দেশনা বা মতামত থাকে তা লিখুন..."
                        className="w-full resize-none rounded-2xl border border-[#d8def6] bg-[#fbfcff] py-3.5 pl-12 pr-4 text-[#1c2543] outline-none transition focus:border-[#4640c2] focus:ring-4 focus:ring-[#4640c2]/10"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[30px] border border-[#dce3ff] bg-[linear-gradient(180deg,#eef1ff_0%,#f8f9ff_100%)] p-6 md:p-8 shadow-[0_18px_45px_rgba(37,56,134,0.08)]">
                <h2 className="text-3xl font-bold text-[#141d3a]">পেমেন্ট মেথড</h2>
                <div className="mt-5 flex items-center gap-4 rounded-[24px] border border-[#d8defd] bg-white p-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eef1ff]">
                    <Check className="h-7 w-7 text-[#4640c2]" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-[#18213f]">ক্যাশ অন ডেলিভারি</p>
                    <p className="mt-1 text-sm text-[#5e688c]">পণ্য হাতে পেয়ে মূল্য পরিশোধ করুন</p>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(70, 64, 194, 0.28)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isProcessing}
                className="w-full cursor-pointer rounded-2xl bg-[#4640c2] py-5 text-lg font-bold text-white transition-all hover:bg-[#3b35a5] disabled:cursor-not-allowed disabled:bg-[#9da3c9] shadow-[0_18px_35px_rgba(70,64,194,0.28)]"
              >
                {isProcessing ? 'অর্ডার প্রসেস হচ্ছে...' : 'অর্ডার কনফার্ম করুন'}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 overflow-hidden rounded-[30px] border border-[#dde3ff] bg-[linear-gradient(180deg,#f7f8ff_0%,#ffffff_100%)] shadow-[0_22px_60px_rgba(37,56,134,0.12)]">
              <div className="border-b border-[#e5e9ff] px-7 py-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#e9edff] px-3 py-1 text-xs font-semibold tracking-[0.18em] text-[#4640c2]">
                  <ShoppingBag className="h-3.5 w-3.5" />
                  Order Summary
                </div>
                <h2 className="mt-4 text-3xl font-bold text-[#141d3a]">Order Summary</h2>
              </div>

              <div className="max-h-[26rem] space-y-4 overflow-y-auto px-7 py-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 rounded-[22px] border border-[#e2e7ff] bg-white p-3.5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-2xl object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-[#17213f]">{item.name}</p>
                      <p className="mt-1 text-sm text-[#6a7397]">পরিমাণ: {item.quantity}</p>
                      <p className="mt-2 text-lg font-bold text-[#4640c2]">
                        Tk {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#e5e9ff] px-7 py-6">
                <div className="space-y-4 text-base">
                  <div className="flex items-center justify-between text-[#5a6487]">
                    <span>সাবটোটাল</span>
                    <span className="font-semibold text-[#202a48]">Tk {totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#5a6487]">
                    <span>ডেলিভারি ({deliveryLocation === 'inside' ? 'চট্টগ্রাম ভিতরে' : 'চট্টগ্রাম বাইরে'})</span>
                    <span className="font-semibold text-[#202a48]">Tk {deliveryFee}</span>
                  </div>
                </div>

                <div className="mt-5 rounded-[24px] bg-[#121a3f] p-5 text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">মোট</span>
                    <span className="text-3xl font-bold">Tk {totalAmount.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-5 rounded-[22px] border border-[#dce2ff] bg-[#eef1ff] p-4">
                  <p className="text-sm font-semibold text-[#24305f]">নোট</p>
                  <p className="mt-1 text-xs leading-6 text-[#6570aa]">
                    ডেলিভারি চার্জ আপনার নির্বাচিত লোকেশন অনুযায়ী যোগ হবে।
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
