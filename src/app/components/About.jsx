import { useState } from "react";
import { Link } from "react-router";
import { Target, Eye, Heart, Lightbulb, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Counter } from "./Counter";
import { PageHero } from "./PageHero";

const MotionLink = motion(Link);

const C = { dark: "#1E3A56", secondary: "#2D4A6A", accent: "#7FA0C4", support: "#B0C4DA", light: "#E0E1DD" };
const sora = { fontFamily: "'Sora', sans-serif" };

function SectionTag({ children, dark = false }) {
  return (
    <p style={{
      ...sora, color: dark ? C.accent : C.support, fontSize: 11, fontWeight: 700,
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

export function About() {
  const [processOpen, setProcessOpen] = useState(false);

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
        eyebrow="WHO WE ARE"
        title="BEYOND GROWTH INTO GREATNESS"
        description="We build for what comes after launch."
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80"
        alt="Creative workspace with strategy notes and digital design tools"
      />

      {/* ── STAT ROW ── */}
      <motion.section 
        style={{ backgroundColor: C.light }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }} className="grid grid-cols-2 md:grid-cols-4">
          {[
            { n: "100%", l: "SATISFACTION GUARANTEED" },
            { n: "24 HRS", l: "AVG. RESPONSE TIME" },
            { n: "6", l: "DISCIPLINES UNDER ONE ROOF" },
            { n: "1", l: "TEAM, FULL OWNERSHIP" },
          ].map(({ n, l }, i) => (
            <motion.div key={i} style={{
              padding: "36px 24px", textAlign: "center",
              borderRight: i < 3 ? "1px solid rgba(30, 58, 86, 0.12)" : "none",
              borderBottom: "1px solid rgba(30, 58, 86, 0.12)",
            }}
              variants={fadeInUp}
            >
              <p style={{ ...sora, color: C.dark, fontSize: "2.4rem", fontWeight: 800, lineHeight: 1 }}>
                <Counter value={n} />
              </p>
              <p style={{ color: "rgba(30, 58, 86, 0.75)", fontSize: 11, marginTop: 10, letterSpacing: "0.08em", textTransform: "uppercase" }}>{l}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── WHO WE ARE ── */}
      <motion.section 
        style={{ backgroundColor: C.dark, padding: "110px 32px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 80, alignItems: "center" }}>
            {/* Image */}
            <motion.div style={{ position: "relative", willChange: "transform, opacity" }} variants={cardVariants}>
              <div style={{
                position: "absolute", top: -16, left: -16,
                width: "100%", height: "100%",
                border: `1px solid rgba(127, 160, 196,0.3)`,
                borderRadius: 0, zIndex: 0,
              }} />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                alt="LorinzaZenix team"
                style={{ width: "100%", borderRadius: 0, display: "block", position: "relative", zIndex: 1, border: `1px solid rgba(127, 160, 196,0.2)` }}
              />
            
            </motion.div>
            {/* Text */}
            <div>
              <motion.div variants={subheadingVariants}>
                <SectionTag>Who We Are</SectionTag>
              </motion.div>
              <motion.h2 style={{
                ...sora, color: C.light,
                fontSize: "clamp(1.6rem,3.5vw,2.6rem)",
                fontWeight: 700, textTransform: "uppercase",
                letterSpacing: "-0.02em", lineHeight: 1.15,
                marginBottom: 24, textAlign: "center",
              }}
                variants={headingVariants}
              >
               NOT JUST AN AGENCY
                <span style={{ color: C.accent }}>.</span>
              </motion.h2>
              <motion.p style={{ color: C.support, fontSize: 14.5, lineHeight: 1.85, marginBottom: 18, textAlign: "center" }}
                variants={paragraphVariants}
              >
                LorinzaZenix was built on one belief, that good digital work should be precise, purposeful, and built to last. We don't take briefs and disappear. We stay invested until the work is right.

              </motion.p>
              <motion.p style={{ color: C.support, fontSize: 14.5, lineHeight: 1.85, marginBottom: 36, textAlign: "center" }}
                variants={paragraphVariants}
              >
               Today, we bring together branding, design, SEO, social media, and development as one unified force, not five separate tasks handed to five separate people.
              </motion.p>
              <div style={{ textAlign: "center" }}>
                <MotionLink to="/contact" style={{
                  ...sora,
                  display: "inline-flex", alignItems: "center", gap: 10,
                  backgroundColor: C.accent, color: C.light,
                  padding: "14px 32px", borderRadius: 0,
                  textDecoration: "none", fontSize: 11.5, fontWeight: 700,
                  letterSpacing: "0.08em", textTransform: "uppercase",
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
                  WORK WITH US <ArrowRight size={14} />
                </MotionLink>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── BOLD STATEMENT ── */}
      <motion.section 
        style={{ backgroundColor: C.light, padding: "100px 32px", textAlign: "center" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <motion.h2 style={{
            ...sora, color: C.dark,
            fontSize: "clamp(1.8rem,3.5vw,2.2rem)",
            fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "-0.02em", lineHeight: 1.15,
            marginBottom: 20,
          }}
            variants={headingVariants}
          >
            YOU AREN'T JUST HIRING AN AGENCY, YOU'RE CHOOSING A PARTNER IN YOUR SUCCESS
            <span style={{ color: C.accent }}>.</span>
          </motion.h2>
          <motion.p style={{ color: C.accent,  fontWeight: 500, fontSize: 17.5, lineHeight: 1.85, maxWidth: 720, margin: "0 auto" }}
            variants={paragraphVariants}
          >
            We genuinely invest in your success at every stage. Every project is personal to us, and we measure our success by the growth we drive for you.
          </motion.p>
        </div>
      </motion.section>

      {/* ── YOUR DIGITAL PRESENCE + SEE HOW WE DO IT ── */}
      <motion.section
        style={{ position: "relative", overflow: "hidden" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed",
        }}>
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(30,58,86,0.92)" }} />
        </div>
        <div style={{
          position: "relative", zIndex: 1,
          padding: "120px 32px", textAlign: "center",
          maxWidth: 900, margin: "0 auto",
        }}>
          <motion.h2 style={{
            ...sora, color: C.light,
            fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
            fontWeight: 700, lineHeight: 1.15,
            textTransform: "uppercase", letterSpacing: "-0.02em",
            marginBottom: 24,
          }} variants={headingVariants}>
            YOUR DIGITAL PRESENCE IS YOUR FIRST IMPRESSION
            <span style={{ color: C.accent }}>.</span>
          </motion.h2>
          <motion.p style={{
            color: C.support, fontSize: 17, lineHeight: 1.85, fontWeight: 700,
            maxWidth: 620, margin: "0 auto 40px",
          }} variants={paragraphVariants}>
            Every touchpoint shapes how people see you. We make sure yours says the right thing, to the right people, at the right time.
          </motion.p>
          <motion.button
            type="button"
            onClick={() => setProcessOpen((o) => !o)}
            aria-expanded={processOpen}
            style={{
              ...sora, display: "inline-block", cursor: "pointer",
              backgroundColor: C.accent, color: C.light,
              padding: "14px 36px", borderRadius: 0,
              fontSize: 11.5, fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              border: `1.5px solid ${C.accent}`,
              transition: "box-shadow 0.3s ease, border-color 0.3s ease, color 0.3s ease, background-color 0.3s ease",
            }}
            variants={buttonVariants}
            whileHover={{ scale: 1.03, backgroundColor: "transparent", borderColor: C.light }}
          >
            SEE HOW WE DO IT
          </motion.button>
        </div>
      </motion.section>

      {/* ── EXPANDABLE "HOW WE WORK" PROCESS ── */}
      <AnimatePresence initial={false}>
        {processOpen && (
          <motion.section
            key="how-we-work"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            style={{
              overflow: "hidden", position: "relative",
              background: "linear-gradient(180deg, #152B40 0%, #1E3A56 45%, #172F47 100%)",
              borderTop: `1px solid rgba(127,160,196,0.25)`,
            }}
          >
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(127,160,196,0.08) 0%, transparent 70%)",
            }} />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              style={{
                position: "relative", zIndex: 1,
                padding: "clamp(72px, 9vw, 120px) 32px clamp(64px, 8vw, 100px)",
                maxWidth: 1100, margin: "0 auto", textAlign: "center",
              }}
            >
              <SectionTag>How We Work</SectionTag>
              <h2 style={{
                ...sora, color: C.light,
                fontSize: "clamp(2rem, 3.5vw, 2.4rem)",
                fontWeight: 800, lineHeight: 1.15,
                textTransform: "uppercase", letterSpacing: "-0.02em",
                marginBottom: 16,
              }}>
                A Process Built For Results<span style={{ color: C.accent }}>.</span>
              </h2>
              <p style={{
                color: C.support, fontSize: 14.5, lineHeight: 1.8,
                maxWidth: 540, margin: "0 auto clamp(48px, 6vw, 72px)",
              }}>
                Simple steps. No surprises. Just work that delivers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "clamp(16px, 2vw, 24px)", textAlign: "left" }}>
                {[
                  { n: "01", title: "Brief", body: "We start by listening. Understanding your business, your goals, and what success actually looks like for you — before a single thing gets designed or written." },
                  { n: "02", title: "Strategy", body: "Every decision needs a reason behind it. We map out the direction — positioning, channels, messaging — so execution has a clear foundation to build on." },
                  { n: "03", title: "Design & Build", body: "This is where thinking becomes visible. Branding, UI/UX, development, content — crafted with precision and built to perform in the real world." },
                  { n: "04", title: "Deliver & Grow", body: "We don't hand off and disappear. We launch, track, refine, and stay invested in the outcome — because delivery is the beginning, not the end." },
                ].map((step) => (
                  <div
                    key={step.n}
                    style={{
                      position: "relative", overflow: "hidden",
                      borderRadius: 20,
                      border: "1px solid rgba(255,255,255,0.07)",
                      background: "linear-gradient(150deg, rgba(45,74,106,0.55) 0%, rgba(30,58,86,0.30) 100%)",
                      backdropFilter: "blur(10px)",
                      padding: "clamp(30px, 3.5vw, 44px)",
                      transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.4s ease, box-shadow 0.4s ease",
                      willChange: "transform",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px)";
                      e.currentTarget.style.borderColor = "rgba(127,160,196,0.5)";
                      e.currentTarget.style.boxShadow = "0 24px 50px -18px rgba(0,0,0,0.5), 0 0 24px rgba(127,160,196,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <span style={{
                      ...sora, position: "absolute", top: 8, right: 18,
                      fontSize: "clamp(60px, 8vw, 96px)", fontWeight: 800,
                      lineHeight: 1, letterSpacing: "-0.04em",
                      color: "rgba(127,160,196,0.08)", pointerEvents: "none", userSelect: "none",
                    }}>{step.n}</span>
                    <p style={{
                      ...sora, color: C.accent, fontSize: 11, fontWeight: 700,
                      letterSpacing: "0.18em", textTransform: "uppercase",
                      marginBottom: 18, position: "relative",
                    }}>Step {step.n}</p>
                    <span style={{ display: "block", width: 32, height: 2, backgroundColor: "rgba(127,160,196,0.55)", marginBottom: 18 }} />
                    <h3 style={{
                      ...sora, color: C.light, fontSize: "clamp(18px, 2vw, 22px)",
                      fontWeight: 700, textTransform: "uppercase",
                      letterSpacing: "0.01em", marginBottom: 14, position: "relative",
                    }}>{step.title}</h3>
                    <p style={{ color: C.support, fontSize: 14.5, lineHeight: 1.8, position: "relative" }}>{step.body}</p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "clamp(52px, 6vw, 76px)" }}>
                <MotionLink to="/contact" style={{
                  ...sora, display: "inline-flex", alignItems: "center", gap: 10,
                  backgroundColor: C.accent, color: C.light,
                  padding: "18px 52px", borderRadius: 0,
                  textDecoration: "none", fontSize: 12.5, fontWeight: 700,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  border: `1.5px solid ${C.accent}`,
                  transition: "box-shadow 0.3s ease, border-color 0.3s ease, color 0.3s ease, background-color 0.3s ease",
                }}
                  whileHover={{ scale: 1.03, backgroundColor: "transparent", borderColor: C.light, color: C.light, boxShadow: "0 0 20px rgba(127,160,196,0.35)" }}
                  transition={{ duration: 0.2 }}
                >
                  Start Your Project <span aria-hidden="true">→</span>
                </MotionLink>
                <div style={{ marginTop: 26 }}>
                  <button
                    type="button"
                    onClick={() => setProcessOpen(false)}
                    style={{
                      ...sora, background: "none", border: "none", cursor: "pointer",
                      color: C.support, fontSize: 11.5, fontWeight: 700,
                      letterSpacing: "0.14em", textTransform: "uppercase",
                      textDecoration: "underline", textUnderlineOffset: 5,
                      textDecorationColor: "rgba(176,196,218,0.5)",
                      transition: "color 0.3s ease, text-decoration-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = C.light; e.currentTarget.style.textDecorationColor = "rgba(224,225,221,0.7)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = C.support; e.currentTarget.style.textDecorationColor = "rgba(176,196,218,0.5)"; }}
                  >
                    Hide it
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ── CORE VALUES ── */}
      <motion.section 
        style={{ backgroundColor: C.secondary, padding: "110px 32px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", textAlign: "center" }}>
          <motion.div variants={subheadingVariants}>
            <SectionTag>Our Core Values</SectionTag>
          </motion.div>
          <motion.h2 
            style={{
              ...sora, color: C.light,
              fontSize: "clamp(1.8rem,4vw,2rem)",
              fontWeight: 700, textTransform: "uppercase",
              letterSpacing: "-0.02em", lineHeight: 1.15,
              marginBottom: 60,
            }}
            variants={headingVariants}
          >
            THE PRINCIPLES THAT GUIDE EVERYTHING WE DO
            <span style={{ color: C.accent }}>.</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 4 }}>
            {[
              { Icon: Target, title: "PURPOSE-DRIVEN", desc: "Every project has a clear purpose. We align our work with your business goals to ensure every effort delivers real outcomes." },
              { Icon: Eye, title: "RADICAL TRANSPARENCY", desc: "No surprises. We communicate clearly, deliver honestly, and keep you fully informed at every stage of the journey." },
              { Icon: Heart, title: "CLIENT FIRST", desc: "Your success is our success. We genuinely care about outcomes and go above and beyond to deliver exceptional value." },
              { Icon: Lightbulb, title: "RELENTLESS INNOVATION", desc: "The digital world evolves fast. We stay ahead of trends to ensure your brand always stands at the cutting edge." },
            ].map(({ Icon, title, desc }, i) => (
              <motion.div 
                key={i} 
                style={{
                  backgroundColor: C.dark,
                  padding: "48px 36px",
                  textAlign: "left",
                  cursor: "pointer",
                  willChange: "transform, opacity",
                }}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  borderColor: C.accent,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: 0,
                  backgroundColor: "rgba(127, 160, 196,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 24,
                }}>
                  <Icon size={22} color={C.light} strokeWidth={1.5} />
                </div>
                <h3 style={{ ...sora, color: C.light, fontSize: "0.95rem", fontWeight: 800, letterSpacing: "0.06em", marginBottom: 12 }}>{title}</h3>
                <p style={{ color: C.support, fontSize: 13.5, lineHeight: 1.75 }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── CTA ── */}
      <motion.section 
        style={{
          backgroundColor: C.secondary, padding: "110px 32px", textAlign: "center",
          position: "relative", overflow: "hidden",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(127, 160, 196, 0.15) 0%, transparent 70%)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto" }}>
          <motion.h2 style={{
            ...sora, color: C.light,
            fontSize: "clamp(1.8rem,3vw,1.4rem)",
            fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "-0.02em", lineHeight: 1.15,
            marginBottom: 20,
          }}
            variants={headingVariants}
          >
            LET'S BUILD SOMETHING GREAT TOGETHER
            <span style={{ color: C.accent }}>.</span>
          </motion.h2>
          <motion.p style={{ color: C.support,  fontWeight: 500, fontSize: 15.5, lineHeight: 1.8, marginBottom: 36 }}
            variants={paragraphVariants}
          >
            Ready to take your brand to the next level? We'd love to hear about your project.
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
              color: C.light,
              borderColor: C.light,
            }}
            transition={{ duration: 0.2 }}
          >
            START A CONVERSATION <ArrowRight size={14} />
          </MotionLink>
        </div>
      </motion.section>

    </div>
  );
}
