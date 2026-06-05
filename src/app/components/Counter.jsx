import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

export function Counter({ value, duration = 1.6 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Parse prefix, number, and suffix (e.g. "$999", "14 Days", "98%", "10+")
  const match = value.match(/^([^0-9]*)([0-9]+)([^0-9]*)$/);
  
  const prefix = match ? match[1] : "";
  const targetNum = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : "";
  
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(prefix + "0" + suffix);
  
  useEffect(() => {
    if (isInView && match) {
      const controls = animate(count, targetNum, {
        duration: duration,
        ease: [0.16, 1, 0.3, 1], // Premium easeOutExpo
        onUpdate: (latest) => {
          setDisplayValue(prefix + Math.floor(latest).toLocaleString() + suffix);
        }
      });
      return () => controls.stop();
    }
  }, [isInView, targetNum, prefix, suffix, count]);
  
  return <span ref={ref}>{displayValue}</span>;
}
