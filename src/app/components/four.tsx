import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-6">
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <Image
            src="/2.png" // Image path
            alt="Couple enjoying a summer day" // Improved alt text for better accessibility
            width={500} // Specify width
            height={500} // Specify height
            className="rounded-lg object-cover w-full max-w-xs md:max-w-md"
          />
        </div>
        
        {/* Text Section */}
        <div className="text-gray-800 space-y-4">
          <h2 className="text-sm uppercase text-gray-500">Summer 2020</h2>
          <h1 className="text-3xl font-bold">Part of the Neural Universe</h1>
          <p className="text-sm text-gray-600">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex items-center space-x-4">
            <button className="px-6 py-2 bg-green-600 rounded text-white font-medium hover:bg-green-500 transition">
              Buy Now
            </button>
            <button className="px-6 py-2 border border-green-600 rounded text-green-600 font-medium hover:bg-green-100 transition">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
