import { motion } from "framer-motion";
import partnerLogos from "@/assets/employers/partner-logos.png";
import StaticNetworkBackground from "@/components/StaticNetworkBackground";

const TrustedBySection = () => {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <StaticNetworkBackground density={30} />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mb-8 font-sans"
        >
          Trusted by experts. Used by the leaders.
        </motion.p>

        {/* Logo Strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <img
            src={partnerLogos}
            alt="Partner logos - Unilever, Aditya Birla Group, TAS, Colgate, Reliance, Asian Paints, Sun Pharma, Decathlon"
            className="w-full max-w-4xl h-auto object-contain"
          />
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-foreground font-sans">
              120+
            </div>
            <p className="text-xs text-muted-foreground font-sans">
              Enterprise + Education Partners
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-foreground font-sans">
              530K+
            </div>
            <p className="text-xs text-muted-foreground font-sans">
              Social Media Followers
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;
