import { motion } from 'motion/react';
import { ArrowRight, Truck, Shield, DollarSign, Award } from 'lucide-react';
import { Link } from 'react-router';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export function Home() {
  const featuredProducts = products.slice(0, 8);

  const whyChooseUs = [
    { icon: Truck, title: 'Fast Delivery', description: 'Quick delivery to your doorstep' },
    { icon: Award, title: 'Trusted Products', description: 'Genuine and quality assured' },
    { icon: DollarSign, title: 'COD Available', description: 'Pay when you receive' },
    { icon: Shield, title: 'Affordable Price', description: 'Best prices in the market' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden pb-20"
        style={{ background: "linear-gradient(90deg, #0f2a5c 0%, #1e4fa3 40%, #4fb3bf 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white z-10"
            >
              <div className="inline-block bg-[#ff6b35] px-4 py-2 rounded-full mb-4 shadow-lg">
                <span className="font-bold text-sm">✨ অফার চলছে</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
                সুলভ মূল্যে ইলেকট্রনিক্স পণ্য
                <span className="text-[#fbbf24]"> এখন আপনার <br /> হাতের নাগালে</span>
              </h1>

              <p className="text-lg md:text-xl mb-7 text-blue-100">
                ওয়াকি-টকি • কুলার ফ্যান • রাউটার • ট্রিমার • চার্জার ফ্যান
              </p>

              <div className="flex flex-wrap gap-4 mt-2">
                <Link to="/products">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-[#ff6b35] hover:bg-[#ff5722] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl flex items-center gap-2 transition-all"
                  >
                    অর্ডার করুন
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>

                <a href="https://wa.me/8801328105216" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-white/90 backdrop-blur text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:bg-white transition-all border border-white/40"
                  >
                    WhatsApp এ যোগাযোগ
                  </motion.button>
                </a>
              </div>
            </motion.div>

            {/* RIGHT - 2nd code এর style */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-50 via-yellow-50 to-red-100 rounded-3xl shadow-2xl p-6 flex items-center justify-center border-2 border-blue-100">
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-6 left-8 w-16 h-16 bg-blue-200 rounded-full blur-2xl opacity-40"></div>
                    <div className="absolute bottom-8 right-8 w-20 h-20 bg-yellow-200 rounded-full blur-2xl opacity-30"></div>
                    <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-red-100 rounded-full blur-2xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  <div className="text-center relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-yellow-400 rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-1">Verified & Trusted</h3>
                    <p className="text-blue-600 text-sm">All products are checked for quality.</p>
                  </div>
                </div>

                {/* Floating ★ */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-yellow-400 rounded-2xl shadow-lg flex items-center justify-center animate-bounce">
                  <span className="text-white font-bold text-lg">★</span>
                </div>
                {/* Floating ✓ */}
                <div
                  className="absolute -bottom-3 -left-3 w-12 h-12 bg-green-400 rounded-2xl shadow-lg flex items-center justify-center animate-bounce"
                  style={{ animationDelay: '1s' }}
                >
                  <span className="text-white font-bold text-base">✓</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Curve */}
        <div className="absolute bottom-[-30px] left-0 right-0">
          <svg viewBox="0 0 1440 160" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 100C120 120 240 140 360 130C480 120 600 80 720 70C840 60 960 90 1080 110C1200 130 1320 120 1440 100V160H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600">Best deals on quality electronics</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600">Your satisfaction is our priority</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl text-center"
            >
              <div className="bg-[#ff6b35]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-8 h-8 text-[#ff6b35]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}