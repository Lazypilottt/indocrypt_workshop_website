import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-[0_20px_60px_rgba(0,0,0,0.2)] rounded-[24px] mx-auto max-w-[95%] my-2">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-center">

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 items-center text-base font-medium text-white">
          {[
            { label: 'Home', path: '/' },
            { label: 'Program', path: '/program' },
            { label: 'Registration', path: '/registration' },
            { label: 'Travel', path: '/travel' },
            { label: 'About', path: '/general/about' },
            { label: 'Sponsors', path: '/sponsors' },
          ].map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="relative group px-3 py-1.5 hover:text-yellow-200 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="relative z-10 font-bold text-base tracking-wide">{link.label}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-yellow-200 via-white to-pink-200 rounded-full transition-all duration-300 group-hover:w-full shadow-lg shadow-white/50"></span>
              <span className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
              <span className="absolute inset-0 border-2 border-white/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none transition-all duration-300 hover:scale-110 active:scale-95 hover:text-yellow-200 p-3 rounded-lg hover:bg-white/20 absolute right-6"
          onClick={() => setOpen(!open)}
        >
          <span className={`inline-block transition-transform duration-300 ${open ? 'rotate-90' : ''}`}>
            {open ? '✕' : '☰'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden px-6 pb-5 text-white text-base font-medium animate-slideDown bg-gradient-to-b from-purple-600/80 to-transparent backdrop-blur-sm">
          {[
            { label: 'Home', path: '/' },
            { label: 'Program', path: '/program' },
            { label: 'Registration', path: '/registration' },
            { label: 'Travel', path: '/travel' },
            { label: 'About', path: '/general/about' },
            { label: 'Sponsors', path: '/sponsors' },
          ].map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="block py-4 px-4 border-b border-white/20 hover:text-yellow-200 hover:pl-6 hover:bg-white/20 rounded-lg transition-all duration-300 transform hover:scale-[1.02] font-bold text-lg"
              style={{ animationDelay: `${i * 50}ms` }}
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
