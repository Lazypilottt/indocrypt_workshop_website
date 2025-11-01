import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/Users/lazypilot/Desktop/Lazypilot/IIT Bhilai/deciphered/Workshop_Website/frontend/assets/logo.png';

export default function Header() {
  return (
    <header className="w-full bg-[#9ec5c6] border-b border-[#2e2a30]/20 shadow-sm">
      {/* Top Section: Logo + Title */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
        <img
          src={logo}
          alt="Workshop Logo"
          className="w-12 h-12 object-contain"
        />
        <h1 className="text-xl md:text-2xl font-extrabold tracking-widest bg-gradient-to-r from-[#7c3aed] to-[#ec4899] bg-clip-text text-transparent">
          National Workshop on Cryptology 2025
        </h1>
      </div>

      {/* Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-6 pb-4 flex flex-wrap gap-6 text-sm font-medium text-[#2e2a30]">
        {[
          { label: 'Program', path: '/program' },
          { label: 'Registration', path: '/registration' },
          { label: 'Travel', path: '/travel' },
          { label: 'About', path: '/general/about' },
          { label: 'Sponsors', path: '/sponsors' },
        ].map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className="relative group hover:text-[#2e2a30] transition duration-300"
          >
            {link.label}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#2e2a30] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
