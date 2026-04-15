import { motion } from 'motion/react';
import { Star, ShoppingCart } from 'lucide-react';
import type { KeyboardEvent, MouseEvent } from 'react';
import { useNavigate } from 'react-router';
import { Product, useCart } from '../context/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const navigate = useNavigate();
  const { addToCart, hasItemInCart } = useCart();

  const navigateToProduct = () => {
    navigate(`/product/${product.id}`);
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      navigateToProduct();
    }
  };

  const handleAddToCart = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (hasItemInCart(product.id)) {
      toast.info('Item already in cart. Go to cart to change quantity.');
      return;
    }

    addToCart(product);
    toast.success(`${product.name} added to cart.`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      onClick={navigateToProduct}
      onKeyDown={handleCardKeyDown}
      role="link"
      tabIndex={0}
      className="group h-full cursor-pointer"
    >
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 transition-all hover:shadow-xl flex flex-col h-full">
        <div className="relative h-52 overflow-hidden bg-gray-100">
          {product.discount && (
            <div className="absolute top-3 right-3 bg-[#ff6b35] text-white text-xs font-semibold px-3 py-1 rounded-md shadow z-10">
              -{product.discount}%
            </div>
          )}

          <motion.img
            whileHover={{ scale: 1.05 }}
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all" />
        </div>

        <div className="px-5 py-4 flex flex-col flex-1">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-[15px] leading-snug group-hover:text-[#ff6b35] transition">
            {product.name}
          </h3>

          <div className="flex items-center gap-1 mb-2">
            <Star className="w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" />
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-blue-600 font-bold text-lg">
              Tk {product.price}
            </span>

            {product.originalPrice && (
              <span className="text-gray-400 line-through text-sm">
                Tk {product.originalPrice}
              </span>
            )}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="mt-auto w-full cursor-pointer bg-[#4640c2] text-white py-2.5 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-[#3b35a5]"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
