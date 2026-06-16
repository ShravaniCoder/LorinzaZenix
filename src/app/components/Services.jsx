import { Link } from "react-router";
import { Palette, Code2, Megaphone, Monitor, Search, Share2, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { PageHero } from "./PageHero";

const MotionLink = motion(Link);

const C = { dark: "#1E3A56", secondary: "#2D4A6A", accent: "#7FA0C4", support: "#B0C4DA", light: "#E0E1DD" };
const sora = { fontFamily: "'Sora', sans-serif" };

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

const services = [
  {
    Icon: Palette, n: "01",
    title: "UI/UX DESIGN",
    tagline: "Experiences that captivate and convert.",
    desc: "We create intuitive, user-centered digital experiences rooted in research and refined through testing. Every interface is a balance of beauty and function — designed to guide users naturally toward action.",
    deliverables: ["User Research & Persona Development", "Wireframes & Interactive Prototypes", "Visual Design & Design Systems", "Usability Testing & Iteration"],
    img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80",
  },
  {
    Icon: Code2, n: "02",
    title: "WEBSITE DEVELOPMENT",
    tagline: "Built for performance, engineered for growth.",
    desc: "Our development team crafts fast, scalable, and maintainable web solutions using modern technology stacks. From sleek marketing sites to complex web applications, we build with precision and care.",
    deliverables: ["Custom Website Development", "E-commerce Solutions", "CMS Integration (WordPress, Webflow)", "Performance Optimization & SEO Tech"],
    img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
  },
  {
    Icon: Megaphone, n: "03",
    title: "DIGITAL MARKETING",
    tagline: "Campaigns that reach, engage, and convert.",
    desc: "We craft data-driven digital marketing strategies that maximize your ROI. From paid search to content marketing, every campaign is built with clear KPIs and optimized continuously for peak performance.",
    deliverables: ["PPC & Paid Social Advertising", "Content Strategy & Marketing", "Email Marketing Automation", "Analytics & Performance Reporting"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    Icon: Monitor, n: "04",
    title: "BRAND IDENTITY",
    tagline: "Brands that people remember and trust.",
    desc: "Your brand is more than a logo — it's the total impression you make on the world. We develop comprehensive brand identities that embody your values, differentiate you from competitors, and build lasting connections.",
    deliverables: ["Logo & Visual Identity Design", "Brand Guidelines & Style Guide", "Brand Messaging & Voice", "Stationery & Collateral Design"],
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    Icon: Search, n: "05",
    title: "SEO OPTIMIZATION",
    tagline: "Rank higher. Get found. Grow faster.",
    desc: "Our SEO specialists implement proven strategies that improve your organic rankings and drive qualified traffic. We focus on sustainable, white-hat techniques that deliver long-term results.",
    deliverables: ["Technical SEO Audit & Fixes", "Keyword Research & Strategy", "On-Page & Off-Page Optimization", "Local SEO & Google Business Profile"],
    img: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=800&q=80",
  },
  {
    Icon: Share2, n: "06",
    title: "SOCIAL MEDIA MANAGEMENT",
    tagline: "Build community. Drive loyalty. Grow revenue.",
    desc: "We manage your social media presence with strategic content creation, community management, and paid social campaigns that turn followers into fans and fans into paying customers.",
    deliverables: ["Social Media Strategy & Audit", "Content Creation & Calendar", "Community Management", "Paid Social Campaigns (Meta, LinkedIn)"],
    img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80",
  },
];

export function Services() {
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

      <PageHero
        eyebrow="What We Offer"
        title="SERVICES ENGINEERED FOR IMPACT"
        description="From concept to launch and beyond — end-to-end digital solutions that transform your vision into measurable business growth."
        image="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1920&q=80"
        alt="Digital product design and development workspace"
      />

      {/* ── QUICK NAV PILLS ── */}
      <motion.section 
        style={{ backgroundColor: C.light, padding: "48px 32px 32px", borderBottom: `1px solid rgba(30, 58, 86, 0.1)` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
          {services.map(({ Icon, title }, i) => (
            <motion.a key={i} href={`#s${i}`} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              backgroundColor: "#FFFFFF",
              border: `1px solid rgba(30, 58, 86, 0.12)`,
              borderRadius: 0, padding: "10px 20px",
              color: C.dark, textDecoration: "none", fontSize: 12, fontWeight: 700,
              fontFamily: "Sora, sans-serif",
              letterSpacing: "0.05em", textTransform: "uppercase",
              transition: "all 0.2s ease",
              willChange: "transform, opacity",
            }}
              variants={buttonVariants}
              whileHover={{
                backgroundColor: C.accent,
                color: C.light,
                borderColor: C.accent,
                scale: 1.03
              }}
            >
              <Icon size={13} /> {title}
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* ── SERVICE DETAIL SECTIONS ── */}
      {services.map(({ Icon, n, title, tagline, desc, deliverables, img }, i) => (
        <section 
          key={i} 
          id={`s${i}`} 
          style={{
            backgroundColor: i % 2 === 0 ? C.dark : C.light,
            padding: "100px 32px",
            borderBottom: `1px solid ${i % 2 === 0 ? "rgba(127, 160, 196,0.15)" : "rgba(30, 58, 86,0.1)"}`,
          }}
        >
          <div style={{ maxWidth: 1240, margin: "0 auto" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 80, alignItems: "center" }}>
              {/* Content */}
              <motion.div 
                style={{ order: i % 2 === 0 ? 0 : 1 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { duration: 0.65, delay: 0.45, ease: [0.16, 1, 0.3, 1] } 
                  }
                }}
              >
                <p style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16, fontFamily: "Sora, sans-serif" }}>
                  {n} — SERVICE
                </p>
                <div style={{
                  width: 52, height: 52, borderRadius: 0,
                  backgroundColor: i % 2 === 0 ? "rgba(127, 160, 196,0.18)" : "rgba(127, 160, 196,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 24,
                }}>
                  <Icon size={22} color={i % 2 === 0 ? C.light : C.accent} strokeWidth={1.5} />
                </div>
                <h2 style={{
                  ...sora, color: i % 2 === 0 ? C.light : C.dark,
                  fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                  fontWeight: 800, textTransform: "uppercase",
                  letterSpacing: "-0.02em", lineHeight: 1.15,
                  marginBottom: 12,
                }}>
                  {title}
                </h2>
                <p style={{ color: i % 2 === 0 ? C.support : C.accent, fontSize: 14.5, fontStyle: "italic", marginBottom: 20 }}>{tagline}</p>
                <p style={{ color: i % 2 === 0 ? C.support : "rgba(30, 58, 86, 0.75)", fontSize: 14.5, lineHeight: 1.85, marginBottom: 32 }}>{desc}</p>

                <motion.div style={{ marginBottom: 36 }} variants={staggerContainer}>
                  <p style={{ ...sora, color: i % 2 === 0 ? C.light : C.dark, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                    What's Included:
                  </p>
                  {deliverables.map((d, di) => (
                    <motion.div key={di} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}
                      variants={fadeInUp}
                    >
                      <CheckCircle size={15} color={C.accent} style={{ flexShrink: 0, marginTop: 3 }} />
                      <span style={{ color: i % 2 === 0 ? C.support : "rgba(30, 58, 86, 0.75)", fontSize: 14 }}>{d}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <MotionLink to="/contact" style={{
                  ...sora,
                  display: "inline-flex", alignItems: "center", gap: 10,
                  backgroundColor: C.accent, color: C.light,
                  padding: "13px 32px", borderRadius: 0,
                  textDecoration: "none", fontSize: 11.5, fontWeight: 700,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  border: `2px solid ${C.accent}`,
                }}
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: "transparent",
                    borderColor: i % 2 === 0 ? C.light : C.dark,
                    color: i % 2 === 0 ? C.light : C.dark,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  GET A QUOTE <ArrowRight size={13} />
                </MotionLink>
              </motion.div>

              {/* Image */}
              <motion.div 
                style={{ order: i % 2 === 0 ? 1 : 0, position: "relative" }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0, x: i % 2 === 0 ? 50 : -50 },
                  visible: { 
                    opacity: 1, 
                    x: 0, 
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
                  }
                }}
              >
                <div style={{
                  position: "absolute",
                  top: -16, left: i % 2 === 0 ? -16 : "auto",
                  right: i % 2 !== 0 ? -16 : "auto",
                  width: "100%", height: "100%",
                  border: `1px solid ${i % 2 === 0 ? "rgba(127, 160, 196,0.3)" : "rgba(30, 58, 86,0.12)"}`, borderRadius: 0, zIndex: 0,
                }} />
                <motion.div
                  style={{ width: "100%", borderRadius: 0, overflow: "hidden", position: "relative", zIndex: 1, border: `1px solid ${i % 2 === 0 ? "rgba(127, 160, 196,0.2)" : "rgba(30, 58, 86,0.1)"}` }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                >
                  <ImageWithFallback
                    src={img}
                    alt={title}
                    style={{ width: "100%", height: 400, objectFit: "cover", display: "block" }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* ── BOLD STATEMENT ── */}
      <motion.section 
        style={{ backgroundColor: C.dark, padding: "100px 32px", textAlign: "center" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <motion.h2 style={{
            ...sora, color: C.light,
            fontSize: "clamp(1.8rem,4.5vw,3.2rem)",
            fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "-0.02em", lineHeight: 1.15,
            marginBottom: 20,
          }}
            variants={headingVariants}
          >
            EVERY SERVICE WE OFFER IS DESIGNED WITH ONE GOAL — YOUR GROWTH
            <span style={{ color: C.accent }}>.</span>
          </motion.h2>
          <motion.p style={{ color: C.support, fontSize: 15.5, lineHeight: 1.85, maxWidth: 620, margin: "0 auto 36px" }}
            variants={paragraphVariants}
          >
            We combine strategy, design, and technology to deliver results that matter to your business.
          </motion.p>
          <MotionLink to="/contact" style={{
            ...sora,
            display: "inline-flex", alignItems: "center", gap: 10,
            backgroundColor: C.accent, color: C.light,
            padding: "14px 36px", borderRadius: 0,
            textDecoration: "none", fontSize: 11.5, fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            border: `2px solid ${C.accent}`,
          }}
            variants={buttonVariants}
            whileHover={{
              scale: 1.03,
              backgroundColor: "transparent",
              borderColor: C.light,
            }}
            transition={{ duration: 0.2 }}
          >
            START YOUR PROJECT <ArrowRight size={14} />
          </MotionLink>
        </div>
      </motion.section>

      {/* ── PROCESS ── */}
      <motion.section 
        style={{ backgroundColor: C.light, padding: "110px 32px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", textAlign: "center" }}>
          <motion.div variants={subheadingVariants}>
            <SectionTag>Our Process</SectionTag>
          </motion.div>
          <motion.h2 
            style={{
              ...sora, color: C.dark,
              fontSize: "clamp(1.8rem,4vw,3rem)",
              fontWeight: 800, textTransform: "uppercase",
              letterSpacing: "-0.02em", lineHeight: 1.15,
              marginBottom: 60,
            }}
            variants={headingVariants}
          >
            HOW WE MAKE IT HAPPEN
            <span style={{ color: C.accent }}>.</span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6" style={{ gap: 0 }}>
            {[
              { n: "01", t: "Discovery", d: "Study your business, goals, and audience." },
              { n: "02", t: "Strategy", d: "Craft a tailored roadmap aligned to your KPIs." },
              { n: "03", t: "Design", d: "Stunning visuals with intuitive user flows." },
              { n: "04", t: "Development", d: "Clean code, fast performance, fully responsive." },
              { n: "05", t: "Launch", d: "Deploy, test, and go live with confidence." },
              { n: "06", t: "Grow", d: "Monitor, optimize, and drive ongoing results." },
            ].map(({ n, t, d }, i) => (
              <motion.div 
                key={i} 
                style={{
                  backgroundColor: "#FFFFFF",
                  padding: "36px 20px",
                  borderRight: i < 5 ? `1px solid rgba(30, 58, 86,0.12)` : "none",
                  borderBottom: `1px solid rgba(30, 58, 86,0.12)`,
                  textAlign: "center",
                  cursor: "pointer",
                  willChange: "transform, opacity",
                }}
                variants={cardVariants}
                whileHover={{
                  backgroundColor: "rgba(30, 58, 86,0.04)"
                }}
                transition={{ duration: 0.2 }}
              >
                <p style={{ color: "rgba(127, 160, 196,0.2)", fontSize: "2.2rem", fontWeight: 900, lineHeight: 1, marginBottom: 14, fontFamily: "Sora, sans-serif" }}>{n}</p>
                <p style={{ ...sora, color: C.dark, fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>{t}</p>
                <p style={{ color: "rgba(30, 58, 86, 0.75)", fontSize: 13, lineHeight: 1.7 }}>{d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── CTA ── */}
      <motion.section 
        style={{ backgroundColor: C.secondary, padding: "110px 32px", textAlign: "center" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <motion.div variants={subheadingVariants}>
            <SectionTag>Ready to Start?</SectionTag>
          </motion.div>
          <motion.h2 style={{
            ...sora, color: C.light,
            fontSize: "clamp(1.8rem,4vw,2.8rem)",
            fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "-0.02em", lineHeight: 1.15,
            marginBottom: 20,
          }}
            variants={headingVariants}
          >
            LET'S DISCUSS YOUR PROJECT
            <span style={{ color: C.accent }}>.</span>
          </motion.h2>
          <motion.p style={{ color: C.support, fontSize: 15.5, lineHeight: 1.8, marginBottom: 40 }}
            variants={paragraphVariants}
          >
            Book a free 30-minute strategy call and discover how LorinzaZenix can accelerate your digital growth.
          </motion.p>
          <MotionLink to="/contact" style={{
            ...sora,
            display: "inline-flex", alignItems: "center", gap: 10,
            backgroundColor: C.accent, color: C.light,
            padding: "15px 40px", borderRadius: 0,
            textDecoration: "none", fontSize: 11.5, fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            border: `1.5px solid ${C.accent}`,
          }}
            variants={buttonVariants}
            whileHover={{
              scale: 1.03,
              backgroundColor: "transparent",
              borderColor: C.light,
            }}
            transition={{ duration: 0.2 }}
          >
            GET A FREE CONSULTATION <ArrowRight size={14} />
          </MotionLink>
        </div>
      </motion.section>

    </div>
  );
}
