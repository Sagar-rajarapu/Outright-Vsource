import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";
import AnimateOnScroll from "../AnimateOnScroll";
import { programToOption } from "../../lib/Popups";

const CoursesSection = () => {
  const courseCategories = [
    {
      title: "B.TECH",
      subtitle: "CSE (AI/ML, DATA SCIENCE)",
      description: "100% ROI • Practical Path • 90% RAC Passing Rate",
      image: "/assets/images/tech-card.jpg",
      url: "https://vsourcevarsity.com/",
    },
    {
      title: "MBBS In Abroad",
      subtitle: "30+ Students Enrolled",
      description: "No MCI Passing Rate",
      image: "/assets/images/mbbs-card.jpg",
      url: "https://vsourceadmissions.com/",
    },
    {
      title: "Masters In US/UK",
      subtitle: "100%+ Acceptance Assured",
      description: "High Success Rate",
      image: "/assets/images/masters-card.jpg",
      url: "https://vsourceoverseas.com/",
    },
    {
      title: "Edu Loans",
      subtitle: "Loan Sanction within 24 hrs",
      description: "100% Edu Loans",
      image: "/assets/images/loans-card.jpg",
      url: "https://vsourcefintech.com/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % courseCategories.length);
      }, 2000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isMobile, courseCategories.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % courseCategories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + courseCategories.length) % courseCategories.length);
  };

  const getProgramParam = (program: string) => {
    const option = programToOption[program as keyof typeof programToOption];
    return option ? `?program=${encodeURIComponent(option)}` : '';
  };

  const fallbackImage = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80';

  return (
    <section className="pt-2 pb-6 md:pt-4 md:pb-12 bg-gray-50">

      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Educational Programs"
          subtitle="Explore our diverse range of educational programs and opportunities" 
        />

        <AnimateOnScroll>
          {/* Desktop Layout */}
          {!isMobile && (
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courseCategories.map((course, index) => (
                <div key={index} className="course-card group bg-white rounded-xl overflow-hidden shadow-md">
                  <div className="relative h-48">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                      onError={(e) => (e.currentTarget.src = fallbackImage)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                      <h3 className="text-xl text-white font-bold">{course.title}</h3>
                      <p className="text-white/90 text-sm">{course.subtitle}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-5 text-sm">{course.description}</p>
                    <div className="flex justify-between items-center gap-2">
                      <a
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 border border-primary hover:bg-primary/5 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                      >
                        View Program
                      </a>
                      <Link
                        to={`/contact${getProgramParam(course.title)}`}
                        className="bg-primary hover:bg-primary/90 text-white text-sm py-2 px-4 rounded-md transition-colors shadow-md"
                      >
                        Call Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Mobile Carousel Layout */}
          {isMobile && (
            <div className="mt-10 relative">
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  {courseCategories.map((course, index) => (
                    <div key={index} className="w-full flex-shrink-0 p-3">
                      <div className="course-card bg-white rounded-lg overflow-hidden shadow-md">
                        <div className="relative h-48">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover"
                            onError={(e) => (e.currentTarget.src = fallbackImage)}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                            <h3 className="text-xl text-white font-bold">{course.title}</h3>
                            <p className="text-white/80 text-sm">{course.subtitle}</p>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-gray-600 mb-5 text-sm">{course.description}</p>
                          <div className="flex justify-between items-center gap-2">
                            <a
                              href={course.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary/80 border border-primary hover:bg-primary/5 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                              View Program
                            </a>
                            <Link
                              to={`/contact${getProgramParam(course.title)}`}
                              className="bg-primary hover:bg-primary/90 text-white text-sm py-2 px-4 rounded-md transition-colors shadow-md"
                            >
                              Call Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Nav Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10 hover:bg-gray-100"
                aria-label="Previous"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10 hover:bg-gray-100"
                aria-label="Next"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {courseCategories.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? "bg-primary scale-110" : "bg-gray-300"}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          )}
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CoursesSection;
