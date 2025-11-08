import React from 'react';
import logo from '../../assets/logo.png';
import decipheredLogo from '../../assets/deciphered_logo.jpg';
import iitBhilaiLogo from '../../assets/IIT_Bhilai_Logo.svg';

export default function Header() {
  return (
            <header className="relative w-full">
              {/* Background with glassmorphism */}
              <div className="absolute inset-0 backdrop-blur-md bg-gradient-to-r
                             from-[#7c3aed]/10 via-[#a5b4fc]/10 to-[#7c3aed]/10
                             border-b border-white/20
                             shadow-[0_4px_30px_rgba(124,58,237,0.1)]">
              </div>

              {/* Content */}
              <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
          {/* Left: Logo + Title Section */}
          <div className="flex items-center space-x-3 sm:space-x-6">
            <a
              href="https://crsind.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group shrink-0"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r
                             from-[#7c3aed] to-[#ec4899] opacity-0
                             group-hover:opacity-100 blur-md
                             transition-opacity duration-500">
                </div>
                <img
                  src={logo}
                  alt="CRSI Logo"
                  className="relative w-10 sm:w-12 lg:w-14 aspect-square
                           object-contain rounded-full bg-white/90 p-1.5
                           transition-transform duration-500
                           group-hover:scale-105 shadow-lg"
                />
              </div>
            </a>

            <div className="min-w-0">
              <h1 className="text-base sm:text-xl lg:text-2xl font-bold
                           tracking-tight leading-tight text-[#2e2a30] truncate">
                National Workshop on Cryptology
              </h1>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <span className="text-xs sm:text-sm text-[#2e2a30]/70
                               font-medium truncate">
                  CRSI Flagship Event
                </span>
                <span className="w-1 h-1 rounded-full bg-[#7c3aed]"></span>
                <span className="text-xs sm:text-sm font-semibold
                               bg-gradient-to-r from-[#7c3aed] to-[#ec4899]
                               bg-clip-text text-transparent whitespace-nowrap">
                  December 2025
                </span>
              </div>
            </div>
          </div>

          {/* Right: Partner Logos */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Countdown for mobile */}
            <div className="sm:hidden text-xs text-[#2e2a30]/70 font-medium
                          bg-white/50 px-2 py-1 rounded-full backdrop-blur-sm">
              {/* 37 days remaining until Dec 15, 2025 */}
              <span>37 days remaining</span>
            </div>

            {/* Partner Logo Container */}
            <div className="flex items-center space-x-2 sm:space-x-4 ml-auto sm:ml-0">
              {/* Deciphered Logo */}
              <a
                href="http://de.ci.phe.red/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 px-2 sm:px-4 py-1.5
                         rounded-full bg-white/80 backdrop-blur-sm
                         border border-white/20 shadow-md hover:shadow-lg
                         transition-all duration-500 hover:bg-white/90"
              >
                <img
                  src={decipheredLogo}
                  alt="Deciphered"
                  className="w-6 sm:w-8 lg:w-10 aspect-square object-contain
                           rounded-full transition-transform duration-500
                           group-hover:scale-110"
                />
                <span className="hidden sm:block text-xs lg:text-sm
                               font-medium text-[#2e2a30] opacity-80
                               group-hover:opacity-100">
                  Deciphered
                </span>
              </a>

              {/* IIT Bhilai Logo */}
              <a
                href="https://www.iitbhilai.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 px-2 sm:px-4 py-1.5
                         rounded-full bg-white/80 backdrop-blur-sm
                         border border-white/20 shadow-md hover:shadow-lg
                         transition-all duration-500 hover:bg-white/90"
              >
                <img
                  src={iitBhilaiLogo}
                  alt="IIT Bhilai"
                  className="w-6 sm:w-8 lg:w-10 aspect-square object-contain
                           rounded-full transition-transform duration-500
                           group-hover:scale-110"
                />
                <span className="hidden sm:block text-xs lg:text-sm
                               font-medium text-[#2e2a30] opacity-80
                               group-hover:opacity-100">
                  IIT Bhilai
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}