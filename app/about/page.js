import Image from "next/image";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 relative overflow-hidden py-12">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-20 h-20 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">BitLinks</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Simplifying the web, one link at a time. We believe in privacy, speed, and simplicity.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
          {/* Left - Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <Image
              src="/images/pic1.jpg"
              alt="About BitLinks"
              width={400}
              height={400}
              className="relative rounded-2xl shadow-2xl object-cover transform group-hover:scale-105 transition duration-500 border-4 border-white"
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-6 text-left">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                We created BitLinks to provide a simple, privacy-focused URL shortener that puts users first. 
                No tracking, no data collection, just clean, fast link shortening.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Why Choose Us?</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">100% free forever - no hidden costs</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Zero user tracking or data collection</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">No registration required</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Lightning-fast redirects</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-100 text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">10M+</div>
            <div className="text-sm text-gray-600 font-medium">Links Created</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-100 text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">99.9%</div>
            <div className="text-sm text-gray-600 font-medium">Uptime</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-100 text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">24/7</div>
            <div className="text-sm text-gray-600 font-medium">Service</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-100 text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">0</div>
            <div className="text-sm text-gray-600 font-medium">Tracking</div>
          </div>
        </div>
      </div>
    </section>
  );
}