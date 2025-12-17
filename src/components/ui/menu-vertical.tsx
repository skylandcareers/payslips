"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type MenuItem = {
  label: string;
  href: string;
};

interface MenuVerticalProps {
  menuItems: MenuItem[];
  color?: string;
  skew?: number;
}

const MotionLink = motion(Link);

export const MenuVertical = ({
  menuItems = [],
  color = "hsl(var(--primary))",
  skew = 0,
}: MenuVerticalProps) => {
  return (
    <div className="flex flex-col text-left">
      {menuItems.map((item, index) => (
        <MotionLink
          key={index}
          to={item.href}
          className="group relative overflow-hidden py-3 text-lg font-medium text-white/80 transition-colors hover:text-white border-b border-white/10 last:border-b-0"
          initial="initial"
          whileHover="hover"
        >
          <motion.span
            className="absolute left-0 z-0 h-full w-full origin-left"
            style={{ backgroundColor: color, skewX: `${skew}deg` }}
            variants={{
              initial: { scaleX: 0 },
              hover: { scaleX: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />

          <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-2">
            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            {item.label}
          </span>
        </MotionLink>
      ))}
    </div>
  );
};
