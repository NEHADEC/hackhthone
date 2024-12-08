import Image from 'next/image';

export default function EditorsPick() {
  return (
    <section className="py-16 bg-white">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">EDITOR’S PICK</h2>
        <p className="text-gray-500 text-sm">Problems trying to resolve the conflict between</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-16">
        {/* Men */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/ed-1.jfif"
            alt="Men"
            width={400} // Add proper width and height for optimization
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <button className="absolute bottom-4 left-4 bg-white text-black font-semibold px-6 py-2 shadow-md group-hover:bg-black group-hover:text-white transition duration-300">
            MEN
          </button>
        </div>

        {/* Women */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/ed-2.jfif"
            alt="Women"
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <button className="absolute bottom-4 left-4 bg-white text-black font-semibold px-6 py-2 shadow-md group-hover:bg-black group-hover:text-white transition duration-300">
            WOMEN
          </button>
        </div>

        {/* Accessories */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/ed-3.jfif"
            alt="Accessories"
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <button className="absolute bottom-4 left-4 bg-white text-black font-semibold px-6 py-2 shadow-md group-hover:bg-black group-hover:text-white transition duration-300">
            ACCESSORIES
          </button>
        </div>

        {/* Kids */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/ed-4.jfif"
            alt="Kids"
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <button className="absolute bottom-4 left-4 bg-white text-black font-semibold px-6 py-2 shadow-md group-hover:bg-black group-hover:text-white transition duration-300">
            KIDS
          </button>
        </div>
      </div>
    </section>
  );
}
