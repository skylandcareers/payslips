import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

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
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-sans font-semibold text-foreground mb-16 md:mb-20"
        >
          What AI Unlocks for Hiring Teams.
        </motion.h2>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 font-sans">
                {stat.value}
              </div>
              <div className="text-base md:text-lg font-semibold text-foreground mb-2 font-sans">
                {stat.title}
              </div>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Area Chart - brighter, more visible */}
      <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 pointer-events-none">
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

export default WhatAIUnlocks;
