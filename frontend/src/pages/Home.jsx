import { Link } from "react-router-dom";
import Header from '../components/Header';
import Countdown from "../components/Countdown";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      offset: 40,
    });
  }, []);

  return (
    <div className="min-h-screen text-[#2e2a30]" style={{ backgroundColor: "#9ec5c6" }}>
      {/* ================= HERO SECTION ================= */}
      <header
        className="relative h-[92vh] w-full flex items-center justify-center"
        data-aos="fade-in"
      >
        {/* HERO GLASS CARD */}
        <div
          className="relative max-w-4xl w-full mx-6 px-12 py-14 rounded-[32px] 
          bg-white/20 backdrop-blur-xl border border-white/30 
          shadow-[0_20px_60px_rgba(0,0,0,0.2)] text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-grey mb-6 tracking-tight leading-tight">
            National Workshop on Cryptology 2025
          </h1>

          <p className="mt-6 text-grey/80 text-lg max-w-2xl mx-auto">
            December 2025 · IIT Bhilai, India <p>
            A Convergence of Cryptography, Security & Research</p>
          </p>

          {/* COUNTDOWN */}
          <div className="mt-10">
            <Countdown targetDate="2025-12-15T10:00:00+05:30" />
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-12 flex justify-center gap-4">
            <Link
              to="/registration"
              className="px-7 py-3 rounded-full font-medium text-white shadow-md 
              transition-transform hover:scale-105"
              style={{ backgroundColor: "#2e2a30" }}
            >
              Register
            </Link>
            <Link
              to="/program"
              className="px-7 py-3 rounded-full border border-white/40 text-white/90 hover:text-white 
              hover:border-white transition-transform hover:scale-105"
            >
              Program
            </Link>
          </div>
        </div>
      </header>

      {/* ================= ABOUT SECTION ================= */}
      <section data-aos="fade" className="mt-24 px-8 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#2e2a30]">About the Workshop</h2>
        <p className="text-[#2e2a30]/80 leading-relaxed max-w-3xl mx-auto">
          This national workshop brings together researchers, academicians, and industry
          professionals to discuss modern cryptographic advancements, secure systems, and
          emerging cryptanalysis methods.
        </p>
      </section>
      {/* ================= SPEAKERS ================= */}
<section data-aos="fade" className="mt-28 px-8 max-w-6xl mx-auto text-center">
  <h2 className="text-3xl font-bold mb-10 tracking-tight text-[#2e2a30]">
    Speakers
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
    {[
      { name: "Dr. Dhiman Saha", university: "IIT Bhilai" },
      { name: "Mr. Soumen Jena ", university: "IIT Bhilai" },
      { name: "Miss Isha Goel", university: "DU MA Psychology" },
    ].map((speaker, i) => (
      <div key={i} className="flex flex-col items-center text-[#2e2a30]">
        {/* Circular photo vessel */}
        <div className="w-32 h-32 rounded-full bg-white/40 border border-white/30 shadow-md mb-4 overflow-hidden">
          {/* You can insert <img src="..." alt="..." className="w-full h-full object-cover" /> here later */}
        </div>
        <h3 className="text-lg font-semibold">{speaker.name}</h3>
        <p className="text-sm opacity-80">{speaker.university}</p>
      </div>
    ))}
  </div>
</section>

      {/* ================= KEY FOCUS AREAS ================= */}
      <section data-aos="fade" className="mt-24 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#2e2a30]">Key Focus Areas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Modern Cryptography", "Blockchain Security", "Quantum Safe Systems"].map((topic, i) => (
            <div
              key={i}
              className="p-6 bg-white/30 border border-white/40 rounded-xl backdrop-blur-md text-center text-[#2e2a30]"
            >
              <h3 className="text-xl font-semibold">{topic}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= IMPORTANT DATES ================= */}
      <section data-aos="fade" className="mt-28 px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 tracking-tight text-[#2e2a30]">
          Important Dates
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl shadow-sm border border-[#2e2a30]/20 
                          bg-white/40 text-[#2e2a30] hover:shadow-md transition">
            <h3 className="text-xl font-semibold">Registration Opens</h3>
            <p className="text-sm mt-2 opacity-80">December 05, 2025</p>
          </div>

          <div className="p-8 rounded-2xl shadow-sm border border-[#2e2a30]/20 
                          bg-white/40 text-[#2e2a30] hover:shadow-md transition">
            <h3 className="text-xl font-semibold">Workshop Dates</h3>
            <p className="text-sm mt-2 opacity-80">December 15–17, 2025</p>
          </div>
        </div>
      </section>

  
    </div>
  );
};

export default Home;
