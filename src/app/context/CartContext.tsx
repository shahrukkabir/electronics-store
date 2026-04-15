import { createContext, type ReactNode, useContext, useRef, useState } from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  discount: number;
  originalPrice: number;
  description: string;
  rating: number;
  specifications: {
    label: string;
    value: string;
  }[];
  details: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => boolean;
  hasItemInCart: (productId: number) => boolean;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const cartRef = useRef<CartItem[]>([]);

  const addToCart = (product: Product) => {
    if (cartRef.current.some((item) => item.id === product.id)) {
      return false;
    }

    const nextCart = [...cartRef.current, { ...product, quantity: 1 }];
    cartRef.current = nextCart;
    setCart(nextCart);
    return true;
  };

  const hasItemInCart = (productId: number) =>
    cartRef.current.some((item) => item.id === productId);

  const removeFromCart = (productId: number) => {
    const nextCart = cartRef.current.filter((item) => item.id !== productId);
    cartRef.current = nextCart;
    setCart(nextCart);
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    const nextCart = cartRef.current.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );

    cartRef.current = nextCart;
    setCart(nextCart);
  };

  const clearCart = () => {
    cartRef.current = [];
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        hasItemInCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
