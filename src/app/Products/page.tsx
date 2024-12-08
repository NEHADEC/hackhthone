import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Footer from '../components/footer';
import Navbar from '../navbar'; // Use the Navbar component
import Image from 'next/image'; // Import Image from Next.js
import Link from 'next/link'; // Import Link from Next.js

const CardGrid = () => {
  const cards = [
    { id: 1, img: "/d1.jfif", name: "Username", description: "Profession" },
    { id: 2, img: "/d2.jfif", name: "Username", description: "Profession" },
    { id: 3, img: "/d3.jfif", name: "Username", description: "Profession" },
    { id: 4, img: "/d4.jfif", name: "Username", description: "Profession" },
    { id: 5, img: "/d5.jfif", name: "Username", description: "Profession" },
    { id: 6, img: "/d6.jfif", name: "Username", description: "Profession" },
    { id: 7, img: "/d7.jfif", name: "Username", description: "Profession" },
    { id: 8, img: "/d8.jfif", name: "Username", description: "Profession" },
    { id: 9, img: "/d9.jfif", name: "Username", description: "Profession" },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={card.img}
                alt={card.name}
                width={500} // Set width as per your requirement
                height={300} // Set height as per your requirement
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{card.name}</h3>
                <p className="text-gray-600 mt-2">{card.description}</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <Link href="#" className="text-blue-500 hover:text-blue-700">
                    <FaFacebookF size={24} />
                  </Link>
                  <Link href="#" className="text-blue-500 hover:text-blue-700">
                    <FaInstagram size={24} />
                  </Link>
                  <Link href="#" className="text-blue-500 hover:text-blue-700">
                    <FaTwitter size={24} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Page = () => (
  <div>
    {/* Navbar */}
    <Navbar /> {/* Use the Navbar component here */}

    {/* What We Do Section */}
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-1xl font-bold text-gray-800 mb-4">WHAT WE DO</h2>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Innovation tailored for you</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-red-500 p-6 rounded-lg shadow-lg relative">
            <Image
              src="/ph1.jfif"
              alt="Large Display"
              width={600} // Set width as per your requirement
              height={400} // Set height as per your requirement
              className="rounded-lg object-cover w-full h-64 lg:h-full"
            />
            <div className="absolute top-4 left-4 text-white text-xl">1440 x 384</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <Image
                src="/ph-2.jfif"
                alt="Small Display 1"
                width={300} // Set width as per your requirement
                height={200} // Set height as per your requirement
                className="rounded-lg object-cover w-full h-32 lg:h-48"
              />
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <Image
                src="/ph-3.jfif"
                alt="Small Display 2"
                width={300} // Set width as per your requirement
                height={200} // Set height as per your requirement
                className="rounded-lg object-cover w-full h-32 lg:h-48"
              />
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <Image
                src="/ph-4.jfif"
                alt="Small Display 3"
                width={300} // Set width as per your requirement
                height={200} // Set height as per your requirement
                className="rounded-lg object-cover w-full h-32 lg:h-48"
              />
              <div className="text-gray-800 text-center mt-2">ECO WARM COAT</div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <Image
                src="/ph-5.jfif"
                alt="Small Display 4"
                width={300} // Set width as per your requirement
                height={200} // Set height as per your requirement
                className="rounded-lg object-cover w-full h-32 lg:h-48"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CardGrid Section */}
    <CardGrid />

    {/* Trial Section */}
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Start your 14 days free trial
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Try it free now
          </button>
        </div>
        <div className="flex justify-center mt-8 space-x-4 text-gray-600">
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaTwitter className="text-blue-500" size={24} />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaFacebookF className="text-blue-500" size={24} />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaInstagram className="text-blue-500" size={24} />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedinIn className="text-blue-500" size={24} />
          </Link>
        </div>
      </div>
    </section>

    {/* Footer */}
    <Footer />
  </div>
);

export default Page;
