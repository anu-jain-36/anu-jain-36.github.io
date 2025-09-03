import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const GetInTouch = () => {
  // Replace with your actual email and LinkedIn profile
  const email = "realanujain@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/anujain1025/";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleLinkedInClick = () => {
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id='contact' className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-8 text-center">
        
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Get in <span className="text-[#00D4FF]">Touch</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            I am open to new opportunities and interesting conversations about software, data science, and AI.
          </p>
        </div>

        {/* Contact Options */}
        <div className="flex gap-8 justify-center items-center">
          
          {/* Email Icon */}
          <button
            onClick={handleEmailClick}
            className="group p-4 rounded-full bg-white hover:bg-[#00D4FF] text-gray-700 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 border border-gray-100"
          >
            <Mail size={28} />
          </button>

          {/* LinkedIn Icon */}
          <button
            onClick={handleLinkedInClick}
            className="group p-4 rounded-full bg-white hover:bg-[#0077B5] text-gray-700 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 border border-gray-100"
          >
            <Linkedin size={28} />
          </button>
          
        </div>

        {/* Decorative Element */}
        <div className="mt-16">
          <div className="w-24 h-1 bg-gradient-to-r from-[#00D4FF] to-blue-400 mx-auto rounded-full"></div>
        </div>

      </div>
    </section>
  );
};

export default GetInTouch;