import { Link } from "react-router";
import { Target, Eye, Heart, Lightbulb, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Counter } from "./Counter";
import { PageHero } from "./PageHero";

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

export function About() {
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
        eyebrow="Our Story"
        title="WE ARE LORINZA ZENIX"
        description="A digital agency born from passion, driven by innovation, and committed to crafting exceptional digital experiences for businesses worldwide."
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
        variants={containerVariants}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 80, alignItems: "center" }}>
            {/* Image */}
            <motion.div style={{ position: "relative", willChange: "transform, opacity" }} variants={cardVariants}>
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
            </motion.div>
            {/* Text */}
            <div>
              <motion.div variants={subheadingVariants}>
                <SectionTag>Who We Are</SectionTag>
              </motion.div>
              <motion.h2 style={{
                ...sora, color: C.light,
                fontSize: "clamp(1.6rem,3.5vw,2.6rem)",
                fontWeight: 800, textTransform: "uppercase",
                letterSpacing: "-0.02em", lineHeight: 1.15,
                marginBottom: 24, textAlign: "center",
              }}
                variants={headingVariants}
              >
                MORE THAN AN AGENCY — YOUR DIGITAL GROWTH PARTNER
                <span style={{ color: C.accent }}>.</span>
              </motion.h2>
              <motion.p style={{ color: C.support, fontSize: 14.5, lineHeight: 1.85, marginBottom: 18, textAlign: "center" }}
                variants={paragraphVariants}
              >
                Founded in 2014, LorinzaZenix emerged from a simple belief: every business deserves world-class digital experiences, regardless of size. We've spent over a decade perfecting the art of digital transformation.
              </motion.p>
              <motion.p style={{ color: C.support, fontSize: 14.5, lineHeight: 1.85, marginBottom: 36, textAlign: "center" }}
                variants={paragraphVariants}
              >
                Today, we're a full-service digital agency with a team of passionate designers, developers, and strategists working together to build brands that resonate, websites that convert, and campaigns that deliver real ROI.
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
            fontSize: "clamp(1.8rem,4.5vw,3.2rem)",
            fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "-0.02em", lineHeight: 1.15,
            marginBottom: 20,
          }}
            variants={headingVariants}
          >
            YOU AREN'T JUST HIRING AN AGENCY — YOU'RE CHOOSING A PARTNER IN YOUR SUCCESS
            <span style={{ color: C.accent }}>.</span>
          </motion.h2>
          <motion.p style={{ color: C.accent, fontSize: 15.5, lineHeight: 1.85, maxWidth: 620, margin: "0 auto" }}
            variants={paragraphVariants}
          >
            We genuinely invest in your success at every stage. Every project is personal to us, and we measure our success by the growth we drive for you.
          </motion.p>
        </div>
      </motion.section>

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
              fontSize: "clamp(1.8rem,4vw,3rem)",
              fontWeight: 800, textTransform: "uppercase",
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
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(65, 90, 119, 0.15) 0%, transparent 70%)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto" }}>
          <motion.h2 style={{
            ...sora, color: C.light,
            fontSize: "clamp(1.8rem,4vw,2.8rem)",
            fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "-0.02em", lineHeight: 1.15,
            marginBottom: 20,
          }}
            variants={headingVariants}
          >
            LET'S BUILD SOMETHING GREAT TOGETHER
            <span style={{ color: C.accent }}>.</span>
          </motion.h2>
          <motion.p style={{ color: C.support, fontSize: 15.5, lineHeight: 1.8, marginBottom: 36 }}
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
