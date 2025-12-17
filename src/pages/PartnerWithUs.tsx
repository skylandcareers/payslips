import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StaticNetworkBackground from "@/components/StaticNetworkBackground";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Handshake, Lightbulb, Globe, Rocket } from "lucide-react";

const partnerTypes = [
  {
    icon: Handshake,
    title: "Technology Partners",
    description: "Integrate your solutions with our AI ecosystem to create enhanced value for customers.",
  },
  {
    icon: Lightbulb,
    title: "Content Partners",
    description: "Collaborate on creating industry-relevant content and training programs.",
  },
  {
    icon: Globe,
    title: "Distribution Partners",
    description: "Expand reach together by taking our solutions to new markets and segments.",
  },
  {
    icon: Rocket,
    title: "Strategic Partners",
    description: "Long-term collaborations to build transformative products and services.",
  },
];

const PartnerWithUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative px-6 py-16 bg-black overflow-hidden">
          <StaticNetworkBackground className="opacity-30" density={80} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Partner With Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
            >
              Join our ecosystem of partners working together to transform education and careers through AI.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button size="lg" asChild>
                <a href="#contact">Become a Partner</a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground mb-12 text-center"
            >
              Partnership Opportunities
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {partnerTypes.map((partner, index) => (
                <motion.div
                  key={partner.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                >
                  <partner.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{partner.title}</h3>
                  <p className="text-muted-foreground">{partner.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="px-6 py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground mb-8 text-center"
            >
              Why Partner With AltUni Labs?
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "5M+ Users", description: "Access to a large, engaged community of learners and professionals." },
                { title: "15+ Years", description: "Proven track record of trust and impact in the education space." },
                { title: "AI-First", description: "Cutting-edge AI capabilities to enhance your offerings." },
              ].map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.title}</div>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground mb-6"
            >
              Let's Build Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-8"
            >
              Reach out to explore partnership opportunities that create mutual value.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button size="lg" asChild>
                <a href="#contact">Contact Us</a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PartnerWithUs;
