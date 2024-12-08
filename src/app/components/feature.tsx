import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedPosts() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title and Subtitle */}
        <h2 className="text-blue-600 font-semibold uppercase tracking-wide">
          Practice Advice
        </h2>
        <h1 className="text-4xl font-bold mt-2">Featured Posts</h1>
        <p className="text-gray-600 mt-4">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Post Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Card 1 */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Link href="/post/1">
            <Image
              src="/f-1.jfif"
              alt="Post 1"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
          </Link>
          <div className="p-6">
            <span className="text-xs font-bold uppercase text-red-500">New</span>
            <h3 className="text-lg font-semibold mt-2">
              <Link href="/post/1">Loudest à la Madison #1 (L&apos;integral)</Link>
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              We focus on ergonomics and meeting you where you work. It&apos;s only a
              keystroke away.
            </p>
            <div className="mt-4 flex items-center justify-between text-gray-500 text-sm">
              <div className="flex items-center space-x-1">
                <span>📅</span>
                <span>22 April 2021</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>📊</span>
                <span>10 comments</span>
              </div>
            </div>
            <Link
              href="/post/1"
              className="block mt-4 text-blue-600 font-semibold hover:underline"
            >
              Learn More →
            </Link>
          </div>
        </article>

        {/* Card 2 */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Link href="/post/2">
            <Image
              src="/f-2.jfif"
              alt="Post 2"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
          </Link>
          <div className="p-6">
            <span className="text-xs font-bold uppercase text-red-500">New</span>
            <h3 className="text-lg font-semibold mt-2">
              <Link href="/post/2">Loudest à la Madison #1 (L&apos;integral)</Link>
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              We focus on ergonomics and meeting you where you work. It&apos;s only a
              keystroke away.
            </p>
            <div className="mt-4 flex items-center justify-between text-gray-500 text-sm">
              <div className="flex items-center space-x-1">
                <span>📅</span>
                <span>22 April 2021</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>📊</span>
                <span>10 comments</span>
              </div>
            </div>
            <Link
              href="/post/2"
              className="block mt-4 text-blue-600 font-semibold hover:underline"
            >
              Learn More →
            </Link>
          </div>
        </article>

        {/* Card 3 */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Link href="/post/3">
            <Image
              src="/f-3.jfif"
              alt="Post 3"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
          </Link>
          <div className="p-6">
            <span className="text-xs font-bold uppercase text-red-500">New</span>
            <h3 className="text-lg font-semibold mt-2">
              <Link href="/post/3">Loudest à la Madison #1 (L&apos;integral)</Link>
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              We focus on ergonomics and meeting you where you work. It&apos;s only a
              keystroke away.
            </p>
            <div className="mt-4 flex items-center justify-between text-gray-500 text-sm">
              <div className="flex items-center space-x-1">
                <span>📅</span>
                <span>22 April 2021</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>📊</span>
                <span>10 comments</span>
              </div>
            </div>
            <Link
              href="/post/3"
              className="block mt-4 text-blue-600 font-semibold hover:underline"
            >
              Learn More →
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
