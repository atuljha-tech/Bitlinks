import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 right-32 w-24 h-24 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-500"></div>

      {/* Left content */}
      <div className="md:w-1/2 space-y-8 text-center md:text-left relative z-10 py-12">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            The Best URL Shortener{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              in the Market
            </span>{" "}
            🚀
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto md:mx-0 font-medium">
            We are the most straightforward URL shortener in the world. Most of the
            other services will track you or ask for login details. We understand
            your needs — that's why we built a truly private, easy-to-use URL
            shortener.
          </p>
        </div>

        {/* Feature badges */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-purple-100 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-semibold text-gray-700">No Tracking</span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-purple-100 flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-semibold text-gray-700">No Login Required</span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-purple-100 flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm font-semibold text-gray-700">Instant Links</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 pt-6 max-w-md">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">10M+</div>
            <div className="text-xs text-gray-600 font-medium">Links Shortened</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">99.9%</div>
            <div className="text-xs text-gray-600 font-medium">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">0</div>
            <div className="text-xs text-gray-600 font-medium">Data Collected</div>
          </div>
        </div>
      </div>

      {/* Right image */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center relative z-10">
        <div className="relative">
          {/* Image container with decorative elements */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src="/images/pic1.jpg"
              alt="People working together"
              width={600}
              height={500}
              className="relative rounded-2xl shadow-2xl object-cover transform group-hover:scale-105 transition duration-500 border-4 border-white"
            />
          </div>
          
          {/* Floating elements around image */}
          <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-purple-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-bold text-gray-700">Live</span>
            </div>
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-purple-100">
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600">⚡</div>
              <div className="text-xs font-semibold text-gray-700">Instant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}