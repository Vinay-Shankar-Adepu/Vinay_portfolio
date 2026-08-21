import stackImage from '../assets/about/image.png';
import { aboutContent, personalInfo } from '../data/portfolioData';

const About = () => (
  <section id="about" className="relative w-full overflow-hidden bg-[#f3f0e8] px-6 py-24 text-[#070a0f] md:px-12 md:py-32">
    <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,#070a0f12_1px,transparent_1px),linear-gradient(to_bottom,#070a0f12_1px,transparent_1px)] [background-size:48px_48px]" />
    <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
      <div data-aos="fade-up" className="relative mx-auto w-full max-w-md lg:mx-0">
        <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border-2 border-[#070a0f]" />
        <div className="absolute -right-5 -bottom-5 h-24 w-24 rounded-full bg-[#d9ff43]" />
        <div className="relative overflow-hidden rounded-[2rem] border-2 border-[#070a0f] bg-[#536dfe] p-3 shadow-[12px_12px_0_#070a0f]">
          <img src={stackImage} alt={`${personalInfo.name} — Full-Stack and Flutter Developer`} className="aspect-[4/5] w-full rounded-[1.4rem] object-cover object-top grayscale-[15%]" />
        </div>
        <span className="absolute -right-3 top-8 rotate-3 rounded-full border-2 border-[#070a0f] bg-[#d9ff43] px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-widest">Based in Hyderabad</span>
      </div>

      <div data-aos="fade-left" data-aos-delay="150" className="relative">
        <div className="mb-8 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.25em]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#536dfe]" />
          01 / About
        </div>
        <h2 className="mb-8 max-w-2xl text-5xl font-bold leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
          I build products that work <span className="text-[#536dfe]">beyond the demo.</span>
        </h2>
        <div className="max-w-2xl border-l-2 border-[#070a0f] pl-6 text-lg font-medium leading-relaxed text-[#29303b]" dangerouslySetInnerHTML={{ __html: aboutContent.bio }} />
        <div className="mt-10 grid grid-cols-3 border-y-2 border-[#070a0f] py-5 font-mono text-[10px] uppercase tracking-wider sm:text-xs">
          <div><strong className="block text-xl font-semibold sm:text-2xl">Web</strong>React + APIs</div>
          <div className="border-x-2 border-[#070a0f] px-3 sm:px-4"><strong className="block text-xl font-semibold sm:text-2xl">Mobile</strong>Flutter</div>
          <div className="pl-3 sm:pl-4"><strong className="block text-xl font-semibold sm:text-2xl">Data</strong>Realtime</div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
