import { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("all");

  const galleryItems = [
    {
      id: 1,
      category: "offices",
      title: "Main Office",
      location: "Hyderabad",
      imageSrc: "/lovable-uploads/b5b42637-3407-4f15-bba6-e67d8998c48a.png",
      is360: true,
    },
    {
      id: 2,
      category: "events",
      title: "Education Fair 2023",
      location: "Delhi",
      imageSrc: "/lovable-uploads/f046468d-ee24-4af2-98e0-22a9935c90b6.png",
      is360: false,
    },
    {
      id: 3,
      category: "students",
      title: "Student Success Celebration",
      location: "Mumbai",
      imageSrc: "/lovable-uploads/f0101f40-1bb2-4c9a-8a8e-046cdf03e7ee.png",
      is360: false,
    },
    {
      id: 4,
      category: "offices",
      title: "Delhi Branch Office",
      location: "Delhi",
      imageSrc: "/lovable-uploads/b63069bf-c57d-484f-b4d1-4ab19cd03250.png",
      is360: true,
    },
    {
      id: 5,
      category: "events",
      title: "University Expo",
      location: "Bangalore",
      imageSrc: "/lovable-uploads/613101af-72d2-424c-96bd-2ce97e08fd99.png",
      is360: false,
    },
    {
      id: 6,
      category: "students",
      title: "Graduation Ceremony",
      location: "Hyderabad",
      imageSrc: "/lovable-uploads/f046468d-ee24-4af2-98e0-22a9935c90b6.png",
      is360: false,
    },
    {
      id: 7,
      category: "offices",
      title: "Mumbai Branch",
      location: "Mumbai",
      imageSrc: "/lovable-uploads/b5b42637-3407-4f15-bba6-e67d8998c48a.png",
      is360: true,
    },
    {
      id: 8,
      category: "events",
      title: "Career Workshop",
      location: "Chennai",
      imageSrc: "/lovable-uploads/b63069bf-c57d-484f-b4d1-4ab19cd03250.png",
      is360: false,
    },
  ];

  const showVirtualTour = activeTab === "offices" || activeTab === "all";

  const filteredItems = galleryItems.filter(item => {
    if (activeTab === "all") return true;
    if (activeTab === "offices") return item.category === "offices" && item.is360;
    if (activeTab === "events" || activeTab === "students") return item.category === activeTab && !item.is360;
    return false;
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-to-b from-darkblue to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl text-gray-300">
            Explore our offices, events, and student success moments through our visual gallery
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Visual Journey"
            subtitle="Take a tour of our spaces, events, and memorable moments"
          />

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              {["all", "offices", "events", "students"].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab 
                      ? "bg-white shadow-sm text-primary" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab === "offices"
                    ? "360° Tours / Offices"
                    : tab === "students"
                    ? "Student Success"
                    : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* 360° Tour - ONLY in "All" or "Offices" tab */}
          {showVirtualTour && (
            <section className="mb-16">
              <SectionTitle 
                title="Virtual Office Tours"
                subtitle="Take a 360° tour of our main offices across India"
              />
              <AnimateOnScroll>
                <div className="mt-10 max-w-4xl mx-auto">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <iframe 
                        src="https://taraj.in/360/vsource/" 
                        title="Hyderabad Office Virtual Tour"
                        className="w-full h-full border-0 rounded-lg"
                        allowFullScreen
                      />
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded text-sm font-medium">
                        Hyderabad Office
                      </button>
                      <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded text-sm font-medium">
                        Delhi Branch
                      </button>
                      <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded text-sm font-medium">
                        Mumbai Branch
                      </button>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </section>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <AnimateOnScroll key={item.id} delay={index * 100}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md group relative">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.imageSrc} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {item.is360 && (
                      <div className="absolute top-4 right-4 bg-primary text-white rounded-full px-3 py-1 text-xs font-semibold">
                        360° View
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="bg-white text-primary rounded-full w-12 h-12 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {item.location}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
