// // app/page.tsx


// import Link from 'next/link';
// import Image from 'next/image';
// import { Product } from '@/lib/types';
// import ProductCard from '@/components/ProductCard';


// async function getProducts(): Promise<Product[]> {
//   const res = await fetch('https://fakestoreapi.com/products');
//   if (!res.ok) {
//     // This will be caught by the error page and shown to the user
//     throw new Error('Failed to fetch products');
//   }
//   return res.json();
// }

// export default async function HomePage() {
  
//   const products = await getProducts();

//   return (
//     <main className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </main>
//   );
// }





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