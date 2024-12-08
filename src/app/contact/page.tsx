import React from "react";
import Footer from "../components/footer";
import { FaUserAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      {/* Navbar */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-gray-800">Bandage</div>
        <nav className="flex space-x-6 text-gray-600">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <Link href="/Products" className="hover:text-gray-800">Product</Link>
          <Link href="/Pricing" className="hover:text-gray-800">Pricing</Link>
          <Link href="/contact" className="hover:text-gray-800">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="#login" className="text-gray-600 hover:text-gray-800">Login</Link>
          <Link
            href="#member"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Become a member →
          </Link>
        </div>
      </header>

      {/* Contact Us Section */}
      <section className="bg-white py-12 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:space-x-8">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-gray-800">CONTACT US</p>
            <h1 className="text-gray-600 mt-4 font-bold text-4xl">
              Get in touch <span>today!</span>
            </h1>
            <p className="text-gray-600 mt-4 font-bold">
              We know how large objects will act, but things on a small scale.
            </p>
            <p className="text-gray-600 mt-4 font-semibold">Phone: +451 215 215</p>
            <p className="text-gray-600 mt-4 font-bold">Fax: +451 215 215</p>
            <div className="flex space-x-4 mt-6 text-gray-600">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800 flex items-center space-x-1"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800 flex items-center space-x-1"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800 flex items-center space-x-1"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800 flex items-center space-x-1"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/c-hero.png"
              alt="Family holding shopping bags"
              width={500}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Visit Our Office Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-600 mb-12">VISIT OUR OFFICE</h2>
          <p className="text-4xl font-bold text-gray-800 mb-4">We help small businesses with big ideas.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ icon: <FaUserAlt />, text: "georgia.young@example.com" },
              { icon: <FaEnvelope />, text: "support@example.com" },
              { icon: <FaPhone />, text: "+1 234 567 890" },
            ].map((item, index) => (
              <div
                key={index}
                className={`h-80 p-8 rounded-lg shadow-lg flex flex-col items-center ${index === 1 ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
              >
                <div className="text-blue-500 text-5xl mb-6">
                  {item.icon}
                </div>
                <p className="text-gray-600 text-lg">{item.text}</p>
                <button className="border border-blue-500 text-blue-500 px-6 py-3 rounded hover:bg-blue-100 mt-6">
                  Submit Request
                </button>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <h3 className="text-gray-600 mt-4">WE CAN&apos;T WAIT TO MEET YOU</h3>
            <p className="text-5xl font-bold text-gray-800">Let&apos;s Talk</p>
            <button className="bg-blue-500 text-white px-6 py-3 mt-6 rounded-lg hover:bg-blue-600">
              Try it free now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
