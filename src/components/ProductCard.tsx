// src/components/ProductCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="border rounded-lg p-4 flex flex-col hover:shadow-lg transition-shadow">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: 'contain' }}
          className="rounded-t-lg"
        />
      </div>
      <div className="flex-grow">
        <h2 className="text-lg font-semibold truncate">{product.title}</h2>
        <p className="text-sm text-gray-500 capitalize">{product.category}</p>
      </div>
      <p className="text-xl font-bold mt-2">${product.price.toFixed(2)}</p>
    </Link>
  );
}