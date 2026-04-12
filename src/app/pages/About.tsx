import { motion } from 'motion/react';
import { Store, Truck, Shield, Heart, Users, Award } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Store,
      title: 'Trusted Store',
      titleBn: 'বিশ্বস্ত দোকান',
      description: 'Quality products at affordable prices',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      titleBn: 'দ্রুত ডেলিভারি',
      description: 'Quick delivery across Bangladesh',
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      titleBn: 'নিরাপদ পেমেন্ট',
      description: 'Cash on Delivery available',
    },
    {
      icon: Heart,
      title: 'Customer Satisfaction',
      titleBn: 'গ্রাহক সন্তুষ্টি',
      description: 'Your satisfaction is our priority',
    },
    {
      icon: Users,
      title: '10,000+ Customers',
      titleBn: '১০,০০০+ গ্রাহক',
      description: 'Serving customers across Bangladesh',
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      titleBn: 'গুণমান নিশ্চিত',
      description: 'Genuine products only',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4">আমাদের সম্পর্কে</h1>
            <h2 className="text-3xl mb-6">About Electronics Store</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              আমরা চট্টগ্রাম ভিত্তিক একটি অনলাইন ইলেকট্রনিক্স শপ। সুলভ মূল্যে মানসম্মত পণ্য সরবরাহ করাই আমাদের লক্ষ্য।
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900">আমাদের গল্প / Our Story</h3>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>Electronics Store</strong> হল একটি বিশ্বস্ত অনলাইন ইলেকট্রনিক্স শপ যা চট্টগ্রাম থেকে সারাদেশে পণ্য সরবরাহ করে থাকে।
              </p>
              <p>
                আমরা বিভিন্ন ধরনের ইলেকট্রনিক্স পণ্য যেমন - ওয়াকিটকি, রাইস কুকার, ব্লেন্ডার, আয়রন, ট্রিমার, ফ্যান, রাউটার সহ আরও অনেক কিছু সরবরাহ করি।
              </p>
              <p>
                We are committed to providing quality electronics at affordable prices with fast delivery across Bangladesh. Customer satisfaction is our top priority.
              </p>
              <p>
                আমাদের সকল পণ্য অরিজিনাল এবং গুণমানসম্পন্ন। ক্যাশ অন ডেলিভারি সুবিধা সহ আমরা নিরাপদ এবং দ্রুত ডেলিভারি নিশ্চিত করি।
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl font-bold mb-4 text-gray-900">কেন আমাদের বেছে নিবেন?</h3>
            <p className="text-xl text-gray-600">Why Choose Us?</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">{feature.titleBn}</h4>
                <h5 className="text-lg font-semibold mb-3 text-gray-700">{feature.title}</h5>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-6">অর্ডার করতে প্রস্তুত?</h3>
            <p className="text-xl mb-8 text-blue-100">
              আজই আমাদের সাথে যোগাযোগ করুন এবং সুলভ মূল্যে মানসম্মত পণ্য কিনুন
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/8801328105216" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#25D366] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-[#128C7E] transition-all"
                >
                  WhatsApp এ যোগাযোগ করুন
                </motion.button>
              </a>
              <a href="https://m.me/bdelectronicsstore" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-gray-50 transition-all"
                >
                  Messenger এ মেসেজ করুন
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
