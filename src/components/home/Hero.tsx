import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const animatedTexts = [
  ["B.Tech Admissions -2025", "in NAAC A, A+, A++ UNIVERSITIES"],
  ["STUDY MASTER’S", "IN USA, UK IRELAND, CANADA, FRANCE"],
  ["MBBS ABROAD", "IN GEORGIA , RUSSIA"],
  ["100% EDUCATION LOAN", "LOAN SANCTION WITHIN 24 hrs"],
];


const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % animatedTexts.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center text-white overflow-hidden pt-16 md:pt-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/assets/images/display girl.jpg')" }}
      >
        <img
          src="/assets/images/display girl.jpg"
          alt="Background Fallback"
          className="hidden"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://via.placeholder.com/1920x1080?text=Student+Image';
          }}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-darkblue/40 z-10" />

      {/* Main Content */}
      <div className="container mx-auto px-4 z-20 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* ===================== DESKTOP VERSION ===================== */}
          <div className="hidden md:block space-y-6 pt-28">
  {/* Heading */}
  <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-center lg:text-left">
    Redefining <span className="text-primary">Education</span> for Tomorrow's Innovators
  </h1>

  {/* Description */}
  <p className="text-lg lg:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
    Your trusted educational consultancy with 20+ years of experience in guiding students towards successful academic and professional futures.
  </p>

  {/* 20 Years Logo */}
  <div className="flex justify-center">
    <img
      src="/assets/images/20 years logo.png"
      alt="20 Years Logo"
      className="w-36 h-auto"
    />
  </div>

  {/* Animated Text */}
  <div className="mt-4 p-5 bg-white/20 backdrop-blur-md rounded-xl max-w-2xl w-full mx-auto text-center text-white min-h-[90px] flex flex-col justify-center">
    {animatedTexts[currentTextIndex].map((line, i) => (
      <p key={i} className="text-lg font-semibold leading-tight animate-fade-in transition-opacity duration-500 ease-in-out">
        {line}
      </p>
    ))}
  </div>

  {/* Student Count & Rating */}
  <div className="pt-6 pb-20">
    <p className="text-sm text-gray-400 mb-2 text-center lg:text-left">Trusted by students across the globe</p>
    <div className="flex flex-wrap gap-6 items-center justify-center lg:justify-start">
      <div className="flex items-center">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full bg-gray-300 border-2 border-darkblue flex items-center justify-center text-xs text-darkblue font-bold"
            >
              {i}
            </div>
          ))}
        </div>
        <span className="ml-2 text-sm">+100,000 students</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-yellow-500 text-base">★★★★★</span>
        <span className="text-sm">4.9/5 rating</span>
      </div>
    </div>
  </div>
</div>




{/* //mobile version  */}
<div className="md:hidden flex flex-col items-center text-left space-y-4 pt-24 px-4">
  {/* Heading - Left aligned */}
  <h1 className="text-3xl font-bold leading-tight w-full text-left">
    Redefining <span className="text-primary">Education</span> for Tomorrow's Innovators
  </h1>

  {/* 20 Years Logo - Centered */}
  <div className="w-full flex justify-center">
    <img
      src="/assets/images/20 years logo.png"
      alt="20 Years Logo"
      className="w-24 h-auto mt-2"
    />
  </div>

  {/* Animated Text - Centered */}
  <div className="mt-4 p-4 pt-6 text-sm text-white bg-white/20 backdrop-blur-md rounded-xl w-full max-w-xs min-h-[90px] flex flex-col justify-center items-center">
    {animatedTexts[currentTextIndex].map((line, i) => (
      <p
        key={i}
        className="text-white font-semibold leading-tight animate-fade-in transition-opacity duration-500 ease-in-out text-center"
      >
        {line}
      </p>
    ))}
  </div>

  {/* Student Count & Rating */}
  <div className="pt-6">
    <p className="text-xs text-gray-400 mb-2 text-center">Trusted by students across the globe</p>
    <div className="flex flex-wrap gap-4 justify-center items-center">
      <div className="flex items-center">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full bg-gray-300 border-2 border-darkblue flex items-center justify-center text-xs text-darkblue font-bold"
            >
              {i}
            </div>
          ))}
        </div>
        <span className="ml-2 text-xs">+100,000 students</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-yellow-500 text-sm">★★★★★</span>
        <span className="text-xs">4.9/5 rating</span>
      </div>
    </div>
  </div>
</div>


        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white/50 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
