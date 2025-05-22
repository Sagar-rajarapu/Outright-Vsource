import { useState, useEffect, useRef } from "react";
import SectionTitle from "../SectionTitle";
import AnimateOnScroll from "../AnimateOnScroll";

const ScholarshipsSection = () => {
  const universityLogos = [
    "https://vsourceadmissions.com/assets/images/VSINDIA2.png",
    "https://www.gouk.in/v1.0.1/assets/universities-icons/University-of-Sheffield.webp",
    "https://www.gouk.in/v1.0.1/assets/universities-icons/University-of-York.webp",
    "https://www.gouk.in/v1.0.1/assets/universities-icons/University-of-Aberdeen.webp",
    "https://www.gouk.in/v1.0.1/assets/universities-icons/Cardiff-University.webp",
    "https://www.gouk.in/v1.0.1/assets/universities-icons/Harper-Adams-University.webp",
    "https://www.gouk.in/v1.0.1/assets/universities-icons/Cardiff-University.webp",
    "https://www.gouk.in/v1.0.1/assets/universities-icons/University-of-Surrey.webp",
    "https://www.gouk.in/v1.0.1/assets/universities-icons/University-of-East-Anglia.webp",
    "https://www.gouk.in/v1.0.1/assets/universities-icons/University-of-Southampton.webp",
    "https://www.gouk.in/v1.0.1/assets/universities-icons/University-of-Lincoln.webp",
    "https://www.gouk.in/v1.0.1/assets/universities-icons/University-of-Westminster.webp"
  ];

  const scholarshipsData = [
    { studentName: "Mary Ashish", amount: "₹6,43,472", gender: "male" },
    { studentName: "Meera Pranesh", amount: "₹6,43,000", gender: "male" },
    { studentName: "Trupti Pranesh", amount: "₹6,42,572", gender: "female" },
    { studentName: "Trupti", amount: "₹6,41,000", gender: "female" },
    { studentName: "Abhirup", amount: "₹6,03,202", gender: "male" },
    { studentName: "Aditya Ashish", amount: "₹3,20,736", gender: "male" },
    { studentName: "Mary Ashish", amount: "₹6,43,472", gender: "male" },
    { studentName: "Meera Pranesh", amount: "₹6,43,000", gender: "female" },
    { studentName: "Trupti Pranesh", amount: "₹6,42,572", gender: "female" },
    { studentName: "Trupti", amount: "₹6,41,000", gender: "female" },
    { studentName: "Abhirup", amount: "₹6,03,202", gender: "male" },
    { studentName: "Aditya Ashish", amount: "₹3,20,736", gender: "male" }
  ];

  const tableRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    if (!autoScroll || !tableRef.current) return;

    const table = tableRef.current;
    const scrollHeight = table.scrollHeight;
    const clientHeight = table.clientHeight;

    if (scrollHeight <= clientHeight) return;

    const maxScroll = scrollHeight - clientHeight;
    let animationId: number;

    const scroll = () => {
      if (!tableRef.current) return;

      let newPos = scrollPos + 0.5;
      if (newPos >= maxScroll) {
        newPos = 0;
      }

      setScrollPos(newPos);
      tableRef.current.scrollTop = newPos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [autoScroll, scrollPos]);

  const handleMouseEnter = () => setAutoScroll(false);
  const handleMouseLeave = () => setAutoScroll(true);

  return (
    <section className="py-20 md:py-28 text-lg">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="80% of our students were awarded scholarships this year"
          subtitle="Our students consistently receive impressive scholarships from top universities" 
        />

        <AnimateOnScroll>
          <div className="mt-10 max-w-4xl mx-auto">
            <div 
              ref={tableRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="border border-gray-300 rounded-xl shadow-xl overflow-hidden max-h-[450px] overflow-y-auto"
            >
              <table className="min-w-full divide-y divide-gray-200 text-base">
                <thead className="bg-gray-100 sticky top-0 z-10">
                  <tr>
                    <th className="px-2 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      University
                    </th>
                    <th className="px-2 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      Student Name
                    </th>
                    <th className="px-2 sm:px-6 py-4 text-left md:text-right text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      Scholarship
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {scholarshipsData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-2 sm:px-6 py-3 sm:py-5">
                        <img 
                          src={universityLogos[index % universityLogos.length]} 
                          alt="University Logo"
                          className="h-8 w-8 sm:h-12 sm:w-12 object-contain rounded-full"
                        />
                      </td>
                      <td className="px-2 sm:px-6 py-3 sm:py-5">
                        <div className="flex items-center">
                          <img 
                            src={item.gender === 'female' ? '/assets/images/female icon.png' : '/assets/images/male icon.png'} 
                            alt="Student Profile"
                            className="h-8 w-8 sm:h-12 sm:w-12 rounded-full mr-2 sm:mr-3"
                          />
                          <span className="text-sm sm:text-base font-medium text-gray-900">{item.studentName}</span>
                        </div>
                      </td>
                      <td className="px-2 sm:px-6 py-3 sm:py-5 text-left md:text-right text-sm sm:text-base font-semibold text-green-600">
                        {item.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5 text-sm text-gray-500 text-center italic">
              * Hover over table to pause auto-scroll
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ScholarshipsSection;
