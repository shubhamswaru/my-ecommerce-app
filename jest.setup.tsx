// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    // just render the children
    return <a href={href}>{children}</a>;
  };
});

// Mock next/image
jest.mock('next/image', () => {
  return ({ src, alt }: { src: string; alt: string }) => {
    // just render a normal img tag
    return <img src={src} alt={alt} />;
  };
});