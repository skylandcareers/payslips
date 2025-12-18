import { useEffect, useState, memo } from "react";
import { motion } from "framer-motion";

export type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
  image: string;
};

interface CardSlideProps {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  intervalDuration?: number;
}

export const CardSlide = memo(function CardSlide({
  items,
  offset = 22,
  scaleFactor = 0.06,
  intervalDuration = 3000,
}: CardSlideProps) {
  const [cards, setCards] = useState<Card[]>(items);
  const [dynamicOffset, setDynamicOffset] = useState(offset);
  const [dynamicScale, setDynamicScale] = useState(scaleFactor);
  const [cardSize, setCardSize] = useState({ height: "26rem", width: "22rem" });

  // Responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setDynamicOffset(8);
        setDynamicScale(0.04);
        setCardSize({ height: "18rem", width: "16rem" });
      } else if (window.innerWidth < 640) {
        setDynamicOffset(10);
        setDynamicScale(0.04);
        setCardSize({ height: "20rem", width: "18rem" });
      } else if (window.innerWidth < 768) {
        setDynamicOffset(12);
        setDynamicScale(0.05);
        setCardSize({ height: "22rem", width: "20rem" });
      } else if (window.innerWidth < 1024) {
        setDynamicOffset(14);
        setDynamicScale(0.05);
        setCardSize({ height: "26rem", width: "22rem" });
      } else {
        setDynamicOffset(offset);
        setDynamicScale(scaleFactor);
        setCardSize({ height: "28rem", width: "26rem" });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [offset, scaleFactor]);

  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const arr = [...prev];
        arr.unshift(arr.pop()!);
        return arr;
      });
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [intervalDuration]);

  return (
    <div
      className="relative flex justify-center"
      style={{
        height: `calc(${cardSize.height} + ${cards.length * dynamicOffset}px)`,
        width: cardSize.width,
        transform: 'translateZ(0)',
      }}
    >
      {/* Only animate top 3 cards for performance */}
      {cards.slice(0, 3).map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute bg-card rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl border border-muted/30 flex flex-col justify-between text-left overflow-hidden"
          style={{
            transformOrigin: "top center",
            height: cardSize.height,
            width: cardSize.width,
            willChange: index === 0 ? 'transform' : 'auto',
          }}
          animate={{
            top: index * -dynamicOffset,
            scale: 1 - index * dynamicScale,
            zIndex: cards.length - index,
          }}
          transition={{ 
            type: "tween", 
            duration: 0.4, 
            ease: "easeOut" 
          }}
        >
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <div className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-card-foreground font-sans">
              {card.name}
            </div>
            <div className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed font-sans">
              {card.content}
            </div>

            {/* Image Section */}
            <div className="mt-2 sm:mt-3">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-32 sm:h-40 md:h-44 lg:h-48 rounded-lg border border-muted/20 object-contain bg-muted/10 shadow-md grayscale"
                loading="lazy"
              />
            </div>
          </div>

          <div className="pt-2 sm:pt-3 border-t border-muted/20 mt-2 sm:mt-4">
            <p className="text-card-foreground font-medium text-xs sm:text-sm md:text-base font-sans">
              {card.designation}
            </p>
          </div>
        </motion.div>
      ))}
      {/* Render remaining cards without animation */}
      {cards.slice(3).map((card, index) => (
        <div
          key={card.id}
          className="absolute bg-card rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl border border-muted/30 flex flex-col justify-between text-left overflow-hidden opacity-0"
          style={{
            transformOrigin: "top center",
            height: cardSize.height,
            width: cardSize.width,
            top: (index + 3) * -dynamicOffset,
            transform: `scale(${1 - (index + 3) * dynamicScale})`,
            zIndex: cards.length - (index + 3),
          }}
        />
      ))}
    </div>
  );
});
