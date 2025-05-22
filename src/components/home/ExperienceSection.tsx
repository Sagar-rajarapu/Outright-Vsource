
import Counter from "../Counter";
import SectionTitle from "../SectionTitle";
import AnimateOnScroll from "../AnimateOnScroll";

const ExperienceSection = () => {
  const stats = [
    {
      count: 200,
      title: "Courses",
      subtitle: "Match your goals with the right course"
    },
    {
      count: 250,
      title: "Industry Experts",
      subtitle: "Boost your learning with engaging live classes"
    },
    {
      count: 500,
      title: "Career Experts",
      subtitle: "Get advice on picking the right course"
    },
    {
      count: 300,
      title: "Industry Problems",
      subtitle: "Get job-ready with practical knowledge & real-world experience"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="We have 20+ years of Professional Experience"
          subtitle="Our extensive experience translates into unmatched expertise and successful outcomes for our students" 
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimateOnScroll key={index} delay={index * 100}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Counter
                  end={stat.count}
                  title={stat.title}
                  subtitle={stat.subtitle}
                />
                
                {index === 0 && (
                  <div className="mt-4">
                    <img 
                      src="https://wallpaperaccess.com/full/4107359.jpg" 
                      alt="Course documents" 
                      className="h-24 mx-auto object-contain"
                    />
                  </div>
                )}
                
                {index === 1 && (
                  <div className="mt-4">
                    <img 
                      src="https://www.kinlin.com/wp-content/uploads/2018/01/expert-off.jpg" 
                      alt="Industry experts" 
                      className="h-24 mx-auto object-contain"
                    />
                  </div>
                )}
                
                {index === 2 && (
                  <div className="mt-4">
                    <img 
                      src="https://th.bing.com/th/id/R.7cfd9971c2870d33f9147a78232f813e?rik=ZYWwcKaD4ulM%2bQ&riu=http%3a%2f%2fglobalcareerexperts.com%2fImages%2fAbout.jpg&ehk=Akao6macuaSLbTyocmsZH2MDw5KfbPwuTsmEMg9PLno%3d&risl=&pid=ImgRaw&r=0" 
                      alt="Career experts" 
                      className="h-24 mx-auto object-contain"
                    />
                  </div>
                )}
                
                {index === 3 && (
                  <div className="mt-4">
                    <img 
                      src="https://th.bing.com/th/id/OIP.Kwn-SGEYN72XkhYSG_HwKwHaD4?w=1024&h=536&rs=1&pid=ImgDetMain" 
                      alt="Industry problems" 
                      className="h-24 mx-auto object-contain"
                    />
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
