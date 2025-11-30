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
              Poster Presentation & Lightning Talks
            </h1>

            <div className="space-y-6 text-[#2e2a30]/90 text-base leading-relaxed text-justify">
              <p>
                The National Workshop on Cryptology (NWC 2025) will feature a dedicated Poster Presentation and Lightning Talk Session. This session offers participants an exciting opportunity to showcase their research, ongoing projects, interesting results, or innovative ideas in the field of cryptology and cybersecurity. We invite all shortlisted participants to engage in this interactive session.
              </p>

              <div className="bg-white/40 rounded-xl p-6 border-l-4 border-[#7c3aed] my-8">
                <h2 className="text-xl font-bold text-[#2e2a30] mb-4">About the Session</h2>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-[#2e2a30] mb-2">📌 Poster Presentation</h3>
                  <p className="mb-3 text-[#2e2a30]/90">
                    Participants may present their work in poster format.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Poster Size: 5 ft × 3 ft (approximately 152 cm × 91 cm), portrait orientation preferred.</li>
                    <li>All poster printing costs will be covered by the organizers. Participants only need to submit the final poster PDF within the specified deadline.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#2e2a30] mb-2">📌 Lightning Talks (5 minutes)</h3>
                  <p>
                    Participants may deliver a short 5-minute talk highlighting their research, project, or any interesting result. This is an excellent opportunity to communicate ideas concisely and engage with the research community.
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-bold text-[#2e2a30] mb-2">🏆 Best Poster Award</h3>
                  <p>
                    There will be an award for the Best Poster, so do participate!
                  </p>
                </div>
              </div>

              <p>
                If you are interested in presenting, please submit your preference (poster or lightning talk) and a brief abstract through the form that will be shared with you shortly.
              </p>

              <div className="bg-amber-100 border-l-4 border-amber-500 text-amber-900 p-4 rounded-r shadow-sm my-6">
                <p className="font-bold">Deadline to submit:</p>
                <p>11:59 pm on 3rd of December 2025</p>
              </div>

              <p className="font-medium text-[#2e2a30]/80 italic">
                Feel free to ask here if you have any questions.
              </p>

              <p>
                We look forward to your participation and contributions to making NWC 2025 a vibrant and engaging event.
              </p>
              <p className="font-semibold mt-4">
                Warm regards,<br />
                NWC 2025 Organizing Committee
              </p>
            </div>
          </GlowingBox>
        </div>
      </main>
    </div>
  );
}
