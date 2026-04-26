import { Product } from '../context/CartContext';
import sf400 from '../../../src/imports/SF400.avif'
import bf888s from '../../../src/imports/bf888s.jpg'

export const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphone',
    price: 4580,
    originalPrice: 6180,
    discount: 26,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?q=80&w=1080',
    category: 'Audio',
    description: 'High-quality wireless headphone with noise cancellation, deep bass, and long battery backup. Perfect for music, gaming, and daily use.',
    specifications: [
      { label: 'Connectivity', value: 'Bluetooth 5.3 + AUX support' },
      { label: 'Battery', value: 'Up to 40 hours playback' },
      { label: 'Driver Size', value: '40 mm dynamic driver' },
      { label: 'Noise Control', value: 'Hybrid noise cancellation' },
    ],
    details: [
      'This headphone is tuned for everyday listening with a balanced sound profile, stronger bass response, and stable wireless pairing for commuting or desk use.',
      'Its padded ear cups and foldable design make it easy to wear for long sessions, while the long battery life keeps it dependable for music, calls, and casual gaming.',
    ],
  },
  {
    id: 2,
    name: 'Baofeng BF-888S ওয়াকিটকি',
    price: 3000,
    originalPrice: 3500,
    discount: 30,
    image: bf888s,
    category: 'ওয়াকিটকি',
    description: 'Baofeng BF-888S একটি শক্তিশালী ও নির্ভরযোগ্য ওয়াকিটকি যা অফিস, সিকিউরিটি, ইভেন্ট ম্যানেজমেন্ট ও কনস্ট্রাকশন সাইটে ব্যবহারের জন্য আদর্শ। ২ থেকে ৫ কিমি পর্যন্ত রেঞ্জ সহ সবসময় থাকুন কানেক্টেড।',
    specifications: [
      { label: 'ফ্রিকোয়েন্সি রেঞ্জ', value: 'UHF 420-450MHz' },
      { label: 'ব্যাটারি', value: '1500mAh লি-আয়ন রিচার্জেবল' },
      { label: 'ভোল্টেজ', value: 'DC 3.7V' },
      { label: 'পাওয়ার আউটপুট', value: '5W এর কম' },
      { label: 'চ্যানেল', value: '16টি প্রোগ্রামেবল চ্যানেল' },
      { label: 'রেঞ্জ', value: '২ থেকে ৫ কিলোমিটার' },
      { label: 'ওজন', value: '১৮০ গ্রাম' },
      { label: 'মাপ', value: '60 × 33 × 115 মিমি' },
      { label: 'অ্যান্টেনা', value: 'SMA-Female' },
    ],
    details: [
      'Baofeng BF-888S ওয়াকিটকিতে রয়েছে ১৬টি প্রোগ্রামেবল চ্যানেল, VOX হ্যান্ডস-ফ্রি ফাংশন, ইমার্জেন্সি অ্যালার্ম এবং বিল্ট-ইন ফ্ল্যাশলাইট। স্পষ্ট ও শক্তিশালী সিগন্যালের মাধ্যমে ২ থেকে ৫ কিমি পর্যন্ত নির্ভরযোগ্য যোগাযোগ নিশ্চিত করে।',
      'প্যাকেজে রয়েছে: ১টি BF-888S ওয়াকিটকি, ১টি ইয়ারপিস, ১টি ১500mAh ব্যাটারি, ১টি SMA-Female অ্যান্টেনা, ১টি বেল্ট ক্লিপ, ১টি ডেস্কটপ চার্জার এবং ১টি রিস্ট স্ট্র্যাপ। অফিস, সিকিউরিটি ও ইভেন্ট ম্যানেজমেন্টে ব্যবহারের জন্য পারফেক্ট।',
    ],
  },
  {
    id: 3,
    name: 'Portable Bluetooth Speaker',
    price: 2200,
    originalPrice: 3000,
    discount: 27,
    image: 'https://images.unsplash.com/photo-1674303324806-7018a739ed11?q=80&w=1080',
    category: 'Audio',
    description: 'Compact and powerful speaker with clear sound and strong bass. Easy to carry and perfect for outdoor use.',
    specifications: [
      { label: 'Output', value: '20 W stereo sound' },
      { label: 'Battery', value: 'Up to 10 hours playback' },
      { label: 'Connectivity', value: 'Bluetooth 5.0 wireless link' },
      { label: 'Build', value: 'Portable splash-resistant body' },
    ],
    details: [
      'The speaker focuses on portability without sounding thin, so you get fuller audio for casual listening, outdoor meetups, or desk use at home.',
      'Its compact shape is easy to carry, and the battery backup keeps it practical for travel, picnics, or small room audio without extra setup.',
    ],
  },
  {
    id: 4,
    name: 'Latest Android Smartphone',
    price: 18500,
    originalPrice: 22000,
    discount: 16,
    image: 'https://images.unsplash.com/photo-1741061961703-0739f3454314?q=80&w=1080',
    category: 'Mobile',
    description: 'Modern smartphone with high-resolution display, fast processor, and long battery backup. Ideal for daily use.',
    specifications: [
      { label: 'Display', value: '6.7-inch FHD+ display' },
      { label: 'Chipset', value: 'Octa-core performance processor' },
      { label: 'Memory', value: '8 GB RAM + 128 GB storage' },
      { label: 'Battery', value: '5000 mAh with fast charging' },
    ],
    details: [
      'This smartphone is aimed at everyday users who want a smoother display, solid app performance, and dependable battery life for calls, streaming, and social apps.',
      'Its balanced hardware setup makes it practical for daily multitasking while still keeping the design slim enough to feel comfortable in hand.',
    ],
  },
  {
    id: 5,
    name: 'SF-400 Digital Kitchen Weight Machine',
    price: 10, // Set your actual price
    originalPrice: 20, // Set your actual original price
    discount: 30, // Set your actual discount
    image: sf400,
    category: 'Kitchen & Home',
    description: 'SF-400 Digital LCD Display Electronic Kitchen Scale – 10 kg capacity. Accurate and easy-to-use digital weight machine for kitchen and household use.',
    specifications: [
      { label: 'Max Capacity', value: '10000g / 353oz' },
      { label: 'Min Weight', value: '1g / 0.1oz' },
      { label: 'Units', value: 'g, oz, lb, kg' },
      { label: 'Display', value: 'LCD Digital Display' },
      { label: 'Material', value: 'ABS Plastic' },
      { label: 'Color', value: 'White' },
      { label: 'Dimensions', value: '24.5 x 17 x 3.5 cm (L x W x H)' },
      { label: 'Platform Diameter', value: '14.7 cm' },
      { label: 'Power', value: '2 x 1.5V AAA Batteries' },
      { label: 'Auto Power Off', value: 'Yes' },
    ],
    details: [
      'The SF-400 digital kitchen scale offers precise measurement from 1g up to 10kg, making it ideal for cooking, baking, and general household weighing needs. Its clear LCD display shows readings instantly in multiple units.',
      'Compact and lightweight at just 282g, the scale features an auto power-off function to save battery life, and a wide 14.7cm platform that comfortably holds bowls, plates, and ingredients.',
    ],
  },
  {
    id: 6,
    name: 'Silver Star ES-300 Professional Garments Steam Iron',
    price: 10, // Set your actual price
    originalPrice: 20, // Set your actual original price
    discount: 30, // Set your actual discount
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1080',
    category: 'Home Appliances',
    description: 'Silver Star ES-300 Professional Garments Steam Iron with gravity-feed hanging bottle, non-stick laminate soleplate, and powerful 1300W heating. Ideal for home and professional garment care.',
    specifications: [
      { label: 'Power', value: '1300W fast heating' },
      { label: 'Voltage', value: '220V' },
      { label: 'Weight', value: '2.5 kg lightweight body' },
      { label: 'Soleplate', value: 'Non-stick laminate coating' },
      { label: 'Steam', value: 'Gravity-feed hanging bottle system' },
      { label: 'Handle', value: 'Ergonomic urethane handle' },
      { label: 'Certifications', value: 'CE, VDE, CSA, CQC certified' },
      { label: 'Coating', value: 'Hard anodized for durability' },
    ],
    details: [
      'The Silver Star ES-300 is a professional-grade steam iron built for garment shops, tailors, and home users who need consistent, high-quality results. Its powerful 1300W heating element warms up quickly, and the gravity-feed hanging water bottle delivers a steady, thick burst of steam that penetrates fabric fibers to remove stubborn wrinkles efficiently.',
      'Internationally certified components (CE, VDE, CSA, CQC) ensure safety and long-lasting performance. The hard anodized coating on the soleplate resists wear, while the soft-touch button switch and ergonomic urethane handle make it comfortable to use for extended pressing sessions. Suitable for all fabric types including shirts, suits, and delicate garments.',
    ],
  },
  {
    id: 7,
    name: 'Silver Star ES-300L Professional Steam Iron (Large)',
    price: 10, // Set your actual price
    originalPrice: 20, // Set your actual original price
    discount: 30, // Set your actual discount
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1080',
    category: 'Home Appliances',
    description: 'Silver Star ES-300L Large Gravity-Fed Steam Iron – 220V professional garments iron with hanging water bottle, demineralizer cartridge, and non-stick soleplate. Built for professional tailoring and garment care.',
    specifications: [
      { label: 'Voltage', value: '220V' },
      { label: 'Soleplate', value: 'Non-stick laminate soleplate' },
      { label: 'Water System', value: '1-gallon hanging gravity-feed bottle' },
      { label: 'Includes', value: 'Demineralizer cartridge, silicone iron rest' },
      { label: 'Heater', value: 'Built-in sheathed wire heater' },
      { label: 'Use', value: 'Professional and home garment ironing' },
      { label: 'Vertical Steam', value: 'Yes – for hanging garments and drapes' },
    ],
    details: [
      'The Silver Star ES-300L is the large-size version of the professional ES-300 gravity-fed steam iron, designed for continuous use in tailoring shops and garment manufacturing environments. The built-in sheathed wire heater provides advanced thermal efficiency, heating up faster and consuming less energy over long pressing sessions.',
      'Comes as a complete kit including a 1-gallon hanging water bottle, demineralizer cartridge to protect against scale buildup, non-stick laminate soleplate for smooth fabric glide, and a silicone iron rest for safe placement between uses. Rugged construction ensures it withstands years of heavy professional use.',
    ],
  },
  {
    id: 8,
    name: 'Silver Star Gonta LB Steam Iron (Big Size)',
    price: 10,
    originalPrice: 20,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1080',
    category: 'Home Appliances',
    description: 'Silver Star Gonta LB – Big Size professional garments steam iron. Heavy-duty build for industrial and commercial garment pressing with superior steam output.',
    specifications: [
      { label: 'Size', value: 'Large / Big Size (LB)' },
      { label: 'Brand', value: 'Silver Star' },
      { label: 'Use', value: 'Commercial and professional garment pressing' },
      { label: 'Steam', value: 'High-output steam system' },
      { label: 'Build', value: 'Heavy-duty professional construction' },
    ],
    details: [
      'The Silver Star Gonta LB is a big-size professional steam iron built for commercial garment shops, laundries, and tailoring businesses that require heavy-duty, continuous pressing performance. Its large soleplate covers more surface area per stroke, reducing ironing time significantly.',
      'Engineered for durability and consistent steam delivery, the Gonta LB handles all fabric types with ease — from heavy denim and wool to fine dress shirts. A trusted choice for professional garment care where reliability and output matter most.',
    ],
  },
];
