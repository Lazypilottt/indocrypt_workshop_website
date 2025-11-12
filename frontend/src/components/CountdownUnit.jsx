import React from 'react'; // No useState, useEffect needed for animation

const CountdownUnit = ({ value, label }) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center 
                 min-w-[60px] sm:min-w-[90px] md:min-w-[120px] lg:min-w-[150px] xl:min-w-[180px] h-[70px] sm:h-[100px] md:h-[120px] lg:h-[150px] xl:h-[180px]
                 rounded-2xl backdrop-blur-xl border border-white/20 
                 bg-gradient-to-br from-[#7c3aed]/60 to-[#ec4899]/60 
                 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl
                 overflow-hidden`}
    >
      <div className="absolute inset-0 flex items-center justify-center"> {/* Container for the number */}
        <div className={`text-2xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-extrabold text-white 
                       tracking-tight drop-shadow-lg`}>
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <div className="absolute bottom-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl uppercase text-white/90 font-medium">
        {label}
      </div>
    </div>
  );
};

export default CountdownUnit;

