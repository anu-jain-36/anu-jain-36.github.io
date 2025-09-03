import React from 'react';
import { Mail, Linkedin, Github, Code } from 'lucide-react';

const GetInTouch = () => {
  // Replace with your actual links
  const email = "realanujain@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/anujain1025/";
  const githubUrl = "https://github.com/anu-jain-36"; // Add your GitHub username
  const leetcodeUrl = "https://leetcode.com/u/anu_jain/"; // Add your LeetCode username

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleLinkedInClick = () => {
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
  };

  const handleGitHubClick = () => {
    window.open(githubUrl, '_blank', 'noopener,noreferrer');
  };

  const handleLeetCodeClick = () => {
    window.open(leetcodeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id='contact' className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-8 text-center">
        
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Where to find <span className="text-[#00D4FF]">me!</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            I am open to new opportunities and interesting conversations about software, DevOps, and ML/AI.
          </p>
        </div>

        {/* Contact Options */}
        <div className="flex gap-8 justify-center items-center flex-wrap">
          
          {/* Email Icon */}
          <button
            onClick={handleEmailClick}
            className="group p-4 rounded-full bg-white hover:bg-[#00D4FF] text-gray-700 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 border border-gray-100"
            title="Send me an email"
          >
            <Mail size={28} />
          </button>

          {/* LinkedIn Icon */}
          <button
            onClick={handleLinkedInClick}
            className="group p-4 rounded-full bg-white hover:bg-[#0077B5] text-gray-700 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 border border-gray-100"
            title="Connect on LinkedIn"
          >
            <Linkedin size={28} />
          </button>

          {/* GitHub Icon */}
          <button
            onClick={handleGitHubClick}
            className="group p-4 rounded-full bg-white hover:bg-[#333] text-gray-700 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 border border-gray-100"
            title="Check out my GitHub"
          >
            <Github size={28} />
          </button>

          {/* LeetCode Icon */}
          <button
            onClick={handleLeetCodeClick}
            className="group p-4 rounded-full bg-white hover:bg-[#FFA116] text-gray-700 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 border border-gray-100"
            title="View my LeetCode profile"
          >
            <Code size={28} />
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