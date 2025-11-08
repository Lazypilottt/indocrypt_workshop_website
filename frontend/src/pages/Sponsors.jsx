import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';

export default function Sponsors() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col pt-[140px]">
      <main className="flex-grow px-4 md:px-8 pb-12">
        <div className="max-w-4xl mx-auto mt-8">
          <div className="mb-16 bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg" data-aos="fade-up">
            <p className="text-center text-lg text-[#2e2a30]/80">
              Information about our sponsors will be updated soon.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
