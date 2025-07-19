'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="border border-gray-700 rounded-lg p-4 flex flex-col bg-gray-900
                 hover:shadow-lg hover:border-gray-500 transition-all duration-300"
    >
      <div className="relative w-full h-48 mb-4 bg-white rounded-md">
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: 'contain', padding: '8px' }}
          className="rounded-md"
        />
      </div>
      
      {}
      <div>
        <h2 className="text-lg font-semibold truncate text-white">{product.title}</h2>
        <p className="text-sm text-gray-400 capitalize">{product.category}</p>
      </div>

      <p className="text-xl font-bold mt-4 text-white">${product.price.toFixed(2)}</p>
    </Link>
  );
}






