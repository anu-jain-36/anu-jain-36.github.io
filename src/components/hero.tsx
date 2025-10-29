import { ArrowRight} from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="pt-8 min-h-screen flex items-center relative overflow-hidden"
      data-testid="hero-section"
    >

      <div className="absolute inset-0 w-full h-full z-0 flex">
        <img
          src="background new.png"
          alt="Background"
          className="w-1/2 h-full object-cover"
        />
        <img
          src="background new.png"
          alt="Background"
          className="w-1/2 h-full object-cover"
        />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left lg:pr-8 relative">
            {/* Semi-transparent background overlay for text readability */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-3xl -z-10"></div>

            <div className="space-y-4 sm:space-y-6 relative z-10 p-6 sm:p-8 lg:p-10">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-tight"
                data-testid="hero-title"
              >
                Hi, I'm <span className="text-[#00D4FF]">Anu Jain</span>
              </h1>

              <p
                className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-gray-900 leading-relaxed"
                data-testid="hero-subtitle"
              >
                <span className="font-bold">Software & Applied ML Engineer</span>
              </p>

              <p
                className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-800 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                data-testid="hero-description"
              >
                <span className="font-bold">Writing robust, modular and secure code for software systems.</span>
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-[#00D4FF] text-white font-semibold rounded-lg hover:bg-[#00B8E6] transition-all duration-300 text-base sm:text-lg shadow-lg hover:scale-105"
                  data-testid="button-contact"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>

                <button
                  onClick={() => scrollToSection('experience')}
                  className="inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 text-base sm:text-lg shadow-lg hover:scale-105"
                  data-testid="button-work"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-start lg:pl-8 order-first lg:order-last">
            <div className="relative">
              <img
                src="My final picture.png"
                alt="Developer workspace with multiple monitors showing code"
                className="rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover shadow-2xl border-4 border-white/20"
                data-testid="hero-image"
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-full bg-[#00D4FF]/20 blur-xl scale-110 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}