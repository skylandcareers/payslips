import { ArrowRight } from "lucide-react";
import konverseAiImg from "@/assets/products/konverse-ai-new.png";
import potentialAiImg from "@/assets/products/potential-ai.png";
import billionAiImg from "@/assets/products/billion-ai.png";
import signalAiImg from "@/assets/products/signal-ai.png";
import prepbabaImg from "@/assets/products/prepbaba.png";
import ayanaAiImg from "@/assets/products/ayana-ai.png";
import StaticNetworkBackground from "@/components/StaticNetworkBackground";

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

const ProductCard = ({ product }: { product: typeof products[0] }) => (
  <a
    href={product.href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative aspect-[4/5] overflow-hidden block border border-white/10 hover:border-[#b62100]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(182,33,0,0.15)]"
  >
    <img
      src={product.image}
      alt={product.title}
      className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 p-8">
      <h3 className="text-3xl font-semibold text-white mb-3">
        {product.title}
      </h3>
      <p className="text-white/70 text-base leading-relaxed line-clamp-2 mb-5">
        {product.description}
      </p>
      <div className="flex items-center gap-2 text-[#b62100] text-sm font-medium group-hover:text-white transition-colors">
        <span>Learn more</span>
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-2" />
      </div>
    </div>
  </a>
);

const Products = () => {
  return (
    <section id="products" className="scroll-mt-24 md:scroll-mt-28 py-24 relative overflow-hidden bg-black">
      <StaticNetworkBackground density={30} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <h2 className="text-2xl md:text-4xl font-sans font-semibold text-white tracking-tight">
            Our Products
          </h2>
          <p className="text-white/60 max-w-2xl mt-4">
            AI-powered solutions designed to transform how you work, learn, and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
