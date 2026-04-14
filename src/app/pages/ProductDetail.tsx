import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ShoppingCart, Star, Truck, Shield, Package } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';
import { ProductCard } from '../components/ProductCard';
import { OrderModal } from '../components/OrderModal';
import { useState } from 'react';

export function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Product not found</h2>
          <Link to="/products">
            <button className="bg-[#ff6b35] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#ff5722] transition-all">
              Back to Products
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    setIsOrderModalOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-gray-600 hover:text-[#ff6b35] font-medium transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Products
              </motion.button>
            </Link>
          </motion.div>

          {/* Product Details */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden mb-16">
            <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 shadow-lg">
                    {product.category}
                  </span>
                </div>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Star className="w-6 h-6 fill-[#ff6b35] text-[#ff6b35]" />
                  <span className="font-bold text-lg">{product.rating}</span>
                  <span className="text-gray-500">(234 reviews)</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">{product.name}</h1>

                <div className="mb-8">
                  <span className="text-5xl font-bold text-[#ff6b35]">
                    ট {product.price.toFixed(2)}
                  </span>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {product.description}
                </p>

                {/* Features */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <Truck className="w-7 h-7 mx-auto mb-3 text-[#ff6b35]" />
                      <p className="text-sm font-medium text-gray-900">Fast Delivery</p>
                    </div>
                    <div className="text-center">
                      <Shield className="w-7 h-7 mx-auto mb-3 text-[#ff6b35]" />
                      <p className="text-sm font-medium text-gray-900">Trusted Quality</p>
                    </div>
                    <div className="text-center">
                      <Package className="w-7 h-7 mx-auto mb-3 text-[#ff6b35]" />
                      <p className="text-sm font-medium text-gray-900">In Stock</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    className="flex-1 bg-white border-2 border-gray-900 text-gray-900 px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-900 hover:text-white transition-all"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(255, 107, 53, 0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleBuyNow}
                    className="flex-1 bg-[#ff6b35] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#ff5722] transition-all shadow-lg shadow-orange-500/30"
                  >
                    Buy Now
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-4xl font-bold mb-10 text-gray-900">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct, index) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} index={index} />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        product={product}
      />
    </>
  );
}
