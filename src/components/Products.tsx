import { ArrowRight } from "lucide-react";
import konverseAiImg from "@/assets/products/konverse-ai.png";
import potentialAiImg from "@/assets/products/potential-ai.png";
import billionAiImg from "@/assets/products/billion-ai.png";
import signalAiImg from "@/assets/products/signal-ai.png";
import prepbabaImg from "@/assets/products/prepbaba.png";
import ayanaAiImg from "@/assets/products/ayana-ai.avif";
const products = [{
  id: "konverse-ai",
  title: "KonverseAI",
  description: "Voice-first AI interview platform that evaluates candidates fairly and provides instant, detailed feedback.",
  href: "https://campussolutions.insideiim.com/",
  image: konverseAiImg
}, {
  id: "potential-ai",
  title: "PotentialAI",
  description: "AI agent that identifies the best campus talent in minutes with customizable, unbiased candidate scoring.",
  href: "https://potential-ai.insidekampus.com/",
  image: potentialAiImg
}, {
  id: "billion-ai",
  title: "BillionAI",
  description: "Screen deals smarter as BillionAI turns live founder pitches into instant insights.",
  href: "https://billion.magicdeal.ai/",
  image: billionAiImg
}, {
  id: "signal-ai",
  title: "SignalAI",
  description: "Get clearer signals on candidate fit and potential with customized role-specific assessments.",
  href: "https://campussolutions.insideiim.com/",
  image: signalAiImg
}, {
  id: "prepbaba",
  title: "PrepBaba",
  description: "Your one-stop placement buddy containing everything you need to bag your dream offer.",
  href: "https://prepbaba.insidekampus.com/",
  image: prepbabaImg
}, {
  id: "ayana-ai",
  title: "AyanaAI",
  description: "The only AI trained on 100,000+ real MBA success stories to help an MBA aspirant from interview prep to final admit.",
  href: "https://ayana.insideiim.com/postgrad-app",
  image: ayanaAiImg
}];
const Products = () => {
  return <section id="products" className="py-24 bg-black">
      <div className="container px-6 mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-6xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-sans font-semibold text-white tracking-tight">
            Our Products
          </h2>
          <p className="text-white/60 max-w-2xl mt-4">
            AI-powered solutions designed to transform how you work, learn, and grow.
          </p>
        </div>

        {/* Products Grid - 3 columns, centered */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map(product => <a key={product.id} href={product.href} target="_blank" rel="noopener noreferrer" className="group relative aspect-[3/4] overflow-hidden rounded-xl block">
              {/* Image */}
              <img src={product.image} alt={product.title} className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {product.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed line-clamp-2 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 text-white/60 text-sm group-hover:text-white transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>)}
        </div>
      </div>
    </section>;
};
export default Products;