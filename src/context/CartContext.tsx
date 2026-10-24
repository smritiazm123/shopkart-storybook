'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

type CartContextValue = {
  count: number;
  addToCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({
  children,
  initialCount = 0,
}: {
  children: ReactNode;
  initialCount?: number;
}) {
  const [count, setCount] = useState(initialCount);
  return (
    <CartContext.Provider value={{ count, addToCart: () => setCount((c) => c + 1) }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used inside <CartProvider>');
  }
  return ctx;
}