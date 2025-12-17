import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import konverseAiImg from "@/assets/products/konverse-ai.png";
import potentialAiImg from "@/assets/products/potential-ai.png";
import billionAiImg from "@/assets/products/billion-ai.png";
import signalAiImg from "@/assets/products/signal-ai.png";
import prepbabaImg from "@/assets/products/prepbaba.png";
import ayanaAiImg from "@/assets/products/ayana-ai.avif";

const Products = () => {
  const products = [
    {
      title: "KonverseAI",
      description: "Voice-first AI interview platform that evaluates candidates fairly and provides instant, detailed feedback.",
      image: konverseAiImg,
      link: "https://campussolutions.insideiim.com/"
    },
    {
      title: "PotentialAI",
      description: "AI agent that identifies the best campus talent in minutes with customizable, unbiased candidate scoring.",
      image: potentialAiImg,
      link: "https://potential-ai.insidekampus.com/"
    },
    {
      title: "BillionAI",
      description: "Screen Deals Smarter as BillionAI Turns Live Founder Pitches into Instant Insights.",
      image: billionAiImg,
      link: "https://billion.magicdeal.ai/"
    },
    {
      title: "SignalAI",
      description: "Get Clearer signals on candidate fit and potential with customized role-specific assessments.",
      image: signalAiImg,
      link: "https://campussolutions.insideiim.com/"
    },
    {
      title: "PrepBaba",
      description: "Your One-Stop Placement Buddy containing everything you need to bag your dream offer.",
      image: prepbabaImg,
      link: "https://prepbaba.insidekampus.com/"
    },
    {
      title: "AyanaAI",
      description: "The only AI trained on 100,000+ real MBA success stories to help an MBA aspirant from Interview Prep to Final Admit.",
      image: ayanaAiImg,
      link: "https://ayana.insideiim.com/postgrad-app"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            AI-powered solutions designed to transform how you work, learn, and grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="border border-border bg-card overflow-hidden group hover:border-primary/50 transition-all duration-300 rounded-xl"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted m-3 rounded-lg">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-sans font-bold text-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {product.description}
                </p>
                <a 
                  href={product.link}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group/link"
                >
                  <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover/link:border-primary group-hover/link:text-primary transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <span>Learn more</span>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
