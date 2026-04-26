import { motion } from 'motion/react';
import { Store, Truck, Shield, Heart, Users, Award } from 'lucide-react';
import { Seo } from '../components/Seo';

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
      title: '1,000+ Customers',
      titleBn: '১,০০০+ গ্রাহক',
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
      <Seo
        title="About Us"
        description="Learn about Electronics Store"
      />

      {/* HERO */}
      <section className="bg-[#4640c2] text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
              আমাদের সম্পর্কে
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 md:mb-6">
              About Electronics Store
            </h2>

            <p className="text-sm sm:text-base md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              আমরা চট্টগ্রাম ভিত্তিক একটি অনলাইন ইলেকট্রনিক্স শপ।
              সুলভ মূল্যে মানসম্মত পণ্য সরবরাহ করাই আমাদের লক্ষ্য।
            </p>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            className="bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-5 md:mb-6 text-blue-700">
              আমাদের গল্প / Our Story
            </h3>

            <div className="space-y-4 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>Electronics Store</strong> হল একটি বিশ্বস্ত অনলাইন
                ইলেকট্রনিক্স শপ।
              </p>

              <p>
                আমরা বিভিন্ন ধরনের পণ্য যেমন ওয়াকিটকি, রাইস কুকার,
                ব্লেন্ডার, আয়রন, ট্রিমার, ফ্যান, রাউটার সরবরাহ করি।
              </p>

              <p>
                We are committed to providing quality electronics
                at affordable prices with fast delivery.
              </p>

              <p>
                আমাদের সকল পণ্য অরিজিনাল এবং গুণমানসম্পন্ন।
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
              কেন আমাদের বেছে নিবেন?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">

            {features.map((feature,index)=>(
              <motion.div
                key={index}
                initial={{opacity:0,y:30}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{delay:index*.08}}
                whileHover={{y:-6}}
                className="bg-white rounded-2xl p-5 md:p-8 shadow-lg hover:shadow-2xl transition-all"
              >

                <div className="bg-blue-100 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-5">
                  <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-blue-600"/>
                </div>

                <h4 className="text-lg md:text-xl font-bold mb-2 text-gray-900">
                  {feature.titleBn}
                </h4>

                <h5 className="text-base md:text-lg font-semibold mb-3 text-gray-700">
                  {feature.title}
                </h5>

                <p className="text-sm md:text-base text-gray-600">
                  {feature.description}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-[#4640c2] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">

          <motion.div
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
          >

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 md:mb-6">
              অর্ডার করতে প্রস্তুত?
            </h3>

            <p className="text-sm sm:text-base md:text-xl mb-6 md:mb-8 text-blue-100">
              আজই আমাদের সাথে যোগাযোগ করুন
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">

              <a
                href="https://wa.me/8801328105216"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <motion.button
                  whileHover={{scale:1.04}}
                  whileTap={{scale:0.98}}
                  className="w-full sm:w-auto bg-[#25D366] text-white px-6 md:px-10 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg shadow-xl"
                >
                  WhatsApp এ যোগাযোগ করুন
                </motion.button>
              </a>

              <a
                href="https://m.me/bdelectronicsstore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <motion.button
                  whileHover={{scale:1.04}}
                  whileTap={{scale:0.98}}
                  className="w-full sm:w-auto bg-white text-blue-600 px-6 md:px-10 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg shadow-xl"
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