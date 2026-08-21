import { technicalSkills } from '../data/portfolioData';

const SkillCard = ({ category, index }) => (
  <article
    data-aos="fade-up"
    data-aos-delay={index * 70}
    className="group relative overflow-hidden border-t border-white/15 py-7 transition-colors hover:border-[#d9ff43]"
  >
    <span className="mb-5 block font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d9ff43]">
      Stack {String(index + 1).padStart(2, '0')}
    </span>
    <h3 className="mb-6 text-xl font-semibold tracking-[-0.03em] text-white">{category.title}</h3>
    <div className="flex flex-wrap gap-2">
      {category.skills.map((skill) => (
        <span key={skill.name} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-white/65 transition-all group-hover:border-white/20 group-hover:text-white">
          {skill.name}
        </span>
      ))}
    </div>
  </article>
);

const TechnicalSkills = () => (
  <section id="skills" className="relative w-full overflow-hidden bg-[#070a0f] px-6 py-24 md:px-12 md:py-32">
    <div className="absolute right-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-[#536dfe]/15 blur-[140px]" />
    <div className="relative mx-auto max-w-6xl">
      <div data-aos="fade-up" className="mb-16 grid gap-6 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#d9ff43]">02 / Technical toolkit</p>
        <div>
          <h2 className="text-5xl font-bold leading-[.95] tracking-[-0.06em] text-white md:text-7xl">Tools I use to<br /><span className="text-white/30">ship reliably.</span></h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/50">A practical stack spanning interfaces, APIs, mobile products, databases, automation, and collaborative delivery.</p>
        </div>
      </div>
      <div className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
        {technicalSkills.categories.map((category, index) => <SkillCard key={category.title} category={category} index={index} />)}
      </div>
    </div>
  </section>
);

export default TechnicalSkills;
