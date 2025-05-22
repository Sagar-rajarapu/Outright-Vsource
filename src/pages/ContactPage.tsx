import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

const ContactPage = () => {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState("");

  // Scroll to top on page load and handle URL query params
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Get program from URL query parameter
    const params = new URLSearchParams(location.search);
    const program = params.get('program');
    
    if (program) {
      setSelectedService(program);
    }
  }, [location]);

  const branches = [
    {
      id: 1,
      city: "Hyderabad",
      address: "123 Educational Lane, Knowledge City, Hyderabad 500001",
      phone: "+91 123 456 7890",
      email: "hyderabad@vsource.com",
      hours: "Mon-Sat: 10:00 AM - 7:00 PM"
    },
    {
      id: 2,
      city: "Delhi",
      address: "456 Academic Avenue, Study District, Delhi 110001",
      phone: "+91 234 567 8901",
      email: "delhi@vsource.com",
      hours: "Mon-Sat: 10:00 AM - 7:00 PM"
    },
    {
      id: 3,
      city: "Mumbai",
      address: "789 Campus Road, Education Quarter, Mumbai 400001",
      phone: "+91 345 678 9012",
      email: "mumbai@vsource.com",
      hours: "Mon-Sat: 10:00 AM - 7:00 PM"
    }
  ];

  // List of available services
  const services = [
    { value: "", label: "Select a service" },
    { value: "Study Abroad Counseling", label: "Study Abroad Counseling" },
    { value: "Visa Assistance", label: "Visa Assistance" },
    { value: "University Selection", label: "University Selection" },
    { value: "Scholarship Guidance", label: "Scholarship Guidance" },
    { value: "Other", label: "Other" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-36 pb-20 bg-gradient-to-b from-darkblue to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Get in touch with our team for inquiries, consultations, or to schedule a meeting
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <AnimateOnScroll>
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input 
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input 
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input 
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested In
                    </label>
                    <select 
                      id="service"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      {services.map((service, index) => (
                        <option key={index} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea 
                      id="message"
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tell us how we can help you"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button 
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-md font-medium transition-colors"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={200}>
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Phone</h3>
                      <p className="mt-1 text-gray-600">+91 123 456 7890 (Main Office)</p>
                      <p className="text-gray-600">+91 987 654 3210 (Toll Free)</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Email</h3>
                      <p className="mt-1 text-gray-600">info@vsource.com</p>
                      <p className="text-gray-600">support@vsource.com</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Working Hours</h3>
                      <p className="mt-1 text-gray-600">Monday-Saturday: 10:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      
      {/* Branch Locations */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Branch Locations"
            subtitle="Visit our offices across India for in-person consultations" 
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <AnimateOnScroll key={branch.id} delay={index * 100}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200">
                    {/* Map iframe would go here in a real implementation */}
                    <div className="w-full h-full flex items-center justify-center bg-primary/10">
                      <MapPin className="h-10 w-10 text-primary/60" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{branch.city} Branch</h3>
                    
                    <div className="space-y-3">
                      <div className="flex">
                        <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{branch.address}</span>
                      </div>
                      
                      <div className="flex">
                        <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{branch.phone}</span>
                      </div>
                      
                      <div className="flex">
                        <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{branch.email}</span>
                      </div>
                      
                      <div className="flex">
                        <Clock className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{branch.hours}</span>
                      </div>
                    </div>
                    
                    <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded font-medium transition-colors inline-flex items-center justify-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Get Directions
                    </button>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-darkblue text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Educational Journey?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get personalized guidance from our experienced consultants and take the first step towards your dream education.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a href="tel:+911234567890" className="flex items-center bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
              
              <a href="#" className="flex items-center bg-primary/20 text-white border border-primary/40 px-6 py-3 rounded-md font-medium hover:bg-primary/30 transition-colors">
                <MessageSquare className="h-5 w-5 mr-2" />
                Schedule Consultation
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
