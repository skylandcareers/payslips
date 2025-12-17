import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const leadership = [
  {
    name: "Ankit Doshi",
    role: "CEO",
    credentials: "IIM Indore | ex-Bank of America",
    description: "13 years building India's top talent platforms.",
    image: "https://cdn.insideiim.com/wp-content/uploads/2025/09/30184534/ankit-doshi.jpeg",
    linkedin: "https://www.linkedin.com/in/ankit9doshi/",
  },
  {
    name: "Anshuman Ghosh",
    role: "CTO",
    credentials: "IIT Delhi | ex-Oracle",
    description: "4x CTO, 20+ years of experience.",
    image: "https://cdn.insideiim.com/wp-content/uploads/2025/09/30184541/anshuman-ghosh.jpeg",
    linkedin: "https://www.linkedin.com/in/anshumanghosh/",
  },
  {
    name: "Vignesh Sreenivasan",
    role: "VP-GTM",
    credentials: "IIM Kozhikode | ex-Samsung",
    description: "Driving go-to-market strategy and growth initiatives.",
    image: "https://cdn.insideiim.com/wp-content/uploads/2025/09/30184536/vignesh-sreenivasan.jpeg",
    linkedin: "https://www.linkedin.com/in/vignesh-sreenivasan/",
  },
  {
    name: "Hiral Sanghavi",
    role: "CRO",
    credentials: "NM | ex-Directi",
    description: "Scaling revenue and building lasting client relationships.",
    image: "https://cdn.insideiim.com/wp-content/uploads/2025/09/30184539/Hiral-sanghvi.jpeg",
    linkedin: "https://www.linkedin.com/in/hiral-sanghavi-directi-marketing/",
  },
];

const Team = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth * 0.45; // ~45% width cards
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(newIndex, leadership.length - 2)); // -2 since 2 are visible
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="team" className="px-6 py-16 md:py-24 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-[#b62100] text-sm font-semibold tracking-wider uppercase mb-4 block">
            Team
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
            For 12 years, our platforms have supported millions across the talent and hiring landscape
          </p>
        </motion.div>

        {/* Desktop Grid - 4 in one row */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {leadership.map((member, index) => (
            <motion.a
              key={member.name}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group block cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4 transition-all duration-500 group-hover:aspect-[4/5]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {member.name}
                  </h3>
                  <span className="text-white/70 group-hover:opacity-80 transition-opacity">
                    <Linkedin size={14} strokeWidth={1.5} />
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#b62100] font-medium">
                    {member.role}
                  </span>
                  <span className="text-white/60">
                    {member.credentials}
                  </span>
                </div>
                <p 
                  className="text-white/50 text-xs pt-1 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-10 transition-all duration-300 overflow-hidden"
                >
                  {member.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Mobile Carousel - 2 visible at a time */}
        <div className="md:hidden">
          <div 
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {leadership.map((member) => (
              <a
                key={member.name}
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-shrink-0 w-[45%] snap-start"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top grayscale"
                  />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-white truncate pr-2">
                      {member.name}
                    </h3>
                    <Linkedin size={12} className="text-white/70 flex-shrink-0" />
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-[#b62100] font-medium">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-white/50 text-[10px] truncate">
                    {member.credentials}
                  </p>
                </div>
              </a>
            ))}
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-4">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-white w-4" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
