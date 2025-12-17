import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import StaticNetworkBackground from "@/components/StaticNetworkBackground";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

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

const TeamMemberCard = ({ member }: { member: typeof leadership[0] }) => (
  <a
    href={member.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="group block cursor-pointer"
  >
    <div className="relative aspect-square overflow-hidden mb-3">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
      />
    </div>
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <h3 className="text-base font-semibold text-white leading-tight">
          {member.name}
        </h3>
        <Linkedin size={14} className="text-white/70 flex-shrink-0" />
      </div>
      <div className="flex flex-col text-xs gap-0.5">
        <span className="text-[#b62100] font-medium">{member.role}</span>
        <span className="text-white/60 text-[11px]">{member.credentials}</span>
      </div>
    </div>
  </a>
);

const Team = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section id="team" className="px-6 py-24 relative overflow-hidden bg-black">
      <StaticNetworkBackground density={60} />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#b62100] text-sm font-semibold tracking-wider uppercase mb-4 block">
            Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            For 12 years, our platforms have supported millions across the talent and hiring landscape
          </p>
        </motion.div>

        {/* Mobile Carousel - shows 2 at a time */}
        <div className="md:hidden">
          <Carousel setApi={setApi} opts={{ align: "start" }} className="w-full">
            <CarouselContent className="-ml-3">
              {leadership.map((member) => (
                <CarouselItem key={member.name} className="pl-3 basis-[45%]">
                  <TeamMemberCard member={member} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1].map((index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index * 2)}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.floor(current / 2) === index ? "bg-white w-6" : "bg-white/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid - 4 in one row */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {leadership.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TeamMemberCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
