import { useRef, useEffect, useState, useCallback, memo } from "react";
import { Link } from "react-router";
import { Palette, Code2, Megaphone, Monitor, Search, Share2, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { PageHero } from "./PageHero";
import Branding from "../../images/branding.webp";
import UIUX from "../../images/website.webp";
import SEO from "../../images/seo.webp";
import Media from "../../images/social-media.webp";
import Website from "../../images/websiteI.jpg"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const MotionLink = motion(Link);

const C = { dark: "#1E3A56", secondary: "#2D4A6A", accent: "#7FA0C4", support: "#B0C4DA", light: "#E0E1DD" };
const sora = { fontFamily: "'Sora', sans-serif" };

function SectionTag({ children }) {
  return (
    <p style={{
      ...sora, color: C.accent, fontSize: 13, fontWeight: 900,
      letterSpacing: "0.19em", textTransform: "uppercase",
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
    Icon: Monitor,
    n: "01",
    title: "BRANDING",
    tagline: "A BRAND THEY REMEMBER.",
    desc: "Your brand is the feeling people carry after every interaction. We build that — visual identity, tone, positioning — with care, not templates.",
    deliverables: [
      "Logo Design",
      "Brand Guidelines",
      "Typography & Color Systems",
      "Messaging",
      "Positioning",
    ],
    img: Branding,
  },

  {
    Icon: Palette,
    n: "02",
    title: "UI / UX DESIGN",
    tagline: "DESIGN THAT GUIDES.",
    desc: "Every interaction is a small decision your user makes about you. We design experiences that make those decisions easy.",
    deliverables: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Mobile & Desktop UI",
      "Usability Testing",
    ],
    img: UIUX,
  },

  {
    Icon: Search,
    n: "03",
    title: "SEO OPTIMIZATION",
    tagline: "GET FOUND. STAY FOUND.",
    desc: "Sustainable growth in search visibility — built on real strategy, not shortcuts.",
    deliverables: [
      "Technical Audit",
      "Keyword Research",
      "On-Page Optimisation",
      "Search Console Setup",
      "Monthly Reporting",
    ],
    img: SEO
  },

  {
    Icon: Share2,
    n: "04",
    title: "SOCIAL MEDIA",
    tagline: "SHOW UP. STAY RELEVANT.",
    desc: "Consistent, considered content that builds your audience over time.",
    deliverables: [
      "Platform Strategy",
      "Content Creation",
      "Scheduling",
      "Community Management",
      "Analytics",
    ],
    img: Media
  },

  {
    Icon: Code2,
    n: "05",
    title: "DEVELOPMENT",
    tagline: "WEBSITES THAT WORK.",
    desc: "Fast, secure, built to handle real traffic and real growth.",
    deliverables: [
      "Website Design & Development",
      "E-commerce",
      "CMS Integration",
      "Speed Optimisation",
      "Maintenance",
    ],
    img: Website
  },

  {
    Icon: Megaphone,
    n: "06",
    title: "STRATEGY",
    tagline: "CLARITY BEFORE EXECUTION.",
    desc: "We start with research, not assumptions — then build a roadmap that aligns every channel toward one goal.",
    deliverables: [
      "Market Research",
      "Competitor Analysis",
      "Digital Roadmap",
      "Channel Strategy",
      "Growth Planning",
    ],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
];

export function Services() {
  // ── refs / state for the vertical GSAP flip-book ──
  const containerRef = useRef(null);
  const stRef = useRef(null);
  const pageIndexRef = useRef(0);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    const pages = gsap.utils.toArray('.service-page');
    if (!pages.length) return;

    gsap.set(containerRef.current, {
      perspective: 2200,
    });

    gsap.set(pages, {
      transformStyle: 'preserve-3d',
      transformOrigin: 'top center', // pivot at the TOP edge → vertical flip
      backfaceVisibility: 'hidden',
      position: 'absolute',
      inset: 0,
      willChange: 'transform',
      force3D: true,
    });

    pages.forEach((page, i) => {
      gsap.set(page, {
        zIndex: services.length - i,
        rotateX: 0,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 72px',
        end: `+=${window.innerHeight * 0.9 * services.length}`,
        scrub: 0.45,
        pin: true,
        anticipatePin: 1,
        snap: {
          snapTo: 1 / Math.max(1, services.length - 1), // lock to whole-slide steps
          duration: { min: 0.25, max: 0.5 },
          delay: 0.05,
          ease: 'power1.inOut',
        },
        onUpdate: (self) => {
          const newIndex = Math.round(self.progress * Math.max(0, services.length - 1));
          if (pageIndexRef.current !== newIndex) {
            pageIndexRef.current = newIndex;
            setPageIndex(newIndex);
          }
        },
      },
    });

    pages.forEach((page, i) => {
      if (i === pages.length - 1) return;
      // negative rotateX folds the panel "up and away" — top-hinged, like a
      // page on a vertical flip calendar / desk pad
      tl.to(page, {
        rotateX: -180,
        duration: 1,
        ease: 'none',
      }, i);
    });

    stRef.current = tl.scrollTrigger;

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  const goTo = useCallback((i) => {
    setPageIndex(i);
    pageIndexRef.current = i;
    if (stRef.current) {
      const st = stRef.current;
      const progress = i / Math.max(1, services.length - 1);
      const targetScroll = st.start + (st.end - st.start) * progress;
      gsap.to(window, { scrollTo: targetScroll, duration: 0.7, ease: 'power2.out' });
    }
  }, []);

  // Premium, luxury-style typography variants (used outside the pinned flip-book)
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
        title={
          <>
            <span style={{ whiteSpace: "nowrap" }}>
              STRATEGY TO EXECUTION
            </span>
            <br />
            ONE ROOF
          </>
        }
        description="Digital solutions, built with intent."
        image="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1920&q=80"
        alt="Digital product design and development workspace"
      />

      {/* ── QUICK NAV PILLS ── (jump straight into the flip-book) */}
      <motion.section
        style={{ backgroundColor: C.light, padding: "48px 32px 32px", borderBottom: `1px solid rgba(30, 58, 86, 0.1)` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
          {services.map(({ Icon, title }, i) => (
            <motion.button
              key={i}
              onClick={() => goTo(i)}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                backgroundColor: i === pageIndex ? C.accent : "#FFFFFF",
                border: `1px solid rgba(30, 58, 86, 0.12)`,
                borderRadius: 0, padding: "10px 20px",
                color: i === pageIndex ? C.light : C.dark, fontSize: 12, fontWeight: 700,
                fontFamily: "Sora, sans-serif",
                letterSpacing: "0.05em", textTransform: "uppercase",
                transition: "all 0.2s ease",
                willChange: "transform, opacity",
                cursor: "pointer",
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
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* ── VERTICAL GSAP FLIP-BOOK (rotateX, hinged at the top edge) ── */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        style={{ height: '92vh', backgroundColor: C.dark }}
      >
        {/* side dots — jump to any service, mirrors the chapter rail on Menu */}
        <div
          className="hidden lg:flex flex-col items-center gap-3"
          style={{ position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)', zIndex: 50 }}
        >
          {services.map((s, i) => (
            <button
              key={s.n}
              aria-label={`Go to ${s.title}`}
              onClick={() => goTo(i)}
              style={{
                width: i === pageIndex ? 10 : 7,
                height: i === pageIndex ? 10 : 7,
                borderRadius: '50%',
                background: i === pageIndex ? C.accent : 'rgba(224,225,221,0.35)',
                border: 'none',
                transition: 'all 200ms ease',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>

        {services.map((service, i) => (
          <div
            key={service.n}
            className="service-page absolute inset-0 w-full h-full"
            style={{
              zIndex: services.length - i,
              backfaceVisibility: 'hidden',
              backgroundColor: i % 2 === 0 ? C.dark : C.light,
              boxShadow: '0 18px 40px rgba(20,17,15,0.18)',
            }}
          >
            <ServicePanel service={service} index={i} isActive={i === pageIndex} />
          </div>
        ))}
      </div>

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
            fontSize: "clamp(1.8rem,3.5vw,2.2rem)",
            fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "-0.02em", lineHeight: 1.15,
            marginBottom: 20,
          }}
            variants={headingVariants}
          >
            EVERY SERVICE WE OFFER IS DESIGNED WITH ONE GOAL, YOUR GROWTH
            <span style={{ color: C.accent }}>.</span>
          </motion.h2>
          <motion.p style={{ color: C.support, fontSize: 16.5, fontWeight: 500, lineHeight: 1.85, maxWidth: 620, margin: "0 auto 36px" }}
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
              fontSize: "clamp(1.8rem,2vw,2rem)",
              fontWeight: 700, textTransform: "uppercase",
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
            <SectionTag>READY TO BUILD SOMETHING THAT LASTS?</SectionTag>
          </motion.div>
          <motion.h2 style={{
            ...sora, color: C.light,
            fontSize: "clamp(1.8rem,3vw,1.8rem)",
            fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "-0.02em", lineHeight: 1.15,
            marginBottom: 20,
          }}
            variants={headingVariants}
          >
            Every brand starts with one conversation
            <span style={{ color: C.accent }}>.</span>
          </motion.h2>

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

// ─── Memoized panel rendered inside each flipping page ───────────────────────

const ServicePanel = memo(function ServicePanel({ service, index, isActive }) {
  const { Icon, n, title, tagline, desc, deliverables, img } = service;
  const isDark = index % 2 === 0;

  return (
    <div
      className="w-full h-full flex items-center overflow-y-auto"
      style={{ padding: '60px 32px' }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", width: '100%' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 60, alignItems: "center" }}>
          {/* Content */}
          <motion.div
            initial={false}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.4, y: 8 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{ color: C.accent, fontSize: 14, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16, fontFamily: "Sora, sans-serif" }}>
              {n} — SERVICE
            </p>
            <div style={{
              width: 52, height: 52, borderRadius: 0,
              backgroundColor: isDark ? "rgba(127, 160, 196,0.18)" : "rgba(127, 160, 196,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: 24,
            }}>
              <Icon size={22} color={isDark ? C.light : C.accent} strokeWidth={1.5} />
            </div>
            <h2 style={{
              ...sora, color: isDark ? C.light : C.dark,
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: 800, textTransform: "uppercase",
              letterSpacing: "-0.02em", lineHeight: 1.15,
              marginBottom: 12,
            }}>
              {title}
            </h2>
            <p style={{ color: isDark ? C.support : C.accent, fontSize: 16, fontStyle: "italic", marginBottom: 18 }}>{tagline}</p>
            <p style={{ color: isDark ? C.support : "rgba(30, 58, 86, 0.75)", fontSize: 15, lineHeight: 1.8, marginBottom: 26 }}>{desc}</p>

            <div style={{ marginBottom: 28 }}>
              <p style={{ ...sora, color: isDark ? C.light : C.dark, fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
                What's Included:
              </p>
              {deliverables.map((d, di) => (
                <div key={di} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
                  <CheckCircle size={15} color={C.accent} style={{ flexShrink: 0, marginTop: 3 }} />
                  <span style={{ color: isDark ? C.support : "rgba(30, 58, 86, 0.75)", fontSize: 14.5 }}>{d}</span>
                </div>
              ))}
            </div>

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
                borderColor: isDark ? C.light : C.dark,
                color: isDark ? C.light : C.dark,
              }}
              transition={{ duration: 0.2 }}
            >
              GET A QUOTE <ArrowRight size={13} />
            </MotionLink>
          </motion.div>

          {/* Image */}
          <div style={{ position: "relative" }} className="hidden md:block">
            <div style={{
              position: "absolute",
              top: -16, left: isDark ? -16 : "auto",
              right: !isDark ? -16 : "auto",
              width: "100%", height: "100%",
              border: `1px solid ${isDark ? "rgba(127, 160, 196,0.3)" : "rgba(30, 58, 86,0.12)"}`, borderRadius: 0, zIndex: 0,
            }} />
            <div
              style={{ width: "100%", borderRadius: 0, overflow: "hidden", position: "relative", zIndex: 1, border: `1px solid ${isDark ? "rgba(127, 160, 196,0.2)" : "rgba(30, 58, 86,0.1)"}` }}
            >
              <ImageWithFallback
                src={img}
                alt={title}
                style={{ width: "100%", height: 340, objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});