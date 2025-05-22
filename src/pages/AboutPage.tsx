
import { useEffect } from "react";
import SectionTitle from "@/components/SectionTitle";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const AboutPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Durga Kumar Kamineni",
      position: "Chairman",
      image: "/lovable-uploads/327ec175-7574-4053-94b3-d44c2dbd1f46.png",
      experience: "25+ years",
      bio: "Founded Vsource Company with a vision to provide quality education consultancy to students across India."
    },
    {
      name: "Charan Teja",
      position: "CEO",
      image: "/lovable-uploads/454f7683-4b97-4728-abc0-59dfe25347ab.png",
      experience: "15+ years",
      bio: "Leads the company with innovative strategies and a commitment to student success."
    },
    {
      name: "Team Member 3",
      position: "Director of Admissions",
      image: "/lovable-uploads/f046468d-ee24-4af2-98e0-22a9935c90b6.png",
      experience: "12+ years",
      bio: "Expert in university admissions with a track record of successful placements."
    },
    {
      name: "Team Member 4",
      position: "Director of International Relations",
      image: "/lovable-uploads/f046468d-ee24-4af2-98e0-22a9935c90b6.png",
      experience: "10+ years",
      bio: "Specializes in overseas education and international university partnerships."
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-36 pb-20 bg-gradient-to-b from-darkblue to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Vsource Company</h1>
            <p className="text-xl text-gray-300">
              Learn about our journey, our team, and our mission to provide exceptional 
              educational consultancy for over 20 years.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700">
                    Vsource Company was established in 2002 with a clear mission: to bridge the gap 
                    between ambitious students and quality education opportunities both in India and abroad.
                  </p>
                  <p className="text-lg text-gray-700">
                    What began as a small consultancy has grown into a comprehensive 
                    educational services provider with multiple branches across India.
                  </p>
                  <p className="text-lg text-gray-700">
                    Through two decades of service, we have maintained our commitment to 
                    personalized guidance, ethical practices, and student-centric solutions.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={200}>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tertiary/10 rounded-full"></div>
                <img 
                  src="/lovable-uploads/b5b42637-3407-4f15-bba6-e67d8998c48a.png"
                  alt="Vsource Company Office" 
                  className="rounded-lg shadow-lg relative z-10 w-full"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      
    {/* Chairman Section */}
<section className="py-16 md:py-24 bg-gray-50">
  <div className="container mx-auto px-4">
    <SectionTitle 
      title="Leadership"
      subtitle="Meet our visionary chairman who leads Vsource Company"
    />
    
    <AnimateOnScroll>
      <div className="mt-12 max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Chairman Image */}
          <div className="md:w-1/2 w-full bg-white flex items-center justify-center md:h-[500px] p-4">
            <img 
              src="https://vsourceadmissions.com/upload_data/founder.png"
              alt="Durga Kumar Kamineni" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Chairman Info */}
          <div className="p-6 md:p-8 md:w-1/2">
          <div className="uppercase tracking-wide text-lg md:text-xl text-primary font-bold">Chairman</div>

            <h2 className="mt-2 text-2xl font-semibold">Durga Kumar Kamineni</h2>
            <p className="mt-2 text-gray-500">25+ Years of Experience</p>
            <p className="mt-4 text-gray-600">
              "Redefining Education for Tomorrow's Innovators"
            </p>
            <p className="mt-4 text-gray-600">
              Mr. Durga Kumar Kamineni founded Vsource Company with a vision to transform 
              the educational landscape in India. Under his leadership, the company has grown 
              from a small consultancy to a leading name in educational services.
            </p>
            <p className="mt-4 text-gray-600">
              His dedication to providing quality guidance and his extensive network in the 
              education sector has benefited thousands of students in their academic journeys.
            </p>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  </div>
</section>



      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Management Team"
            subtitle="Meet the experts who make Vsource Company a trusted name in educational consultancy"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(1).map((member, index) => (
              <AnimateOnScroll key={index} delay={index * 100}>
                <div className="group">
                  <div className="relative overflow-hidden rounded-xl bg-white shadow-lg h-[400px] perspective">
                    <div className="absolute inset-0 preserve-3d transition-transform duration-700 ease-in-out group-hover:rotate-y-180">
                      {/* Front - Photo */}
                      <div className="absolute inset-0 backface-hidden">
                        <div className="h-64 overflow-hidden">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold">{member.name}</h3>
                          <p className="text-primary">{member.position}</p>
                        </div>
                      </div>
                      
                      {/* Back - Info */}
                      <div className="absolute inset-0 backface-hidden rotate-y-180 bg-darkblue text-white p-6 flex flex-col justify-center">
                        <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                        <p className="text-primary mb-4">{member.position}</p>
                        <p className="mb-4">Experience: {member.experience}</p>
                        <p className="text-sm">{member.bio}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-center text-sm text-gray-500">
                    Hover to see more information
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
      
      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimateOnScroll>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To be the leading educational consultancy in India, recognized for our integrity, 
                  personalized approach, and consistent delivery of successful academic and career outcomes for our students.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 rounded-full bg-tertiary/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To empower students with comprehensive guidance, accurate information, and supportive resources 
                  that enable them to make informed decisions about their educational and career paths, both in India and abroad.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
