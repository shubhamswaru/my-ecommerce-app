// import Link from 'next/link';
// import Image from 'next/image';
// import { Product } from '@/lib/types';
// import { notFound } from 'next/navigation';

// interface ProductPageProps {
//   params: {
//     id: string;
//   };
// }

// async function getProduct(id: string): Promise<Product | null> {
//   try {
//     const res = await fetch(`https://fakestoreapi.com/products/${id}`);
//     if (!res.ok) {
//       return null; 
//     }
//     return res.json();
//   } catch (error) {
//     console.error(error);
//     return null; 
//   }
// }

// export async function generateStaticParams() {
//   const res = await fetch('https://fakestoreapi.com/products');
//   const products: Product[] = await res.json();

//   return products.map((product) => ({
//     id: product.id.toString(),
//   }));
// }


// export default async function ProductPage({ params: { id } }: ProductPageProps) {
//   const product = await getProduct(id);

//   if (!product) {
//     notFound();
//   }

//   return (
//     <main className="container mx-auto p-4 mt-6">
//       <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors mb-6 block">
//         &larr; Back to Products
//       </Link>
//       <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
//         <div className="relative w-full h-96 bg-white rounded-lg">
//           <Image
//             src={product.image}
//             alt={product.title}
//             fill
//             style={{ objectFit: 'contain', padding: '1rem' }}
//           />
//         </div>
//         <div className="flex flex-col justify-center text-white">
//           <h1 className="text-3xl lg:text-4xl font-bold mb-2">{product.title}</h1>
          
//           <p className="text-lg text-gray-400 capitalize mb-4">{product.category}</p>
          
//           <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>
          
//           <p className="text-4xl font-extrabold text-white">${product.price.toFixed(2)}</p>
//         </div>
//       </div>
//     </main>
//   );
// }






















// src/app/products/[id]/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { notFound } from 'next/navigation';

// No longer need the ProductPageProps interface

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


// export async function generateStaticParams() { ... } // This can remain commented out for now

// The function signature is changed here
export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id); // Access id via params.id

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