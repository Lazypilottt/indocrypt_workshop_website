import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col pt-[140px]">
      <main className="flex-grow flex items-center justify-center px-4 md:px-8 pb-12">
        <div className="max-w-lg mx-auto text-center">
          <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl p-8 md:p-12 shadow-lg">
            <img
              src="https://i.imgur.com/qIufhof.png"
              alt="This is fine meme"
              className="mx-auto mb-8 rounded-lg"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-[#2e2a30] mb-4">
              404 - Page Not Found
            </h1>
            <p className="text-lg text-[#2e2a30]/80 mb-8">
              This is fine. You're fine. Everything is fine. But the page you're looking for isn't here.
            </p>
            <Link
              to="/"
              className="inline-block px-8 py-3 rounded-full border-2 border-[#2e2a30]/40
                       text-[#2e2a30] font-semibold hover:bg-[#2e2a30] hover:text-white
                       transition-all duration-300 hover:scale-105"
            >
              Go back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
