import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-[#9ec5c6] border-b border-[#2e2a30]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center text-sm font-medium text-[#2e2a30]">
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
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#2e2a30] text-xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden px-6 pb-4 text-[#2e2a30] text-sm font-medium">
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
              className="block py-2 border-b border-[#2e2a30]/10 hover:text-[#2e2a30] transition duration-300"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
