import GlowingBox from "../components/GlowingBox";
import { Link, useNavigate } from "react-router-dom";
import Countdown from "../components/Countdown";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Speaker images
import shimanImg from "../../assets/speakers/shiman.png";
import mostafizarImg from "../../assets/speakers/Mostafizar.jpg";
import angshumanImg from "../../assets/speakers/angshuman.jpg";
import satrajitImg from "../../assets/speakers/satrajit.jpg";
import sabyasachiImg from "../../assets/speakers/sabyacachi.jpg";
import avijitImg from "../../assets/speakers/avijit.jpg";
import avikImg from "../../assets/speakers/avik.jpg";
import dipanwitaImg from "../../assets/speakers/Dipanwita.jpg";
import mridulImg from "../../assets/speakers/mridul_nandi.jpg";
import brkImg from "../../assets/speakers/brk.avif"; // New import
import prem from "../../assets/speakers/prem.png"; // New import
import paul from "../../assets/speakers/paul.png"; // New import
import santanu from "../../assets/speakers/shantanu.jpg"; // New import
import skpal from "../../assets/speakers/skpal.png"; // New import
import gm from "../../assets/speakers/gm.jpeg"; // New import
import nc from "../../assets/speakers/nc.jpeg"; // New import
import rsr from "../../assets/speakers/rsr.jpeg"; // New import

