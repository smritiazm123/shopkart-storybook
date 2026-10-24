'use client';

import { useState } from 'react';
import { ProductCard } from '../components/ProductCard/ProductCard';
import {CartProvider,useCart} from '../context/CartContext';
import {Header} from '../components/Header/Header';

const products = [
  { id: 1, title: 'Running Shoes', price: 2499, rating: 4.5, inStock: true,
    imageUrl: 'https://picsum.photos/seed/shoes/400/300' },
  { id: 2, title: 'Wireless Headphones', price: 3999, rating: 4.2, inStock: false,
    imageUrl: 'https://picsum.photos/seed/headphones/400/300' },
  { id: 3, title: 'Smart Watch', price: 5999, rating: 3.8, inStock: true,
    imageUrl: 'https://picsum.photos/seed/watch/400/300' },
];


function ProductList() {
  const {addToCart } = useCart();
  return (
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
      {products.map((p) => (
        <ProductCard
          key={p.id}
          {...p}
          onAddToCart={addToCart}
        />
      ))}
    </div>
  );
} 

export default function Home() {

  return (
   <CartProvider >
    <Header/>
      <ProductList />
    </CartProvider>
  );
}