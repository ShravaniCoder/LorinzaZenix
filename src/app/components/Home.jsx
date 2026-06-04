import { useState } from "react";
import { Link } from "react-router";
import { Search, Target, Rocket, Palette, Code2, Megaphone, Monitor, Star, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const C = { dark: "#0D1B2A", secondary: "#1B263B", accent: "#415A77", support: "#778DA9", light: "#E0E1DD" };

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

  return (
    <div style={{ backgroundColor: C.dark }}>

      {/* ══════════════════════════════════════════
          SECTION 1 — HERO  (WokWok: full-screen dark, center text)
      ══════════════════════════════════════════ */}
      <section style={{
        position: "relative", minHeight: "100vh",
        backgroundColor: C.dark,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        overflow: "hidden", textAlign: "center",
        padding: "120px 24px 100px",
      }}>
        {/* Background texture */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(65, 90, 119, 0.15) 0%, transparent 65%)`,
        }} />

        {/* Hero content */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: 900 }}>
          <p style={{
            ...sora, color: C.support, fontSize: 12, fontWeight: 700,
            letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 24,
          }}>
            GET FREE CONSULTATION
          </p>
          <h1 style={{
            ...sora,
            color: C.light,
            fontSize: "clamp(2.4rem, 5.2vw, 4.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            marginBottom: 28,
          }}>
            WE DON'T JUST DESIGN BRANDS WE SHAPE IDENTITIES THAT INSPIRE, RESONATE, AND LAST
            <AccentDot />
          </h1>
          <p style={{
            color: C.support, fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
            lineHeight: 1.8, maxWidth: 620, margin: "0 auto 44px",
          }}>
            LorinzaZenix empowers businesses with cutting-edge digital solutions — from brand identity to full-stack development, SEO, and beyond.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" style={{
              ...sora,
              backgroundColor: C.accent, color: C.light,
              padding: "14px 36px", borderRadius: 0,
              textDecoration: "none", fontSize: 11.5, fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              border: `1.5px solid ${C.accent}`,
              transition: "all 0.2s ease",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = C.light;
                e.currentTarget.style.borderColor = C.light;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = C.accent;
                e.currentTarget.style.color = C.light;
                e.currentTarget.style.borderColor = C.accent;
              }}
            >
              GIVE IT A TRY NOW
            </Link>
            <Link to="/services" style={{
              ...sora,
              backgroundColor: "transparent", color: C.light,
              padding: "14px 36px", borderRadius: 0,
              border: `1.5px solid rgba(65,90,119,0.55)`,
              textDecoration: "none", fontSize: 11.5, fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              transition: "all 0.2s ease",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = C.light;
                e.currentTarget.style.color = C.light;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(65,90,119,0.55)";
                e.currentTarget.style.color = C.light;
              }}
            >
              OUR SERVICES
            </Link>
          </div>
        </div>

        {/* Bottom scroll arrow */}
        <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <div style={{ width: 1, height: 40, background: `linear-gradient(${C.accent}, transparent)` }} />
          <span style={{ color: C.accent, fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</span>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — PROCESS CARDS  (WokWok: 3 cols, first card accent bg)
      ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.light, padding: "0" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 0 }}>
            {[
              {
                Icon: Search, title: "RESEARCH",
                desc: "We'll discover who you are, what makes you unique, and what your audience truly needs.",
                accent: true,
              },
              {
                Icon: Target, title: "STRATEGY",
                desc: "We'll build a cohesive digital strategy based on deep research and market insights.",
                accent: false,
              },
              {
                Icon: Rocket, title: "EXECUTE",
                desc: "Launch with precision-crafted design, development, and marketing that delivers results.",
                accent: false,
              },
            ].map(({ Icon, title, desc, accent }, i) => (
              <div key={i} style={{
                backgroundColor: accent ? C.accent : "#FFFFFF",
                padding: "56px 40px",
                borderRight: i < 2 ? `1px solid rgba(13, 27, 42, 0.12)` : "none",
                borderBottom: `1px solid rgba(13, 27, 42, 0.12)`,
                transition: "background-color 0.3s",
              }}
                onMouseEnter={e => { if (!accent) e.currentTarget.style.backgroundColor = "rgba(13, 27, 42, 0.04)"; }}
                onMouseLeave={e => { if (!accent) e.currentTarget.style.backgroundColor = "#FFFFFF"; }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  backgroundColor: accent ? "rgba(224,225,221,0.15)" : "rgba(13, 27, 42, 0.06)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 28,
                }}>
                  <Icon size={22} color={accent ? C.light : C.accent} strokeWidth={1.5} />
                </div>
                <h3 style={{ ...sora, color: accent ? C.light : C.dark, fontSize: "1rem", fontWeight: 800, letterSpacing: "0.08em", marginBottom: 16 }}>
                  {title}
                </h3>
                <p style={{ color: accent ? "rgba(224,225,221,0.85)" : "rgba(13, 27, 42, 0.75)", fontSize: 14, lineHeight: 1.8 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — BOLD PHOTO STATEMENT  (WokWok: "ICONIC LOGO HOLDS YOUR VISUAL BRAND.")
      ══════════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80"
            alt="Digital workspace"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(13,27,42,0.92)" }} />
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
          SECTION 4 — INVESTMENT STATEMENT  (WokWok: light bg, large bold text)
      ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.light, padding: "100px 32px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{
            ...sora,
            color: C.dark,
            fontSize: "clamp(1.8rem, 4.2vw, 3.2rem)",
            fontWeight: 800, lineHeight: 1.15,
            textTransform: "uppercase", letterSpacing: "-0.02em",
            marginBottom: 24,
          }}>
            YOU AREN'T JUST LAUNCHING A WEBSITE — YOU'RE INVESTING IN YOUR DIGITAL FUTURE
            <span style={{ color: C.accent }}>.</span>
          </h2>
          <p style={{
            color: C.accent, fontSize: 15.5, lineHeight: 1.85,
            maxWidth: 680, margin: "0 auto",
          }}>
            At LorinzaZenix, we invest in creative processes guided by data, strategy, and vision. Every solution we build is designed to represent you distinctively and connect deeply with your audience.
          </p>
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

      {/* ─── SECTION 6 ─── */}
      <section style={{ backgroundColor: C.light, padding: "80px 32px 96px", textAlign: "center", borderTop: `1px solid rgba(65,90,119,0.15)` }}>
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
      </section>

      {/* ══════════════════════════════════════════
          SECTION 7 — "WHAT ARE YOU WAITING FOR?"  (WokWok: dark bg, center text, 5 circles)
      ══════════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden", backgroundColor: C.secondary }}>
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
          </div>

          {/* Description — centered like WokWok visual details */}
          <div style={{ maxWidth: 640, margin: "0 auto 64px", textAlign: "center" }}>
            <p style={{ color: C.support, fontSize: 14.5, lineHeight: 1.8, marginBottom: 12 }}>
              To become a leading brand in the digital space, you need to understand yourself, your vision, and your audience. LorinzaZenix can help you discover your brand story, and the best way to communicate that to the world.
            </p>
            <p style={{ color: C.light, fontSize: 14.5, fontWeight: 600, letterSpacing: "0.05em" }}>GET STARTED TODAY!</p>
          </div>

          {/* 5 circular icons — WokWok style, center aligned */}
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", marginBottom: 80 }}>
            {[
              { Icon: Star, label: "100% SATISFACTION GUARANTEED" },
              { Icon: Monitor, label: "10+ YEARS EXPERIENCE" },
              { Icon: Palette, label: "CUSTOM DIGITAL SOLUTIONS" },
              { Icon: Code2, label: "PRICING TRANSPARENCY" },
              { Icon: Megaphone, label: "BUILDING BRANDS" },
            ].map(({ Icon, label }, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, width: 150 }}>
                <div style={{
                  width: 72, height: 72, borderRadius: "50%",
                  border: `2px solid ${C.accent}`,
                  backgroundColor: "rgba(65,90,119,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.3s ease",
                  cursor: "default",
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
              </div>
            ))}
          </div>
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
                  {value}
                </p>
                <p style={{ color: C.support, fontSize: 12, marginTop: 10, letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 8 — SERVICES PREVIEW  (4 cards, clean WokWok style)
      ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.light, padding: "110px 32px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", textAlign: "center" }}>
          <SectionTag>What We Do</SectionTag>
          <h2 style={{
            ...sora, color: C.dark,
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 16,
          }}>
            SERVICES THAT DRIVE REAL RESULTS
            <AccentDot />
          </h2>
          <p style={{ color: "rgba(13, 27, 42, 0.75)", fontSize: 14.5, lineHeight: 1.8, maxWidth: 600, margin: "0 auto 64px" }}>
            End-to-end digital solutions crafted with precision to grow your business and elevate your brand in the digital space.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 4 }}>
            {[
              { Icon: Palette, n: "01", title: "UI/UX DESIGN", desc: "Intuitive, beautiful interfaces that delight users and convert visitors into loyal customers." },
              { Icon: Code2, n: "02", title: "WEB DEVELOPMENT", desc: "Fast, scalable, pixel-perfect websites and apps built with modern technology stacks." },
              { Icon: Megaphone, n: "03", title: "DIGITAL MARKETING", desc: "Data-driven campaigns across all channels that maximize reach and return on investment." },
              { Icon: Monitor, n: "04", title: "BRAND IDENTITY", desc: "Distinctive brand identities that tell your story and set you apart from the competition." },
            ].map(({ Icon, n, title, desc }, i) => (
              <div key={i} style={{
                backgroundColor: "#FFFFFF",
                padding: "48px 36px 44px",
                textAlign: "left",
                border: "1.5px solid rgba(13, 27, 42, 0.12)",
                borderBottom: `3px solid transparent`,
                transition: "all 0.3s ease",
                cursor: "default",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = C.accent;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
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
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48 }}>
            <Link to="/services" style={{
              ...sora,
              display: "inline-flex", alignItems: "center", gap: 8,
              backgroundColor: "transparent", color: C.dark,
              padding: "13px 32px", borderRadius: 0,
              border: `2px solid ${C.accent}`,
              textDecoration: "none", fontSize: 11.5, fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              transition: "all 0.2s ease",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = C.accent;
                e.currentTarget.style.color = C.light;
                e.currentTarget.style.borderColor = C.accent;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = C.dark;
                e.currentTarget.style.borderColor = C.accent;
              }}
            >
              VIEW ALL SERVICES <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 9 — TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.secondary, padding: "110px 32px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", textAlign: "center" }}>
          <SectionTag>Client Love</SectionTag>
          <h2 style={{
            ...sora, color: C.light,
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 60,
          }}>
            WHAT OUR CLIENTS SAY
            <AccentDot />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 4 }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{
                backgroundColor: C.dark,
                padding: "44px 36px",
                textAlign: "left",
                position: "relative",
                transition: "transform 0.3s ease",
                border: `1px solid rgba(65, 90, 119, 0.15)`,
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
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
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
