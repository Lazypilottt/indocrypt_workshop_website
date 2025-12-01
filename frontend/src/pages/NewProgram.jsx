import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlowingBox from '../components/GlowingBox';

const schedule = [
  // Dec 07
  [
    { time: '09:00 - 10:00', event: 'Registration', chair: '', type: 'misc' },
    { time: '10:00 - 10:45', event: 'Inauguration', chair: '', type: 'misc' },
    { time: '10:45 - 11:45', event: 'Talk 1: "Some Recent Issues in Cryptology" by Prof. Bimal Kumar Roy', chair: '', type: 'misc' },
    { time: '11:45 - 12:00', event: 'Snacks & Tea', chair: '', type: 'snacks' },
    { time: '12:00 - 13:00', event: 'Talk 1 (contd.)', chair: '', type: 'misc' },
    { time: '13:00 - 14:00', event: 'Lunch', chair: '', type: 'lunch' },
    { time: '14:00 - 15:00', event: 'Talk 2: Prof. Dipanwita Roy Chowdhury', chair: '', type: 'misc' },
    { time: '15:00 - 15:15', event: 'Tea/Coffee', chair: '', type: 'snacks' },
    { time: '15:15 - 16:15', event: 'Talk 2 (contd.)', chair: '', type: 'misc' },
    { time: '16:15 - 17:15', event: 'Talk 3', chair: '', type: 'talk' },
    { time: '17:15 - 17:30', event: 'Snacks & Tea', chair: '', type: 'snacks' },
    { time: '17:30 - 18:30', event: 'Lightning Talks', chair: '', type: 'misc' },
  ],
  // Dec 08
  [
    { time: '09:30 - 10:30', event: 'Talk 4: Dr Shibam Ghosh', chair: '', type: 'talk' },
    { time: '10:30 - 11:30', event: 'Talk 5: Dr Mostafizar Rahman', chair: '', type: 'talk' },
    { time: '11:30 - 12:00', event: 'Snacks & Tea', chair: '', type: 'snacks' },
    { time: '12:00 - 13:00', event: 'Talk 6: "Zero Knowledge Proof and its Application" by Dr Avijit Dutta', chair: '', type: 'talk' },
    { time: '13:00 - 14:00', event: 'Lunch', chair: '', type: 'lunch' },
    { time: '14:00 - 15:00', event: 'Talk 7: "Post-Quantum Digital Signatures from Hash Functions" by Dr Sabyasachi Karati', chair: '', type: 'talk' },
    { time: '15:00 - 15:30', event: 'IBITF Session', chair: '', type: 'misc' },
    { time: '15:30 - 16:30', event: 'Poster Session', chair: '', type: 'misc' },
    { time: '16:30 - 17:00', event: 'Snacks & Tea', chair: '', type: 'snacks' },
    { time: '17:00 - 18:00', event: 'Talk 8: TBA', chair: '', type: 'talk' },
  ],
  // Dec 09
  [
    { time: '09:30 - 10:30', event: 'Talk 9: "Exploring Application of Machine Learning in Cryptology" by Dr Girish Mishra', chair: '', type: 'talk' },
    { time: '10:30 - 11:30', event: 'Talk 10: "Unclonability in Cryptography: Quantum Credentials" by Dr M. Prem Laxman Das', chair: '', type: 'talk' },
    { time: '11:30 - 11:50', event: 'Snacks & Tea', chair: '', type: 'snacks' },
    { time: '11:50 - 12:50', event: 'Talk 11: Prof. Goutam Kumar Paul', chair: '', type: 'talk' },
    { time: '12:50 - 13:45', event: 'Panel Discussion', chair: '', type: 'misc' },
    { time: '13:45 - 14:00', event: 'Valedictory Session', chair: '', type: 'misc' },
    { time: '14:00 - 15:00', event: 'Lunch', chair: '', type: 'lunch' },
    { time: '15:00 - 18:30', event: 'CWS 2025', chair: '', type: 'nwc' },
  ],
];

const getTypeIcon = (type) => {
  const colorMap = {
    nwc: 'bg-green-500',
    lunch: 'bg-yellow-500',
    misc: 'bg-orange-500',
    snacks: 'bg-blue-500',
    groupd: 'bg-purple-500',
    talk: 'bg-pink-500',
    groupp: 'bg-red-500',
    default: 'bg-gray-400',
  };
  const color = colorMap[type] || colorMap.default;
  return <span className={`w-2.5 h-2.5 ${color} rounded-full mr-3 flex-shrink-0`}></span>;
};

export default function NewProgram() {
  const [activeDay, setActiveDay] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col pt-[140px]">
      <main className="flex-grow px-4 md:px-8 pb-12">
        <div className="max-w-5xl mx-auto">
          <GlowingBox className="mt-8 mb-16 p-4 sm:p-6 md:p-8 shadow-lg" data-aos="fade-up">
            <div className="flex justify-center border-b border-white/30 mb-4">
              {['Dec 07', 'Dec 08', 'Dec 09'].map((day, index) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(index)}
                  className={`px-4 sm:px-6 py-3 text-sm sm:text-base font-medium transition-all duration-300
                              ${activeDay === index
                      ? 'text-[#2e2a30] border-b-2 border-[#7c3aed]'
                      : 'text-[#2e2a30]/60 hover:text-[#2e2a30]'
                    }`}
                >
                  {day}
                </button>
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-[#2e2a30]">
                <thead className="text-xs text-[#2e2a30]/80 uppercase"><tr>
                  <th scope="col" className="px-4 py-3 md:w-1/4">Time</th>
                  <th scope="col" className="px-4 py-3 md:w-1/2">Event Name</th>
                  <th scope="col" className="px-4 py-3 md:w-1/4">Session Chair</th>
                </tr></thead>
                <tbody>
                  {schedule[activeDay].map((item, index) => (
                    <tr key={index} className="border-b border-white/40 hover:bg-white/10 transition-colors duration-200">
                      <td className="px-4 py-4 font-medium whitespace-nowrap">{item.time}</td>
                      <td className="px-4 py-4 font-semibold">
                        <div className="flex items-center">
                          {getTypeIcon(item.type)}
                          <span>{item.event}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">{item.chair}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlowingBox>
        </div>
      </main>
    </div>
  );
}
