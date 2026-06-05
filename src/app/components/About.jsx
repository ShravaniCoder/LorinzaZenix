import { Link } from "react-router";
import { Target, Eye, Heart, Lightbulb, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Counter } from "./Counter";

const MotionLink = motion(Link);

const C = { dark: "#0D1B2A", secondary: "#1B263B", accent: "#415A77", support: "#778DA9", light: "#E0E1DD" };
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

const team = [
  { name: "Carter Lorin", role: "Founder & Creative Director", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80" },
  { name: "Okafor Zenith", role: "Head of Technology", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80" },
  { name: "Aria Patel", role: "Lead UI/UX Designer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80" },
  { name: "Marcus Blake", role: "Digital Marketing Strategist", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80" },
];

const milestones = [
  { year: "2014", event: "Founded", desc: "Born with a vision to democratize world-class digital services for businesses of every size." },
  { year: "2016", event: "First 50 Clients", desc: "Delivered exceptional results across 12+ industries, building our reputation for excellence." },
  { year: "2018", event: "Team of 20", desc: "Expanded with top talent in design, development, and digital strategy." },
  { year: "2021", event: "Global Reach", desc: "Began serving clients across North America, Europe, and Asia with premium digital services." },
  { year: "2024", event: "200+ Projects", desc: "Surpassed 200 successful deliveries with a consistent 98% client satisfaction rate." },
];

export function About() {
  // Motion animation parameters
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 }
    }
  };

  return (
    <div style={{ backgroundColor: C.dark }}>

      {/* ── HERO ── */}
      <section style={{
        position: "relative", overflow: "hidden",
        backgroundColor: C.secondary,
        padding: "180px 32px 120px",
        textAlign: "center",
      }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
            alt="About background"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: 0.08 }}
          />
          <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 50%, rgba(65,90,119,0.25) 0%, transparent 70%)` }} />
        </div>
        <motion.div 
          style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <SectionTag>Our Story</SectionTag>
          </motion.div>
          <motion.h1 style={{
            ...sora, color: C.light,
            fontSize: "clamp(2.4rem,7vw,4.5rem)",
            fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "-0.02em", lineHeight: 1.1,
            marginBottom: 24,
          }}
            variants={fadeInUp}
          >
            WE ARE LORINZA ZENIX
            <span style={{ color: C.accent }}>.</span>
          </motion.h1>
          <motion.p style={{ color: C.support, fontSize: 17, lineHeight: 1.8, maxWidth: 580, margin: "0 auto" }}
            variants={fadeInUp}
          >
            A digital agency born from passion, driven by innovation, and committed to crafting exceptional digital experiences for businesses worldwide.
          </motion.p>
        </motion.div>
      </section>

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
            { n: "10+", l: "Years of Excellence" },
            { n: "200+", l: "Projects Delivered" },
            { n: "150+", l: "Happy Clients" },
            { n: "98%", l: "Satisfaction Rate" },
          ].map(({ n, l }, i) => (
            <motion.div key={i} style={{
              padding: "36px 24px", textAlign: "center",
              borderRight: i < 3 ? "1px solid rgba(13, 27, 42, 0.12)" : "none",
              borderBottom: "1px solid rgba(13, 27, 42, 0.12)",
            }}
              variants={fadeInUp}
            >
              <p style={{ ...sora, color: C.dark, fontSize: "2.4rem", fontWeight: 800, lineHeight: 1 }}>
                <Counter value={n} />
              </p>
              <p style={{ color: "rgba(13, 27, 42, 0.75)", fontSize: 11, marginTop: 10, letterSpacing: "0.08em", textTransform: "uppercase" }}>{l}</p>
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
        variants={fadeInUp}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 80, alignItems: "center" }}>
            {/* Image */}
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", top: -16, left: -16,
                width: "100%", height: "100%",
                border: `1px solid rgba(65,90,119,0.3)`,
                borderRadius: 0, zIndex: 0,
              }} />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                alt="LorinzaZenix team"
                style={{ width: "100%", borderRadius: 0, display: "block", position: "relative", zIndex: 1, border: `1px solid rgba(65,90,119,0.2)` }}
              />
              <div style={{
                position: "absolute", bottom: -24, right: -24,
                backgroundColor: C.accent, borderRadius: 0,
                padding: "20px 28px", zIndex: 2, textAlign: "center",
              }}>
                <p style={{ ...sora, color: C.light, fontSize: "1.8rem", fontWeight: 800, lineHeight: 1 }}>2014</p>
                <p style={{ color: "rgba(224,225,221,0.8)", fontSize: 11, marginTop: 4, letterSpacing: "0.05em" }}>FOUNDED</p>
              </div>
            </div>
            {/* Text */}
            <div>
              <SectionTag>Who We Are</SectionTag>
              <h2 style={{
                ...sora, color: C.light,
                fontSize: "clamp(1.6rem,3.5vw,2.6rem)",
                fontWeight: 800, textTransform: "uppercase",
                letterSpacing: "-0.02em", lineHeight: 1.15,
                marginBottom: 24, textAlign: "center",
              }}>
                MORE THAN AN AGENCY — YOUR DIGITAL GROWTH PARTNER
                <span style={{ color: C.accent }}>.</span>
              </h2>
              <p style={{ color: C.support, fontSize: 14.5, lineHeight: 1.85, marginBottom: 18, textAlign: "center" }}>
                Founded in 2014, LorinzaZenix emerged from a simple belief: every business deserves world-class digital experiences, regardless of size. We've spent over a decade perfecting the art of digital transformation.
              </p>
              <p style={{ color: C.support, fontSize: 14.5, lineHeight: 1.85, marginBottom: 36, textAlign: "center" }}>
                Today, we're a full-service digital agency with a team of passionate designers, developers, and strategists working together to build brands that resonate, websites that convert, and campaigns that deliver real ROI.
              </p>
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
        variants={fadeInUp}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{
            ...sora, color: C.dark,
            fontSize: "clamp(1.8rem,4.5vw,3.2rem)",
            fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "-0.02em", lineHeight: 1.15,
            marginBottom: 20,
          }}>
            YOU AREN'T JUST HIRING AN AGENCY — YOU'RE CHOOSING A PARTNER IN YOUR SUCCESS
            <span style={{ color: C.accent }}>.</span>
          </h2>
          <p style={{ color: C.accent, fontSize: 15.5, lineHeight: 1.85, maxWidth: 620, margin: "0 auto" }}>
            We genuinely invest in your success at every stage. Every project is personal to us, and we measure our success by the growth we drive for you.
          </p>
        </div>
      </motion.section>

      {/* ── CORE VALUES ── */}
      <motion.section 
        style={{ backgroundColor: C.secondary, padding: "110px 32px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", textAlign: "center" }}>
          <SectionTag>Our Core Values</SectionTag>
          <motion.h2 
            style={{
              ...sora, color: C.light,
              fontSize: "clamp(1.8rem,4vw,3rem)",
              fontWeight: 800, textTransform: "uppercase",
              letterSpacing: "-0.02em", lineHeight: 1.15,
              marginBottom: 60,
            }}
            variants={fadeInUp}
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
                }}
                variants={fadeInUp}
                whileHover={{
                  y: -6,
                  borderColor: C.accent,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: 0,
                  backgroundColor: "rgba(65,90,119,0.18)",
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

      {/* ── TEAM ── */}
      <motion.section 
        style={{ backgroundColor: C.light, padding: "110px 32px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", textAlign: "center" }}>
          <SectionTag>The Team</SectionTag>
          <motion.h2 
            style={{
              ...sora, color: C.dark,
              fontSize: "clamp(1.8rem,4vw,3rem)",
              fontWeight: 800, textTransform: "uppercase",
              letterSpacing: "-0.02em", lineHeight: 1.15,
              marginBottom: 60,
            }}
            variants={fadeInUp}
          >
            THE MINDS BEHIND THE MAGIC
            <span style={{ color: C.accent }}>.</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 4 }}>
            {team.map((m, i) => (
              <motion.div 
                key={i} 
                style={{
                  backgroundColor: "#FFFFFF",
                  overflow: "hidden",
                  cursor: "pointer",
                  border: `1.5px solid rgba(13, 27, 42, 0.12)`,
                }}
                variants={fadeInUp}
                whileHover={{
                  y: -6,
                  boxShadow: "0 15px 35px rgba(13,27,42,0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={m.img}
                      alt={m.name}
                      style={{ width: "100%", height: 280, objectFit: "cover", objectPosition: "top", display: "block" }}
                    />
                  </motion.div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 90, background: "linear-gradient(0deg, #FFFFFF, transparent)", pointerEvents: "none" }} />
                </div>
                <div style={{ padding: "20px 24px", textAlign: "left" }}>
                  <p style={{ ...sora, color: C.dark, fontSize: "1rem", fontWeight: 700 }}>{m.name}</p>
                  <p style={{ color: C.accent, fontSize: 12, marginTop: 4, letterSpacing: "0.04em", textTransform: "uppercase" }}>{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── MILESTONE TIMELINE ── */}
      <motion.section 
        style={{ backgroundColor: C.secondary, padding: "110px 32px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <SectionTag>Our Journey</SectionTag>
          <motion.h2 
            style={{
              ...sora, color: C.light,
              fontSize: "clamp(1.8rem,4vw,3rem)",
              fontWeight: 800, textTransform: "uppercase",
              letterSpacing: "-0.02em", lineHeight: 1.15,
              marginBottom: 60,
            }}
            variants={fadeInUp}
          >
            A DECADE OF DIGITAL EXCELLENCE
            <span style={{ color: C.accent }}>.</span>
          </motion.h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {milestones.map(({ year, event, desc }, i) => (
              <motion.div 
                key={i} 
                style={{
                  display: "flex", alignItems: "flex-start", gap: 0,
                  textAlign: "left",
                }}
                variants={fadeInUp}
              >
                {/* Year column */}
                <div style={{ width: 100, flexShrink: 0, paddingTop: 28 }}>
                  <p style={{ ...sora, color: C.light, fontSize: "1.2rem", fontWeight: 800 }}>{year}</p>
                </div>
                {/* Spine */}
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 28 }}>
                  <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: C.accent, border: `2px solid ${C.dark}`, outline: `2px solid ${C.accent}`, flexShrink: 0 }} />
                  {i < milestones.length - 1 && <div style={{ width: 2, flex: 1, minHeight: 64, backgroundColor: "rgba(65,90,119,0.25)", marginTop: 6 }} />}
                </div>
                {/* Content */}
                <div style={{ flex: 1, padding: "20px 0 36px 32px", borderBottom: i < milestones.length - 1 ? "1px solid rgba(65,90,119,0.15)" : "none" }}>
                  <p style={{ ...sora, color: C.light, fontSize: "1.05rem", fontWeight: 700, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.02em" }}>{event}</p>
                  <p style={{ color: C.support, fontSize: 14, lineHeight: 1.8 }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── CTA ── */}
      <motion.section 
        style={{
          backgroundColor: C.light, padding: "110px 32px", textAlign: "center",
          position: "relative", overflow: "hidden",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(65,90,119,0.08) 0%, transparent 70%)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{
            ...sora, color: C.dark,
            fontSize: "clamp(1.8rem,4vw,2.8rem)",
            fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "-0.02em", lineHeight: 1.15,
            marginBottom: 20,
          }}>
            LET'S BUILD SOMETHING GREAT TOGETHER
            <span style={{ color: C.accent }}>.</span>
          </h2>
          <p style={{ color: "rgba(13, 27, 42, 0.75)", fontSize: 15.5, lineHeight: 1.8, marginBottom: 36 }}>
            Ready to take your brand to the next level? We'd love to hear about your project.
          </p>
          <MotionLink to="/contact" style={{
            ...sora,
            display: "inline-flex", alignItems: "center", gap: 10,
            backgroundColor: C.accent, color: C.light,
            padding: "14px 36px", borderRadius: 0,
            textDecoration: "none", fontSize: 11.5, fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            border: `2px solid ${C.accent}`,
          }}
            whileHover={{
              scale: 1.03,
              backgroundColor: "transparent",
              color: C.dark,
              borderColor: C.dark,
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
