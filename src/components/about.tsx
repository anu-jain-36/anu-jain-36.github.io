import { Code, Lightbulb, Users, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* Centered About Me Title */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            About <span className="text-[#00D4FF]">Me</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left Side - About Me Text */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-6">
            
            <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-left sm:text-justify">
                I love building software systems that work seamlessly for people. My drive for creating impactful technology has shaped my career. I joined Tata Consultancy Services as a Software Engineer. During this time, my curiosity about machine learning and AI inspired me to pursue graduate studies at Rice University, where I completed my Master's in Computer Science with a specialization in Data Science.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-left sm:text-justify">
                I truly enjoy the human factor—seeing how technology can make a difference. Recently, I led a project that transformed raw, fragmented, and unusable data from the Texas Education agency into a dashboard with visualizations. This further allowed me to run machine learning models like autoencoders on the data. The most rewarding part was sitting with the sponsors, understanding their pain points, and applying existing tools and models to craft an effective solution. It was deeply satisfying to know that the system we built would now directly inform policy making.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-left sm:text-justify">
                I have worn many hats across different technologies. For example, I developed a Learning Management System using the Ruby on Rails, implemented API integrations and built services in Java and Go, and created front-ends for projects using React. Additionally, I have configured and deployed software solutions on the cloud, further strengthening my skills in delivering scalable systems.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-left sm:text-justify">
                I'm recognized for writing modular, test-driven code with fool proof error handling. Debugging is one of my strongest skills—I take pride in finding and fixing errors.
              </p>
               
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-left sm:text-justify">
                Beyond work, I served as Treasurer for the Indian Students at Rice and recently discovered joy (and challenge!) in running 5K races.
              </p>
            </div>
          </div>
          
          {/* Right Side - Achievement Tiles */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
            
            {/* Experience Tile */}
            <div className="bg-gradient-to-r from-white to-blue-50 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl py-6 sm:py-8 px-6 sm:px-8 lg:px-12 text-center border-l-4 border-[#00D4FF] hover:scale-105 transition-all duration-300 transform">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#00D4FF] mb-1 sm:mb-2">5+</div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">Years</div>
              <div className="text-sm sm:text-lg lg:text-xl text-gray-600 font-semibold">of Experience</div>
            </div>
            
            {/* Projects Tile */}
            <div className="bg-gradient-to-r from-white to-cyan-50 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl py-6 sm:py-8 px-6 sm:px-8 lg:px-12 text-center border-l-4 border-[#00D4FF] hover:scale-105 transition-all duration-300 transform">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#00D4FF] mb-1 sm:mb-2">15+</div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">Projects</div>
              <div className="text-sm sm:text-lg lg:text-xl text-gray-600 font-semibold">Completed</div>
            </div>
            
            {/* Users Tile */}
            <div className="bg-gradient-to-r from-white to-teal-50 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl py-6 sm:py-8 px-6 sm:px-8 lg:px-12 text-center border-l-4 border-[#00D4FF] hover:scale-105 transition-all duration-300 transform col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#00D4FF] mb-1 sm:mb-2">50K+</div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">Users</div>
              <div className="text-sm sm:text-lg lg:text-xl text-gray-600 font-semibold">Served</div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}