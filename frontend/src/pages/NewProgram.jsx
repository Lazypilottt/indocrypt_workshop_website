import React, { useEffect } from 'react';
import GlowingBox from '../components/GlowingBox';
import AOS from "aos";
import "aos/dist/aos.css";

const NewProgram = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      once: true,
      offset: 100,
      disable: window.innerWidth < 768
    });
  }, []);
  return (
    <div className="min-h-screen flex flex-col pt-[140px]">
      <main className="flex-grow overflow-x-hidden max-w-full">
        <section className="w-full px-4 pt-6 pb-12 sm:pt-8 sm:pb-16 overflow-hidden">
          <GlowingBox
            data-aos="fade-up"
            className="max-w-4xl mx-auto transition-all duration-300"
          >
            <h2 className="text-xl sm:text-3xl font-bold text-center text-[#2e2a30] mb-8">
              To Be Announced
            </h2>
          </GlowingBox>
        </section>
      </main>
    </div>
  );
};

export default NewProgram;
