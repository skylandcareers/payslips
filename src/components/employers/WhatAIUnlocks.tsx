import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Week 1", value: 100 },
  { name: "Week 2", value: 280 },
  { name: "Week 3", value: 450 },
  { name: "Week 4", value: 620 },
  { name: "Week 5", value: 780 },
  { name: "Week 6", value: 920 },
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
          className="text-2xl md:text-4xl font-sans font-semibold text-foreground text-center mb-16"
        >
          What AI Unlocks for Hiring Teams.
        </motion.h2>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3 font-sans">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-2 font-sans">
                {stat.title}
              </div>
              <p className="text-muted-foreground text-sm font-sans">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Area Chart - non-interactive, decorative */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20 pointer-events-none">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="hsl(var(--primary))" 
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
