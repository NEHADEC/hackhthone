
import Image from 'next/image';

export default function BestSellerProducts() {
  const images = [
    "/p-1.jfif", // Path for first image
    "/p-2.jfif", // Path for second image
    "/p-3.jfif", // Path for third image
    "/p-4.jfif", // Path for fourth image
    "/p-5.jfif", // Path for fifth image
    "/p-6.jfif", // Path for sixth image
    "/p-7.jfif", // Path for seventh image
    "/p-8.jfif", // Path for eighth image
  ];

  return (
    <section className="py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-gray-500 text-sm">Featured Products</p>
        <h2 className="text-3xl font-extrabold mb-4">BESTSELLER PRODUCTS</h2>
        <p className="text-gray-500 text-sm">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* First Row of Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-16">
        {/* Product Card */}
        {images.slice(0, 4).map((image, index) => (
          <div
            key={index}
            className={`border rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden ${
              index === 2 ? "border-purple-500" : "border-gray-200"
            }`}
          >
            <div className="relative">
              <Image
                src={image} // Using Image component here
                alt={`Product ${index + 1}`}
                className="w-full h-auto object-cover"
                width={400} // Set width and height for optimal loading
                height={300}
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">Graphic Design</h3>
              <p className="text-gray-500 text-sm mb-3">
                English Department
              </p>
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

      {/* Second Row of Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-16 mt-8">
        {/* Product Card */}
        {images.slice(4).map((image, index) => (
          <div
            key={index}
            className={`border rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden ${
              index === 2 ? "border-purple-500" : "border-gray-200"
            }`}
          >
            <div className="relative">
              <Image
                src={image} // Using Image component here
                alt={`Product ${index + 5}`} // Adjusted alt for the second row
                className="w-full h-auto object-cover"
                width={400} // Set width and height for optimal loading
                height={300}
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">Graphic Design</h3>
              <p className="text-gray-500 text-sm mb-3">
                English Department
              </p>
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
    </section>
  );
}
