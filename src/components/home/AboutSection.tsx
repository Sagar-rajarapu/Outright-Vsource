import AnimateOnScroll from "../AnimateOnScroll";
import SectionTitle from "../SectionTitle";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Founder Image and Quote */}
          <AnimateOnScroll>
            <div className="flex flex-col items-center">
              <img
                src="https://vsourceadmissions.com/upload_data/founder.png"
                alt="Chairman"
                className="rounded-lg shadow-lg w-full h-auto max-w-md"
              />
              <div className="mt-4 bg-white p-4 rounded shadow-md max-w-sm w-full text-center">
                <p className="italic text-gray-600">
                  "Redefining Education for Tomorrow's Innovators"
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Company Info */}
          <AnimateOnScroll delay={200}>
            <div>
              <SectionTitle title="About Vsource Company" centered={false} />
              <div className="space-y-4">
                <p className="text-lg text-gray-600">
                For over 20 years, Vsource Company has been soul of educating, helping thousands of students achieve their dream destination.
                </p>
                <p className="text-lg text-gray-600">
                Founded with a vision to bridge the gap between students and quality education, we have evolved into a comprehensive consultancy offering services from university admissions to overseas education pathways and financial solutions
                </p>
                <p className="text-lg text-gray-600">
                Under the leadership of our Chairman, Mr. Durga Kumar Kamineni, we continue to expand our horizons while maintaining our core values of integrity, excellence, and student success..
                </p>

                {/* Stats */}
             
                
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
