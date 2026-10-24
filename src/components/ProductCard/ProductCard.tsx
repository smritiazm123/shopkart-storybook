"use client";
import { Button } from '../Button/Button';
import { Badge } from '../Badge/Badge';
import styles from './ProductCard.module.css';
import { useState } from 'react';

export type ProductCardProps = {
  title: string;
  price: number;
  imageUrl: string;
  /** Rating from 0 to 5 */
  rating: number;
  inStock: boolean;
  onAddToCart?: () => void;
};

export function ProductCard({
  title,
  price,
  imageUrl,
  rating,
  inStock,
  onAddToCart,
}: ProductCardProps) {


    const [failedUrl,setFailedUrl] = useState<string | null>(null);
    const imageFailed = !imageUrl || failedUrl === imageUrl;

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(price);

  return (
    <div className={styles.card}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {imageFailed ? (
        <div className={styles.fallback}>Image not available</div>
      ) : (
        <img 
          src={imageUrl} 
          alt={title} 
          className={styles.image} 
          onError={() => setFailedUrl(imageUrl)}
        />
      )}
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>{formattedPrice}</p>
        <p className={styles.rating}>⭐ {rating.toFixed(1)}</p>
        <Badge
          text={inStock ? 'In Stock' : 'Out of Stock'}
          tone={inStock ? 'success' : 'error'}
        />
        <div className={styles.action}>
          <Button
            label="Add to Cart"
            disabled={!inStock}
            onClick={onAddToCart}
          />
        </div>
      </div>
    </div>
  );
}