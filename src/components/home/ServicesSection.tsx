import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";
import AnimateOnScroll from "../AnimateOnScroll";

const services = [
  {
    title: "Vsource Overseas",
    description:
      "2-Year Post-Study Work Visa. After graduation with no restrictions on job roles, giving you valuable international experience.",
    variant: "red" as const,
    imageSrc: "/lovable-uploads/overseas.jpg",
    externalUrl: "https://vsourceoverseas.com/",
  },
  {
    title: "Vsource Admissions",
    description:
      "Study in Top 1% Universities. Partner with globally recognized institutions offering industry-relevant courses that are highly valued by employers.",
    variant: "red" as const,
    imageSrc: "https://vsourceadmissions.com/upload_data/f442b60ebae605c94b5b5505ff3cfcd9.png",
    externalUrl: "https://vsourceadmissions.com/",
  },
  {
    title: "Vsource Varsity",
    description:
      "Explore multiple educational pathways with branching opportunities for diverse career goals and academic interests.",
    variant: "gold" as const,
    imageSrc: "https://st2.depositphotos.com/4431055/7304/i/450/depositphotos_73043221-stock-photo-student-college-student-library.jpg",
    externalUrl: "https://vsourcevarsity.com/",
  },
  {
    title: "Vsource Fintech",
    description:
      "Get Admission Without IELTS. Opportunities for students who don't have IELTS through our MOUs, interviews, or previous education in English.",
    variant: "purple" as const,
    imageSrc: "/lovable-uploads/fintech.png",
    externalUrl: "https://www.vsourcefintech.com/",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-darkblue text-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive educational solutions to help you achieve your academic and career goals"
          className="text-white"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <AnimateOnScroll key={service.title} delay={index * 100}>
              <div
                onClick={() => window.open(service.externalUrl, "_blank")}
                className="relative overflow-hidden rounded-xl shadow-lg bg-white/5 border border-white/10 cursor-pointer transform transition-transform duration-300 hover:scale-105"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://via.placeholder.com/600x400?text=Service+Image";
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm mb-4">{service.description}</p>
                  <div className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-full border border-white text-white bg-white/10 hover:bg-white/20 transition">
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
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;