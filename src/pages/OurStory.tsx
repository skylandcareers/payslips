import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import { motion } from "framer-motion";

const milestones = [
  { year: "2011", description: "Launched InsideIIM.com from a hostel room at IIM Indore." },
  { year: "2014–2018", description: "Scaled reach across campuses; deepened trust with honest guidance." },
  { year: "2019–2024", description: "Expanded into upskilling with programs built alongside industry." },
  { year: "2024–Present", description: "Building practical AI that makes humans better." },
];

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative px-6 py-16 bg-black overflow-hidden">
          <div className="absolute inset-0 z-0">
            <NetworkBackground lines={5} distance={6} className="brightness-150" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-white/80 max-w-2xl mx-auto"
            >
              The company was built with an investment of INR 5000. We raised angel rounds and have some of India's most accomplished professionals backing us.
            </motion.p>
          </div>
        </section>

        {/* Humble Beginnings */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Humble Beginnings</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                InsideIIM.com began in February 2011 in a hostel room at IIM Indore. No team. No business plan. No funding ambitions. Just a clear purpose to help students make better career decisions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We published real stories from alumni and students that future aspirants could rely on. Our responsibility was always to the student community. It still is, and will always be.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-6 py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground mb-12 text-center"
            >
              Our Journey
            </motion.h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02, x: 8 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start p-4 -mx-4 rounded-lg cursor-pointer group hover:bg-primary/5 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-28 text-right">
                    <span className="text-primary font-bold text-lg group-hover:text-primary/80 transition-colors">{milestone.year}</span>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-150 group-hover:shadow-[0_0_12px_hsl(var(--primary)/0.5)] transition-all duration-300" />
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Guides Us */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">What Guides Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                We build for trust. We listen to our community. We simplify choices with clear guidance, honest stories, and practical tools. We've made mistakes. We'll make more. But we'll always strive to delight our community and partners. Your satisfaction is our only true metric.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="px-6 py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground mb-12 text-center"
            >
              Our Impact
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "5M+", label: "Annual Users" },
                { value: "100+", label: "Business Schools Covered" },
                { value: "15+", label: "Years of Trust" },
                { value: "25,000+", label: "Career Stories" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground mt-12"
            >
              We began with ₹5,000 and a promise to put students first. That hasn't changed.
            </motion.p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurStory;
