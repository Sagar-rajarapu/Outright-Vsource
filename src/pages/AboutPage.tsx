import { useEffect } from "react";
import SectionTitle from "@/components/SectionTitle";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import styled from 'styled-components';

const StyledTeamWrapper = styled.div`
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}

.profile-card {
  position: relative;
  font-family: "Poppins", sans-serif;
  width: 100%;
  max-width: 220px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 22px #3336;
  text-align: center;
  transition: height 0.6s, transform 0.6s;
  height: 295px;
  overflow: hidden; /* Ensures text stays inside the card */
}

.profile-card:hover {
  height: 305px; /* Increased height to accommodate extra-info */
}

.profile-card .img {
  width: 100%;
  height: 200px; /* Enforce consistent height for images */
  border-radius: 10px;
  transition: transform 0.6s;
  position: relative;
  z-index: 1; /* Keep the image on top of other elements */
  overflow: auto; /* Ensures the image fits within the container */
}

.profile-card:hover .img {
  transform: translateY(-30px); /* Subtle movement for hover effect */
}

.img img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the container properly */
  border-radius: 10px;
  box-shadow: 0 0 22px #3336;
}

.caption {
  transform: translateY(0);
  opacity: 1;
  transition: transform 0.6s, opacity 0.6s;
}

.profile-card:hover .caption {
  transform: translateY(-10px); /* Subtle adjustment for hover effect */
}

.caption h2 {
  font-size: 15px;
  margin: 5px 0;
  white-space: normal; /* Allows text wrapping */
  overflow: hidden; /* Keeps text within the card */
  text-overflow: ellipsis; /* Adds ellipsis if text overflows horizontally */
  word-wrap: break-word; /* Breaks long words */
}

.caption p {
  font-size: 12px;
  color: #0c52a1;
  margin: 0;
  line-height: 1.rem;
  white-space: normal; /* Allows text wrapping */
  overflow: hidden; /* Keeps text within the card */
  text-overflow: ellipsis; /* Adds ellipsis if text overflows horizontally */
  word-wrap: break-word; /* Breaks long words */
}

.extra-info {
  font-size: 12px;
  color: #555;
  margin-top: 10px;
  opacity: 0;
  transform: translateY(20px);
  transition: transform 0.6s, opacity 0.6s;
  white-space: normal; /* Allows text wrapping */
  overflow: hidden; /* Ensures extra-info text remains within card */
  word-wrap: break-word; /* Breaks long words */
}

.profile-card:hover .extra-info {
  opacity: 1;
  transform: translateY(-10px);
}

@media (max-width: 600px) {
  .profile-card {
    max-width: 180px;
    padding: 20px;
    height: 220px;
  }

  .profile-card:hover {
    height: 240px;
  }

  .profile-card .img {
    height: 120px; /* Adjust image size for smaller screens */
  }

  .caption h2 {
    font-size: 12px;
  }

  .caption p {
    font-size: 10px;
  }
}

`;
const AboutPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    
  {
    "name": "Mr. Mohammed Mustafa",
    "position": "Founder",
    "image": "https://vsourceoverseas.com/uploads/about_team/1698599558.jpg",
    "bio": "VSOURCE COMPANY"
  },
  {
    "name": "Mr. Sai Siva Nag",
    "position": "Friend of Mr. Mustafa",
    "image": "https://vsourceoverseas.com/uploads/about_team/SIVASIR.jpeg",
    "bio": "20 YEARS WITH VSOURCE"
  },
  {
    "name": "Mr. Nagender Rao",
    "position": "Managing Director",
    "image": "https://vsourceoverseas.com/uploads/about_team/dfg354d53.jpeg",
    "bio": "12 YEARS WITH VSOURCE"
  },
  {
    "name": "Mr. Charan Teja",
    "position": "CEO",
    "image": "https://vsourceoverseas.com/uploads/about_team/sddsccDCD.jpeg",
    "bio": "8 YEARS WITH VSOURCE"
  },
  {
    "name": "Mr. Y Ranjith",
    "position": "CFO",
    "image": "https://vsourceoverseas.com/uploads/about_team/YR.jpg",
    "bio": "12 YEARS WITH VSOURCE"
  },
  {
    "name": "Mr. Shaik Yasin",
    "position": "Executive Director",
    "image": "https://vsourceoverseas.com/uploads/about_team/1698618435.jpg",
    "bio": "8 YEARS WITH VSOURCE"
  },
  {
    "name": "Mr. Akram",
    "position": "Director, Admissions",
    "image": "https://vsourceoverseas.com/uploads/about_team/AKRAM.jpeg",
    "bio": "12 YEARS WITH VSOURCE"
  },
  {
    "name": "Mr. Satyam Tomer",
    "position": "Chief Technical Officer",
    "image": "https://vsourceoverseas.com/uploads/about_team/team9.jpg",
    "bio": "12 YEARS WITH VSOURCE"
  },
  {
    "name": "Mr. Virendra Singh",
    "position": "Vice President",
    "image": "https://vsourceoverseas.com/uploads/about_team/team2.jpg",
    "bio": "VSOURCE COMPANY"
  },
  {
    "name": "Mr. Vijay Kumar",
    "position": "Chief Advisor",
    "image": "https://vsourceoverseas.com/uploads/about_team/team10.jpg",
    "bio": "VSOURCE GROUP"
  },
  {
    "name": "Mr. Arun",
    "position": "Chief Operating Officer",
    "image": "https://vsourceoverseas.com/uploads/about_team/team14.jpg",
    "bio": "10 YEARS WITH VSOURCE"
  },
  {
    "name": "Mr. Tejesh Naidu",
    "position": "Director, Operations",
    "image": "https://vsourceoverseas.com/uploads/about_team/TEJA.gif",
    "bio": "VSOURCE COMPANY"
  },
  {
    "name": "Mr. Rajashekar",
    "position": "Director, Education",
    "image": "https://vsourceoverseas.com/uploads/about_team/team15.jpg",
    "bio": "9 YEARS WITH VSOURCE"
  },
  {
    "name": "Mr. Habib",
    "position": "Director, Marketing",
    "image": "https://vsourceoverseas.com/uploads/about_team/GVGCFCFVGHBHJBHJB.jpeg",
    "bio": "10 YEARS WITH VSOURCE"
  },
  {
    "name": "Mr. Jagan Mohan",
    "position": "Director, Fintech",
    "image": "https://vsourceoverseas.com/uploads/about_team/JAGAN.jpeg",
    "bio": "100% EDUCATION LOANS"
  },
  {
    "name": "Mrs. Pushpalatha Reddy",
    "position": "Director, Overseas",
    "image": "https://vsourceoverseas.com/uploads/about_team/PUSHPALATHA.jpg",
    "bio": "7 YEARS WITH VSOURCE"
  },
  {
    name: "Dr. Giorgi Mikadze",
    position: "Director, Services. LLC",
    image: "https://vsourceoverseas.com/uploads/about_team/team19.jpg",
    bio: "Based in Georgia, specializing in services management."
  },
  {
    name: "Dr. Mariam Kandelaki",
    position: "Director, Student Welfare",
    image: "https://vsourceoverseas.com/uploads/about_team/mariam.jpeg",
    bio: "Focused on student welfare initiatives in Georgia."
  },
  {
    name: "Mr. Sreenath Reddy",
    position: "Director, Administration",
    image: "https://vsourceoverseas.com/uploads/about_team/SREENATH.jpeg",
    bio: "Leads administrative operations at VSOURCE Company."
  },
  {
    name: "Ms. K Chaithanya",
    position: "HR",
    image: "https://vsourceoverseas.com/uploads/about_team/SDVSVSV.jpeg",
    bio: "Human Resources specialist at VSOURCE Company."
  },
  {
    name: "Mr. Narun Reddy",
    position: "Head, Marketing",
    image: "https://vsourceoverseas.com/uploads/about_team/IMG_20231218_225108.jpg",
    bio: "Heads marketing operations for VSOURCE Varsity."
  },
  {
    name: "Ms. Navya",
    position: "Head, Marketing",
    image: "https://vsourceoverseas.com/uploads/about_team/IMG20231031161907.jpg",
    bio: "Marketing lead for VSOURCE Overseas."
  },
  {
    name: "Ms. Deepika",
    position: "Incharge, B.P.O",
    image: "https://vsourceoverseas.com/uploads/about_team/1698855451.jpg",
    bio: "Manages B.P.O operations at VSOURCE Fintech."
  },
  {
    name: "Ms. Radha",
    position: "Branch Manager",
    image: "https://vsourceoverseas.com/uploads/about_team/team11.jpg",
    bio: "Branch Manager in Bengaluru."
  },
  {
    name: "Mr. Mahesh",
    position: "Incharge, B.P.O",
    image: "https://vsourceoverseas.com/uploads/about_team/MMAHESH.jpeg",
    bio: "B.P.O operations lead at VSOURCE Overseas."
  },
  {
    name: "Mr. Kumar",
    position: "Branch Manager",
    image: "https://vsourceoverseas.com/uploads/about_team/team16.jpg",
    bio: "Branch Manager in Ongole."
  },
  {
    name: "Mr. Srinivas Chowdary",
    position: "Branch Manager",
    image: "https://vsourceoverseas.com/uploads/about_team/KCJAHBH651566.jpeg",
    bio: "Branch Manager in Tirupati."
  },
  {
    name: "Mr. Srinadh Yadav",
    position: "Branch Manager",
    image: "https://vsourceoverseas.com/uploads/about_team/IMG_20240110_203715.jpg",
    bio: "Branch Manager in Vijayawada."
  },
  {
    name: "Mr. Kiran Kumar",
    position: "Branch Manager",
    image: "https://vsourceoverseas.com/uploads/about_team/1698844684.jpg",
    bio: "Branch Manager in Vizag."
  },
  {
    name: "Ms. Nikhitha",
    position: "Branch Manager",
    image: "https://vsourceoverseas.com/uploads/about_team/IMG_20231202_140712.jpg",
    bio: "Branch Manager in Dilsukhnagar."
  },
  {
    name: "Mr. Raj",
    position: "Branch Manager",
    image: "https://vsourceoverseas.com/uploads/about_team/IMG_3419.jpg",
    bio: "Branch Manager in Ameerpet."
  },
  {
    name: "Ms. Spandana",
    position: "Branch Manager",
    image: "https://vsourceoverseas.com/uploads/about_team/IMG20231031165409.jpg",
    bio: "Branch Manager in Kukatpally."
  },
  {
    name: "Mrs. Tako",
    position: "Administration",
    image: "https://vsourceoverseas.com/uploads/about_team/tako.jpeg",
    bio: "Part of the administration team in Georgia."
  },
  {
    name: "Mr. Zaza",
    position: "Administration",
    image: "https://vsourceoverseas.com/uploads/about_team/PHOTO-2023-12-18-18-53-31.jpg",
    bio: "Administration team member based in Georgia."
  },
  {
    name: "Mr. Aleksandre",
    position: "Accountant",
    image: "https://vsourceoverseas.com/uploads/about_team/21team.jpg",
    bio: "Accountant based in Georgia."
  },
  {
    name: "Ms. Nino",
    position: "Administration",
    image: "https://vsourceoverseas.com/uploads/about_team/kscjanusdbjnj.jpeg",
    bio: "Administration team member in Georgia."
  },
  {
    name: "Mr. Dimitrilp",
    position: "Administration",
    image: "https://vsourceoverseas.com/uploads/about_team/PHOTO-2023-12-20-12-57-15.jpg",
    bio: "Administration team member in Georgia."
  },
  {
    name: "Mr. Noorbaz Khan Qaderi",
    position: "Administration",
    image: "https://vsourceoverseas.com/uploads/about_team/team22Copy1.jpg",
    bio: "Administration team member in Russia."
  },
  {
    name: "Mrs. Shaista Ashraf",
    position: "Head Admissions",
    image: "https://vsourceoverseas.com/uploads/about_team/1684232284.jpg",
    bio: "Oversees admissions in UAE and Saudi Arabia."
  },
    {
    "name": "Mr. NITHIN",
    "position": "Sr. ASSOCIATE",
    "image": "https://vsourceoverseas.com/uploads/about_team/IMG_20231220_093457.jpg",
    "bio": "Associated with VSOURCE OVERSEAS."
  },
  {
    "name": "Mr. SHAIK GAFOOR",
    "position": "Sr. ASSOCIATE",
    "image": "https://vsourceoverseas.com/uploads/about_team/GAFOOR.gif",
    "bio": "Associated with VSOURCE OVERSEAS."
  },
  {
    "name": "Mr. VENKATA SASIKUMAR",
    "position": "Sr. ASSOCIATE",
    "image": "https://vsourceoverseas.com/uploads/about_team/SASI.jpeg",
    "bio": "Associated with VSOURCE VARSITY."
  },
  {
    "name": "Mr. MAHESH PATIL",
    "position": "Sr. ASSOCIATE",
    "image": "https://vsourceoverseas.com/uploads/about_team/MAHESH.jpeg",
    "bio": "Associated with VSOURCE OVERSEAS."
  },
  {
    "name": "Mr. BHANU SAI PRAKASH",
    "position": "Sr. ASSOCIATE",
    "image": "https://vsourceoverseas.com/uploads/about_team/BHANU.JPG",
    "bio": "Associated with VSOURCE OVERSEAS."
  },
  {
    "name": "Mr. RADHA KRISHNA",
    "position": "Sr. ASSOCIATE",
    "image": "https://vsourceoverseas.com/uploads/about_team/RADHA.jpeg",
    "bio": "Associated with VSOURCE VARSITY."
  },
  {
    "name": "Mr. VENKAT",
    "position": "Sr. ASSOCIATE",
    "image": "https://vsourceoverseas.com/uploads/about_team/VENKAT.jpeg",
    "bio": "Associated with VSOURCE FINTECH."
  },
  {
    "name": "Mr. SHAIK MOULALI",
    "position": "Sr. ASSOCIATE",
    "image": "https://vsourceoverseas.com/uploads/about_team/MOU.jpeg",
    "bio": "Associated with VSOURCE FINTECH."
  },
  {
    "name": "Mr. NAGARAJU",
    "position": "Sr. ASSOCIATE",
    "image": "https://vsourceoverseas.com/uploads/about_team/NAGARAJU.jpeg",
    "bio": "Associated with VSOURCE FINTECH."
  },
  {
    "name": "Ms. KAVYASREE",
    "position": "Sr. ASSOCIATE",
    "image": "https://vsourceoverseas.com/uploads/about_team/IMG-20231201-WA0011-removebg-preview.png",
    "bio": "Associated with VSOURCE FINTECH."
  },
  {
    "name": "Mr. MAHESH GOUD",
    "position": "Sr. ASSOCIATE",
    "image": "https://vsourceoverseas.com/uploads/about_team/MAHESHGOUD.jpeg",
    "bio": "Associated with VSOURCE FINTECH."
  },
  {
    "name": "Mr. RAKESH",
    "position": "Jr. ASSOCIATE",
    "image": "https://vsourceoverseas.com/uploads/about_team/RAKESH.jpeg",
    "bio": "Associated with VSOURCE OVERSEAS."
  },
  {
    "name": "Mr. SHAIK MUNEER",
    "position": "Jr. ASSOCIATE",
    "image": "https://vsourceoverseas.com/uploads/about_team/MUNEER.jpeg",
    "bio": "Associated with VSOURCE VARSITY."
  },
  {
    "name": "Mr. M PAVAN",
    "position": "Jr. ASSOCIATE",
    "image": "https://vsourceoverseas.com/uploads/about_team/MPAVAN.jpeg",
    "bio": "Associated with VSOURCE OVERSEAS."
  },
    
  {
    "name": "Ms. DIVYA",
    "position": "Jr. ASSOCIATE",
    "image": "https://vsourceoverseas.com/uploads/about_team/DIVYA.jpeg",
    "bio": "Associated with VSOURCE OVERSEAS."
  },
  {
    "name": "Mr. ATHAR PASHA",
    "position": "Jr. ASSOCIATE",
    "image": "https://vsourceoverseas.com/uploads/about_team/ATHAR.jpeg",
    "bio": "Associated with VSOURCE VARSITY."
  },
  {
    "name": "MR. NAGA VENKATESJH",
    "position": "Jr. ASSOCIATE",
    "image": "https://vsourceoverseas.com/uploads/about_team/nagavenkatesh.jpeg",
    "bio": "Associated with VSOURCE OVERSEAS."
  },
  {
    "name": "Mr. S PAVAN",
    "position": "Jr. ASSOCIATE",
    "image": "https://vsourceoverseas.com/uploads/about_team/SPAVAN.jpeg",
    "bio": "Associated with VSOURCE OVERSEAS."
  },
  {
    "name": "Mr. BHANU SAIRAM",
    "position": "Jr. ASSOCIATE",
    "image": "https://vsourceoverseas.com/uploads/about_team/BHANUSAIRAM.jpeg",
    "bio": "Associated with VSOURCE VARSITY."
  },
  {
    "name": "Mr. VIJAY",
    "position": "Jr. ASSOCIATE",
    "image": "https://vsourceoverseas.com/uploads/about_team/VIJAY.jpg",
    "bio": "Associated with VSOURCE OVERSEAS."
  },
  {
    "name": "Mr. SUBRAHMANYAM",
    "position": "Jr. ASSOCIATE",
    "image": "https://vsourceoverseas.com/uploads/about_team/SUBR.jpeg",
    "bio": "Associated with VSOURCE VARSITY."
  },
  {
    "name": "Mr. LAKSHMAN",
    "position": "Jr. ASSOCIATE",
    "image": "https://vsourceoverseas.com/uploads/about_team/LAKSHMAN.jpeg",
    "bio": "Associated with VSOURCE FINTECH."
  },
  {
    "name": "Mr. MOHAN KRISHNA",
    "position": "Jr. ASSOCIATE",
    "image": "https://vsourceoverseas.com/uploads/about_team/MOHAN.jpeg",
    "bio": "Associated with VSOURCE FINTECH."
  },
  {
    "name": "Mr. RAMU",
    "position": "Jr. ASSOCIATE",
    "image": "https://vsourceoverseas.com/uploads/about_team/RAMU.jpeg",
    "bio": "Associated with VSOURCE FINTECH."
  },
  {
    "name": "Mr. FAHAD",
    "position": "DIGITAL MARKETING",
    "image": "https://vsourceoverseas.com/uploads/about_team/Snapseed.jpeg",
    "bio": "Specialist in digital marketing for VSOURCE OVERSEAS."
  },
  {
    "name": "Mr. VAMSHI",
    "position": "DIGITAL MARKETING",
    "image": "https://vsourceoverseas.com/uploads/about_team/VAMSHI.jpeg",
    "bio": "Specialist in digital marketing for VSOURCE VARSITY."
  },
  {
    "name": "Mr. Purushotham Reddy",
    "position": "GROUND MARKETING",
    "image": "https://vsourceoverseas.com/uploads/about_team/team24.jpg",
    "bio": "Ground marketing expert for Andhra & Telangana."
  }


    
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
                  src="/assets/images/about-as-service-contact-information-concept.jpg"
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
     

          <>
            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4">
                <SectionTitle
                  title="Our Management Team"
                  subtitle="Meet the experts who make Vsource Company a trusted name in educational consultancy"
                />
                <StyledTeamWrapper>
                  <div className="main">
                    {teamMembers.map((member, index) => (
                      <div className="profile-card" key={index}>
                        <div className="img">
                          <img src={member.image} alt={member.name} />
                        </div>
                        <div className="caption">
                          <h2>{member.name}</h2>
                          <p>{member.position}</p>
                        </div>
                        <div className="extra-info">{member.bio}</div>
                      </div>
                    ))}
                  </div>
                </StyledTeamWrapper>
              </div>
            </section>
          </>
      

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