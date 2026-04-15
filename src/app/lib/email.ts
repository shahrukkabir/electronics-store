import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const CONTACT_TEMPLATE = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
const ORDER_TEMPLATE = import.meta.env.VITE_EMAILJS_ORDER_TEMPLATE_ID;

// ================= CONTACT =================
export const sendContactEmail = async (data: {
  user_name: string;
  user_email: string;
  user_phone: string;
  message: string;
}) => {
  return emailjs.send(SERVICE_ID, CONTACT_TEMPLATE, data, {
    publicKey: PUBLIC_KEY,
  });
};

// ================= ORDER =================
export const sendOrderEmail = async (data: {
  user_name: string;
  user_phone: string;
  user_address: string;
  order_items: string;
  subtotal: string;
  delivery: string;
  total: string;
  note: string;
}) => {
  return emailjs.send(SERVICE_ID, ORDER_TEMPLATE, data, {
    publicKey: PUBLIC_KEY,
  });
};