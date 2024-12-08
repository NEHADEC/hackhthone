"use client";

import React, { useState } from "react";
import Navbar2 from "../navbar2";
import Footer from "../components/footer";
import Pagination from "../components/Pagination";
import Image from "next/image";

const Shop: React.FC = () => {
  const categories = [
    { title: "CLOTHS", items: 5, img: "/a-1-a.png" },
    { title: "CLOTHS", items: 5, img: "/a-2.png" },
    { title: "CLOTHS", items: 5, img: "/a-3.png" },
    { title: "CLOTHS", items: 5, img: "/a-4.png" },
  ];

  const logos = [
    { name: "Hooli", img: "/a-6.png" },
    { name: "Lyft", img: "/a-7.png" },
    { name: "Stripe", img: "/a-8.png" },
    { name: "AWS", img: "/a-9.png" },
    { name: "Reddit", img: "/a-10.png" },
  ];

  const images = [
    "/a-11.jfif",
    "/a-12.jfif",
    "/a-14.jfif",
    "/a-13.jfif",
    "/a-15.jfif",
    "/a-16.jfif",
    "/a-17.jfif",
    "/a-18.jfif",
    "/a-19.jfif",
    "/a-20.jfif",
    "/a-21.jfif",
    "/a-22.jfif",
  ];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 3;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white py-8">
      <Navbar2 />

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800">Shop</h1>
        <p className="text-sm text-gray-500 mt-1">Home &gt; Shop</p>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative bg-gray-100 rounded-lg overflow-hidden group"
          >
            <Image
              src={category.img}
              alt={category.title}
              width={500}
              height={500}
              className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-xl font-bold">{category.title}</h2>
              <p>{category.items} Items</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-600">Showing all 12 results</p>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <div className="flex space-x-2">
            <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
              <i className="fas fa-th"></i>
            </button>
            <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
              <i className="fas fa-list"></i>
            </button>
          </div>
          <select className="border border-gray-300 rounded px-4 py-2">
            <option>Popularity</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Filter
          </button>
        </div>
      </div>

      {/* Logos Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={logo.img}
              alt={logo.name}
              width={80}
              height={40}
              className="w-20 h-auto"
            />
          </div>
        ))}
      </div>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          {currentPage === 3 && (
            <div className="text-lg font-semibold text-blue-600 mb-4">
              This is page 3!
            </div>
          )}
          {/* <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} /> */}
          <Footer />
        </div>

        {/* Product Grid Rows */}
        {[images.slice(0, 4), images.slice(4, 8), images.slice(8)].map(
          (productImages, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-16 mt-8"
            >
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className={`border rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden ${
                    index === 2 ? "border-purple-500" : "border-gray-200"
                  }`}
                >
                  <div className="relative">
                    <Image
                      src={image}
                      alt={`Product ${index + 1}`}
                      width={500}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold">Graphic Design</h3>
                    <p className="text-gray-500 text-sm mb-3">English Department</p>
                    <div className="text-gray-500 flex justify-center items-center space-x-2 text-sm">
                      <span className="line-through">$16.48</span>
                      <span className="text-green-600 font-semibold">$6.48</span>
                    </div>
                    <div className="flex justify-center space-x-2 mt-3">
                      <span className="w-4 h-4 rounded-full bg-blue-600"></span>
                      <span className="w-4 h-4 rounded-full bg-gray-500"></span>
                      <span className="w-4 h-4 rounded-full bg-orange-400"></span>
                      <span className="w-4 h-4 rounded-full bg-black"></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </section>

      {/* Pagination */}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      <Footer />
    </div>
  );
};

export default Shop;
