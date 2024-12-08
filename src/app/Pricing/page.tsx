import Link from 'next/link';
import React from 'react';
import Footer from '../components/footer';

const PricingSection = () => {
  return (
    <div>
      <section className="bg-white">
        {/* Navbar */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-800">Bandage</div>
          <nav className="flex space-x-6 text-gray-600">
            <Link href="/" className="hover:text-gray-800">Home</Link>
            <Link href="/product" className="hover:text-gray-800">Product</Link>
            <Link href="/pricing" className="hover:text-gray-800">Pricing</Link>
            <Link href="/contact" className="hover:text-gray-800">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="#login" className="text-gray-600 hover:text-gray-800">Login</Link>
            <Link href="#member" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Become a member →</Link>
          </div>
        </header>
        
        {/* Rest of your component */}
        {/* No changes needed for content below */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">Pricing</h2>
          <p className="text-center mb-12 text-gray-600">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">FREE</h3>
              <p className="text-gray-600 mb-8">Organize across all apps by hand</p>
              <p className="text-4xl font-bold mb-4">$0</p>
              <p className="text-gray-600 mb-8">per Month</p>
              <ul className="text-left mb-8">
                <li className="flex items-center mb-2">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Unlimited product updates
                </li>
              </ul>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
                Sign Up
              </button>
            </div>
            <div className="bg-gray-900 shadow-lg rounded-lg p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">STANDARD</h3>
              <p className="text-gray-400 mb-8">Organize across all apps by hand</p>
              <p className="text-4xl font-bold mb-4">$9.99</p>
              <p className="text-gray-400 mb-8">per Month</p>
              <ul className="text-left mb-8">
                <li className="flex items-center mb-2">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Unlimited product updates
                </li>
              </ul>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
                Sign Up
              </button>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">PREMIUM</h3>
              <p className="text-gray-600 mb-8">Organize across all apps by hand</p>
              <p className="text-4xl font-bold mb-4">$19.99</p>
              <p className="text-gray-600 mb-8">per Month</p>
              <ul className="text-left mb-8">
                <li className="flex items-center mb-2">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Unlimited product updates
                </li>
              </ul>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PricingSection;
