import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Search, Target, Rocket, Palette, Code2, Megaphone, Monitor, Star, ChevronRight,
  MonitorSmartphone,
  Globe,
  Lightbulb, } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import HeroBg from "../../assets/circle.png"
import { Counter } from "./Counter";

const MotionLink = motion(Link);

const C = { dark: "#0D1B2A", secondary: "#1B263B", accent: "#415A77", support: "#778DA9", light: "#E0E1DD" , blue: "#151922" };

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

export function Home() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSent, setFormSent] = useState(false);

  // Motion variants for luxury scroll reveals
  const fadeInUp = {
    hidden: { opacity: 0, y: 35 },
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
      }}
    >
      {/* Background Image */}
      <img
        src={HeroBg}
        className=""
        alt="LorinzaZenix Background"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover top",
          objectPosition: "top center",
          zIndex: 0,
        }}
      />

      {/* Texture Effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(198,161,110,0.15) 0%, transparent 65%)",
        }}
      />

      {/* Hero Content */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 3,
          maxWidth: "900px",
        }}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
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
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          GET FREE CONSULTATION
        </motion.p>

        <motion.h1
          className="font-playfair"
          style={{
            color: C.light,
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
          variants={fadeInUp}
        >
          We Build Brands That Move
          <br />
          People and Markets
          <AccentDot />
        </motion.h1>

        <motion.p
          className="font-roboto font-semibold"
          style={{
            color: C.support,
            fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
            lineHeight: 1.8,
            maxWidth: "700px",
            margin: "0 auto 44px",
          }}
          variants={fadeInUp}
        >
          At LorinzaZenix, we don't just design—we define. We blend
          creativity, technology, and strategy to build powerful identities
          that inspire trust, spark engagement, and drive measurable business
          growth.
        </motion.p>

        <motion.div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
          variants={fadeInUp}
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
            }}
            whileHover={{
              scale: 1.03,
              backgroundColor: "transparent",
              borderColor: "#F4C95D",
              color: "#F4C95D",
              boxShadow: "0 0 20px rgba(244, 201, 93, 0.4)",
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
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
            }}
            whileHover={{
              scale: 1.03,
              borderColor: "#E0E1DD",
              color: "#E0E1DD",
              boxShadow: "0 0 15px rgba(224, 225, 221, 0.15)",
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
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
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
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
        variants={fadeInUp}
      >
        <div style={{ maxWidth: 1300, margin: "0 auto", textAlign: "center" }}>
          <p className="font-playfair" style={{
            color: C.dark,
            fontSize: "clamp(1.8rem, 4.2vw, 3.2rem)",
            fontWeight: 800, lineHeight: 1.15,
            textTransform: "uppercase", letterSpacing: "-0.02em",
            marginBottom: 24,
          }}>
           We Don't Just Deliver. We Build What Lasts — 
          </p>
          <p style={{
            ...sora,
            color: C.dark,
            fontSize: "clamp(1.8rem, 4.2vw, 2.2rem)",
            fontWeight: 400, lineHeight: 1.15,
            textTransform: " ", letterSpacing: "-0.02em",
            marginBottom: 24,
          }}>Digital solutions that don't just look good, they perform</p>
          <p className="font-roboto" style={{
            color: C.accent, fontSize: 20.5, lineHeight: 1.85,
            maxWidth: 680, margin: "0 auto",
          }}>
        LorinzaZenix partners with brands at every stage — shaping identity, designing experience, driving visibility, and building the digital infrastructure that turns ambition into momentum.
          </p>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════
          SECTION 2 — PROCESS CARDS  (WokWok: 3 cols, first card accent bg)
      ══════════════════════════════════════════ */}
      <motion.section
        style={{
          backgroundColor: "#071224",
          padding: "100px 0",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            style={{
              gap: "32px",
            }}
          >
            {[
              {
                Icon: Palette,
                title: "Branding",
                desc: "Craft a powerful identity that resonates with your audience and sets you apart in the market.",
              },
              {
                Icon: MonitorSmartphone,
                title: "UI/UX Design",
                desc: "Design intuitive, elegant experiences that delight users and drive engagement.",
              },
              {
                Icon: Search,
                title: "Search Engine Optimization",
                desc: "Boost visibility and rankings with strategies that bring organic traffic and measurable results.",
              },
              {
                Icon: Megaphone,
                title: "Social Media Marketing",
                desc: "Engage audiences across platforms with campaigns that build trust, loyalty, and conversions.",
              },
              {
                Icon: Globe,
                title: "Website Development",
                desc: "Develop fast, scalable, and secure websites tailored to your brand’s goals.",
              },
              {
                Icon: Lightbulb,
                title: "Digital Strategy",
                desc: "Align creativity and technology with a roadmap that ensures sustainable growth.",
              },
            ].map(({ Icon, title, desc }, i) => (
              <motion.div
                key={i}
                style={{
                  background: "rgba(18, 28, 48, 0.9)",
                  border: "1px solid rgba(59,130,246,0.25)",
                  borderRadius: "18px",
                  padding: "30px",
                  cursor: "pointer",
                  boxShadow: "0 0 20px rgba(59,130,246,0.08)",
                }}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  borderColor: "rgba(96, 165, 250, 0.7)",
                  boxShadow: "0 10px 30px rgba(96, 165, 250, 0.15)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(59,130,246,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Icon
                    size={22}
                    color="#60A5FA"
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3
                  style={{
                    color: "#fff",
                    fontSize: "20px",
                    fontWeight: 700,
                    marginBottom: "12px",
                  }}
                >
                  {title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: "1.8",
                    fontSize: "15px",
                  }}
                >
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════
          SECTION 3 — BOLD PHOTO STATEMENT  (WokWok: "ICONIC LOGO HOLDS YOUR VISUAL BRAND.")
      ══════════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
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
          <h2 style={{
            ...sora,
            color: C.light,
            fontSize: "clamp(2rem, 4.5vw, 3.6rem)",
            fontWeight: 800, lineHeight: 1.15,
            textTransform: "uppercase", letterSpacing: "-0.02em",
            marginBottom: 24,
          }}>
            YOUR DIGITAL PRESENCE HOLDS YOUR BRAND'S FUTURE
            <AccentDot />
          </h2>
          <p style={{
            color: C.support, fontSize: 15, lineHeight: 1.85,
            maxWidth: 620, margin: "0 auto 40px",
          }}>
            Our digital strategy process is methodical, with multiple rounds of research, innovation, and development. We'll partner with you to build a brand that represents you distinctively and connects with your audience.
          </p>
          <Link to="/about" style={{
            ...sora,
            display: "inline-block",
            backgroundColor: C.accent, color: C.light,
            padding: "14px 36px", borderRadius: 0,
            textDecoration: "none", fontSize: 11.5, fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            border: `1.5px solid ${C.accent}`,
            transition: "all 0.2s ease",
          }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = C.light;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = C.accent;
              e.currentTarget.style.borderColor = C.accent;
            }}
          >
            LEARN MORE
          </Link>
        </div>
      </section>

     
     

      {/* ══════════════════════════════════════════
          SECTION 5 — PORTFOLIO GRID  (WokWok: colored tiles, mixed sizes)
      ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.dark, padding: "0 32px 64px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          {/* Row 1 — 4 cols on desktop, collapses to 2 cols on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 4, marginBottom: 4 }}>
            {portfolio.slice(0, 4).map((p, i) => (
              <div key={i} style={{
                position: "relative", overflow: "hidden",
                backgroundColor: p.bg, cursor: "pointer",
                aspectRatio: "4/3",
              }}
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
              </div>
            ))}
          </div>
          {/* Row 2 — 2 cols on desktop, collapses to 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 4 }}>
            {portfolio.slice(4).map((p, i) => (
              <div key={i} style={{
                position: "relative", overflow: "hidden",
                backgroundColor: p.bg, cursor: "pointer",
                aspectRatio: "16/7",
              }}
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
              </div>
            ))}
          </div>

          {/* LOAD MORE */}
          <div style={{ textAlign: "center", paddingTop: 44 }}>
            <Link to="/services" style={{
              ...sora,
              display: "inline-block",
              color: C.accent, fontSize: 11.5, fontWeight: 700,
              letterSpacing: "0.15em", textTransform: "uppercase",
              textDecoration: "none",
              borderBottom: `2px solid ${C.accent}`, paddingBottom: 3,
              transition: "all 0.2s ease",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.color = C.light;
                e.currentTarget.style.borderColor = C.light;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = C.accent;
                e.currentTarget.style.borderColor = C.accent;
              }}
            >
              LOAD MORE
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <motion.section 
        style={{ backgroundColor: C.light, padding: "80px 32px 96px", textAlign: "center", borderTop: `1px solid rgba(65,90,119,0.15)` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{
            ...sora,
            color: C.dark,
            fontSize: "clamp(1.6rem, 3.8vw, 2.8rem)",
            fontWeight: 800, lineHeight: 1.15,
            textTransform: "uppercase", letterSpacing: "-0.02em",
            marginBottom: 36,
          }}>
            TAKE THE FIRST STEP TOWARD DIGITAL EXCELLENCE
            <span style={{ color: C.accent }}>..</span>
          </h2>
          {formSent ? (
            <div style={{ padding: "20px 32px", backgroundColor: C.secondary, borderRadius: 0, display: "inline-flex", gap: 12, alignItems: "center" }}>
              <span style={{ color: "#4ade80", fontSize: 18 }}>✓</span>
              <span style={{ ...sora, color: C.light, fontWeight: 700, fontSize: 13.5 }}>We'll be in touch within 24 hours!</span>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setFormSent(true); }}
              style={{ display: "flex", gap: 0, maxWidth: 700, margin: "0 auto", flexWrap: "wrap" }}>
              <input
                value={formName} onChange={e => setFormName(e.target.value)}
                placeholder="Name *" required
                style={{
                  flex: 1, minWidth: 200,
                  backgroundColor: "#fff", border: "1.5px solid rgba(65,90,119,0.35)",
                  borderRight: "none", padding: "15px 18px",
                  color: C.dark, fontSize: 13, outline: "none",
                  fontFamily: "Inter, sans-serif",
                  borderRadius: 0,
                }}
              />
              <input
                value={formEmail} onChange={e => setFormEmail(e.target.value)}
                placeholder="Email *" type="email" required
                style={{
                  flex: 1, minWidth: 200,
                  backgroundColor: "#fff", border: "1.5px solid rgba(65,90,119,0.35)",
                  borderRight: "none", padding: "15px 18px",
                  color: C.dark, fontSize: 13, outline: "none",
                  fontFamily: "Inter, sans-serif",
                  borderRadius: 0,
                }}
              />
              <button type="submit" style={{
                ...sora,
                backgroundColor: C.accent, color: C.light,
                padding: "15px 32px", border: "none", cursor: "pointer",
                fontSize: 11.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                transition: "background-color 0.2s", whiteSpace: "nowrap",
                borderRadius: 0,
              }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = C.dark}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = C.accent}
              >
                PLEASE CONTACT ME
              </button>
            </form>
          )}
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
        variants={staggerContainer}
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
          <motion.div style={{ textAlign: "center", marginBottom: 24 }} variants={fadeInUp}>
            <h2 style={{
              ...sora,
              color: C.light,
              fontSize: "clamp(2rem, 4.8vw, 3.5rem)",
              fontWeight: 800, lineHeight: 1.1,
              textTransform: "uppercase", letterSpacing: "-0.02em",
              marginBottom: 20,
            }}>
              WHAT ARE YOU WAITING FOR<span style={{ color: C.accent }}>?</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div style={{ maxWidth: 640, margin: "0 auto 64px", textAlign: "center" }} variants={fadeInUp}>
            <p style={{ color: C.support, fontSize: 14.5, lineHeight: 1.8, marginBottom: 12 }}>
              To become a leading brand in the digital space, you need to understand yourself, your vision, and your audience. LorinzaZenix can help you discover your brand story, and the best way to communicate that to the world.
            </p>
            <p style={{ color: C.light, fontSize: 14.5, fontWeight: 600, letterSpacing: "0.05em" }}>GET STARTED TODAY!</p>
          </motion.div>

          {/* 5 circular icons */}
          <motion.div 
            style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", marginBottom: 80 }}
            variants={staggerContainer}
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
                variants={fadeInUp}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, width: 150 }}
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
          SECTION 8 — SERVICES PREVIEW  (4 cards, clean WokWok style)
      ══════════════════════════════════════════ */}
      <motion.section 
        style={{ backgroundColor: C.light, padding: "110px 32px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", textAlign: "center" }}>
          <SectionTag>What We Do</SectionTag>
          <motion.h2 
            style={{
              ...sora, color: C.dark,
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800, textTransform: "uppercase",
              letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 16,
            }}
            variants={fadeInUp}
          >
            SERVICES THAT DRIVE REAL RESULTS
            <AccentDot />
          </motion.h2>
          <motion.p style={{ color: "rgba(13, 27, 42, 0.75)", fontSize: 14.5, lineHeight: 1.8, maxWidth: 600, margin: "0 auto 64px" }} variants={fadeInUp}>
            End-to-end digital solutions crafted with precision to grow your business and elevate your brand in the digital space.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 4 }}>
            {[
              { Icon: Palette, n: "01", title: "UI/UX DESIGN", desc: "Intuitive, beautiful interfaces that delight users and convert visitors into loyal customers." },
              { Icon: Code2, n: "02", title: "WEB DEVELOPMENT", desc: "Fast, scalable, pixel-perfect websites and apps built with modern technology stacks." },
              { Icon: Megaphone, n: "03", title: "DIGITAL MARKETING", desc: "Data-driven campaigns across all channels that maximize reach and return on investment." },
              { Icon: Monitor, n: "04", title: "BRAND IDENTITY", desc: "Distinctive brand identities that tell your story and set you apart from the competition." },
            ].map(({ Icon, n, title, desc }, i) => (
              <motion.div 
                key={i} 
                style={{
                  backgroundColor: "#FFFFFF",
                  padding: "48px 36px 44px",
                  textAlign: "left",
                  border: "1.5px solid rgba(13, 27, 42, 0.12)",
                  cursor: "pointer",
                }}
                variants={fadeInUp}
                whileHover={{
                  y: -6,
                  borderColor: C.accent,
                  boxShadow: "0 10px 30px rgba(65, 90, 119, 0.08)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p style={{ color: "rgba(65,90,119,0.2)", fontSize: "2.4rem", fontWeight: 900, lineHeight: 1, marginBottom: 20, fontFamily: "Sora, sans-serif" }}>{n}</p>
                <div style={{
                  width: 48, height: 48, borderRadius: 0,
                  backgroundColor: "rgba(65,90,119,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 24,
                }}>
                  <Icon size={20} color={C.accent} strokeWidth={1.5} />
                </div>
                <h3 style={{ ...sora, color: C.dark, fontSize: "0.95rem", fontWeight: 800, letterSpacing: "0.06em", marginBottom: 12 }}>{title}</h3>
                <p style={{ color: "rgba(13, 27, 42, 0.75)", fontSize: 13.5, lineHeight: 1.75 }}>{desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div style={{ marginTop: 48 }} variants={fadeInUp}>
            <MotionLink to="/services" style={{
              ...sora,
              display: "inline-flex", alignItems: "center", gap: 8,
              backgroundColor: "transparent", color: C.dark,
              padding: "13px 32px", borderRadius: 0,
              border: `2px solid ${C.accent}`,
              textDecoration: "none", fontSize: 11.5, fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
            }}
              whileHover={{
                backgroundColor: C.accent,
                color: C.light,
                borderColor: C.accent,
                scale: 1.03
              }}
              transition={{ duration: 0.2 }}
            >
              VIEW ALL SERVICES <ChevronRight size={14} />
            </MotionLink>
          </motion.div>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════
          SECTION 9 — TESTIMONIALS
      ══════════════════════════════════════════ */}
      <motion.section 
        style={{ backgroundColor: C.secondary, padding: "110px 32px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", textAlign: "center" }}>
          <SectionTag>Client Love</SectionTag>
          <motion.h2 
            style={{
              ...sora, color: C.light,
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800, textTransform: "uppercase",
              letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 60,
            }}
            variants={fadeInUp}
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
                }}
                variants={fadeInUp}
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
