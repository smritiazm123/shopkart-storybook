'use client';

import { useCart } from '@/context/CartContext';
import styles from './Header.module.css';

export type HeaderProps = {
  /** Store name shown on the left */
  storeName?: string;
};

export function Header({ storeName = 'ShopKart' }: HeaderProps) {
  const { count } = useCart();
  return (
    <header className={styles.header}>
      <span className={styles.logo}>🛒 {storeName}</span>
      <span className={styles.cart}>
        Cart <span className={styles.count}>{count}</span>
      </span>
    </header>
  );
}