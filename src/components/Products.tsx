import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import konverseAiImg from "@/assets/products/konverse-ai-new.png";
import potentialAiImg from "@/assets/products/potential-ai.png";
import billionAiImg from "@/assets/products/billion-ai.png";
import signalAiImg from "@/assets/products/signal-ai.png";
import prepbabaImg from "@/assets/products/prepbaba.png";
import ayanaAiImg from "@/assets/products/ayana-ai.png";
import StaticNetworkBackground from "@/components/StaticNetworkBackground";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

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
    className="group relative aspect-[3/4] overflow-hidden rounded-xl block"
  >
    <img 
      src={product.image} 
      alt={product.title} 
      className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
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
  </a>
);

const Products = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    const curr = api.selectedScrollSnap();
    const total = api.scrollSnapList().length;
    setCurrent(curr);
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
    setProgress(((curr + 1) / total) * 100);
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section id="products" className="scroll-mt-24 md:scroll-mt-28 py-24 relative overflow-hidden bg-black">
      <StaticNetworkBackground density={80} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with arrows */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-sans font-semibold text-white tracking-tight">
              Our Products
            </h2>
            <p className="text-white/60 max-w-2xl mt-4">
              AI-powered solutions designed to transform how you work, learn, and grow.
            </p>
          </div>
          
          {/* Arrow buttons - hidden on mobile */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => api?.scrollPrev()}
              disabled={!canScrollPrev}
              className="size-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              disabled={!canScrollNext}
              className="size-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <ChevronRight className="size-6" />
            </button>
          </div>
        </div>

        {/* Carousel for all screen sizes */}
        <Carousel 
          setApi={setApi} 
          opts={{ 
            align: "start", 
            loop: false,
            skipSnaps: false,
            duration: 30,
          }} 
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6 transition-transform">
            {products.map(product => (
              <CarouselItem key={product.id} className="pl-4 md:pl-6 basis-[85%] md:basis-1/3">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Progress bar - desktop */}
        <div className="hidden md:block mt-8">
          <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Dot Indicators - mobile only */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                current === index ? "bg-white w-6" : "bg-white/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;