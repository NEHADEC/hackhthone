import React from "react";
import Footer from "../components/footer";
import Link from "next/link";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Navbar */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-gray-800">Bandage</div>
        <nav className="flex space-x-6 text-gray-600">
          <Link href="/" className="hover:text-gray-800">
            Home
          </Link>
          <Link href="/Products" className="hover:text-gray-800">
            Product
          </Link>
          <Link href="/Pricing" className="hover:text-gray-800">
            Pricing
          </Link>
          <Link href="#contact" className="hover:text-gray-800">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="#login" className="text-gray-600 hover:text-gray-800">
            Login
          </Link>
          <Link
            href="#member"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Become a member &rarr;
          </Link>
        </div>
      </header>
     

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to Bandage</h1>
          <p className="text-gray-600 mt-4">
            We&apos;re here to help you grow and connect with the best teams and
            companies in the world.
          </p>
          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
            Learn More
          </button>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/about-hero.png"
            alt="Image"
            className="w-50 h-80 object-cover"
            width={500}
            height={400}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-4xl font-bold text-black">15K</h2>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-black">150K</h2>
            <p className="text-gray-600">Monthly Visitors</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-black">15</h2>
            <p className="text-gray-600">Countries Worldwide</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-black">100+</h2>
            <p className="text-gray-600">Top Partners</p>
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center my-8">
        <Image
          src="/v.jfif"
          alt="Image"
          className="w-full max-w-md h-auto object-cover"
          width={500}
          height={400}
        />
      </div>

      {/* Meet Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-center mt-4">
            We&apos;re a group of skilled professionals passionate about what we do.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {["about-1.jfif", "about-2.jfif", "about-3.jfif"].map(
              (img, index) => (
                <div key={index} className="text-center">
                  <Image
                    src={`/${img}`}
                    alt="Team Member"
                    className="w-full max-w-sm h-auto mx-auto rounded-lg object-cover"
                    width={300}
                    height={300}
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mt-4">
                    Username
                  </h3>
                  <p className="text-gray-600">Position</p>
                  <div className="flex justify-center space-x-4 mt-4">
                    <Link href="#" className="text-gray-600 hover:text-blue-500">
                      <i className="fab fa-facebook"></i>
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-blue-500">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-blue-500">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 w-[1440px] h-[636px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Big Companies Are Here
          </h1>
          <p className="text-center mb-8 gap-4">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <div className="flex justify-center flex-wrap gap-4 mb-8">
            <Image src="/a-6.png" alt="Hooli" className="h-8" width={40} height={40} />
            <Image src="/a-7.png" alt="Lyft" className="h-8" width={40} height={40} />
            <Image src="/a-8.png" alt="Stripe" className="h-8" width={40} height={40} />
            <Image src="/a-9.png" alt="AWS" className="h-8" width={40} height={40} />
            <Image src="/a-10.png" alt="Reddit" className="h-8" width={40} height={40} />
          </div>
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            <div className="bg-blue-500 w-50 text-white p-6 rounded-lg w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-2">WORK WITH US</h2>
              <h1 className="mb-4">Now Let&apos;s grow Yours</h1>
              <p className="mb-4">
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Button
              </button>
            </div>
            <div className="flex justify-center items-center w-full md:w-1/2">
              <Image
                src="/about-4.jfif"
                alt="Person"
                className="h-100 object-cover"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 space-y-4 sm:space-y-0">
            <p className="text-gray-600">Bandage</p>
            <div className="flex space-x-4">
              <Image
                src="/images/facebook.png"
                alt="Facebook"
                className="h-6"
                width={24}
                height={24}
              />
              <Image
                src="/images/twitter.png"
                alt="Twitter"
                className="h-6"
                width={24}
                height={24}
              />
              <Image
                src="/images/instagram.png"
                alt="Instagram"
                className="h-6"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default AboutUs;
