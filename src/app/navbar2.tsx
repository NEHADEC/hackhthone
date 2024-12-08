
import Link from "next/link";  // Import Link from Next.js

export default function Home() {
  return (
    <div>
      {/* Top Bar */}
      <div className="bg-[#23856D] text-white px-4 py-2 flex justify-between items-center text-sm">
        <div className="flex items-center gap-4">
          <span>(225) 555-0118</span>
          <span>michelle.rivera@example.com</span>
        </div>
        <div className="flex justify-center items-center gap-4">
          <span>Follow Us and get a chance to win 80% off</span>
          <div className="flex gap-3">
            <Link href="#" className="hover:text-gray-300">Facebook</Link>
            <Link href="#" className="hover:text-gray-300">Instagram</Link>
            <Link href="#" className="hover:text-gray-300">Twitter</Link>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex items-center justify-between px-8 py-4">
        <h1 className="text-2xl font-bold">Bandage</h1>
        <nav className="flex gap-6 text-gray-700">
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="/Shop" className="hover:text-black">Shop</Link>
          <Link href="/About" className="hover:text-black">About</Link>
          <Link href="#" className="hover:text-black">Blog</Link>
          <Link href="/contact" className="hover:text-black">Contact</Link>
          <Link href="/products" className="hover:text-black">Pages</Link>
        </nav>
        <div className="flex gap-4 items-center text-blue-600">
          <Link href="#" className="hover:text-black">Login / Register</Link>
          <Link href="#" className="hover:text-black">Search</Link>
          <Link href="#" className="hover:text-black">Cart (1)</Link>
        </div>
      </div>
    </div>
  );
}
