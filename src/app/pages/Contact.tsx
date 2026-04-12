import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('আপনার মেসেজ পাঠানো হয়েছে! আমরা শীঘ্রই যোগাযোগ করব।');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone / WhatsApp',
      titleBn: 'ফোন / হোয়াটসঅ্যাপ',
      value: '+880 1328-105216',
      link: 'https://wa.me/8801328105216',
    },
    {
      icon: Mail,
      title: 'Email',
      titleBn: 'ইমেইল',
      value: 'bdelectronicsstore@gmail.com',
      link: 'mailto:bdelectronicsstore@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      titleBn: 'ঠিকানা',
      value: 'Chittagong, Bangladesh',
      link: null,
    },
    {
      icon: Clock,
      title: 'Business Hours',
      titleBn: 'ব্যবসায়িক সময়',
      value: 'Sat - Thu: 10 AM - 9 PM',
      link: null,
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
            <h1 className="text-5xl font-bold mb-4">যোগাযোগ করুন</h1>
            <h2 className="text-3xl mb-6">Contact Us</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              আমাদের সাথে যোগাযোগ করুন। আমরা সবসময় আপনার সেবায় প্রস্তুত।
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-xl text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{info.titleBn}</h3>
                <p className="text-sm text-gray-600 mb-3">{info.title}</p>
                {info.link ? (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-700 font-semibold">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-3xl font-bold mb-2 text-gray-900">মেসেজ পাঠান</h3>
                <p className="text-gray-600 mb-8">Send us a message</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      নাম / Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="আপনার নাম লিখুন"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        ইমেইল / Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        ফোন / Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="01XXXXXXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      মেসেজ / Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all"
                      placeholder="আপনার মেসেজ লিখুন..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-5 h-5" />
                    মেসেজ পাঠান
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Quick Contact Options */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-bold mb-2 text-gray-900">দ্রুত যোগাযোগ</h3>
                <p className="text-gray-600 mb-8">Quick Contact Options</p>
              </div>

              {/* WhatsApp */}
              <a href="https://wa.me/8801328105216" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-2xl p-8 shadow-xl cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white/20 p-4 rounded-2xl">
                      <MessageCircle className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">WhatsApp</h4>
                      <p className="text-green-100">সরাসরি চ্যাট করুন</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold">+880 1328-105216</p>
                  <p className="text-green-100 mt-2">Click to chat instantly</p>
                </motion.div>
              </a>

              {/* Facebook Messenger */}
              <a href="https://m.me/bdelectronicsstore" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="bg-gradient-to-r from-[#0084FF] to-[#0066CC] text-white rounded-2xl p-8 shadow-xl cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white/20 p-4 rounded-2xl">
                      <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.898 1.447 5.483 3.71 7.172V22l3.407-1.87c.91.252 1.876.387 2.883.387 5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm1.003 12.388l-2.558-2.729-4.995 2.729 5.493-5.831 2.623 2.729 4.93-2.729-5.493 5.831z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">Messenger</h4>
                      <p className="text-blue-100">ফেসবুকে মেসেজ করুন</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold">@bdelectronicsstore</p>
                  <p className="text-blue-100 mt-2">Message us on Facebook</p>
                </motion.div>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/bdelectronicsstore" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] text-white rounded-2xl p-8 shadow-xl cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white/20 p-4 rounded-2xl">
                      <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">Instagram</h4>
                      <p className="text-pink-100">Follow us</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold">@bdelectronicsstore</p>
                  <p className="text-pink-100 mt-2">See our latest products</p>
                </motion.div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
