import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface StatCounterProps {
  value: string;
  label: string;
  index: number;
}

export function StatCounter({ value, label, index }: StatCounterProps) {
  const { ref, isInView } = useScrollAnimation();
  const [displayValue, setDisplayValue] = useState("0");
  
  // Extract the numeric part and suffix (e.g., "40+" -> 40, "+")
  const numericPart = parseInt(value.replace(/\D/g, "")) || 0;
  const suffix = value.replace(/\d/g, "");

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500;
      const increment = numericPart / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericPart) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start) + suffix);
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, numericPart, suffix, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center p-4 md:p-6"
    >
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2">
        {displayValue}
      </div>
      <div className="text-sm md:text-base text-muted-foreground">
        {label}
      </div>
    </motion.div>
  );
}

export default StatCounter;
