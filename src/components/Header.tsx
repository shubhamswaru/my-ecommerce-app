import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold hover:opacity-80 transition-opacity">
          E-Commerce Store
        </Link>
        {/* to add navigation links here later */}
        <nav>
          {/* <Link href="/about">About</Link> */}
        </nav>
      </div>
    </header>
  );
}