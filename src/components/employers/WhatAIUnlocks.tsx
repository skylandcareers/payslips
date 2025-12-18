import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import StaticNetworkBackground from "@/components/StaticNetworkBackground";

const data = [
  { name: "Week 1", value: 100 },
  { name: "Week 2", value: 150 },
  { name: "Week 3", value: 250 },
  { name: "Week 4", value: 400 },
  { name: "Week 5", value: 600 },
  { name: "Week 6", value: 850 },
  { name: "Week 7", value: 1000 },
];

const stats = [
  {
    value: "3X",
    title: "Better Final Selections",
    description: "Final ratios improved from 1:10 to 1:3 with clearer role-fit signals",
  },
  {
    value: "2-3X",
    title: "Recruiter Throughput",
    description: "Hiring teams deliver more without additional headcount",
  },
  {
    value: "5X",
    title: "Faster Screening",
    description: "Screening, evaluations, and coordination move from weeks to days",
  },
  {
    value: "50%",
    title: "Lower Ops Load",
    description: "Majority of manual work off your team's plate",
  },
];

const WhatAIUnlocks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section className="bg-background relative overflow-visible md:overflow-hidden md:py-32">
      {/* Desktop background only */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <StaticNetworkBackground density={35} />
      </div>
      
      {/* Desktop version */}
      <div className="hidden md:block container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-sans font-semibold text-foreground mb-16 md:mb-20"
        >
          What AI Unlocks for Hiring Teams
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-sans">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-foreground mb-1 font-sans">
                {stat.title}
              </div>
              <p className="text-muted-foreground text-xs font-sans leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile - Sticky scroll reveal */}
      <div className="md:hidden" ref={containerRef}>
        {/* Tall scroll container */}
        <div className="h-[150vh] relative">
          {/* Sticky content */}
          <div className="sticky top-16 px-6 py-8">
            <motion.h2
              className="text-xl font-sans font-semibold text-foreground mb-6"
            >
              What AI Unlocks for Hiring Teams
            </motion.h2>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat, index) => {
                const start = index * 0.2;
                const end = start + 0.3;
                
                return (
                  <MobileStat 
                    key={stat.title}
                    stat={stat}
                    index={index}
                    scrollYProgress={scrollYProgress}
                    start={start}
                    end={end}
                  />
                );
              })}
            </div>

            {/* Progress indicator - right below content */}
            <motion.div
              className="h-0.5 bg-primary"
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            />
          </div>
        </div>
      </div>

      {/* Area Chart - Desktop only */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 pointer-events-none hidden md:block">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0.2}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorValue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

// Separate component for mobile stats with scroll-based animation
const MobileStat = ({ 
  stat, 
  index, 
  scrollYProgress, 
  start, 
  end 
}: { 
  stat: typeof stats[0]; 
  index: number;
  scrollYProgress: any;
  start: number;
  end: number;
}) => {
  const baseOpacity = index === 0 ? 1 : 0;
  const opacity = useTransform(scrollYProgress, [start, start + 0.05, end, end + 0.05], [baseOpacity, 1, 1, 0.25]);
  const scale = useTransform(scrollYProgress, [start, start + 0.05, end, end + 0.05], [0.92, 1, 1, 0.98]);
  const y = useTransform(scrollYProgress, [start, start + 0.05], [12, 0]);

  return (
    <motion.div
      style={{ opacity, scale, y }}
      className="text-left"
    >
      <div className="text-2xl font-bold text-foreground mb-1 font-sans">
        {stat.value}
      </div>
      <div className="text-xs font-semibold text-foreground mb-1 font-sans">
        {stat.title}
      </div>
      <p className="text-muted-foreground text-xs font-sans leading-relaxed">
        {stat.description}
      </p>
    </motion.div>
  );
};

export default WhatAIUnlocks;
