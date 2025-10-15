import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
<nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-[#00D4FF]/30" data-testid="navigation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <span className="text-3xl font-black text-[#00D4FF] drop-shadow-md" data-testid="logo">Anu Jain</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-[#00D4FF] transition-colors font-bold text-xl drop-shadow-sm"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-[#00D4FF] transition-colors font-semibold text-lg drop-shadow-sm"
                data-testid="nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-white hover:text-[#00D4FF] transition-colors font-semibold text-lg drop-shadow-sm"
                data-testid="nav-experience"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-white hover:text-[#00D4FF] transition-colors font-semibold text-lg drop-shadow-sm"
                data-testid="nav-skills"
              >
                Skills
              </button>
                <button 
                onClick={() => scrollToSection('journal')}
                className="text-white hover:text-[#00D4FF] transition-colors font-semibold text-lg drop-shadow-sm"
                data-testid="nav-journal"
              >
                Journal
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-[#00D4FF] transition-colors font-semibold text-lg drop-shadow-sm"
                data-testid="nav-contact"
              >
                Contact
              </button>
              
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white hover:text-[#00D4FF] drop-shadow-sm"
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden" data-testid="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md border-t border-[#00D4FF]/30">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-3 py-2 text-white hover:text-[#00D4FF] hover:bg-white/10 rounded transition-colors text-lg font-semibold"
              data-testid="mobile-nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-white hover:text-[#00D4FF] hover:bg-white/10 rounded transition-colors text-lg font-semibold"
              data-testid="mobile-nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left px-3 py-2 text-white hover:text-[#00D4FF] hover:bg-white/10 rounded transition-colors text-lg font-semibold"
              data-testid="mobile-nav-experience"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left px-3 py-2 text-white hover:text-[#00D4FF] hover:bg-white/10 rounded transition-colors text-lg font-semibold"
              data-testid="mobile-nav-skills"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-white hover:text-[#00D4FF] hover:bg-white/10 rounded transition-colors text-lg font-semibold"
              data-testid="mobile-nav-contact"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
