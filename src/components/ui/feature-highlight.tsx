import * as React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureHighlightProps {
  className?: string;
  icon?: React.ReactNode;
  title: string;
  features: React.ReactNode[];
  footer?: React.ReactNode;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const FeatureHighlight = React.forwardRef<HTMLDivElement, FeatureHighlightProps>(
  ({ className, icon, title, features, footer }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn("flex flex-col items-start gap-4", className)}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {icon && (
          <motion.div variants={itemVariants}>{icon}</motion.div>
        )}

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-foreground"
        >
          {title}
        </motion.h2>

        <motion.ul className="space-y-3" variants={containerVariants}>
          {features.map((feature, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="text-muted-foreground text-base md:text-lg"
            >
              {feature}
            </motion.li>
          ))}
        </motion.ul>

        {footer && (
          <motion.div variants={itemVariants}>{footer}</motion.div>
        )}
      </motion.div>
    );
  }
);

FeatureHighlight.displayName = "FeatureHighlight";

export { FeatureHighlight };
