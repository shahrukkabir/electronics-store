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
        whileHover={{ y: -10 }}
        className="group"
      >
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-2xl border border-gray-100">
          {/* Image Container */}
          <Link to={`/product/${product.id}`}>
            <div className="relative overflow-hidden bg-gray-50 aspect-square">
              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all" />
            </div>
          </Link>

          {/* Product Info */}
          <div className="p-5">
            <Link to={`/product/${product.id}`}>
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#ff6b35] transition-colors min-h-[3rem]">
                {product.name}
              </h3>
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" />
                <span className="text-sm font-medium text-gray-700">{product.rating}</span>
              </div>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs text-gray-500">{product.category}</span>
            </div>

            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-gray-900">
                ৳{product.price.toFixed(2)}
              </span>
            </div>

            {/* Buy Now Button */}
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(255, 107, 53, 0.3)' }}
              whileTap={{ scale: 0.97 }}
              onClick={handleBuyNow}
              className="w-full bg-[#ff6b35] text-white py-3 rounded-xl font-semibold hover:bg-[#ff5722] transition-all shadow-md"
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
