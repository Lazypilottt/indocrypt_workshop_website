import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlowingBox from '../components/GlowingBox';

export default function SubmissionOfPoster() {
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
          <GlowingBox className="mb-16 p-6 sm:p-8 md:p-10" data-aos="fade-up">
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#2e2a30] mb-6">
              Call for Posters
            </h1>
            <div className="space-y-6 text-[#2e2a30]/90 text-base leading-relaxed text-justify">
              <p>
                We are pleased to invite poster submissions from academic institutions, research groups, and industry organizations across India for the National Workshop on Cryptology (NWC 2025). This is an excellent opportunity to present your latest research, innovative projects, and significant contributions in the field of cryptology. Posters should highlight current and emerging advancements in applied cryptography and related areas, and will be displayed throughout the workshop, providing a platform for interaction with experts, researchers, and peers.
              </p>
              <p>
                To participate, please email the title, a brief description, and the poster A0 size( 841mm × 1189mm - 33.1 in × 46.8 in ) <a href="https://en.wikipedia.org/wiki/Paper_size#Overview:_ISO_paper_sizes" target="_blank" className="text-[#7c3aed] font-semibold hover:underline">Details Here</a> to <a href="mailto:decipheredlab@iitbhilai.ac.in" className="text-[#7c3aed] font-semibold hover:underline">decipheredlab@iitbhilai.ac.in</a> with the subject line “Poster Submission for NWC 2025” by November 30, 2025. The organizers will bear all printing costs for the submitted posters. At least one author of each poster must be present at the workshop to discuss their work during the designated poster sessions. We look forward to your active participation and contributions to NWC 2025.
              </p>
            </div>
          </GlowingBox>
        </div>
      </main>
    </div>
  );
}