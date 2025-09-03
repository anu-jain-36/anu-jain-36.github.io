import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "Python", "Go", "Ruby"],
      gradient: "from-[#00D4FF] to-blue-500"
    },
    {
      id: 2,
      title: "Frameworks",
      skills: ["Spring", "Spring Boot", "Ruby on Rails", "React", "Express.js"],
      gradient: "from-[#00D4FF] to-blue-500"
    },
    {
      id: 3,
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
      gradient: "from-[#00D4FF] to-blue-500"
    },
    {
      id: 4,
      title: "Cloud",
      skills: ["GCP Associate Cloud Engineer"],
      gradient: "from-[#00D4FF] to-blue-500"
    },
    {
      id: 5,
      title: "DevOps",
      skills: ["Jenkins", "Docker", "Terraform", "Git - GitHub"],
      gradient: "from-[#00D4FF] to-blue-500"
    },
    {
      id: 6,
      title: "Machine Learning",
      skills: ["Pandas", "NumPy", "PyTorch", "HuggingFace", "Lightning", "Weights & Biases", "Colab"],
      gradient: "from-[#00D4FF] to-blue-500"
    }
  ];

  return (
    <section id='skills' className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Technical <span className="text-[#00D4FF]">Skills</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="relative bg-white rounded-xl shadow-lg border border-gray-100 p-8 overflow-hidden"
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              
              {/* Skills List */}
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#00D4FF] hover:bg-blue-600 text-white hover:text-white transition-all duration-200 text-sm font-semibold rounded-full shadow-sm hover:shadow-md transform hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${category.gradient}`}></div>
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

export default Skills;