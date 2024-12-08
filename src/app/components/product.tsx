import Image from "next/image";

export default function Home() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#23856D]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-6">
          {/* Text Section */}
          <div className="text-white space-y-4">
            <h2 className="text-sm uppercase">Summer 2020</h2>
            <h1 className="text-4xl font-bold">Vita Classic Product</h1>
            <p className="text-sm">
              We know how large objects will act. We know how large objects will act.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold">$16.48</span>
              <button className="px-6 py-2 bg-green-500 rounded text-white font-medium hover:bg-green-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
          {/* Image Section */}
          <div className="flex items-center justify-center w-full">
            <Image
              src="/c-1.png"
              alt="Product"
              width={100}
              height={100}
              
              className="rounded-lg object-cover w-full max-w-xs md:max-w-md"
            />
          </div>
        </div>
      </div>
    );
  }
  