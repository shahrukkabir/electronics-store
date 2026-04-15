import { Link, useParams } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ShoppingCart, Star, Truck, Shield, Package } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { OrderModal } from '../components/OrderModal';

const serviceCards = [
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Quick dispatch with cash on delivery support.',
  },
  {
    icon: Shield,
    title: 'Quality Checked',
    description: 'Each product is checked before shipping.',
  },
  {
    icon: Package,
    title: 'Safe Packaging',
    description: 'Secure packing for safer delivery handling.',
  },
];

export function ProductDetail() {
  const { id } = useParams();
  const { addToCart, hasItemInCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    setQuantity(1);
    setIsOrderModalOpen(false);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Product not found</h2>
          <Link to="/products">
            <button className="bg-[#4640c2] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#3b35a5] transition-all">
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
    if (hasItemInCart(product.id)) {
      toast.info('Item already in cart. Go to cart to change quantity.');
      return;
    }

    addToCart(product);
    toast.success(`${product.name} added to cart.`);
  };

  return (
    <>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_rgba(70,64,194,0.08),_transparent_28%),_white]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.03, x: -4 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#d5dbff] bg-white px-5 py-2.5 text-[#3a4570] font-medium hover:text-[#4640c2] hover:border-[#bcc6ff] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Products
              </motion.button>
            </Link>
          </motion.div>

          <div className="rounded-[34px] border border-[#dde3ff] bg-white p-6 md:p-8 lg:p-10 shadow-[0_28px_80px_rgba(37,56,134,0.12)]">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-[28px] bg-[linear-gradient(135deg,rgba(70,64,194,0.10),rgba(255,255,255,0))]" />

                <div className="relative overflow-hidden rounded-[28px] border border-[#e4e8ff] bg-[#f6f8ff]">
                  <div className="absolute left-5 top-5 z-10 flex gap-3">
                    <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#2c3761] shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
                      {product.category}
                    </span>
                    {product.discount > 0 && (
                      <span className="rounded-full bg-[#4640c2] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(70,64,194,0.25)]">
                        Save {product.discount}%
                      </span>
                    )}
                  </div>

                  <motion.img
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.35 }}
                    src={product.image}
                    alt={product.name}
                    className="aspect-square w-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col"
              >
                <div className="flex items-center gap-2 text-[#2b3454]">
                  <Star className="w-6 h-6 fill-[#4640c2] text-[#4640c2]" />
                  <span className="text-3xl font-bold leading-none">{product.rating}</span>
                  <span className="text-lg text-gray-500">(234 reviews)</span>
                </div>

                <h1 className="mt-5 text-4xl md:text-5xl font-bold text-[#131d3a] leading-[1.05]">
                  {product.name}
                </h1>

                <div className="mt-6 flex flex-wrap items-end gap-4">
                  <span className="text-5xl font-bold text-[#4640c2]">
                    Tk {product.price.toFixed(2)}
                  </span>
                  <div className="pb-1">
                    <p className="text-sm text-gray-400 line-through">
                      Tk {product.originalPrice.toFixed(2)}
                    </p>
                    <p className="text-sm font-semibold text-[#5e68a6]">
                      You save Tk {(product.originalPrice - product.price).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="mt-8 rounded-[24px] border border-[#e2e7ff] bg-[#f8f9ff] p-5">
                  <p className="text-base leading-8 text-[#4e587d]">
                    {product.description}
                  </p>
                </div>

                <div className="mt-8 rounded-[26px] border border-[#dde4ff] bg-white p-5 shadow-[0_14px_35px_rgba(15,23,42,0.05)]">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5d66a7]">
                        Buy Now Quantity
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Add to Cart adds one unit. This quantity is used for instant order.
                      </p>
                    </div>

                    <div className="flex items-center rounded-2xl border border-[#d7ddff] bg-[#f7f8ff] p-1.5">
                      <button
                        onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                        className="h-12 w-12 cursor-pointer rounded-xl text-[#263156] hover:bg-[#e7ebff] transition"
                      >
                        -
                      </button>

                      <span className="min-w-14 text-center text-xl font-bold text-[#182142]">
                        {quantity}
                      </span>

                      <button
                        onClick={() => setQuantity((prev) => prev + 1)}
                        className="h-12 w-12 cursor-pointer rounded-xl text-[#263156] hover:bg-[#e7ebff] transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: '0 18px 35px rgba(70, 64, 194, 0.28)' }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    className="flex-1 cursor-pointer bg-[#4640c2] text-white px-6 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-[#3b35a5] transition-all shadow-[0_16px_35px_rgba(70,64,194,0.28)]"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: '0 18px 35px rgba(19, 29, 58, 0.22)' }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsOrderModalOpen(true)}
                    className="flex-1 cursor-pointer bg-[#121a3f] text-white px-6 py-4 rounded-2xl font-semibold hover:bg-[#0d1432] transition-all shadow-[0_16px_35px_rgba(18,26,63,0.22)]"
                  >
                   Order Now - (COD)
                  </motion.button>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {serviceCards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-[22px] border border-[#e1e6ff] bg-[#f8f9ff] p-4"
                    >
                      <card.icon className="w-6 h-6 text-[#4640c2]" />
                      <h3 className="mt-4 text-base font-semibold text-[#1a2340]">{card.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#66708d]">{card.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-[28px] border border-[#dde3ff] bg-[#fbfcff] p-6 md:p-7"
              >
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5d66a7]">
                      Product Details
                    </p>
                    <h2 className="mt-2 text-3xl font-bold text-[#141d3a]">Explanation & Usage</h2>
                  </div>
                </div>

                <div className="space-y-4">
                  {product.details.map((detail, index) => (
                    <p
                      key={`${product.id}-detail-${index}`}
                      className="text-base leading-8 text-[#4f587d]"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="rounded-[28px] border border-[#dde3ff] bg-white p-6 md:p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5d66a7]">
                  Specifications
                </p>
                <h2 className="mt-2 text-3xl font-bold text-[#141d3a]">Key Specs</h2>

                <div className="mt-6 space-y-3">
                  {product.specifications.map((spec) => (
                    <div
                      key={`${product.id}-${spec.label}`}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-[#e4e8ff] bg-[#f8f9ff] px-4 py-4"
                    >
                      <span className="text-sm font-medium text-[#697394]">{spec.label}</span>
                      <span className="text-sm font-semibold text-[#1d2645] text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-16"
            >
              <div className="mb-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5d66a7]">
                  Related Picks
                </p>
                <h2 className="mt-2 text-4xl font-bold text-[#131d3a]">You may also like</h2>
              </div>

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
        quantity={quantity}
      />
    </>
  );
}
