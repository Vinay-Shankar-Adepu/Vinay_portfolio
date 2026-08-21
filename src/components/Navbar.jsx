import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to make navbar more solid
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav 
      className={`fixed top-3 left-1/2 -translate-x-1/2 w-[calc(100%_-_1.5rem)] max-w-6xl z-50 rounded-2xl border transition-all duration-300 ${
        isOpen 
          ? 'bg-[#0e141d] border-[#d9ff43]/30 py-3'
          : isScrolled 
            ? 'bg-[#070a0f]/90 border-white/10 py-3 shadow-[0_12px_40px_rgba(0,0,0,.35)] backdrop-blur-xl'
            : 'bg-black/25 border-white/10 py-3 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 flex justify-between items-center">
        
        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <a href="#home" className="text-white text-lg sm:text-xl font-bold tracking-[-0.04em] whitespace-nowrap">
            {personalInfo.firstName}<span className="text-[#d9ff43]">/dev</span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-white/80 hover:text-white font-medium relative group transition-colors duration-300"
            >
              {link}
              {/* Smooth hover underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d9ff43] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side: CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            download
            className="px-5 py-2.5 rounded-xl border border-white/20 text-white font-semibold hover:border-[#d9ff43] hover:text-[#d9ff43] transition-all duration-300"
          >
            Resume
          </a>
          <a 
            href="#contact"
            className="px-6 py-2.5 rounded-xl bg-[#d9ff43] border border-[#d9ff43] text-[#070a0f] font-bold hover:bg-white hover:border-white transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button 
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white p-3"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        id="mobile-navigation"
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-x-hidden overflow-y-auto ${
          isOpen ? 'max-h-[calc(100dvh-5rem)] py-4 opacity-100 bg-[#0e141d] shadow-2xl' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-black font-bold text-lg border-b border-white/20 pb-2 transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="pt-4 pb-2 flex flex-col gap-3">
             <a
               href={personalInfo.resumeUrl}
               download
               onClick={() => setIsOpen(false)}
               className="inline-block px-6 py-3 rounded-xl border border-white/30 text-white font-black hover:border-[#d9ff43] hover:text-[#d9ff43] transition-colors w-full text-center"
             >
               Download Resume
             </a>
             <a 
               href="#contact"
               onClick={() => setIsOpen(false)} 
               className="inline-block px-6 py-3 rounded-xl bg-[#d9ff43] text-[#070a0f] font-black hover:bg-white transition-colors w-full text-center shadow-lg"
             >
               Hire Me
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
