import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../../styles/HeroSection.css";

const Hero = () => {
  const { scrollYProgress } = useScroll();


const x = useTransform(
  scrollYProgress,
  [0, 1],
  [-300, 300]
);

const opacity = useTransform(
  scrollYProgress,
  [0, 1],
  [1, 0]
);

  return (
    <section className="hero">

      {/* Animated Orange Arc */}
     <motion.div
  className="arc-glow"
  style={{
    x,
    opacity,
  }}
/>

      {/* Content */}
      <div className="hero-content">
        <h1>
          We Build Brands That Move People — and Markets.
        </h1>

        <p>
          At LorinzaZenix, we don’t just design; we define.
          Our digital solutions fuse creativity, technology,
          and strategy to craft identities that inspire trust.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Start Your Free Consultation
          </button>

          <button className="btn-secondary">
            Discover Our Services
          </button>
        </div>
      </div>

    </section>
  );
};

export default Hero;