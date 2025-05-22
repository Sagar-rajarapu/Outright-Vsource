import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center text-white overflow-hidden pt-16 md:pt-0">
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat bg-fixed"

        style={{ backgroundImage: "url('/assets/images/display girl.jpg')" }}
      >
        {/* Fallback Image */}
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

      {/* Reduced Dark Overlay */}
      <div className="absolute inset-0 bg-darkblue/40 z-10" />

      {/* Main Content */}
      <div className="container mx-auto px-4 z-20 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight pt-6 md:pt-10">
              Redefining <span className="text-primary">Education</span> for Tomorrow's Innovators
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
              Your trusted educational consultancy with 20+ years of experience in guiding students towards successful academic and professional futures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="btn bg-primary hover:bg-red-700 text-white py-3 px-6 md:px-8 rounded-full text-base">
                Contact Us
              </Link>
              <Link to="/about-us" className="btn bg-white/10 text-white hover:bg-white/20 py-3 px-6 md:px-8 rounded-full text-base backdrop-blur-sm">
                Learn More
              </Link>
            </div>
            <div className="mt-4 bg-white/20 backdrop-blur-md p-4 rounded-xl inline-flex items-center justify-center">
              <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-base">20+</span>
              </div>
              <div className="ml-3">
                <p className="font-semibold text-base">Years of Trust and Genuine Service</p>
              </div>
            </div>
            <div className="pt-6"> 
              <p className="text-sm text-gray-400 mb-2">Trusted by students across the globe</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 items-center">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <div 
                        key={i} 
                        className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-300 border-2 border-darkblue flex items-center justify-center text-xs text-darkblue font-bold"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <span className="ml-2 text-xs md:text-sm">+100,000 students</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500 text-sm md:text-base">★★★★★</span>
                  <span className="text-xs md:text-sm">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image & "20 Years" Badge for Desktop */}
          {/* Uncomment if needed */}
         

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
