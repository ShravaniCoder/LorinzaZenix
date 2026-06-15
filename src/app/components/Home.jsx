import { useState } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import {
  Search, Target, Rocket, Palette, Code2, Megaphone, Monitor, Star, ChevronRight,
  MonitorSmartphone,
  Globe,
  Lightbulb,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Counter } from "./Counter";
<<<<<<< HEAD
import officeSpace from "../../images/Office space.png";
=======
import heroImage from "../../assets/hero.png";
>>>>>>> 976c3397 (hero image)
import brandingImage from "../../images/Branding.png";
import uiuxImage from "../../images/UI UX.png";
import seoImage from "../../images/SEO.png";
import socialImage from "../../images/Social media.png";
import webDevImage from "../../images/WEB DEV.png";
import strategyImage from "../../images/Strategy.png";

const serviceImages = {
  branding: brandingImage,
  uiux: uiuxImage,
  seo: seoImage,
  social: socialImage,
  webdev: webDevImage,
  strategy: strategyImage
};

const MotionLink = motion(Link);

const C = { dark: "#0D1B2A", secondary: "#1B263B", accent: "#415A77", support: "#778DA9", light: "#E0E1DD", blue: "#151922" };

const sora = { fontFamily: "'Sora', sans-serif" };

/* ─── shared helpers ─── */
function AccentDot() {
  return <span style={{ color: C.accent }}>.</span>;
}

function SectionTag({ children }) {
  return (
    <p style={{
      ...sora, color: C.support, fontSize: 11, fontWeight: 700,
      letterSpacing: "0.18em", textTransform: "uppercase",
      display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
      marginBottom: 20,
    }}>
      <span style={{ display: "inline-block", width: 28, height: 1.5, backgroundColor: C.accent }} />
      {children}
      <span style={{ display: "inline-block", width: 28, height: 1.5, backgroundColor: C.accent }} />
    </p>
  );
}

