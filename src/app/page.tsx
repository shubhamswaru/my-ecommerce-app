import { Product } from '@/lib/types';
import ProductGrid from '@/components/ProductGrid';

async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold my-6 text-center">Products</h1>
      <ProductGrid products={products} />
    </main>
  );
}
