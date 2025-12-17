import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import insideiimLogo from "@/assets/platforms/insideiim-logo.png";
import insidekampusLogo from "@/assets/platforms/insidekampus-logo.png";
import altuniLogo from "@/assets/platforms/altuni-logo.png";
import altunilabsLogo from "@/assets/altuni-labs-logo.png";

const platforms = [
  {
    name: "InsideIIM",
    description: "India's most trusted career and MBA platform. From exam prep to placements, from interview training to employer insights, InsideIIM is where learners plan, practice, and progress.",
    link: "https://insideiim.com/",
    logo: insideiimLogo,
    whiteCard: false,
  },
  {
    name: "InsideKampus",
    description: "Launched to digitise campus engagement and hiring. Students discover opportunities. Employers run competitions, events, and hiring journeys with less friction and better data.",
    link: "https://insidekampus.com/",
    logo: insidekampusLogo,
    whiteCard: false,
  },
  {
    name: "AltUni",
    description: "An alternative digital university focused on job-ready skills and outcomes. Programs are built with industry and designed to help professionals pivot and grow.",
    link: "https://altuni.in/",
    logo: altuniLogo,
    whiteCard: true,
  },
  {
    name: "AltUni Labs",
    description: "Our AI lab builds products that multiply human potential. We are shipping practical AI for finance, retail, job-tech, and admissions — always with transparent value for learners and employers.",
    link: "/",
    logo: altunilabsLogo,
    whiteCard: true,
  },
];

const OurPlatforms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="px-6 py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Our Platforms
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              A unique ecosystem connecting MBA students, high-potential aspirants, and employers that value merit and outcomes.
            </motion.p>
          </div>
        </section>

        {/* Platforms Grid */}
        <section className="px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                    platform.whiteCard 
                      ? 'bg-white border border-gray-200 hover:border-gray-300' 
                      : 'bg-card border border-border hover:border-primary/50'
                  }`}
                >
                  <div className="h-12 mb-6">
                    <img
                      src={platform.logo}
                      alt={`${platform.name} logo`}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <p className={`mb-6 leading-relaxed text-sm ${platform.whiteCard ? 'text-gray-600' : 'text-muted-foreground'}`}>
                    {platform.description}
                  </p>
                  <a
                    href={platform.link}
                    target={platform.link.startsWith("http") ? "_blank" : undefined}
                    rel={platform.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    Know More
                    <ExternalLink size={16} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="px-6 py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground mb-6"
            >
              The InsideIIM Community Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              InsideIIM is a unique ecosystem connecting MBA students and alumni from India's top B-schools, high-potential aspirants from leading universities, and employers and institutions that value merit and outcomes.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed"
            >
              Every year, about 5 million unique users read, watch, prepare, and make career decisions with us. Many go on to top companies. Some build their own.
            </motion.p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurPlatforms;
