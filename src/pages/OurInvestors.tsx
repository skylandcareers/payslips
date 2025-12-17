import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StaticNetworkBackground from "@/components/StaticNetworkBackground";
import { motion } from "framer-motion";

const marqueeInvestors = [
  {
    name: "Vishesh C Chandiok",
    role: "CEO, Grant Thornton Bharat",
    education: "University of Strathclyde Alumnus",
    image: "https://insidecampus.s3.ap-south-1.amazonaws.com/uploads/2025/09/a05bc28b-6949-492a-9e15-46aa2460fe8d.webp",
  },
  {
    name: "Akshant Goyal",
    role: "CFO, Zomato",
    education: "IIM Bangalore Alumnus",
    image: "https://insidecampus.s3.ap-south-1.amazonaws.com/uploads/2025/09/9b1c7a19-f019-4058-9863-48bd9253e0a1.webp",
  },
  {
    name: "Gautam Gurnani",
    role: "Managing Director, Dubai Holding",
    education: "IIM Bangalore Alumnus",
    image: "https://insidecampus.s3.ap-south-1.amazonaws.com/uploads/2025/09/8cbf1d2a-493b-4679-b838-88049168f935.webp",
  },
  {
    name: "Narayan Babu",
    role: "VP Banking India, Zeta Suite",
    education: "",
    image: "https://insidecampus.s3.ap-south-1.amazonaws.com/uploads/2025/09/fa8e8fd3-baca-4cbe-9f09-0e01708902f0.webp",
  },
  {
    name: "Mukesh Maniar",
    role: "Director, Prakash Integrated Services",
    education: "Rank holder Chartered Accountant",
    image: "https://insidecampus.s3.ap-south-1.amazonaws.com/uploads/2025/09/63fcb9e7-cc18-426c-977e-0c4c0fe28b64.webp",
  },
  {
    name: "Amit Gupta",
    role: "Co-Founder, Altitude Trading",
    education: "IIM Bangalore Alumnus",
    image: "https://insidecampus.s3.ap-south-1.amazonaws.com/uploads/2025/09/04a0f9ef-c010-4f2e-8f1b-ebf54bb77db0.webp",
  },
];

const otherInvestors = [
  {
    name: "Prashant Mohanraj",
    role: "Partner & Head – Liquid Alternatives, Alpha Alternatives",
    education: "IIM Ahmedabad Alumnus",
    image: "https://insidecampus.s3.ap-south-1.amazonaws.com/uploads/2025/09/698e07bb-c090-4728-b708-ec9fc9db02ec.webp",
  },
  {
    name: "Ganesh Balakrishnan",
    role: "Consulting Partner, Ecosystem Ventures",
    education: "IIM Bangalore, IIT Bombay Alumnus",
    image: "https://insidecampus.s3.ap-south-1.amazonaws.com/uploads/2025/09/ebf1d23e-118b-42db-9e49-4668f83c1fc2.webp",
  },
  {
    name: "Shreyans Mehta",
    role: "Partner, Alpha Alternatives",
    education: "CA AIR 37 | ESCP Business School Alumnus",
    image: "https://insidecampus.s3.ap-south-1.amazonaws.com/uploads/2025/09/6bb92b00-6c3d-4500-9094-5a17ddf2d5ee.webp",
  },
  {
    name: "Harsh Parikh",
    role: "Founder, DRiefcase",
    education: "IIM Bangalore Alumnus",
    image: "https://insidecampus.s3.ap-south-1.amazonaws.com/uploads/2025/09/b3da4877-6a0f-43b4-a8c5-4fbef89db81f.webp",
  },
  {
    name: "Raghav Joshi",
    role: "Co-Founder, Rebel Foods",
    education: "IIM Indore Alumnus",
    image: "https://insidecampus.s3.ap-south-1.amazonaws.com/uploads/2025/09/65542616-f715-406e-96d8-ec759080ed15.webp",
  },
  {
    name: "Supreet Singh",
    role: "Co-Founder & Managing Partner, Native",
    education: "CIMR Alumnus",
    image: "https://insidecampus.s3.ap-south-1.amazonaws.com/uploads/2025/09/f42bcb1e-7556-4bb6-9cf0-0a7baedc0b01.webp",
  },
  {
    name: "Saket Jain",
    role: "Managing Partner & Co-Founder, Native",
    education: "CA AIR 45",
    image: "https://insidecampus.s3.ap-south-1.amazonaws.com/uploads/2025/09/3bea66aa-964b-42af-9cab-781ada83e88d.webp",
  },
  {
    name: "Rajit Desai",
    role: "Sr. VP, Mindshare India",
    education: "NMIMS Mumbai Alumnus",
    image: "https://insidecampus.s3.ap-south-1.amazonaws.com/uploads/2025/09/f8ed2ca8-98fd-4ee6-846d-9f58da2e2c64.webp",
  },
  {
    name: "Vivek Didwania",
    role: "Investment Banking Director, Citigroup Global Markets (Singapore)",
    education: "TAPMI Manipal Alumnus | CFA | CA",
    image: "https://insidecampus.s3.ap-south-1.amazonaws.com/uploads/2025/09/1fe44afc-ccbf-4b1d-a22d-716c9facb780.webp",
  },
];

const InvestorCard = ({ investor, index }: { investor: typeof marqueeInvestors[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="text-center"
  >
    <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
      <img
        src={investor.image}
        alt={investor.name}
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-base font-bold text-foreground">{investor.name}</h3>
    <p className="text-primary text-sm mb-1">{investor.role}</p>
    {investor.education && (
      <p className="text-muted-foreground text-xs">{investor.education}</p>
    )}
  </motion.div>
);

const OurInvestors = () => {
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
              Our Investors
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-white/80 max-w-2xl mx-auto"
            >
              InsideIIM exists to help students make informed career choices and assist employers in finding the right talent. We're grateful to the investors who believe in this mission.
            </motion.p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed text-center"
            >
              Our investors include founders, operators, and firm partners who have scaled companies used by millions and who care deeply about education and careers in India.
            </motion.p>
          </div>
        </section>

        {/* Marquee Investors */}
        <section className="px-6 py-16 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground mb-4 text-center"
            >
              Marquee Investors
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-center mb-12"
            >
              A few of our most visible backers.
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {marqueeInvestors.map((investor, index) => (
                <InvestorCard key={investor.name} investor={investor} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Other Investors */}
        <section className="px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground mb-12 text-center"
            >
              Other Investors
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {otherInvestors.map((investor, index) => (
                <InvestorCard key={investor.name} investor={investor} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Built on Trust */}
        <section className="px-6 py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground mb-6"
            >
              Built on Trust
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed"
            >
              We began with ₹5,000 and a promise to put students first. That hasn't changed. Our investors share this vision and support our commitment to building products that create genuine value for learners and employers.
            </motion.p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurInvestors;
