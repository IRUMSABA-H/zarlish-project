'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md py-4 px-6 md:px-8 flex justify-between items-center transition-colors duration-300">
      {/* Brand */}
     <h1 className="font-bold text-[19px] text-black dark:text-white border border-black p-[5px]">
  ZA
</h1>


      {/* Desktop Links */}
     <div className="hidden md:flex space-x-12 text-l text-black dark:text-white mr-18">
        <Link href="#about" className="hover:underline">About</Link>
        <Link href="#skills" className="hover:underline">Skills</Link>
        <Link href="#experience" className="hover:underline">Experience</Link>
        <Link href="#education" className="hover:underline">Education</Link>
        <Link href="#contact" className="hover:underline">Contact</Link>
        <Link href="#reviews" className="hover:underline">Reviews</Link>
      </div>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-black dark:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden py-4 px-6 space-y-4 text-black dark:text-white text-sm z-40">
          <Link href="#about" onClick={() => setIsOpen(false)} className="block hover:underline">About</Link>
          <Link href="#skills" onClick={() => setIsOpen(false)} className="block hover:underline">Skills</Link>
          <Link href="#experience" onClick={() => setIsOpen(false)} className="block hover:underline">Experience</Link>
          <Link href="#education" onClick={() => setIsOpen(false)} className="block hover:underline">Education</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="block hover:underline">Contact</Link>
          <Link href="#reviews" onClick={() => setIsOpen(false)} className="block hover:underline">Reviews</Link>
        </div>
      )}
    </nav>
  );
} 