import { getCurrentEvent, isEventConcluded } from "../data/programSchedule";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [isLive, setIsLive] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [isConcluded, setIsConcluded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      once: true,
      offset: 100,
      disable: window.innerWidth < 768
    });

    // Check if the event has concluded
    if (isEventConcluded()) {
      setIsConcluded(true);
      setIsLive(true); // Keep isLive true so countdown doesn't show
    } else {
      // Check initially if we should be live
      const event = getCurrentEvent();
      if (event) {
        setIsLive(true);
        setCurrentEvent(event);
      }
    }

    // Set up an interval to update the current event if we are live
    let interval;
    if (isLive && !isConcluded) {
      interval = setInterval(() => {
        // Check if concluded
        if (isEventConcluded()) {
          setIsConcluded(true);
          setCurrentEvent(null);
        } else {
          const event = getCurrentEvent();
          setCurrentEvent(event);
        }
      }, 3000); // Check every 3 seconds
    }

    return () => clearInterval(interval);
  }, [isLive, isConcluded]);

  const handleCountdownComplete = () => {
    setIsLive(true);
    const event = getCurrentEvent();
    setCurrentEvent(event);
  };

  const speakers = [
    { name: "Prof. Bimal Kumar Roy", university: "Cryptology Research Society of India (CRSI)", image: brkImg }, // New speaker
    { name: "Prof. Dipanwita Roy Chowdhury", university: "IIT Kharagpur", image: dipanwitaImg },
    // { name: "Prof. Mridul Nandi", university: "ISI Kolkata", image: mridulImg },
    // { name: "Prof. Santanu Sarkar", university: "IIT Madras", image: santanu },
    { name: "Prof. Goutam Paul", university: "ISI Kolkata", image: paul },
    { name: "Dr. Girish Mishra", university: "SAG DRDO", image: gm },
    { name: "Dr. Nishanth Chandran", university: "Microsoft Research India", image: nc },
    { name: "Dr. Raghvendra Singh Rohit", university: "IIT Roorkee", image: rsr },
    { name: "Dr. Avijit Dutta", university: "TCG Crest", image: avijitImg },
    { name: "Dr. M. Prem Laxman Das", university: "SETS India", image: prem },
    // { name: "Dr. Saibal K. Pal", university: "SAG DRDO", image: skpal },
    // { name: "Dr. Angshuman Karmakar", university: "IIT Kanpur", image: angshumanImg },
    // { name: "Dr. Satrajit Ghosh", university: "IIT Kharagpur", image: satrajitImg },
    { name: "Dr. Sabyasachi Karati", university: "ISI Kolkata", image: sabyasachiImg },
    // { name: "Dr. Anindita Banerjee", university: "CDAC Pune", image: aninditaImg },
    // { name: "Dr. Avik Chakraborti", university: "TCG Crest", image: avikImg },
    { name: "Dr. Shibam Ghosh", university: "INRIA", image: shimanImg },
    { name: "Dr. Mostafizar Rahman", university: "NTU Singapore", image: mostafizarImg },
  ];

  const focusAreas = [
    "Cryptography Basics",
    "Cryptanalysis Basics",
    "Post Quantum Cryptography",
    "Lightweight Cryptography",
    "Public Key Cryptography",
    "Quantum Cryptography",
    "Multi-Party Computation",
  ];

  return (
    <main className="min-h-screen overflow-x-hidden max-w-full">
      {/* Hero Section */}
      <section className="w-full px-4 pt-6 pb-12 sm:pt-8 sm:pb-16 overflow-hidden">
        <GlowingBox
          data-aos="fade-up"
          className="max-w-4xl mx-auto 
                     transition-all duration-300"
        >
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2e2a30] 
                       tracking-tight leading-tight text-center mb-4">
            National Workshop on Cryptology 2025
          </h1>

          <div className="text-center space-y-1.5 text-[#2e2a30]/80">
            <p className="text-base sm:text-lg">December 07-09, 2025 · IIT Bhilai</p>
            <p className="text-sm sm:text-base italic">
              A Convergence of Cryptography, Security & Research
            </p>
          </div>

          <div className="mt-6 sm:mt-8">
            {!isLive ? (
              <>
                {/* <Countdown targetDate="2025-12-07T09:00:00+05:30" /> */}
                <Countdown
                  targetDate="2025-12-07T09:00:00+05:30"
                  // targetDate="2025-12-04T13:00:00+05:30"
                  onComplete={handleCountdownComplete}
                />
              </>
            ) : isConcluded ? (
              <div className="text-center animate-fade-in">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-3xl">🎉</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#7c3aed] uppercase tracking-wider">
                    Event Concluded
                  </h2>
                  <span className="text-3xl">🎉</span>
                </div>

                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-[#7c3aed]/20">
                  <h3 className="text-lg sm:text-xl font-bold text-[#2e2a30] mb-4">
                    National Workshop on Cryptology 2025 has concluded successfully!
                  </h3>
                  <p className="text-sm sm:text-base text-[#2e2a30]/80 mb-4">
                    We extend our heartfelt gratitude to everyone who made this event a grand success.
                  </p>
                  <div className="space-y-2 text-sm sm:text-base text-[#2e2a30]/70">
                    <p>🙏 <strong>Thank you</strong> to all our <span className="text-[#7c3aed] font-semibold">distinguished speakers</span> for sharing their invaluable knowledge and insights.</p>
                    <p>🙏 <strong>Thank you</strong> to all the <span className="text-[#7c3aed] font-semibold">participants</span> for your enthusiasm and active engagement.</p>
                    <p>🙏 <strong>Thank you</strong> to the <span className="text-[#7c3aed] font-semibold">organizing committee</span> for their tireless efforts in making this event a reality.</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center animate-fade-in">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <h2 className="text-xl font-bold text-[#7c3aed] uppercase tracking-wider">
                    Program Updates
                  </h2>
                </div>

                {currentEvent ? (
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-[#7c3aed]/20">
                    <div className="text-sm font-semibold text-[#7c3aed] mb-1">
                      {currentEvent.day} • {currentEvent.time}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#2e2a30] mb-2">
                      {currentEvent.event}
                    </h3>
                    {currentEvent.speaker && (
                      <p className="text-sm text-[#2e2a30]/70">
                        Speaker: {currentEvent.speaker}
                      </p>
                    )}
                    {currentEvent.chair && (
                      <p className="text-sm text-[#2e2a30]/70">
                        Session Chair: {currentEvent.chair}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-[#7c3aed]/20">
                    <p className="text-lg text-[#2e2a30]/80">
                      No active session right now. Check the full program below.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="mt-6 sm:mt-8 flex justify-center">
            <Link
              to="/program"
              className="group relative px-12 py-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#9333ea] 
                       text-white font-semibold text-sm sm:text-base tracking-wide text-center
                       shadow-lg shadow-[#7c3aed]/30 transition-all duration-300
                       hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] hover:scale-105
                       hover:from-[#8b5cf6] hover:to-[#a855f7]
                       active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">View Program</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ec4899] to-[#7c3aed] 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
            </Link>
          </div>
        </GlowingBox>
      </section>

      {/* About Section */}
      <section className="w-full px-4 py-12 sm:py-16 overflow-hidden">
        <div
          data-aos="fade-up"
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-xl sm:text-3xl font-bold text-center text-[#2e2a30] mb-8">
            About the Workshop
          </h2>

          <GlowingBox className="p-5 sm:p-8">
            <div className="space-y-4 text-[#2e2a30]/90 text-sm sm:text-base leading-relaxed text-justify">
              <p className="first-letter:text-3xl first-letter:font-bold">
                <strong>Department of Computer Science and Engineering, Indian Institute of Technology Bhilai</strong> and the <strong>Cryptology Research Society of India (CRSI)</strong> are proud to present the <strong>National Workshop on Cryptology (NWC 2025)</strong>. As the flagship annual event of CRSI, this workshop serves as a premier national forum dedicated to uniting the brightest minds in cryptology and information security. The event is being organized by <strong>
                  <a
                    href="http://de.ci.phe.red/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7c3aed] hover:text-[#5f27cd] hover:underline transition-colors duration-200"
                  >
                    de.ci.phe.red Lab
                  </a>
                </strong>, Department of Computer Science and Engineering, IIT Bhilai, which is actively engaged in cutting-edge research in cryptography, cybersecurity, and related domains. Through the workshop, the institute aims to create a vibrant platform for researchers, academicians, students, and industry pioneers to engage in meaningful dialogue, share insights, and collectively advance the frontiers of cryptology in India.
              </p>
              <p>
                The workshop agenda is meticulously crafted to provide a comprehensive exploration of modern cryptography. Participants will engage with eminent experts through a series of invited talks and interactive sessions like lightning talks and poster sessions where budding researchers can present their work. The curriculum will span a wide spectrum of critical topics, including the basics of <strong>Cryptography</strong> and <strong>Cryptanalysis</strong>, <strong>Post-Quantum Cryptography</strong>, <strong>Lightweight Cryptography</strong>, <strong>Public Key Cryptography</strong>, <strong>Quantum Cryptography</strong> and <strong>Multi-Party Computation</strong>. Beyond the sessions, the workshop will offer ample opportunities for networking and collaborative discussions. Our vision is to cultivate a vibrant ecosystem for cryptographic research in India, empowering the next generation of scholars and professionals to shape a secure digital future.
              </p>
            </div>
          </GlowingBox>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="w-full px-4 py-12 sm:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2
            data-aos="fade-up"
            className="text-xl sm:text-3xl font-bold text-center text-[#2e2a30] mb-8"
          >
            Distinguished Speakers
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={index * 100}
                data-aos-easing="cubic-bezier(0.645, 0.045, 0.355, 1)"
                className="group relative"
              >
                <GlowingBox className="p-3 sm:p-4 transition-all duration-500 hover:scale-[1.02]">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-3 rounded-lg overflow-hidden
                               border border-white/20 group-hover:border-[#7c3aed]/20
                               transition-all duration-500">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover transform transition-transform duration-500"
                      loading={index > 5 ? "lazy" : "eager"}
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-xs sm:text-sm text-[#2e2a30] mb-0.5
                                 group-hover:text-[#7c3aed] transition-colors duration-500">
                      {speaker.name}
                    </h3>

                    <p className="text-[10px] sm:text-xs text-[#2e2a30]/60">
                      {speaker.university}
                    </p>
                  </div>
                </GlowingBox>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="w-full px-4 py-12 sm:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2
            data-aos="fade-up"
            className="text-xl sm:text-3xl font-bold text-center text-[#2e2a30] mb-8"
          >
            Key Focus Areas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="group"
              >
                <GlowingBox className="p-4 transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="font-medium text-sm sm:text-base text-center text-[#2e2a30]
                               group-hover:text-[#7c3aed] transition-colors duration-300">
                    {area}
                  </h3>
                </GlowingBox>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="w-full px-4 py-12 sm:py-16 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2
            data-aos="fade-up"
            className="text-xl sm:text-3xl font-bold text-center text-[#2e2a30] mb-8"
          >
            Important Dates
          </h2>

          <div className="grid sm:grid-cols-4 gap-2 sm:gap-4">
            <div
              data-aos="fade-right"
              className="group cursor-pointer"
              onClick={() => navigate('/registration')}
            >
              <GlowingBox className="p-4 sm:p-6 transition-all duration-300 hover:scale-[1.02]">
                <div className="text-center">
                  <h3 className="text-base sm:text-lg font-semibold text-[#2e2a30] mb-1
                                           group-hover:text-[#7c3aed] transition-colors duration-300">
                    Registration
                  </h3>
                  <p className="text-sm text-[#2e2a30]/70">November 13-25, 2025</p>
                </div>
              </GlowingBox>
            </div>

            <div
              data-aos="fade-left"
              className="group cursor-pointer"
              onClick={() => navigate('#')}
            >
              <GlowingBox className="p-4 sm:p-6 transition-all duration-300 hover:scale-[1.02]">
                <div className="text-center">
                  <h3 className="text-base sm:text-lg font-semibold text-[#2e2a30] mb-1
                                           group-hover:text-[#7c3aed] transition-colors duration-300">
                    Confirmation Mail
                  </h3>
                  <p className="text-sm text-[#2e2a30]/70">November 26, 2025</p>
                </div>
              </GlowingBox>
            </div>

            <div
              data-aos="fade-left"
              className="group cursor-pointer"
              onClick={() => navigate('/submission-of-poster')}
            >
              <GlowingBox className="p-4 sm:p-6 transition-all duration-300 hover:scale-[1.02]">
                <div className="text-center">
                  <h3 className="text-base sm:text-lg font-semibold text-[#2e2a30] mb-1
                                           group-hover:text-[#7c3aed] transition-colors duration-300">
                    Poster Submission
                  </h3>
                  <p className="text-sm text-[#2e2a30]/70">December 3, 2025</p>
                </div>
              </GlowingBox>
            </div>

            <div
              data-aos="fade-left"
              className="group cursor-pointer"
              onClick={() => navigate('/program')}
            >
              <GlowingBox className="p-4 sm:p-6 transition-all duration-300 hover:scale-[1.02]">
                <div className="text-center">
                  <h3 className="text-base sm:text-lg font-semibold text-[#2e2a30] mb-1
                                           group-hover:text-[#7c3aed] transition-colors duration-300">
                    Workshop Dates
                  </h3>
                  <p className="text-sm text-[#2e2a30]/70">December 07–09, 2025</p>
                </div>
              </GlowingBox>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
