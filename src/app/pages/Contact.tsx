import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Seo } from '../components/Seo';
import { sendContactEmail } from '../lib/email';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendContactEmail({
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        message: formData.message,
      });

      toast.success('মেসেজ পাঠানো হয়েছে!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error(error);
      toast.error('মেসেজ পাঠানো যায়নি!');
    }
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-50">
      <Seo
        title="Contact Us"
        description="Contact Electronics Store by phone, email, WhatsApp, or message form for product questions, order support, and delivery information."
      />

      {/* Header */}
      <section className="bg-[#4640c2] text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            যোগাযোগ করুন
          </h1>
          <p className="text-blue-100 text-sm md:text-base">
            আমরা সবসময় আপনার সাহায্যের জন্য প্রস্তুত
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

          {/* LEFT: FORM */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              মেসেজ পাঠান
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="আপনার নাম"
                className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4640c2]"
                required
              />

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-[#4640c2]"
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-[#4640c2]"
                  required
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="আপনার মেসেজ লিখুন..."
                className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-[#4640c2]"
                required
              />

              <button className="w-full bg-[#4640c2] hover:bg-[#3b35a5] text-white py-2.5 rounded-md font-medium flex items-center justify-center gap-2">
                <Send size={18} />
                মেসেজ পাঠান
              </button>
            </form>
          </div>

          {/* RIGHT: CONTACT INFO */}
          <div className="space-y-4">

            <div className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border flex items-center gap-3 sm:gap-4">
              <div className="bg-blue-100 p-2 sm:p-3 rounded-full">
                <Phone className="text-blue-600" size={18} />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Phone</p>
                <p className="font-semibold text-sm sm:text-base">
                  +880 1328-105216
                </p>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border flex items-center gap-3 sm:gap-4">
              <div className="bg-blue-100 p-2 sm:p-3 rounded-full">
                <Mail className="text-blue-600" size={18} />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Email</p>
                <p className="font-semibold text-sm sm:text-base break-all">
                  bdelectronicsstore@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border flex items-center gap-3 sm:gap-4">
              <div className="bg-blue-100 p-2 sm:p-3 rounded-full">
                <MapPin className="text-blue-600" size={18} />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Location</p>
                <p className="font-semibold text-sm sm:text-base">
                  Chittagong, Bangladesh
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/8801328105216"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border flex items-center gap-3 sm:gap-4 hover:shadow-md transition cursor-pointer">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-full">
                  <MessageCircle className="text-blue-600" size={18} />
                </div>

                <div>
                  <p className="text-xs sm:text-sm text-gray-500">WhatsApp</p>
                  <p className="font-semibold text-sm sm:text-base">
                    +880 1328-105216
                  </p>
                </div>
              </div>
            </a>

          </div>
        </div>
      </section>
    </div>
  );
}