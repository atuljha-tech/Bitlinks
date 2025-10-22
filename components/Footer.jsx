export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white py-4 mt-auto shadow-inner">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-sm">
        {/* Left */}
        <p className="mb-2 sm:mb-0 text-center sm:text-left">
          © {new Date().getFullYear()} <span className="font-semibold">BitLinks</span>. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-purple-300 transition"
          >
            GitHub
          </a>
          <a
            href="/privacy"
            className="hover:text-purple-300 transition"
          >
            Privacy Policy
          </a>
          <a
            href="/contact"
            className="hover:text-purple-300 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
