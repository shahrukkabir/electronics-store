import { AnimatePresence, motion } from 'motion/react';
import { FileText, MapPin, Phone, User, X } from 'lucide-react';
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Product } from '../context/CartContext';
import { toast } from 'sonner';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  quantity?: number;
}

export function OrderModal({ isOpen, onClose, product, quantity = 1 }: OrderModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    location: 'inside',
    note: '',
  });

  const deliveryCharge = formData.location === 'inside' ? 60 : 150;
  const productTotal = product ? product.price * quantity : 0;
  const total = productTotal + deliveryCharge;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Order placed successfully! We will contact you soon.');
    setFormData({
      name: '',
      phone: '',
      address: '',
      location: 'inside',
      note: '',
    });
    onClose();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className=" fixed inset-0 z-50 bg-[#0f1634]/55 backdrop-blur-sm"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center  p-4 ">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: 'spring', damping: 24, stiffness: 260 }}
              className="max-h-[92vh] w-full max-w-xl overflow-y-auto scrollbar-hide rounded-[30px] border border-[#dce3ff] bg-[linear-gradient(180deg,#f7f8ff_0%,#ffffff_100%)] shadow-[0_28px_90px_rgba(15,22,52,0.30)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#e5e9ff] bg-white/90 px-6 py-5 backdrop-blur-sm md:px-8  ml-8">
                <div className='text-center'>
                  <h2 className="mt-1 text-2xl font-bold text-[#131d3a]">অগ্রিম পেমেন্ট ছাড়াই অর্ডার করুন 🔥</h2>
                </div>

                <button
                  onClick={onClose}
                  className="rounded-full p-4 cursor-pointer text-[#49547a] transition hover:bg-[#eef1ff] hover:text-[#4640c2]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8">
                <div className="relative">
                  <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6b75a7]" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="আপনার নাম"
                    className="w-full rounded-2xl border border-[#d8ddf4] bg-white py-3.5 pl-12 pr-4 text-[#1c2543] outline-none transition focus:border-[#4640c2] focus:ring-4 focus:ring-[#4640c2]/10"
                  />
                </div>

                <div className="relative">
                  <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6b75a7]" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="মোবাইল নাম্বার"
                    className="w-full rounded-2xl border border-[#d8ddf4] bg-white py-3.5 pl-12 pr-4 text-[#1c2543] outline-none transition focus:border-[#4640c2] focus:ring-4 focus:ring-[#4640c2]/10"
                  />
                </div>

                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-[#6b75a7]" />
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="সম্পূর্ণ ঠিকানা - রাস্তার নাম, শহর, এলাকা"
                    className="w-full resize-none rounded-2xl border border-[#d8ddf4] bg-white py-3.5 pl-12 pr-4 text-[#1c2543] outline-none transition focus:border-[#4640c2] focus:ring-4 focus:ring-[#4640c2]/10"
                  />
                </div>

                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6b75a7]" />
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-2xl border border-[#d8ddf4] bg-white py-3.5 pl-12 pr-4 text-[#1c2543] outline-none transition focus:border-[#4640c2] focus:ring-4 focus:ring-[#4640c2]/10"
                  >
                    <option value="inside">চট্টগ্রাম ভিতরে (Tk 60)</option>
                    <option value="outside">চট্টগ্রাম বাইরে (Tk 150)</option>
                  </select>
                </div>

                <div className="rounded-[26px] border border-[#dde3ff] bg-white p-4 shadow-[0_14px_35px_rgba(15,23,42,0.05)]">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-20 w-20 rounded-2xl object-cover"
                      />
                      <span className="absolute -right-2 -top-2 flex h-7 min-w-7 items-center justify-center rounded-full bg-[#4640c2] px-2 text-xs font-bold text-white shadow-[0_10px_20px_rgba(70,64,194,0.28)]">
                        {quantity}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-lg font-bold text-[#17213f]">{product.name}</p>
                      <p className="mt-1 text-sm text-[#6a7397]">পরিমাণ: {quantity} x Tk {product.price.toFixed(2)}</p>
                      <p className="mt-2 text-xl font-bold text-[#4640c2]">
                        Tk {productTotal.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[26px] border border-[#dde3ff] bg-white p-4 shadow-[0_14px_35px_rgba(15,23,42,0.05)]">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-[#5f689b]">
                      <span>সাবটোটাল</span>
                      <span className="font-semibold text-[#22305a]">Tk {productTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-[#5f689b]">
                      <span>শিপিং</span>
                      <span className="font-semibold text-[#22305a]">Tk {deliveryCharge}</span>
                    </div>
                    <div className="border-t border-[#d9defd] pt-3 flex items-center justify-between">
                      <span className="text-base font-semibold text-[#1c2543]">মোট</span>
                      <span className="text-2xl font-bold text-[#4640c2]">Tk {total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <FileText className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6b75a7]" />
                  <input
                    type="text"
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                    placeholder="যদি কোনো মতামত থাকে তা লিখুন..."
                    className="w-full rounded-2xl border border-[#d8ddf4] bg-white py-3.5 pl-12 pr-4 text-[#1c2543] outline-none transition focus:border-[#4640c2] focus:ring-4 focus:ring-[#4640c2]/10"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01, boxShadow: '0 18px 35px rgba(70, 64, 194, 0.28)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full cursor-pointer rounded-2xl bg-[#4640c2] px-6 py-4 text-white font-semibold transition hover:bg-[#3b35a5] shadow-[0_16px_35px_rgba(70,64,194,0.28)]"
                >
                  ক্যাশ অন ডেলিভারিতে অর্ডার করুন - Tk {total.toFixed(2)}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
