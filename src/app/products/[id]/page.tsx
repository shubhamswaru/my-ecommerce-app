import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { notFound } from 'next/navigation';

async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Add this comment to disable the ESLint rule for the next line
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ProductPage({ params }: { params: any }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto p-4 mt-6">
      <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors mb-6 block">
        &larr; Back to Products
      </Link>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="relative w-full h-96 bg-white rounded-lg">
          <Image
            src={product.image}
            alt={product.title}
            fill
            style={{ objectFit: 'contain', padding: '1rem' }}
          />
        </div>
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">{product.title}</h1>
          <p className="text-lg text-gray-400 capitalize mb-4">{product.category}</p>
          <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>
          <p className="text-4xl font-extrabold text-white">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </main>
  );
}