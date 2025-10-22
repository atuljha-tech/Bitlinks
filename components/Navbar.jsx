'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Github } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          BitLinks
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-purple-300 transition">Home</Link>
          <Link href="/about" className="hover:text-purple-300 transition">About</Link>
          <Link href="/contact" className="hover:text-purple-300 transition">Contact Us</Link>

          {/* Buttons */}
          <div className="flex space-x-3">
            <Link
              href="/shorten"
              className="bg-white text-purple-800 font-semibold px-4 py-2 rounded-lg hover:bg-purple-200 transition"
            >
              Shorten
            </Link>
            <a
              href="https://github.com/atuljha-tech/Bitlinks"
              target="_blank"
              className="flex items-center bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-purple-900 transition"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-purple-950 text-white space-y-4 px-6 pb-6">
          <Link href="/" className="block hover:text-purple-300">Home</Link>
          <Link href="/about" className="block hover:text-purple-300">About</Link>
          <Link href="/contact" className="block hover:text-purple-300">Contact Us</Link>

          <div className="flex flex-col space-y-3 pt-3">
            <Link
              href="/shorten"
              className="bg-white text-purple-800 text-center font-semibold px-4 py-2 rounded-lg hover:bg-purple-200 transition"
            >
              Shorten
            </Link>
            <a
              href="https://github.com/"
              target="_blank"
              className="flex justify-center items-center border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-purple-900 transition"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
