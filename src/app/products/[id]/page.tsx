import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: {
    id: string;
  };
}

// Fetches data for a single product
async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
      return null; // Handle cases where product is not found (404)
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return null; // Handle fetch errors
  }
}

// Pre-builds all the product pages at build time for better performance
export async function generateStaticParams() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products: Product[] = await res.json();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id);

  // If no product is found, show the 404 page
  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto p-4 mt-6">
      <Link href="/" className="text-blue-500 hover:underline mb-6 block">&larr; Back to Products</Link>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative w-full h-96">
          <Image
            src={product.image}
            alt={product.title}
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">{product.title}</h1>
          <p className="text-lg text-gray-500 capitalize mb-4">{product.category}</p>
          <p className="text-gray-700 mb-4 leading-relaxed">{product.description}</p>
          <p className="text-3xl font-extrabold text-gray-900">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </main>
  );
}