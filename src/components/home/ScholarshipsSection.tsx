import { useState, useEffect, useRef } from "react";
import SectionTitle from "../SectionTitle";
import AnimateOnScroll from "../AnimateOnScroll";

const ScholarshipsSection = () => {
  const ukFlag = "https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg?semt=ais_hybrid&w=740";
  const usaFlag = "https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg";

  const scholarshipsData = [
    { studentName: "Dakannagari Rohith Reddy", amount: "₹4,90,000", country: "USA", gender: "male" },
    { studentName: "Aninash Yadav", amount: "₹5,80,000", country: "UK", gender: "male" },
    { studentName: "Duddempudi Sahana", amount: "₹6,60,000", country: "USA", gender: "female" },
    { studentName: "Asar Ali Mohammed", amount: "₹7,20,000", country: "UK", gender: "male" },
    { studentName: "Harsha Vardhan Reddy", amount: "₹5,20,000", country: "USA", gender: "male" },
    { studentName: "Ashritha Reddy Beerelly", amount: "₹6,95,000", country: "UK", gender: "female" },
    { studentName: "Kannikanti Geethika Chowdary", amount: "₹6,30,000", country: "USA", gender: "female" },
    { studentName: "Bojja Glory", amount: "₹5,40,000", country: "UK", gender: "female" },
    { studentName: "Khyathi Raguru", amount: "₹6,00,000", country: "USA", gender: "female" },
    { studentName: "Deekshith Kumar Gudepu", amount: "₹6,10,000", country: "UK", gender: "male" },
    { studentName: "Nithya Sree Bussu", amount: "₹5,90,000", country: "USA", gender: "female" },
    { studentName: "Kathi Tulasi", amount: "₹7,35,000", country: "UK", gender: "female" },
    { studentName: "Preethi Kalva", amount: "₹4,80,000", country: "USA", gender: "female" },
    { studentName: "Moghal Saheera Begum", amount: "₹6,00,000", country: "UK", gender: "female" },
    { studentName: "Sravya Sree Bussu", amount: "₹6,55,000", country: "USA", gender: "female" },
    { studentName: "Pakala Meghana Reddy", amount: "₹5,70,000", country: "UK", gender: "female" },
    { studentName: "Soumya Gopagoni", amount: "₹6,50,000", country: "UK", gender: "female" },
    { studentName: "Adavalli Tharun Kumar", amount: "₹6,43,000", country: "UK", gender: "male" },
    { studentName: "Ummagani Sai Kumar", amount: "₹7,00,000", country: "UK", gender: "male" },
    // Student with no country → assign UK
    { studentName: "John Doe", amount: "₹5,50,000", country: "UK", gender: "male" }
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
          subtitle="Our students consistently receive impressive scholarships from top destinations" 
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
                      Country
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
                          src={item.country === "USA" ? usaFlag : ukFlag} 
                          alt={`${item.country} Flag`}
                          className="h-8 w-12 object-cover rounded"
                        />
                      </td>
                      <td className="px-2 sm:px-6 py-3 sm:py-5">
                        <div className="flex items-center">
                          <img 
                            src={item.gender === 'female' ? '/assets/images/female icon.png' : '/assets/images/male icon.png'} 
                            alt="Gender Icon"
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
