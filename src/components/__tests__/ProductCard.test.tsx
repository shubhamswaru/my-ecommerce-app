import { render, screen } from '@testing-library/react';
import ProductCard from '../ProductCard';
import { Product } from '@/lib/types';

// Mock product data for the test
const mockProduct: Product = {
  id: 1,
  title: 'Classic T-Shirt',
  price: 25.99,
  description: 'A classic t-shirt.',
  category: 'men\'s clothing',
  image: '/test-image.jpg',
  rating: { rate: 4.5, count: 100 },
};

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    // Render the component with the mock data
    render(<ProductCard product={mockProduct} />);

    // Check if the title is in the document
    const titleElement = screen.getByText('Classic T-Shirt');
    expect(titleElement).toBeInTheDocument();

    // Check if the price is in the document
    // We use a regular expression to match the price format ($xx.xx)
    const priceElement = screen.getByText(/\$25\.99/);
    expect(priceElement).toBeInTheDocument();

    // Check if the category is in the document
    const categoryElement = screen.getByText(/men's clothing/i);
    expect(categoryElement).toBeInTheDocument();
  });
});