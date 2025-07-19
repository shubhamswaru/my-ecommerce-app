import '@testing-library/jest-dom';

jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    
    return <a href={href}>{children}</a>;
  };
});


jest.mock('next/image', () => {
  return ({ src, alt }: { src: string; alt: string }) => {
    
    return <img src={src} alt={alt} />;
  };
});