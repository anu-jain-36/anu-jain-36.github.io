import React, { useState, useEffect, useRef } from 'react';

interface Experience {
  id: number;
  title: string;
  organization: string;
  year: string;
  side: 'left' | 'right';
  points: string[];
}

export default function Experience() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experiences = [
    {
      id: 1,
      title: "Machine Learning Intern",
      organization: "Houston Education Research Consortium, Kinder Institute for Urban Research",
      year: "2024",
      points: [
        "Consolidated six years of data for 1200 public school districts from the Texas Education Agency and used Autoencoders to identify similar school districts.",
        "Conducted SHAP analysis to explain the key factors driving the similarity, helping districts identify peers and foster collaborations."
      ],
      side: "right"
    },
    {
      id: 2,
      title: "Teaching Assistant",
      organization: "Rice University",
      year: "2024",
      points: [
        "Design and Analysis of Algorithms: Supported students in writing optimised algorithms, proofs and dry runs of said algorithms.",
        "Web Development and Design: Assisted students in debugging their SPA MERN stack web apps, focusing on increasing code coverage."
      ],
      side: "left"
    },
    {
      id: 3,
      title: "Software Intern",
      organization: "Rice University",
      year: "2024",
      points: [
        "Modernized 'Owltest,' a ten-year-old automated Python grading tool used in various courses at Rice University.",
        "Integrated Canvas with Owltest, by implementing Learning Tools Interoperability (LTI) protocols for seamless assignment submissions and grade reflection."
      ],
      side: "right"
    },
    {
      id: 4,
      title: "Software Engineer",
      organization: "Tata Consultancy Services",
      year: "2020 - 2023",
      points: [
        "Designed and developed multiple features for a Learning Management System (LMS), contributing to over 100 production patches and four major software releases.",
        "Built an Infrastructure-as-Code (IaC) framework using AWS and Azure SDKs to automate LMS - cloud integration and provision pre-configured Linux/Windows VMs, streamlining infrastructure management for 500+ training and hackathon users.",
        "Developed a scalable code editor supporting 17 programming languages provided with real-time code execution and test case evaluation, used by 50,000 concurrent users during nationwide coding interviews."
      ],
      side: "left"
    },
    {
      id: 5,
      title: "Machine Learning Intern",
      organization: "Centre for Development of Advanced Computing",
      year: "2019",
      points: [
        "Built a code-switching Automatic Speech Recognition(ASR) system for Hindi and English using the Kaldi ASR toolkit",
        "Statistical analysis of the ASR system's acoustic model built with Hidden Markov and Gaussian Mixture Models. The word error rate fell to 9.15 as we increased the Gaussian states to 50,000."
      ],
      side: "right"
    }
  ];

  // Set ref for each card
  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const cardId = parseInt(target.dataset.cardId || '0');
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set(Array.from(prev).concat(cardId)));
          } else {
            setVisibleCards(prev => {
              const newSet = new Set(prev);
              newSet.delete(cardId);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    // Attach observer to each card
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id='experience' className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Professional <span className="text-[#00D4FF]">Experience</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile, positioned left on mobile */}
          <div className="absolute md:left-1/2 left-4 md:transform md:-translate-x-1/2 w-1 bg-[#00D4FF] h-full"></div>
          
          {/* Experience Items */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className="relative md:flex md:items-center"
                ref={setCardRef(index)}
                data-card-id={exp.id}
              >
                
                {/* Timeline Dot */}
                <div className={`absolute md:left-1/2 left-4 md:transform md:-translate-x-1/2 -translate-x-1/2 md:translate-x-0 w-4 h-4 md:w-6 md:h-6 bg-[#00D4FF] rounded-full border-2 md:border-4 border-white shadow-lg z-10 transition-all duration-500 ${
                  visibleCards.has(exp.id) ? 'scale-100' : 'scale-75 opacity-50'
                }`}></div>
                
                {/* Experience Card */}
                <div className={`
                  w-full md:w-1/2 pl-12 md:pl-0
                  ${exp.side === 'left' ? 'md:pr-8' : 'md:pl-8'} 
                  ${exp.side === 'right' ? 'md:ml-auto' : ''}
                `}>
                  <div className={`bg-white rounded-lg md:rounded-xl shadow-lg border border-gray-100 p-4 md:p-8 hover:shadow-xl transition-all duration-700 transform hover:-translate-y-1 ${
                    visibleCards.has(exp.id) 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : `opacity-0 translate-x-8 md:${exp.side === 'left' ? '-translate-x-8' : 'translate-x-8'} scale-95`
                  }`}>
                    
                    {/* Header */}
                    <div className="mb-4 md:mb-6">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight mb-2">{exp.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <p className="text-base md:text-lg font-semibold text-[#00D4FF]">{exp.organization}</p>
                        <span className="bg-[#00D4FF] text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold self-start sm:self-auto">
                          {exp.year}
                        </span>
                      </div>
                    </div>
                    
                    {/* Bullet Points */}
                    <ul className="space-y-2 md:space-y-3">
                      {exp.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                          <div className="flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#00D4FF] rounded-full mt-2 mr-2 md:mr-3"></div>
                          <p className="text-sm md:text-base text-gray-700 leading-relaxed">{point}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}