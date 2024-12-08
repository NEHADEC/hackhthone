"use client"
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import Link from 'next/link';  // Import Link from Next.js

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-[#001746] text-white px-4 py-2 flex justify-between items-center text-sm">
        <div className="flex items-center gap-4">
          <span>(225) 555-0118</span>
          <span>michelle.rivera@example.com</span>
        </div>
        <div className="flex justify-center items-center gap-4">
          <span>Follow Us and get a chance to win 80% off</span>
          <div className="flex gap-3">
            <Link href="#" passHref>
              <FaFacebook className="hover:text-gray-300" />
            </Link>
            <Link href="#" passHref>
              <FaInstagram className="hover:text-gray-300" />
            </Link>
            <Link href="#" passHref>
              <FaTwitter className="hover:text-gray-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex items-center justify-between px-8 py-4">
        <h1 className="text-2xl font-bold">Bandage</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-gray-700">
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="/Shop" className="hover:text-black">Shop</Link>
          <Link href="/About" className="hover:text-black">About</Link>
          <Link href="#" className="hover:text-black">Blog</Link>
          <Link href="/contact" className="hover:text-black">Contact</Link>
          <Link href="/Products" className="hover:text-black">Pages</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Desktop and Mobile Icons */}
        <div className="flex gap-4 items-center text-blue-600">
          <Link href="#" passHref>
            <span className="hover:text-black">Login / Register</span>
          </Link>
          <Link href="#" passHref>
            <FaSearch className="hover:text-black" />
          </Link>
          <Link href="#" passHref>
            <FaCartShopping className="hover:text-black" /> (1)
          </Link>
          <Link href="#" passHref>
            <FaHeart className="hover:text-black" /> (1)
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-0 left-0 w-full bg-white p-8`}>
        <nav className="flex flex-col items-center gap-6 text-gray-700">
          <Link href="/" className="hover:text-black" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/Shop" className="hover:text-black" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link href="/About" className="hover:text-black" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#" className="hover:text-black" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/contact" className="hover:text-black" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/Products" className="hover:text-black" onClick={() => setIsOpen(false)}>Pages</Link>
        </nav>
      </div>
    </div>
  );
}
