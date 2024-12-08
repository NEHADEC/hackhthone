import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import icons from react-icons
import Link from 'next/link'; // Import Link from next/link

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Bandage</h2>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://facebook.com" passHref>
              <span aria-label="Facebook" className="text-gray-600 hover:text-blue-500">
                <FaFacebookF className="text-blue-500" size={24} />
              </span>
            </Link>
            <Link href="https://instagram.com" passHref>
              <span aria-label="Instagram" className="text-gray-600 hover:text-blue-500">
                <FaInstagram className="text-blue-500" size={24} />
              </span>
            </Link>
            <Link href="https://twitter.com" passHref>
              <span aria-label="Twitter" className="text-gray-600 hover:text-blue-500">
                <FaTwitter className="text-blue-500" size={24} />
              </span>
            </Link>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mt-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase">
              Company Info
            </h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>
                <Link href="#">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>Carrier</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>We are hiring</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>Blog</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>
                <Link href="#">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>Carrier</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>We are hiring</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>Blog</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase">
              Features
            </h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>
                <Link href="#">
                  <span>Business Marketing</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>User Analytic</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>Live Chat</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>Unlimited Support</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>
                <Link href="#">
                  <span>iOS & Android</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>Watch a Demo</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>Customers</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>API</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase">
              Get in Touch
            </h3>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                Subscribe
              </button>
              <p className="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor amit
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-gray-600">
          Made With Love By Finland All Right Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
