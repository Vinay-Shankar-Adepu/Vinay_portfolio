import { education } from '../data/portfolioData';

const Education = () => (
  <section id="education" className="bg-[#070a0f] px-6 py-28 md:px-12 relative overflow-hidden">
    <div className="max-w-6xl mx-auto" data-aos="fade-up">
      <span className="inline-block border border-[#d9ff43]/30 rounded-lg px-4 py-2 font-mono text-xs text-[#d9ff43] font-bold mb-8 bg-[#d9ff43]/5">06 / Education</span>
      <div className="rounded-[2rem] border border-white/10 bg-[#0e141d] p-8 md:p-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8 hover:border-[#d9ff43]/40 transition-colors duration-500">
        <div><p className="text-[#d9ff43] font-black tracking-widest uppercase text-sm mb-4">{education.period}</p><h2 className="text-3xl md:text-5xl font-black text-white max-w-4xl leading-tight">{education.degree}</h2><p className="text-white/55 text-lg mt-5">{education.institution}</p></div>
        <div className="text-7xl md:text-8xl font-black text-white/5 select-none">CSE</div>
      </div>
    </div>
  </section>
);
export default Education;
