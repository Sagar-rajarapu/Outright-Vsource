import React from 'react';
import { Link } from 'react-router-dom';

const StudyAbroadSection = () => {
  const cards = [
    {
      title: "2-Year Post-Study Work Visa",
      description: "Stay and work in the UK for two years after graduation with no restrictions on job type, giving you valuable international work experience.",
      color: "#FF7E79",
      image: "/assets/images/girl card 2.png"
    },
    {
      title: "Study in Top 1% Universities",
      description: "Top programs at UK universities are globally recognized, offering industry-relevant skills that are highly valued by recruiters worldwide.",
      color: "#D5E85B",
      image: "/assets/images/male-teenager-portrait-isolated.png"
    },
    {
      title: "Get Admission Without IELTS",
      description: "Many UK universities accept alternatives like MOI, interviews, English proficiency waivers, or previous education in English for admission.",
      color: "#C29EE7",
      image: "/assets/images/girl 3.png"
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Study Abroad Opportunities</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 mt-4">
              <div className="flex items-center">
                <span className="text-xl font-bold text-primary">500+</span>
                <span className="ml-2 text-gray-600">University Tie-ups</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl font-bold text-primary">20,000+</span>
                <span className="ml-2 text-gray-600">Success Stories</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl font-bold text-primary">250+</span>
                <span className="ml-2 text-gray-600">Study Abroad Experts</span>
              </div>
            </div>
          </div>
         
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="rounded-lg overflow-hidden shadow-md h-full transform transition-all duration-500 hover:scale-105"
              style={{ backgroundColor: card.color }}
            >
              <div className="relative h-full flex flex-col items-center text-center px-6 py-6">
                
                {/* Unified Image Container */}
                <div className="w-44 h-44 md:w-52 md:h-52 mb-4 flex items-center justify-center">
                  <img 
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-contain transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://via.placeholder.com/150?text=Student+Image';
                    }}
                  />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 line-clamp-2">{card.title}</h3>
                <p className="text-sm text-gray-800 mb-6 line-clamp-3">{card.description}</p>

                <Link 
                  to="/contact"
                  className="mt-auto w-full sm:w-auto inline-block py-2 px-4 bg-gray-800 text-white text-sm font-medium rounded transition-all duration-300 hover:bg-gray-700 text-center"
                >
                  Request callback
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StudyAbroadSection;
