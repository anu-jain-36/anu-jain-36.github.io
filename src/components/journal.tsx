import React from 'react';
import { Link } from 'wouter';

const Journal = () => {
  const journalEntries = [
    {
      id: 1,
      week: "Week 42",
      year: "2025",
      title: "Building Scalable Microservices",
      excerpt: "This week I dove deep into microservices architecture, exploring how to design scalable systems with Spring Boot and Docker. Learned about service discovery patterns and API gateway implementations...",
      date: "October 13, 2025",
      tags: ["Spring Boot", "Docker", "Microservices"],
      gradient: "from-[#00D4FF] to-blue-500",
      slug: "week42-25"
    },
  ];
  return (
    <section id='journal' className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Development <span className="text-[#00D4FF]">Journal</span>
          </h2>
          <p className="text-gray-600 text-lg">Weekly insights and learning experiences</p>
        </div>

        {/* Journal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journalEntries.map((entry) => (
            <div
              key={entry.id}
              className="relative bg-white rounded-xl shadow-lg border border-gray-100 p-6 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Week Badge */}
              <div className={`inline-block px-4 py-1 bg-gradient-to-r ${entry.gradient} text-white text-sm font-bold rounded-full mb-4`}>
                {entry.week} {entry.year}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {entry.title}
              </h3>
              
              {/* Date */}
              <p className="text-sm text-gray-500 mb-3">{entry.date}</p>
              
              {/* Excerpt */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {entry.excerpt}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {entry.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Read More Button */}
              <Link 
                to="/journal/week42-25"
                className="inline-block"
              >
                <span className="text-[#00D4FF] hover:text-blue-600 font-semibold text-sm flex items-center gap-2 transition-colors duration-200">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
      
              
              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${entry.gradient}`}></div>
            </div>
          ))}
        </div>

        {/* Decorative Element */}
        <div className="mt-16 text-center">
          <div className="w-24 h-1 bg-gradient-to-r from-[#00D4FF] to-blue-400 mx-auto rounded-full"></div>
        </div>

      </div>
    </section>
  );
};

export default Journal;