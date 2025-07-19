'use client';

import { useState, useMemo, useEffect } from 'react';
//import { useState, useMemo } from 'react';
import { Product } from '@/lib/types';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

const ITEMS_PER_PAGE = 8;

export default function ProductGrid({ products }: { products: Product[] }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(() => {
    const uniqueCategories = new Set(products.map(p => p.category));
    return ['all', ...Array.from(uniqueCategories)];
  }, [products]);

  const filteredAndSortedProducts = useMemo(() => {
    let workingProducts = [...products];

    // Filter by search
    if (searchTerm) {
      workingProducts = workingProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      workingProducts = workingProducts.filter(
        product => product.category === selectedCategory
      );
    }

    
    const sorted = [...workingProducts];
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
        break;
    }

    return sorted;
  }, [products, selectedCategory, sortOrder, searchTerm]);

  
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, sortOrder, searchTerm]);

  
  const totalPages = Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div>
      {/* UI Controls */}
      <div className="mb-8 flex flex-col sm:flex-row justify-center items-center gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-600 bg-gray-900 text-white rounded-md shadow-sm w-full sm:w-auto"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border border-gray-600 bg-gray-900 text-white rounded-md shadow-sm w-full sm:w-auto"
        >
          {categories.map(category => (
            <option key={category} value={category} className="capitalize bg-gray-800 text-white">
              {category === 'all' ? 'All Categories' : category}
            </option>
          ))}
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border border-gray-600 bg-gray-900 text-white rounded-md shadow-sm w-full sm:w-auto"
        >
          <option value="default" className="bg-gray-800 text-white">Sort by</option>
          <option value="price-asc" className="bg-gray-800 text-white">Price: Low to High</option>
          <option value="price-desc" className="bg-gray-800 text-white">Price: High to Low</option>
          <option value="name-asc" className="bg-gray-800 text-white">Name: A to Z</option>
          <option value="name-desc" className="bg-gray-800 text-white">Name: Z to A</option>
        </select>
      </div>

      {/* Animated Product Grid */}
      <motion.div
        key={currentPage}
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[500px]"
      >
        {paginatedProducts.map((product) => (
          <motion.div key={product.id} variants={itemVariants}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      {/* No Results Message */}
      {paginatedProducts.length === 0 && (
         <div className="text-center py-16 col-span-full">
            <h3 className="text-xl font-semibold text-white">No Products Found</h3>
            <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
        </div>
      )}

      {}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center items-center gap-4">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 border border-gray-600 bg-gray-900 text-white rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 border border-gray-600 bg-gray-900 text-white rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
























