import React from 'react';
import SectionTitle from "../SectionTitle";
import AnimateOnScroll from "../AnimateOnScroll";

// ✅ Inject styles directly if needed
const style = `
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

@keyframes marquee-reverse {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0%); }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

.animate-marquee-reverse {
  animation: marquee-reverse 30s linear infinite;
}
`;

const logos = [
  "https://www.gouk.in/v1.0.1/assets/universities-icons/University-of-Sheffield.webp",
  "https://www.gouk.in/v1.0.1/assets/universities-icons/University-of-York.webp",
  "https://www.gouk.in/v1.0.1/assets/universities-icons/University-of-Aberdeen.webp",
  "https://www.gouk.in/v1.0.1/assets/universities-icons/University-of-Liverpool.webp",
  "https://www.gouk.in/v1.0.1/assets/universities-icons/Harper-Adams-University.webp",
  "https://www.gouk.in/v1.0.1/assets/universities-icons/Cardiff-University.webp",
  "https://www.gouk.in/v1.0.1/assets/universities-icons/University-of-Surrey.webp",
  "https://www.gouk.in/v1.0.1/assets/universities-icons/University-of-East-Anglia.webp",
  "https://www.gouk.in/v1.0.1/assets/universities-icons/University-of-Southampton.webp",
  "https://www.gouk.in/v1.0.1/assets/universities-icons/University-of-Nottingham.webp",
  "https://www.gouk.in/v1.0.1/assets/universities-icons/Manchester-Metropolitan-University.webp",
  "https://www.gouk.in/v1.0.1/assets/universities-icons/University-of-Hertfordshire.webp",
  "https://www.gouk.in/v1.0.1/assets/universities-icons/Sheffield-Hallam-University.webp",
  "https://www.gouk.in/v1.0.1/assets/universities-icons/University-of-Wolverhampton.webp",
  "https://www.gouk.in/v1.0.1/assets/universities-icons/Aberystwyth-University.webp",
  "https://www.gouk.in/v1.0.1/assets/universities-icons/Bournemouth-University.webp",
  "https://www.gouk.in/v1.0.1/assets/universities-icons/Brunel-University-London.webp",
  "https://www.gouk.in/v1.0.1/assets/universities-icons/Aston-University.webp",
  "https://www.gouk.in/v1.0.1/assets/universities-icons/University-of-Sussex.webp"
];

interface MarqueeRowProps {
  logos: string[];
  reverse?: boolean;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ logos, reverse = false }) => {
  return (
    <div className="relative overflow-hidden w-full py-2 md:py-4">
      <div
        className={`flex w-[200%] whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[...logos, ...logos].map((logo, idx) => (
          <div key={idx} className="flex-shrink-0 mx-4">
            <img
              src={logo}
              alt="university logo"
              className="w-[100px] md:w-[150px] h-[40px] md:h-[60px] object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
              }}
            />
          </div>
        ))}
      </div>

      {/* Gradient overlays for edge blur */}
      <div className="absolute top-0 left-0 w-12 md:w-24 h-full bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute top-0 right-0 w-12 md:w-24 h-full bg-gradient-to-l from-white to-transparent z-10" />
    </div>
  );
};

const LogoMarquee = () => {
  React.useEffect(() => {
    console.log('Remember to create logo directory at: /assets/images/logos/');
  }, []);

  return (
    <>
      {/* Inject animation styles directly */}
      <style>{style}</style>

      <section className="py-10 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our University Partners" 
            subtitle="We collaborate with prestigious institutions worldwide to offer you the best educational opportunities" 
          />

          <AnimateOnScroll>
            <div className="mt-6 md:mt-10 relative overflow-hidden px-2 md:px-4 space-y-4">
              <MarqueeRow logos={logos.slice(0, 9)} />
              <MarqueeRow logos={logos.slice(5, 15)} reverse />
              <MarqueeRow logos={logos.slice(10, 19)} />
              <MarqueeRow logos={logos.slice(3, 12)} reverse />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="mt-8 md:mt-12 text-center">
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Our strong partnerships with these universities ensure that our students receive 
                preferential admissions consideration, specialized programs, and exclusive scholarship opportunities.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default LogoMarquee;
