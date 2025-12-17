"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import konverseAiImg from "@/assets/products/konverse-ai.png";
import potentialAiImg from "@/assets/products/potential-ai.png";
import billionAiImg from "@/assets/products/billion-ai.png";
import signalAiImg from "@/assets/products/signal-ai.png";
import prepbabaImg from "@/assets/products/prepbaba.png";
import ayanaAiImg from "@/assets/products/ayana-ai.avif";

const products = [
  {
    id: "konverse-ai",
    title: "KonverseAI",
    description: "Voice-first AI interview platform that evaluates candidates fairly and provides instant, detailed feedback.",
    href: "https://campussolutions.insideiim.com/",
    image: konverseAiImg,
  },
  {
    id: "potential-ai",
    title: "PotentialAI",
    description: "AI agent that identifies the best campus talent in minutes with customizable, unbiased candidate scoring.",
    href: "https://potential-ai.insidekampus.com/",
    image: potentialAiImg,
  },
  {
    id: "billion-ai",
    title: "BillionAI",
    description: "Screen deals smarter as BillionAI turns live founder pitches into instant insights.",
    href: "https://billion.magicdeal.ai/",
    image: billionAiImg,
  },
  {
    id: "signal-ai",
    title: "SignalAI",
    description: "Get clearer signals on candidate fit and potential with customized role-specific assessments.",
    href: "https://campussolutions.insideiim.com/",
    image: signalAiImg,
  },
  {
    id: "prepbaba",
    title: "PrepBaba",
    description: "Your one-stop placement buddy containing everything you need to bag your dream offer.",
    href: "https://prepbaba.insidekampus.com/",
    image: prepbabaImg,
  },
  {
    id: "ayana-ai",
    title: "AyanaAI",
    description: "The only AI trained on 100,000+ real MBA success stories to help an MBA aspirant from interview prep to final admit.",
    href: "https://ayana.insideiim.com/postgrad-app",
    image: ayanaAiImg,
  },
];

const Products = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container px-6">
        {/* Header with navigation */}
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div>
            <span className="text-[#b62100] text-sm font-semibold tracking-wider uppercase mb-2 block">
              Products
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-semibold text-black tracking-tight mb-4 md:mb-0">
              Our Products
            </h2>
            <p className="text-black/60 max-w-2xl mt-2">
              AI-powered solutions designed to transform how you work, learn, and grow.
            </p>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2 md:mt-0">
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto rounded-full border-black/20 hover:bg-black/5"
            >
              <ArrowLeft className="size-5 text-black" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto rounded-full border-black/20 hover:bg-black/5"
            >
              <ArrowRight className="size-5 text-black" />
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-[calc(theme(container.padding)-20px)] mr-[calc(theme(container.padding))] 2xl:ml-[calc(50vw-700px+theme(container.padding)-20px)]">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-[20px] md:max-w-[452px]"
              >
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex aspect-[3/2] overflow-hidden rounded-xl bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="mb-2 mt-6 flex items-center gap-4">
                      <h3 className="text-xl font-semibold text-black md:text-2xl">
                        {product.title}
                      </h3>
                    </div>
                    <p className="text-black/60 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-[#b62100] font-medium text-sm group-hover:underline">
                      Read more{" "}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Dot indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {products.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-[#b62100]" : "bg-black/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
