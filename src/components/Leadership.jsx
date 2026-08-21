import { useEffect, useRef, useState } from 'react';
import { leadershipList } from '../data/portfolioData';

const eventImages = Object.entries(
  import.meta.glob('../assets/events/aws-ai-newyork/*.{jpeg,jpg,png}', { eager: true, query: '?url', import: 'default' }),
).sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true })).map(([, url]) => url);

const EventGallery = ({ images, title, className = 'h-[250px]' }) => {
  const galleryRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isViewing, setIsViewing] = useState(false);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return undefined;
    const observer = new IntersectionObserver(([entry]) => setIsViewing(entry.isIntersecting), { threshold: 0.45 });
    observer.observe(gallery);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isViewing || images.length < 2) return undefined;
    const timeout = window.setTimeout(() => setActiveIndex((current) => (current + 1) % images.length), 5000);
    return () => window.clearTimeout(timeout);
  }, [activeIndex, images.length, isViewing]);

  const previous = () => setActiveIndex((current) => (current - 1 + images.length) % images.length);
  const next = () => setActiveIndex((current) => (current + 1) % images.length);

  return (
    <div ref={galleryRef} data-aos="fade-left" className={`relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl ${className}`}>
      <img src={images[activeIndex]} alt={`${title} event photo ${activeIndex + 1} of ${images.length}`} className="h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />
      <span className="absolute bottom-4 left-5 text-xs font-black tracking-widest text-white" aria-live="polite">{activeIndex + 1} / {images.length}</span>
      <button type="button" onClick={previous} aria-label="Previous event photo" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/55 p-3 text-white backdrop-blur-sm transition hover:bg-[#536dfe] focus-visible:outline-2 focus-visible:outline-white">
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button type="button" onClick={next} aria-label="Next event photo" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/55 p-3 text-white backdrop-blur-sm transition hover:bg-[#536dfe] focus-visible:outline-2 focus-visible:outline-white">
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>
  );
};

const LeadershipItem = ({ item }) => {
  const hasEventPhotos = item.title.includes('AWS Summit') && eventImages.length > 0;

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between mb-12 lg:mb-16 w-full group">
      {/* Timeline line dot */}
      <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#d9ff43] rounded-full border-4 border-[#0e141d] z-30 shadow-[0_0_15px_#d9ff43] group-hover:scale-125 transition-transform duration-300" />

      {/* Card Content Side */}
      <div 
        data-aos="fade-right"
        className="w-full lg:w-[45%] pl-12 lg:pl-0 lg:text-right lg:order-1"
      >
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#d9ff43]/30 hover:shadow-[0_15px_35px_rgba(217,255,67,0.08)] transition-all duration-500">
          <div className="flex flex-wrap gap-2 items-center mb-3 lg:justify-end">
            <span className="bg-[#d9ff43]/10 text-[#d9ff43] text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-lg border border-[#d9ff43]/25">
              {item.badge}
            </span>
          </div>
          
          <h3 className="text-white text-xl font-black mb-1 tracking-tight group-hover:text-[#d9ff43] transition-colors">
            {item.title}
          </h3>
          <p className="text-[#8d9bff] text-xs font-bold font-mono tracking-wider uppercase mb-4">
            {item.role}
          </p>
          <p className="text-white/60 text-sm leading-relaxed font-medium">
            {item.description}
          </p>
        </div>
        {hasEventPhotos && <div className="mt-4 lg:hidden"><EventGallery images={eventImages} title={item.title} /></div>}
      </div>

      <div className="hidden lg:block w-[45%] order-2" />
    </div>
  );
};

const Leadership = () => {
  return (
    <section className="bg-[#0e141d] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#d9ff4308_1px,transparent_1px),linear-gradient(to_bottom,#d9ff4308_1px,transparent_1px)] bg-[size:64px_64px]">
      
      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-20 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            07 / Beyond the code
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Leadership & Engagement
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Coordinating events, leading team operations, and participating in tech summits.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative w-full">
          {/* Vertical central line */}
          <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#d9ff43] via-[#536dfe]/60 to-white/10" />

          {/* Timeline Items */}
          <div className="w-full">
            {leadershipList.map((item) => (
              <LeadershipItem key={item.title} item={item} />
            ))}
          </div>
          {eventImages.length > 0 && (
            <div className="absolute right-0 top-0 bottom-16 hidden w-[45%] lg:block">
              <EventGallery images={eventImages} title="AWS Summit New York 2026" className="h-full" />
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Leadership;
