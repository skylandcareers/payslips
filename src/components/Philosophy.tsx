import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CircuitAnimation from "./CircuitAnimation";

interface Slide {
  title: string;
  description: string;
}

const defaultSlides: Slide[] = [
  {
    title: "AI as a Trained Professional",
    description:
      "We treat AI as a human being trained for a job. Our AI solutions deliver consistent and reliable results elevating human potential.",
  },
  {
    title: "Solving the Unsolved",
    description:
      "We build AI where no software exists currently. We identify gaps in the market and create intelligent systems that solve problems no one else has tackled.",
  },
  {
    title: "Built to Evolve",
    description:
      "We build AI that gets better with improvement of underlying models. As foundational AI technology advances, our solutions automatically evolve to deliver even more powerful outcomes.",
  },
];

interface StickySlideDeckProps {
  slides?: Slide[];
}

const Philosophy = ({ slides = defaultSlides }: StickySlideDeckProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: mobileScrollProgress } = useScroll({
    target: mobileContainerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="relative bg-background">
      {/* Desktop: Sticky scroll section - reduced height */}
      <div ref={containerRef} className="hidden lg:block h-[200vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">
          {/* Circuit Animation Background */}
          <CircuitAnimation containerRef={containerRef} className="opacity-60" />
          
          {/* Header - centered */}
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-foreground text-center mb-8 relative z-10">
            Our Approach to AI
          </h2>
          
          {/* Centered content container */}
          <div className="relative z-10 w-full max-w-xl mx-auto px-8">
            <div className="relative min-h-[160px]">
              {slides.map((slide, index) => (
                <SlideText
                  key={index}
                  slide={slide}
                  index={index}
                  progress={scrollYProgress}
                  totalSlides={slides.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet: Stacked with parallax background */}
      <div ref={mobileContainerRef} className="lg:hidden relative min-h-[200vh]">
        {/* Circuit Animation Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <CircuitAnimation className="opacity-40" />
        </div>

        <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6">
          <h2 className="text-xl font-sans font-bold text-foreground text-center mb-6 relative z-10">
            Our Approach to AI
          </h2>

          <div className="relative z-10 w-full max-w-md mx-auto">
            <div className="relative min-h-[150px]">
              {slides.map((slide, index) => (
                <MobileSlideText
                  key={index}
                  slide={slide}
                  index={index}
                  progress={mobileScrollProgress}
                  totalSlides={slides.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SlideTextProps {
  slide: Slide;
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  totalSlides: number;
}

const SlideText = ({ slide, index, progress, totalSlides }: SlideTextProps) => {
  const stepSize = 1 / totalSlides;
  const start = index * stepSize;
  const end = (index + 1) * stepSize;

  // Sharp transitions - only one visible at a time
  const opacity = useTransform(
    progress,
    [
      start,
      start + stepSize * 0.1,
      end - stepSize * 0.1,
      end
    ],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    progress,
    [
      start,
      start + stepSize * 0.15,
      end - stepSize * 0.1,
      end
    ],
    [40, 0, 0, -40]
  );

  const scale = useTransform(
    progress,
    [start, start + stepSize * 0.1, end - stepSize * 0.1, end],
    [0.95, 1, 1, 0.95]
  );

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center"
    >
      <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
        {slide.title}
      </h3>
      <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl">
        {slide.description}
      </p>
    </motion.div>
  );
};

const MobileSlideText = ({ slide, index, progress, totalSlides }: SlideTextProps) => {
  const stepSize = 1 / totalSlides;
  const start = index * stepSize;
  const end = (index + 1) * stepSize;

  // Sharp transitions - only one visible at a time
  const opacity = useTransform(
    progress,
    [
      start,
      start + stepSize * 0.1,
      end - stepSize * 0.1,
      end
    ],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    progress,
    [
      start,
      start + stepSize * 0.15,
      end - stepSize * 0.1,
      end
    ],
    [30, 0, 0, -30]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center"
    >
      <h3 className="text-xl font-semibold text-foreground mb-4">
        {slide.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {slide.description}
      </p>
    </motion.div>
  );
};

export default Philosophy;
