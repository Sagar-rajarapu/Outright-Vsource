import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";
import AnimateOnScroll from "../AnimateOnScroll";

const services = [
  {
    title: "Vsource Overseas",
    description:
      "2-Year post-study work visa with no job role restrictions for valuable global experience.",
    imageSrc: "/assets/images/overseas.jpg",
    logoSrc: "/assets/images/logo overseas.png",
    externalUrl: "https://vsourceoverseas.com/",
    shiftImage: true,
  },
  {
    title: "Vsource Admissions",
    description:
      "Partner with top 1% universities offering industry-relevant programs.",
    imageSrc:
      "https://vsourceadmissions.com/upload_data/f442b60ebae605c94b5b5505ff3cfcd9.png",
    logoSrc: "/assets/images/mini logo.png",
    externalUrl: "https://vsourceadmissions.com/",
    shiftImage: false,
  },
  {
    title: "Vsource Varsity",
    description:
      "Explore flexible academic pathways for diverse career goals.",
    imageSrc:
      "https://st2.depositphotos.com/4431055/7304/i/450/depositphotos_73043221-stock-photo-student-college-student-library.jpg",
    logoSrc: "/assets/images/mini logo.png",
    externalUrl: "https://vsourcevarsity.com/",
    shiftImage: true,
  },
  {
    title: "Vsource Fintech",
    description:
      "Admissions without IELTS via interviews, MOUs, or English-medium education.",
    imageSrc: "/assets/images/fintech.png",
    logoSrc: "/assets/images/mini logo.png",
    externalUrl: "https://www.vsourcefintech.com/",
    shiftImage: true,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white text-black">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Services"
          subtitle="Helping you achieve academic and career success"
          className="text-black"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <AnimateOnScroll key={service.title} delay={index * 100}>
              <div
                onClick={() => window.open(service.externalUrl, "_blank")}
                className="relative rounded-xl cursor-pointer overflow-hidden h-64 md:h-72 group transform transition-transform duration-300 shadow-md hover:shadow-2xl hover:shadow-black shadow-black/40"
              >
                {/* Left Text Block (Triangle shape) */}
                <div
                  className="absolute inset-0 z-10 p-6 flex flex-col justify-start text-black"
                  style={{
                    backgroundColor: "white",
                    clipPath: "polygon(0 0, 75% 0, 100% 100%, 0 100%)",
                  }}
                >
                  <div className="max-w-[60%] pr-4 space-y-1">
                    <div className="flex items-center gap-3">
                      <img
                        src={service.logoSrc}
                        alt="logo"
                        className="h-24 md:h-28 lg:h-32 w-auto object-contain"
                      />
                      <h3 className="text-base md:text-lg lg:text-xl font-semibold leading-snug">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm leading-tight">
                      {service.description}
                    </p>
                    <div className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-full border border-black text-black bg-black/5 hover:bg-black/10 transition w-fit">
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Right Image Block (Complementary angled shape) */}
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    clipPath: "polygon(75% 0, 100% 0, 100% 100%, 0 100%)",
                  }}
                >
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className={`w-full h-full object-cover object-right transition-transform duration-300 ${
                      service.shiftImage ? "translate-x-4 translate-y-2" : ""
                    }`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://via.placeholder.com/600x400?text=Service+Image";
                    }}
                  />
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
