import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const leadership = [
  {
    name: "Ankit Doshi",
    role: "CEO",
    credentials: "IIM Indore | ex-Bank of America",
    description: "13 years building India's top talent platforms.",
    image: "https://cdn.insideiim.com/wp-content/uploads/2025/09/30184534/ankit-doshi.jpeg",
    linkedin: "https://www.linkedin.com/in/ankit9doshi/",
  },
  {
    name: "Anshuman Ghosh",
    role: "CTO",
    credentials: "IIT Delhi | ex-Oracle",
    description: "4x CTO, 20+ years of experience.",
    image: "https://cdn.insideiim.com/wp-content/uploads/2025/09/30184541/anshuman-ghosh.jpeg",
    linkedin: "https://www.linkedin.com/in/anshumanghosh/",
  },
  {
    name: "Vignesh Sreenivasan",
    role: "VP-GTM",
    credentials: "IIM Kozhikode | ex-Samsung",
    description: "Driving go-to-market strategy and growth initiatives.",
    image: "https://cdn.insideiim.com/wp-content/uploads/2025/09/30184536/vignesh-sreenivasan.jpeg",
    linkedin: "https://www.linkedin.com/in/vignesh-sreenivasan/",
  },
  {
    name: "Hiral Sanghavi",
    role: "CRO",
    credentials: "NM | ex-Directi",
    description: "Scaling revenue and building lasting client relationships.",
    image: "https://cdn.insideiim.com/wp-content/uploads/2025/09/30184539/Hiral-sanghvi.jpeg",
    linkedin: "https://www.linkedin.com/in/hiral-sanghavi-directi-marketing/",
  },
];

const Team = () => {
  return (
    <section id="team" className="px-6 py-24 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#b62100] text-sm font-semibold tracking-wider uppercase mb-4 block">
            Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            For 12 years, our platforms have supported millions across the talent and hiring landscape
          </p>
        </motion.div>

        {/* Team Members Grid - 4 in one row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {leadership.map((member, index) => (
            <motion.a
              key={member.name}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group block cursor-pointer"
            >
              {/* Image - no rounded corners */}
              <div className="relative aspect-[4/3] overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Content below image */}
              <div className="space-y-2">
                {/* Name and LinkedIn */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {member.name}
                  </h3>
                  <span className="text-[#0A66C2] group-hover:opacity-80 transition-opacity">
                    <Linkedin size={18} />
                  </span>
                </div>

                {/* Role and Credentials on same line */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#b62100] font-medium">
                    {member.role}
                  </span>
                  <span className="text-white/60">
                    {member.credentials}
                  </span>
                </div>

                {/* Description */}
                <p className="text-white/50 text-xs pt-1">
                  {member.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
