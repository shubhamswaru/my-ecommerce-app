
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center p-4 mt-auto">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.</p>
      </div>
    </footer>
  );
}