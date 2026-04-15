import { motion } from 'motion/react';
import { useState } from 'react';

export function WhatsAppButton() {
  const [isHover, setIsHover] = useState(false);

  const whatsappNumber = '+8801328105216';
  const message = 'Hello! I want to order from Electronics Store';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 18 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Pulse ring 1 */}
      <motion.div
        animate={{ scale: [1, 1.6], opacity: [0.45, 0] }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
          repeatDelay: 0.2,
        }}
        className="absolute inset-0 rounded-full bg-[#25D366]"
      />

      {/* Pulse ring 2 */}
      <motion.div
        animate={{ scale: [1, 1.35], opacity: [0.35, 0] }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
          delay: 0.55,
          repeatDelay: 0.2,
        }}
        className="absolute inset-0 rounded-full bg-[#25D366]"
      />

      {/* Main Button */}
      <motion.div
        whileHover={{ scale: 1.12 }}
        transition={{ duration: 0.3 }}
        className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.3)] cursor-pointer"
      >
        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-9 h-9"
          fill="white"
        >
          <path d="M24 4C12.95 4 4 12.95 4 24c0 3.56.93 6.91 2.56 9.8L4 44l10.5-2.51A19.9 19.9 0 0 0 24 44c11.05 0 20-8.95 20-20S35.05 4 24 4zm0 3c9.39 0 17 7.61 17 17s-7.61 17-17 17a16.94 16.94 0 0 1-8.63-2.36l-.62-.37-6.23 1.49 1.55-5.98-.4-.65A16.94 16.94 0 0 1 7 24C7 14.61 14.61 7 24 7zm-5.17 8c-.31 0-.82.12-1.26.59-.43.47-1.65 1.6-1.65 3.9s1.69 4.52 1.92 4.83c.24.31 3.28 5.25 8.1 7.16 4.01 1.58 4.83 1.27 5.7 1.19.87-.08 2.82-1.15 3.22-2.26.4-1.12.4-2.07.28-2.27-.12-.2-.43-.31-.9-.55-.47-.24-2.78-1.37-3.21-1.53-.43-.16-.74-.24-1.06.24-.31.47-1.22 1.53-1.5 1.85-.27.31-.55.35-1.02.12-.47-.24-1.98-.73-3.77-2.33-1.39-1.24-2.33-2.77-2.6-3.24-.27-.47-.03-.72.2-.96.21-.21.47-.55.71-.82.24-.28.31-.47.47-.78.16-.31.08-.59-.04-.82-.12-.24-1.04-2.55-1.45-3.48-.38-.9-.77-.78-1.06-.8-.27-.01-.59-.01-.9-.01z" />
        </svg>
      </motion.div>

      {/* Tooltip */}
      <motion.div
        animate={{
          opacity: isHover ? 1 : 0,
          x: isHover ? 0 : 10,
          scale: isHover ? 1 : 0.9,
        }}
        transition={{ duration: 0.25 }}
        className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap pointer-events-none"
      >
        <span className="text-sm font-medium">Chat on WhatsApp</span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-900 rotate-45" />
      </motion.div>
    </motion.a>
  );
}