import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Linkedin } from "lucide-react";

const leadership = [
  {
    name: "Ankit Doshi",
    role: "Founder & CEO",
    description: "Founder of InsideIIM. Keeps the mission simple: Elevate Human Potential with AI.",
    education: "IIM Indore Alumnus",
    image: "https://cdn.insideiim.com/wp-content/uploads/2025/09/30184534/ankit-doshi.jpeg",
    linkedin: "https://www.linkedin.com/in/ankit9doshi/",
  },
  {
    name: "Anshuman Ghosh",
    role: "Co-Founder & CTO",
    description: "Leads engineering and platform strategy. Ships fast, learns faster.",
    education: "IIT Delhi Alumnus",
    image: "https://cdn.insideiim.com/wp-content/uploads/2025/09/30184541/anshuman-ghosh.jpeg",
    linkedin: "https://www.linkedin.com/in/anshumanghosh/",
  },
  {
    name: "Vignesh Sreenivasan",
    role: "VP-GTM",
    description: "Drives product clarity and editorial depth across our digital properties.",
    education: "IIM Kozhikode Alumnus",
    image: "https://cdn.insideiim.com/wp-content/uploads/2025/09/30184536/vignesh-sreenivasan.jpeg",
    linkedin: "https://www.linkedin.com/in/vignesh-sreenivasan/",
  },
  {
    name: "Hiral Sanghavi",
    role: "Chief Revenue Officer",
    description: "Owns partnerships and revenue. Focused on long-term value for learners and employers.",
    education: "NM Alumnus",
    image: "https://cdn.insideiim.com/wp-content/uploads/2025/09/30184539/Hiral-sanghvi.jpeg",
    linkedin: "https://www.linkedin.com/in/hiral-sanghavi-directi-marketing/",
  },
];

const values = [
  { title: "Ownership", description: "Pick up ownership early, run with ideas, and ship with pace." },
  { title: "Kind Candor", description: "Honest feedback delivered with respect and care." },
  { title: "Speed", description: "Test ideas with real users, measure what matters, and iterate." },
  { title: "Craft", description: "We treat problems like products and value quality in everything." },
];

const OurTeam = () => {
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
              className="text-3xl font-bold text-foreground mb-6"
            >
              Who We Are
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              We are a group of builders, dreamers, and doers who care about one thing above all else: helping people make better career choices.
            </motion.p>
          </div>
        </section>

        {/* Why We Exist */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Why We Exist</h2>
              <p className="text-muted-foreground leading-relaxed">
                InsideIIM began as a hostel room project to solve a simple problem. Students needed honest guidance that could help them decide, prepare, and grow. That spirit still drives us. We keep our focus on learners, share real experiences, and build practical products that make decisions easier. Across our platforms, we serve a large and active community that returns for clarity, credibility, and outcomes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="px-6 py-16 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground mb-12 text-center"
            >
              Leadership Team
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-muted ring-4 ring-primary/10">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary text-sm mb-1">{member.role}</p>
                  <p className="text-muted-foreground text-xs mb-2">{member.education}</p>
                  <p className="text-muted-foreground text-sm mb-3">{member.description}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">How We Work</h2>
              <p className="text-muted-foreground leading-relaxed">
                We keep teams small, ownership high, and feedback fast. We test ideas with real users, measure what matters, and iterate. When we get it right, we scale. When we miss, we fix and move.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="px-6 py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground mb-12 text-center"
            >
              Our Values
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6 text-center"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Life at InsideIIM */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Life at Our Company</h2>
              <p className="text-muted-foreground leading-relaxed">
                We are a lean team that treats problems like products. People pick up ownership early, run with ideas, and ship with pace. It is not your average workplace. We juggle multiple projects and still find time to laugh at the end of a long sprint. We value clarity, speed, and follow-through. If something breaks, we fix it. If something works, we scale it.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Interested in joining us? Drop us a line at <a href="mailto:careers@insideiim.com" className="text-primary hover:underline">careers@insideiim.com</a>.
              </p>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default OurTeam;
