import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const leadership = [
  {
    name: "Ankit Doshi",
    role: "Founder & CEO",
    credentials: "IIM Indore Alumnus",
    description: "Building products that help millions make better career decisions.",
    image: "https://cdn.insideiim.com/wp-content/uploads/2025/09/30184534/ankit-doshi.jpeg",
    linkedin: "https://www.linkedin.com/in/ankit9doshi/",
  },
  {
    name: "Anshuman Ghosh",
    role: "Co-Founder & CTO",
    credentials: "IIT Delhi Alumnus",
    description: "Leading tech innovation across our suite of AI products.",
    image: "https://cdn.insideiim.com/wp-content/uploads/2025/09/30184541/anshuman-ghosh.jpeg",
    linkedin: "https://www.linkedin.com/in/anshumanghosh/",
  },
  {
    name: "Vignesh Sreenivasan",
    role: "VP-GTM",
    credentials: "IIM Kozhikode Alumnus",
    description: "Driving go-to-market strategy and growth initiatives.",
    image: "https://cdn.insideiim.com/wp-content/uploads/2025/09/30184536/vignesh-sreenivasan.jpeg",
    linkedin: "https://www.linkedin.com/in/vignesh-sreenivasan/",
  },
  {
    name: "Hiral Sanghavi",
    role: "Chief Revenue Officer",
    credentials: "NM Alumnus",
    description: "Scaling revenue and building lasting client relationships.",
    image: "https://cdn.insideiim.com/wp-content/uploads/2025/09/30184539/Hiral-sanghvi.jpeg",
    linkedin: "https://www.linkedin.com/in/hiral-sanghavi-directi-marketing/",
  },
];

const metrics = [
  {
    value: "120+",
    label: "Enterprise + Education Partners"
  },
  {
    value: "530K+",
    label: "Social Media Followers"
  }
];

const Team = () => {
  return (
    <section id="team" className="px-6 py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            For 12 years, our platforms have supported millions across the talent and hiring landscape
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {leadership.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Name and LinkedIn */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground">
                    {member.name}
                  </h3>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-[#0A66C2] transition-colors duration-300"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>

                {/* Role and Credentials */}
                <div className="mb-3">
                  <p className="text-primary text-sm font-medium">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {member.credentials}
                  </p>
                </div>

                {/* Description - reveals on hover */}
                <p className="text-muted-foreground text-sm leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 overflow-hidden">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-12 md:gap-24"
        >
          {metrics.map((metric, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {metric.value}
              </p>
              <p className="text-muted-foreground text-sm">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
