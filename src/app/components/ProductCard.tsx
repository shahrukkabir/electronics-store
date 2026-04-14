import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { Product } from '../context/CartContext';
import { Link } from 'react-router';
import { useState } from 'react';
import { OrderModal } from './OrderModal';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOrderModalOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        whileHover={{ y: -6 }}
        className="group"
      >
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 transition-all hover:shadow-xl">

          {/* Image Container (FIXED HEIGHT) */}
          <Link to={`/product/${product.id}`}>
            <div className="relative h-52 overflow-hidden bg-gray-100">

              {/* 🔴 Discount Badge */}
              {product.discount && (
                <div className="absolute top-3 right-3 bg-[#ff6b35] text-white text-xs font-semibold px-3 py-1 rounded-md shadow z-10">
                  -{product.discount}%
                </div>
              )}

              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all" />
            </div>
          </Link>

          {/* Product Info */}
          <div className="px-5 py-4">

            <Link to={`/product/${product.id}`}>
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-[15px] leading-snug group-hover:text-[#ff6b35] transition">
                {product.name}
              </h3>
            </Link>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-2">
              <Star className="w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" />
              <span className="text-sm text-gray-600">{product.rating}</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-blue-600 font-bold text-lg">
                ট {product.price}
              </span>

              {product.originalPrice && (
                <span className="text-gray-400 line-through text-sm">
                  ট {product.originalPrice}
                </span>
              )}
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleBuyNow}
              className="w-full cursor-pointer bg-[#4640c2] hover:bg-[#3b35a5] text-white py-2.5 rounded-md font-semibold transition"
            >
              Buy Now
            </motion.button>
          </div>
        </div>
      </motion.div>

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        product={product}
      />
    </>
  );
}