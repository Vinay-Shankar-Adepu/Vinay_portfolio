import { internshipsList } from '../data/portfolioData';

const InternshipCard = ({ intern, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 150}
    className="w-full max-w-xl bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 hover:scale-[1.02] hover:bg-black/35 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 flex flex-col justify-between"
  >
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-6">
        <span className="text-white/40 text-xs font-mono font-bold tracking-widest uppercase">
          {intern.duration}
        </span>
        <span className="bg-white/10 text-white text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-white/15">
          Internship
        </span>
      </div>
      <h3 className="text-white text-2xl font-black mb-1 tracking-tight">
        {intern.role}
      </h3>
      <p className="text-[#d9ff43] text-sm font-black tracking-wide mb-6 uppercase">
        {intern.organization}
      </p>

      {/* Skills gained */}
      <div className="mb-6">
        <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-2">Skills Gained:</h4>
        <ul className="text-white/90 text-sm font-medium space-y-1 pl-4 list-disc">
          {intern.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* Technologies used */}
    <div className="pt-4 border-t border-white/10">
      <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-3">Technologies:</h4>
      <div className="flex flex-wrap gap-2">
        {intern.tech.map((t) => (
          <span 
            key={t}
            className="px-3 py-1 text-xs font-mono font-bold text-white bg-white/10 rounded-full border border-white/10 hover:bg-white/20 transition-all"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Internships = () => {
  return (
    <section id="experience" className="bg-[#536dfe] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      
      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#d9ff43]">05 / Field experience</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-[-0.05em]">
            Work Experience
          </h2>
          <p className="text-white/70 text-base md:text-lg font-medium max-w-lg mx-auto">
            Practical internships where I applied engineering principles and built real-world assets.
          </p>
        </div>

        {/* Internship Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {internshipsList.map((intern, index) => (
            <InternshipCard key={intern.organization} intern={intern} index={index} />
          ))}
        </div>

      </div>

      {/* Decorative stars */}
      <div className="absolute bottom-10 left-10 text-black opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Internships;
