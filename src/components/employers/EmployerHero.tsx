import { motion } from "framer-motion";
import NetworkBackground from "@/components/NetworkBackground";
import { CardSlide, Card } from "./CardSlide";

const CARDS: Card[] = [
  {
    id: 0,
    name: "Evaluation Engine",
    designation: "PotentialAI",
    content: (
      <p>
        Finds your top candidates using the same signals your team cares
        about. Your evaluation process automated, unbiased, and instant.
      </p>
    ),
    image: "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/dashboard-gradient.png"
  },
  {
    id: 1,
    name: "Assessment Engine",
    designation: "SignalAI",
    content: (
      <p>
        Fully custom, role-aligned simulations that reflect your real work.
      </p>
    ),
    image: "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/crm-featured.png"
  },
  {
    id: 2,
    name: "Interview Engine",
    designation: "KonverseAI",
    content: (
      <p>
        An AI interview copilot that structures conversations and measures the
        skills that matter.
      </p>
    ),
    image: "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/featured-06.png"
  }
];

const EmployerHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center pt-20">
      {/* Network Background */}
      <div className="absolute inset-0 z-0">
        <NetworkBackground 
          lines={7} 
          distance={6}
          className="brightness-125"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans text-foreground leading-tight">
              Full Stack AI That Makes Hiring Faster, Fairer, and{" "}
              <span className="text-primary">Human-Led</span>
            </h1>
          </motion.div>

          {/* Right side - Card Slider */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <CardSlide items={CARDS} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmployerHero;
