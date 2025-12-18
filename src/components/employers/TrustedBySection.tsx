import { motion } from "framer-motion";
import hulLogo from "@/assets/partners/hul.png";
import tcplLogo from "@/assets/partners/tcpl.png";
import mahindraLogo from "@/assets/partners/mahindra-new.png";
import relianceLogo from "@/assets/partners/reliance.jpg";
import axisLogo from "@/assets/partners/axis-bank-logo.png";

const partners = [
  { name: "Hindustan Unilever", logo: hulLogo },
  { name: "Tata Consumer Products", logo: tcplLogo },
  { name: "Mahindra", logo: mahindraLogo },
  { name: "Reliance", logo: relianceLogo },
  { name: "Axis Bank", logo: axisLogo },
];

const TrustedBySection = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mb-8 font-sans"
        >
          Trusted by experts. Used by the leaders.
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