/* ─── portfolio items ─── */
const portfolio = [
  { title: "TechVault Brand Identity", cat: "Branding", bg: C.secondary, img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=600&q=80" },
  { title: "NovaPay Finance App", cat: "UI/UX Design", bg: "#101D2C", img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80" },
  { title: "GreenLeaf E-commerce", cat: "Web Dev", bg: "#1B263B", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
  { title: "PulseMetrics Dashboard", cat: "Digital Marketing", bg: "#101D2C", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
  { title: "Luxara Fashion SEO", cat: "SEO Strategy", bg: C.secondary, img: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=600&q=80" },
  { title: "SocialBloom Campaign", cat: "Social Media", bg: "#1B263B", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80" },
];

/* ─── testimonials ─── */
const testimonials = [
  { name: "Sarah Mitchell", role: "CEO, TechVault Inc.", text: "LorinzaZenix transformed our digital presence completely. World-class brand identity that truly speaks to our audience.", stars: 5 },
  { name: "James Okoye", role: "Founder, NovaPay", text: "The UI/UX team crafted an experience our users love. Conversion rate jumped 65% after the redesign. Phenomenal work.", stars: 5 },
  { name: "Priya Sharma", role: "Marketing Director, GreenLeaf", text: "Working with LorinzaZenix was a game-changer. They understand modern digital landscape and deliver real, measurable results.", stars: 5 },
];

const servicesList = [
  { 
    num: "01", 
    title: "BRANDING", 
    cat: "IDENTITY & VISION", 
    desc: "Craft a powerful, cohesive visual and narrative identity system that sets your brand apart in modern markets.", 
    link: "/services#s3", 
    key: "branding"
  },
  { 
    num: "02", 
    title: "UI / UX DESIGN", 
    cat: "DIGITAL EXPERIENCE", 
    desc: "Design intuitive, high-converting digital interfaces backed by user research and iterative testing.", 
    link: "/services#s0", 
    key: "uiux"
  },
  { 
    num: "03", 
    title: "SEO", 
    cat: "GROWTH MARKETING", 
    desc: "Boost organic ranking, build authority, and drive targeted high-intent traffic with custom strategies.", 
    link: "/services#s4", 
    key: "seo"
  },
  { 
    num: "04", 
    title: "SOCIAL MEDIA", 
    cat: "BRAND ENGAGEMENT", 
    desc: "Build a community, run viral social campaigns, and drive conversions across all primary networks.", 
    link: "/services#s5", 
    key: "social"
  },
  { 
    num: "05", 
    title: "DEVELOPMENT", 
    cat: "ENGINEERING", 
    desc: "Engineered for speed, performance, and SEO optimization. Custom codebases designed to scale with ease.", 
    link: "/services#s1", 
    key: "webdev"
  },
  { 
    num: "06", 
    title: "STRATEGY", 
    cat: "BUSINESS ROADMAP", 
    desc: "Align your product development, marketing, and systems to a structured roadmap for long-term growth.", 
    link: "/services", 
    key: "strategy"
  }
];

export function Home() {
  const [activeService, setActiveService] = useState(0);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 160]);
  const textY = useTransform(scrollY, [0, 800], [0, 60]);
  const bgYImage = useTransform(scrollY, [0, 800], [0, 80]);

  // Parallax tilt motion values
  const mouseX = useMotionValue(250);
  const mouseY = useMotionValue(230);
  
  const springConfig = { damping: 30, stiffness: 220, mass: 0.5 };

  // Parallax tilt transforms: subtle 2 degrees
  const tiltX = useSpring(useTransform(mouseY, [0, 460], [2, -2]), springConfig);
  const tiltY = useSpring(useTransform(mouseX, [0, 500], [-2, 2]), springConfig);

  const handlePanelMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handlePanelMouseLeave = () => {
    mouseX.set(250);
    mouseY.set(230);
  };

  // Premium, luxury-style typography variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: "easeOut",
      }
    }
  };

  const subheadingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }
    }
  };

  const fadeInUp = cardVariants;
  const staggerContainer = containerVariants;

  return (
    <div style={{ backgroundColor: C.dark }}>

      {/* ══════════════════════════════════════════
          SECTION 1 — HERO  (WokWok: full-screen dark, center text)
      ══════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          textAlign: "center",
          padding: "120px 24px 100px",
          backgroundColor: "#070B13", // Luxury dark deep blue-black base
        }}
      >
        {/* Dedicated Background Image Layer */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${officeSpace})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            y: bgYImage,
            zIndex: 0,
            filter: "brightness(0.37) contrast(0.98)",
            pointerEvents: "none",
          }}
        />

        {/* Navy Overlay & Radial Vignette Layer */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
              radial-gradient(circle at 50% 50%, rgba(3, 12, 35, 0.10) 0%, rgba(1, 8, 24, 0.65) 100%),
              linear-gradient(180deg, rgba(2, 10, 28, 0.60) 0%, rgba(3, 12, 35, 0.65) 50%, rgba(1, 8, 24, 0.70) 100%)
            `,
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* Volumetric background depth layers */}

        {/* Blurred glowing orb 1 (Cyan/Blue) */}
        <motion.div
          style={{
            position: "absolute",
            top: "8%",
            right: "12%",
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(65, 90, 119, 0.22) 0%, rgba(13, 27, 42, 0) 70%)",
            filter: "blur(110px)",
            zIndex: 1,
            y: bgY,
            pointerEvents: "none",
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 0.95, 0.8],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Blurred glowing orb 2 (Luxury Gold) */}
        <motion.div
          style={{
            position: "absolute",
            bottom: "12%",
            left: "8%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, rgba(13, 27, 42, 0) 70%)",
            filter: "blur(130px)",
            zIndex: 1,
            y: bgY,
            pointerEvents: "none",
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.75, 0.9, 0.75],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        />

        {/* Volumetric light focal glow right behind the headline */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "750px",
            height: "450px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(65, 90, 119, 0.14) 0%, rgba(13, 27, 42, 0) 65%)",
            filter: "blur(90px)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* Glassmorphic layered depth shapes (Subtle luxury blurred forms) */}
        <motion.div
          style={{
            position: "absolute",
            top: "18%",
            left: "14%",
            width: "220px",
            height: "220px",
            borderRadius: "40px",
            background: "rgba(255, 255, 255, 0.012)",
            border: "1px solid rgba(255, 255, 255, 0.025)",
            backdropFilter: "blur(8px)",
            zIndex: 1,
            rotate: 45,
            y: bgY,
            pointerEvents: "none",
          }}
          animate={{
            rotate: [45, 55, 45],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          style={{
            position: "absolute",
            bottom: "22%",
            right: "10%",
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            background: "rgba(65, 90, 119, 0.015)",
            border: "1px solid rgba(65, 90, 119, 0.035)",
            backdropFilter: "blur(12px)",
            zIndex: 1,
            y: bgY,
            pointerEvents: "none",
          }}
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Hero Image Layer (visible over animations, fading into background) */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${officeSpace})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.22,
            zIndex: 2, // Over the animations (zIndex: 1)
            pointerEvents: "none",
            mixBlendMode: "lighten",
            maskImage: "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
          }}
        />

        {/* Hero Content */}
        <motion.div
          style={{
            position: "relative",
            zIndex: 3,
            maxWidth: "960px",
            y: textY,
          }}
        >
          {/* Top tagline / Consultation request */}
          <motion.p
            style={{
              ...sora,
              color: C.accent,
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            GET FREE CONSULTATION
          </motion.p>

          {/* Headline (Word-by-word reveal) */}
          <h1
            className=""
            style={{
               ...sora,
              color: C.light,
              fontSize: "clamp(1rem, 4.2vw, 3.6rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              marginBottom: "28px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              rowGap: "0.15em",
              columnGap: "0.22em",
            }}
          >
            {"WE BUILD BRANDS THAT MOVE PEOPLE AND MARKETS".split(" ").map((word, idx) => (
              <span key={idx} style={{ display: "inline-block", overflow: "hidden", paddingBottom: "0.05em" }}>
                <motion.span
                  style={{ display: "inline-block" }}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1.0,
                    delay: idx * 0.05, // 50ms stagger
                    ease: [0.16, 1, 0.3, 1], // easeOutExpo
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 9 * 0.05 + 0.4 }}
            >
              <AccentDot />
            </motion.span>
          </h1>

          {/* Subheadline (Fade-in after headline completion) */}
          <motion.p
            className="font-roboto font-semibold"
            style={{
              color: C.support,
              fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
              lineHeight: 1.8,
              maxWidth: "700px",
              margin: "0 auto 44px",
            }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.85, // after headline animation mostly completes
              ease: "easeOut",
            }}
          >
            At LorinzaZenix, we don't just design—we define. We blend
            creativity, technology, and strategy to build powerful identities
            that inspire trust, spark engagement, and drive measurable business
            growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 1.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Primary Button */}
            <MotionLink
              to="/contact"
              style={{
                ...sora,
                backgroundColor: C.accent,
                color: C.light,
                padding: "14px 36px",
                textDecoration: "none",
                fontSize: "11.5px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: `1.5px solid ${C.accent}`,
                display: "inline-block",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease, color 0.3s ease",
              }}
              whileHover={{
                scale: 1.03,
                backgroundColor: "transparent",
                borderColor: "#D4AF37",
                color: "#D4AF37",
                boxShadow: "0 0 20px rgba(212, 175, 55, 0.35)",
              }}
              transition={{ duration: 0.2 }}
            >
              GIVE IT A TRY NOW
            </MotionLink>

            {/* Secondary Button */}
            <MotionLink
              to="/services"
              style={{
                ...sora,
                backgroundColor: "transparent",
                color: C.light,
                padding: "14px 36px",
                textDecoration: "none",
                fontSize: "11.5px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: "1.5px solid rgba(255,255,255,0.4)",
                display: "inline-block",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease, color 0.3s ease",
              }}
              whileHover={{
                scale: 1.03,
                borderColor: "#E0E1DD",
                color: "#E0E1DD",
                boxShadow: "0 0 20px rgba(224, 225, 221, 0.18)",
              }}
              transition={{ duration: 0.2 }}
            >
              OUR SERVICES
            </MotionLink>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={{
            position: "absolute",
            bottom: "36px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            pointerEvents: "none",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <div
            style={{
              width: "1px",
              height: "40px",
              background: `linear-gradient(${C.accent}, transparent)`,
            }}
          />
          <span
            style={{
              color: C.accent,
              fontSize: "10px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — INVESTMENT STATEMENT  (WokWok: light bg, large bold text)
      ══════════════════════════════════════════ */}
      <motion.section
        style={{ backgroundColor: C.light, padding: "100px 32px 80px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div style={{ maxWidth: 1300, margin: "0 auto", textAlign: "center" }}>
          <motion.h2 className="font-playfair" style={{
            color: C.dark,
            fontSize: "clamp(1.8rem, 4.2vw, 3.2rem)",
            fontWeight: 800, lineHeight: 1.15,
            textTransform: "uppercase", letterSpacing: "-0.02em",
            marginBottom: 24,
          }}
            variants={headingVariants}
          >
            We Don't Just Deliver. We Build What Lasts —
          </motion.h2>
          <motion.p style={{
            ...sora,
            color: C.dark,
            fontSize: "clamp(1.8rem, 4.2vw, 2.2rem)",
            fontWeight: 400, lineHeight: 1.15,
            textTransform: " ", letterSpacing: "-0.02em",
            marginBottom: 24,
          }}
            variants={subheadingVariants}
          >
            Digital solutions that don't just look good, they perform
          </motion.p>
          <motion.p className="font-roboto" style={{
            color: C.accent, fontSize: 20.5, lineHeight: 1.85,
            maxWidth: 680, margin: "0 auto",
          }}
            variants={paragraphVariants}
          >
            LorinzaZenix partners with brands at every stage — shaping identity, designing experience, driving visibility, and building the digital infrastructure that turns ambition into momentum.
          </motion.p>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════
          SECTION 2 — DYNAMIC SERVICE SHOWCASE (Split Editorial Layout)
      ══════════════════════════════════════════ */}
      <motion.section
        style={{ backgroundColor: "#070B13", padding: "120px 32px 140px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <motion.div variants={subheadingVariants}>
              <SectionTag>What We Do</SectionTag>
            </motion.div>
            <motion.h2
              style={{
                ...sora, color: C.light,
                fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                fontWeight: 800, textTransform: "uppercase",
                letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 16,
              }}
              variants={headingVariants}
            >
              SERVICES THAT DRIVE REAL RESULTS
              <AccentDot />
            </motion.h2>
            <motion.p style={{ color: C.support, fontSize: 14.5, lineHeight: 1.8, maxWidth: 600, margin: "0 auto" }}
              variants={paragraphVariants}
            >
              End-to-end digital solutions crafted with precision to grow your business and elevate your brand in the digital space.
            </motion.p>
          </div>

          {/* Large Split layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: "60px", alignItems: "start" }}>
            {/* Left side: List of services */}
            <div className="lg:col-span-7" style={{ display: "flex", flexDirection: "column" }}>
              {servicesList.map(({ num, title, cat, desc, link }, idx) => {
                const isActive = activeService === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveService(idx)}
                    onClick={() => setActiveService(idx)}
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                      padding: "24px 0",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {/* Row Header */}
                    <div style={{ display: "flex", alignItems: "baseline", gap: "20px" }}>
                      <span style={{
                        ...sora,
                        color: isActive ? "#D4AF37" : "rgba(255, 255, 255, 0.25)",
                        fontSize: "13px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        transition: "color 0.3s ease",
                      }}>
                        {num}
                      </span>
                      <motion.h3
                        style={{
                          ...sora,
                          color: isActive ? C.light : "rgba(255, 255, 255, 0.35)",
                          fontSize: "clamp(1.5rem, 3.2vw, 2.3rem)",
                          fontWeight: 800,
                          textTransform: "uppercase",
                          letterSpacing: "-0.02em",
                          margin: 0,
                          transition: "color 0.3s ease",
                        }}
                      >
                        {title}
                      </motion.h3>
                    </div>

                    {/* Expanding Description Panel */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          style={{ overflow: "hidden" }}
                        >
                          <div style={{ padding: "16px 0 8px 36px" }}>
                            <p style={{
                              ...sora,
                              color: "#D4AF37",
                              fontSize: "11px",
                              fontWeight: 700,
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              margin: 0,
                            }}>
                              {cat}
                            </p>
                            <p style={{
                              color: C.support,
                              fontSize: "14.5px",
                              lineHeight: "1.7",
                              margin: "12px 0 18px",
                              maxWidth: "480px",
                            }}>
                              {desc}
                            </p>
                            <Link
                              to={link}
                              style={{
                                ...sora,
                                color: "#D4AF37",
                                fontSize: "11px",
                                fontWeight: 700,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                textDecoration: "none",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                                transition: "all 0.2s ease",
                              }}
                              onMouseEnter={e => e.currentTarget.style.color = C.light}
                              onMouseLeave={e => e.currentTarget.style.color = "#D4AF37"}
                            >
                              VIEW DETAILS <ChevronRight size={12} />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right side: Premium Image Showcase Panel */}
            <div className="lg:col-span-5" style={{ position: "sticky", top: "120px" }}>
              <motion.div
                onMouseMove={handlePanelMouseMove}
                onMouseLeave={handlePanelMouseLeave}
                style={{
                  height: "460px",
                  backgroundColor: "rgba(13, 27, 42, 0.4)",
                  border: "1px solid rgba(212, 175, 55, 0.22)", // Thin gold accent border
                  borderRadius: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.55)", // Soft shadow
                  backdropFilter: "blur(12px)",
                  perspective: "1000px",
                  willChange: "transform",
                }}
                variants={cardVariants}
              >
                {/* 3D Tilt Wrapper */}
                <motion.div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    rotateX: tiltX,
                    rotateY: tiltY,
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Subtle border outline */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "28px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      pointerEvents: "none",
                      zIndex: 5,
                    }}
                  />

                  {/* Image Gallery Showcase with Crossfade */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`image-${activeService}`}
                      initial={{ opacity: 0, scale: 1.0 }}
                      animate={{ opacity: 1, scale: 1.03 }}
                      exit={{ opacity: 0, scale: 1.0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 2,
                        borderRadius: "28px",
                        overflow: "hidden",
                        backgroundColor: "#070B13",
                      }}
                    >
                      <img
                        src={serviceImages[servicesList[activeService].key]}
                        alt={servicesList[activeService].title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transformStyle: "preserve-3d",
                        }}
                      />
                      {/* Subtle overlay (5%) */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          backgroundColor: "rgba(7, 11, 19, 0.05)",
                          zIndex: 3,
                          pointerEvents: "none",
                        }}
                      />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </motion.div>

              {/* Showcase CTA footer */}
              <div style={{ marginTop: "32px", textAlign: "center" }}>
                <MotionLink
                  to="/services"
                  style={{
                    ...sora,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "transparent",
                    color: C.light,
                    padding: "13px 36px",
                    borderRadius: 0,
                    border: "2px solid rgba(255, 255, 255, 0.15)",
                    textDecoration: "none",
                    fontSize: "11.5px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                  variants={buttonVariants}
                  whileHover={{
                    backgroundColor: C.accent,
                    color: C.light,
                    borderColor: C.accent,
                    scale: 1.03,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  EXPLORE ALL SERVICES <ChevronRight size={14} />
                </MotionLink>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════
          SECTION 3 — BOLD PHOTO STATEMENT  (WokWok: "ICONIC LOGO HOLDS YOUR VISUAL BRAND.")
      ══════════════════════════════════════════ */}
      <motion.section 
        style={{ position: "relative", overflow: "hidden" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed", // ← PARALLAX
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(13,27,42,0.92)",
            }}
          />
        </div>
        <div style={{
          position: "relative", zIndex: 1,
          padding: "120px 32px",
          textAlign: "center",
          maxWidth: 900, margin: "0 auto",
        }}>
          <motion.h2 style={{
            ...sora,
            color: C.light,
            fontSize: "clamp(2rem, 4.5vw, 3.6rem)",
            fontWeight: 800, lineHeight: 1.15,
            textTransform: "uppercase", letterSpacing: "-0.02em",
            marginBottom: 24,
          }}
            variants={headingVariants}
          >
            YOUR DIGITAL PRESENCE HOLDS YOUR BRAND'S FUTURE
            <AccentDot />
          </motion.h2>
          <motion.p style={{
            color: C.support, fontSize: 15, lineHeight: 1.85,
            maxWidth: 620, margin: "0 auto 40px",
          }}
            variants={paragraphVariants}
          >
            Our digital strategy process is methodical, with multiple rounds of research, innovation, and development. We'll partner with you to build a brand that represents you distinctively and connects with your audience.
          </motion.p>
          <MotionLink to="/about" style={{
            ...sora,
            display: "inline-block",
            backgroundColor: C.accent, color: C.light,
            padding: "14px 36px", borderRadius: 0,
            textDecoration: "none", fontSize: 11.5, fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            border: `1.5px solid ${C.accent}`,
            transition: "box-shadow 0.3s ease, border-color 0.3s ease, color 0.3s ease, background-color 0.3s ease",
          }}
            variants={buttonVariants}
            whileHover={{
              scale: 1.03,
              backgroundColor: "transparent",
              borderColor: C.light,
            }}
          >
            LEARN MORE
          </MotionLink>
        </div>
      </motion.section>




      {/* ══════════════════════════════════════════
          SECTION 5 — PORTFOLIO GRID  (WokWok: colored tiles, mixed sizes)
      ══════════════════════════════════════════ */}
      <motion.section 
        style={{ backgroundColor: C.dark, padding: "0 32px 80px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          {/* Row 1 — 4 cols on desktop, collapses to 2 cols on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 4, marginBottom: 4 }}>
            {portfolio.slice(0, 4).map((p, i) => (
              <motion.div key={i} style={{
                position: "relative", overflow: "hidden",
                backgroundColor: p.bg, cursor: "pointer",
                aspectRatio: "4/3",
                willChange: "transform, opacity",
              }}
                variants={cardVariants}
                onMouseEnter={e => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1.05)"; }}
                onMouseLeave={e => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1)"; }}
              >
                <ImageWithFallback
                  src={p.img}
                  alt={p.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(0deg, rgba(13,27,42,0.85) 0%, transparent 60%)",
                  display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "18px",
                }}>
                  <span style={{ color: C.support, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{p.cat}</span>
                  <span style={{ ...sora, color: C.light, fontSize: 13.5, fontWeight: 700, marginTop: 4 }}>{p.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Row 2 — 2 cols on desktop, collapses to 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 4 }}>
            {portfolio.slice(4).map((p, i) => (
              <motion.div key={i} style={{
                position: "relative", overflow: "hidden",
                backgroundColor: p.bg, cursor: "pointer",
                aspectRatio: "16/7",
                willChange: "transform, opacity",
              }}
                variants={cardVariants}
                onMouseEnter={e => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1.05)"; }}
                onMouseLeave={e => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1)"; }}
              >
                <ImageWithFallback
                  src={p.img}
                  alt={p.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(0deg, rgba(13,27,42,0.85) 0%, transparent 60%)",
                  display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "22px",
                }}>
                  <span style={{ color: C.support, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{p.cat}</span>
                  <span style={{ ...sora, color: C.light, fontSize: 14.5, fontWeight: 700, marginTop: 4 }}>{p.title}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* LOAD MORE */}
          <div style={{ textAlign: "center", paddingTop: 44 }}>
            <MotionLink to="/services" style={{
              ...sora,
              display: "inline-block",
              color: C.accent, fontSize: 11.5, fontWeight: 700,
              letterSpacing: "0.15em", textTransform: "uppercase",
              textDecoration: "none",
              borderBottom: `2px solid ${C.accent}`, paddingBottom: 3,
              transition: "color 0.2s ease, border-color 0.2s ease, transform 0.2s ease",
            }}
              variants={buttonVariants}
              whileHover={{
                color: C.light,
                borderColor: C.light,
                scale: 1.03
              }}
            >
              LOAD MORE
            </MotionLink>
          </div>
        </div>
      </motion.section>



      {/* ══════════════════════════════════════════
          SECTION 7 — "WHAT ARE YOU WAITING FOR?"  (WokWok: dark bg, center text, 5 circles)
      ══════════════════════════════════════════ */}
      <motion.section
        style={{ position: "relative", overflow: "hidden", backgroundColor: C.secondary }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80"
            alt="Tech background"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(13,27,42,0.92)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1240, margin: "0 auto", padding: "100px 32px 0" }}>

          {/* Headline */}
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <motion.h2 style={{
              ...sora,
              color: C.light,
              fontSize: "clamp(2rem, 4.8vw, 3.5rem)",
              fontWeight: 800, lineHeight: 1.1,
              textTransform: "uppercase", letterSpacing: "-0.02em",
              marginBottom: 20,
            }}
              variants={headingVariants}
            >
              WHAT ARE YOU WAITING FOR<span style={{ color: C.accent }}>?</span>
            </motion.h2>
          </div>

          {/* Description */}
          <div style={{ maxWidth: 640, margin: "0 auto 64px", textAlign: "center" }}>
            <motion.p style={{ color: C.support, fontSize: 14.5, lineHeight: 1.8, marginBottom: 12 }}
              variants={paragraphVariants}
            >
              To become a leading brand in the digital space, you need to understand yourself, your vision, and your audience. LorinzaZenix can help you discover your brand story, and the best way to communicate that to the world.
            </motion.p>
            <motion.p style={{ color: C.light, fontSize: 14.5, fontWeight: 600, letterSpacing: "0.05em" }}
              variants={paragraphVariants}
            >
              GET STARTED TODAY!
            </motion.p>
          </div>

          {/* 5 circular icons */}
          <motion.div
            style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", marginBottom: 80 }}
            variants={containerVariants}
          >
            {[
              { Icon: Star, label: "100% SATISFACTION GUARANTEED" },
              { Icon: Monitor, label: "10+ YEARS EXPERIENCE" },
              { Icon: Palette, label: "CUSTOM DIGITAL SOLUTIONS" },
              { Icon: Code2, label: "PRICING TRANSPARENCY" },
              { Icon: Megaphone, label: "BUILDING BRANDS" },
            ].map(({ Icon, label }, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, width: 150, willChange: "transform, opacity" }}
              >
                <div style={{
                  width: 58, height: 58,
                  borderRadius: "50%",
                  backgroundColor: "rgba(65,90,119,0.15)",
                  border: `1.5px solid ${C.accent}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.2s ease",
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = C.accent;
                    e.currentTarget.style.borderColor = C.light;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = "rgba(65,90,119,0.15)";
                    e.currentTarget.style.borderColor = C.accent;
                  }}
                >
                  <Icon size={24} color={C.light} strokeWidth={1.5} />
                </div>
                <p style={{
                  ...sora,
                  color: C.support, fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  textAlign: "center", lineHeight: 1.5,
                }}>
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── STATS BAR (WokWok: 3 dark boxes at bottom) ── */}
        <div style={{ position: "relative", zIndex: 1, borderTop: `1px solid rgba(65,90,119,0.25)` }}>
          <div style={{ maxWidth: 1240, margin: "0 auto" }} className="grid grid-cols-1 md:grid-cols-3">
            {[
              { value: "$999", label: "Starting Price" },
              { value: "14 Days", label: "Avg. Delivery Time" },
              { value: "98%", label: "Satisfaction Guaranteed" },
            ].map(({ value, label }, i) => (
              <div key={i} style={{
                padding: "44px 32px", textAlign: "center",
                borderRight: i < 2 ? `1px solid rgba(65,90,119,0.2)` : "none",
                borderBottom: `1px solid rgba(65,90,119,0.2)`,
                backgroundColor: i === 1 ? "rgba(13, 27, 42, 0.85)" : "#0A141F",
              }}>
                <p style={{ ...sora, color: C.light, fontSize: "clamp(2rem, 3.8vw, 2.8rem)", fontWeight: 800, lineHeight: 1 }}>
                  <Counter value={value} />
                </p>
                <p style={{ color: C.support, fontSize: 12, marginTop: 10, letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>



      {/* ══════════════════════════════════════════
          SECTION 9 — TESTIMONIALS
      ══════════════════════════════════════════ */}
      <motion.section
        style={{ backgroundColor: C.secondary, padding: "110px 32px 200px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", textAlign: "center" }}>
          <motion.div variants={subheadingVariants}>
            <SectionTag>Client Love</SectionTag>
          </motion.div>
          <motion.h2
            style={{
              ...sora, color: C.light,
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800, textTransform: "uppercase",
              letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 60,
            }}
            variants={headingVariants}
          >
            WHAT OUR CLIENTS SAY
            <AccentDot />
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 4 }}>
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                style={{
                  backgroundColor: C.dark,
                  padding: "44px 36px",
                  textAlign: "left",
                  position: "relative",
                  border: `1px solid rgba(65, 90, 119, 0.15)`,
                  cursor: "pointer",
                  willChange: "transform, opacity",
                }}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  borderColor: C.accent,
                  boxShadow: "0 10px 30px rgba(65, 90, 119, 0.12)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div style={{ fontSize: "3.5rem", color: "rgba(65,90,119,0.18)", lineHeight: 1, position: "absolute", top: 20, right: 24, fontFamily: "Georgia, serif" }}>"</div>
                <div style={{ display: "flex", gap: 3, marginBottom: 24 }}>
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star key={si} size={14} color={C.accent} fill={C.accent} />
                  ))}
                </div>
                <p style={{ color: C.support, fontSize: 14, lineHeight: 1.8, marginBottom: 28, fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ borderTop: "1px solid rgba(65,90,119,0.2)", paddingTop: 20 }}>
                  <p style={{ ...sora, color: C.light, fontSize: 14, fontWeight: 700 }}>{t.name}</p>
                  <p style={{ color: C.accent, fontSize: 12, marginTop: 4, letterSpacing: "0.02em" }}>{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    </div>
  );
}
