import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#7c3aed]/10 bg-white/50 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="text-center">
          <p className="text-sm text-[#2e2a30]/70 hover:text-[#2e2a30]
                       transition-colors duration-300">
            © 2025 National Workshop on Cryptology ·
            <a
              href="https://www.iitbhilai.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7c3aed] hover:text-[#2e2a30]
                       transition-colors duration-300 ml-1"
            >
              IIT Bhilai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}