import Image from 'next/image';
    import React from 'react'
import Navbar from '../navbar';
    
    export default function Hero() {
      return (
        <div>
          <Navbar />
            {/* Hero Section */}
      <div className="bg-[#00A8E8] text-white py-20 px-8 lg:px-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="uppercase text-sm tracking-widest mb-4">Summer 2020</p>
          <h1 className="text-5xl font-bold mb-6">New Collection</h1>
          <p className="mb-8 text-lg">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="bg-[#22C55E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600">
            Shop Now
          </button>
        </div>
        <div className="lg:w-1/2 w-full">
          <Image
            src="/hero.jfif" // Replace with your actual image path
            alt="New Collection Model"
            width={500}
            height={1000}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

   