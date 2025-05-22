import React, { useState, useEffect, useRef } from 'react';
import { programToOption } from '../lib/Popups';

const DelayedPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const hasPopupShown = useRef(false);

  const options = [
    "Study Abroad Counseling",
    "Visa Assistance",
    "University Selection",
    "Scholarship Guidance"
  ];

  useEffect(() => {
    // Check if the form was submitted in a previous session
    const formSubmitted = localStorage.getItem('vsource_form_submitted') === 'true';
    
    // Don't show popup if form was submitted previously
    if (formSubmitted) {
      return;
    }

    // Helper function to check scroll position
    const checkScrollPosition = () => {
      // Get current scroll position
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      // Calculate scroll percentage (value between 0-100)
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      
      // If user has scrolled past 60% and popup hasn't shown yet
      if (scrollPercentage > 60 && !hasPopupShown.current && !showPopup) {
        setShowPopup(true);
        hasPopupShown.current = true;
      }
    };

    // Check initial scroll position
    checkScrollPosition();

    // Add scroll event listener
    window.addEventListener('scroll', checkScrollPosition);
    
    // Event handler for manually triggered popups
    const handleShowPopupEvent = (event: Event) => {
      if (!hasPopupShown.current && !formSubmitted && !showPopup) {
        setShowPopup(true);
        hasPopupShown.current = true;
        
        // Check if we have a pre-selected option from the event
        const customEvent = event as CustomEvent;
        if (customEvent.detail && customEvent.detail.selectedOption) {
          setSelectedOption(customEvent.detail.selectedOption);
        }
      }
    };
    
    // Listen for custom event to show popup from other components
    window.addEventListener('showCallbackPopup', handleShowPopupEvent);
    
    // Clean up event listeners
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('showCallbackPopup', handleShowPopupEvent);
    };
  }, [showPopup]);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number
    if (phoneNumber.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }
    
    // Form submission logic
    alert("Thank you! We'll call you back shortly.");
    
    // Set form submitted flag in localStorage (persists across sessions)
    localStorage.setItem('vsource_form_submitted', 'true');
    
    setShowPopup(false);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative w-full max-w-md rounded-lg shadow-xl overflow-hidden animate-fadeIn">
        <div className="bg-white p-6 text-gray-800">
          {/* Save big banner */}
          <div className="bg-[#0a3466] text-white py-4 px-6 -mx-6 -mt-6 mb-6 text-center relative">
            <h2 className="text-xl font-bold mb-1">Save</h2>
            <p className="text-xl font-semibold">big on your application fees!</p>
            
            {/* Close button */}
            <button 
              onClick={handleClose}
              className="absolute top-3 right-3 text-white hover:text-gray-200 transition-colors"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <p className="text-center text-gray-700 mb-6 text-lg">
            We are just a call away from making your{' '}
            <span className="font-bold">dreams into reality!!</span>
          </p>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Phone input */}
            <div className="flex rounded-md overflow-hidden border border-gray-300">
              <div className="bg-gray-100 text-gray-700 px-4 py-3 flex items-center font-medium border-r">
                +91
              </div>
              <input 
                type="tel" 
                placeholder="Mobile Number" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-3 text-gray-700 focus:outline-none" 
                required
                pattern="[0-9]{10}"
                maxLength={10}
              />
            </div>
            
            {/* Dropdown */}
            <div className="relative">
              <div 
                className="border border-gray-300 rounded-md px-4 py-3 text-gray-700 flex justify-between items-center cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <span>{selectedOption || "Select Service Required"}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              
              {showDropdown && (
                <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {options.map((option, index) => (
                    <div 
                      key={index} 
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Submit button */}
            <button 
              type="submit" 
              className="w-full bg-[#0a3466] hover:bg-[#0a3466]/90 text-white font-medium py-3 px-4 rounded-md transition duration-150 shadow-md"
            >
              Request Callback
            </button>
          </form>
          
          {/* Scan to chat section */}
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left pt-6 border-t border-gray-200">
            <p className="text-base mb-4 md:mb-0">
              You can always reach us on
              <br />
              <span className="font-bold text-lg">+91 60000 60002</span>
            </p>
            
            <div className="text-xs text-gray-500">
              By continuing, you agree to our <a href="#" className="underline">terms</a> and {' '}
              <a href="#" className="underline">privacy policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelayedPopup; 