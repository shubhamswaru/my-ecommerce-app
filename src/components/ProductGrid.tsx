'use client';

import { useState, useMemo } from 'react';
import { Product } from '@/lib/types';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }: { products: Product[] }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('default');

  // Get unique categories for the filter dropdown
  const categories = useMemo(() => {
    const uniqueCategories = new Set(products.map(p => p.category));
    return ['all', ...Array.from(uniqueCategories)];
  }, [products]);

  // Filter and then sort products
  const displayProducts = useMemo(() => {
    // Filter first
    const filtered = selectedCategory === 'all'
      ? products
      : products.filter(product => product.category === selectedCategory);

    // Then sort
    const sorted = [...filtered]; // Create a mutable copy
    switch (sortOrder) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-desc':
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        // No sorting for 'default'
        break;
    }

    return sorted;
  }, [products, selectedCategory, sortOrder]); // Re-run when products, category, or sort order changes

  return (
    <div>
      {/* UI Controls for Filtering and Sorting */}
      <div className="mb-8 flex flex-col sm:flex-row justify-center items-center gap-4">
        <label htmlFor="category-select" className="sr-only">Filter by category</label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded-md shadow-sm"
        >
          {categories.map(category => (
            <option key={category} value={category} className="capitalize">
              {category === 'all' ? 'All Categories' : category}
            </option>
          ))}
        </select>
        
        <label htmlFor="sort-select" className="sr-only">Sort by</label>
        <select
          id="sort-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border rounded-md shadow-sm"
        >
          <option value="default">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}