import { Link } from "react-router";
import { Palette, Code2, Megaphone, Monitor, Search, Share2, ArrowRight, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const C = { dark: "#0D1B2A", secondary: "#1B263B", accent: "#415A77", support: "#778DA9", light: "#E0E1DD" };
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
  return (
    <div style={{ backgroundColor: C.dark }}>

      {/* ── HERO ── */}
      <section style={{
        backgroundColor: C.secondary,
        padding: "180px 32px 120px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, rgba(65,90,119,0.25) 0%, transparent 65%)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
          <SectionTag>What We Offer</SectionTag>
          <h1 style={{
            ...sora, color: C.light,
            fontSize: "clamp(2.4rem,7vw,4.5rem)",
            fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "-0.02em", lineHeight: 1.1,
            marginBottom: 24,
          }}>
            SERVICES ENGINEERED FOR IMPACT
            <span style={{ color: C.accent }}>.</span>
          </h1>
          <p style={{ color: C.support, fontSize: 17, lineHeight: 1.8, maxWidth: 580, margin: "0 auto" }}>
            From concept to launch and beyond — end-to-end digital solutions that transform your vision into measurable business growth.
          </p>
        </div>
      </section>

      {/* ── QUICK NAV PILLS ── */}
      <section style={{ backgroundColor: C.light, padding: "48px 32px 32px", borderBottom: `1px solid rgba(13, 27, 42, 0.1)` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
          {services.map(({ Icon, title }, i) => (
            <a key={i} href={`#s${i}`} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              backgroundColor: "#FFFFFF",
              border: `1px solid rgba(13, 27, 42, 0.12)`,
              borderRadius: 0, padding: "10px 20px",
              color: C.dark, textDecoration: "none", fontSize: 12, fontWeight: 700,
              fontFamily: "Sora, sans-serif",
              letterSpacing: "0.05em", textTransform: "uppercase",
              transition: "all 0.2s ease",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = C.accent;
                e.currentTarget.style.color = C.light;
                e.currentTarget.style.borderColor = C.accent;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = "#FFFFFF";
                e.currentTarget.style.color = C.dark;
                e.currentTarget.style.borderColor = "rgba(13, 27, 42, 0.12)";
              }}
            >
              <Icon size={13} /> {title}
            </a>
          ))}
        </div>
      </section>

      {/* ── SERVICE DETAIL SECTIONS ── */}
      {services.map(({ Icon, n, title, tagline, desc, deliverables, img }, i) => (
        <section key={i} id={`s${i}`} style={{
          backgroundColor: i % 2 === 0 ? C.dark : C.light,
          padding: "100px 32px",
          borderBottom: `1px solid ${i % 2 === 0 ? "rgba(65,90,119,0.15)" : "rgba(13,27,42,0.1)"}`,
        }}>
          <div style={{ maxWidth: 1240, margin: "0 auto" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 80, alignItems: "center" }}>
              {/* Content */}
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <p style={{ color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16, fontFamily: "Sora, sans-serif" }}>
                  {n} — SERVICE
                </p>
                <div style={{
                  width: 52, height: 52, borderRadius: 0,
                  backgroundColor: i % 2 === 0 ? "rgba(65,90,119,0.18)" : "rgba(65,90,119,0.1)",
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
                <p style={{ color: i % 2 === 0 ? C.support : "rgba(13, 27, 42, 0.75)", fontSize: 14.5, lineHeight: 1.85, marginBottom: 32 }}>{desc}</p>

                <div style={{ marginBottom: 36 }}>
                  <p style={{ ...sora, color: i % 2 === 0 ? C.light : C.dark, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                    What's Included:
                  </p>
                  {deliverables.map((d, di) => (
                    <div key={di} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
                      <CheckCircle size={15} color={C.accent} style={{ flexShrink: 0, marginTop: 3 }} />
                      <span style={{ color: i % 2 === 0 ? C.support : "rgba(13, 27, 42, 0.75)", fontSize: 14 }}>{d}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" style={{
                  ...sora,
                  display: "inline-flex", alignItems: "center", gap: 10,
                  backgroundColor: C.accent, color: C.light,
                  padding: "13px 32px", borderRadius: 0,
                  textDecoration: "none", fontSize: 11.5, fontWeight: 700,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  border: `2px solid ${C.accent}`,
                  transition: "all 0.2s ease",
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderColor = i % 2 === 0 ? C.light : C.dark;
                    e.currentTarget.style.color = i % 2 === 0 ? C.light : C.dark;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = C.accent;
                    e.currentTarget.style.borderColor = C.accent;
                    e.currentTarget.style.color = C.light;
                  }}
                >
                  GET A QUOTE <ArrowRight size={13} />
                </Link>
              </div>

              {/* Image */}
              <div style={{ order: i % 2 === 0 ? 1 : 0, position: "relative" }}>
                <div style={{
                  position: "absolute",
                  top: -16, left: i % 2 === 0 ? -16 : "auto",
                  right: i % 2 !== 0 ? -16 : "auto",
                  width: "100%", height: "100%",
                  border: `1px solid ${i % 2 === 0 ? "rgba(65,90,119,0.3)" : "rgba(13,27,42,0.12)"}`, borderRadius: 0, zIndex: 0,
                }} />
                <ImageWithFallback
                  src={img}
                  alt={title}
                  style={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 0, display: "block", position: "relative", zIndex: 1, border: `1px solid ${i % 2 === 0 ? "rgba(65,90,119,0.2)" : "rgba(13,27,42,0.1)"}` }}
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── BOLD STATEMENT ── */}
      <section style={{ backgroundColor: C.dark, padding: "100px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{
            ...sora, color: C.light,
            fontSize: "clamp(1.8rem,4.5vw,3.2rem)",
            fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "-0.02em", lineHeight: 1.15,
            marginBottom: 20,
          }}>
            EVERY SERVICE WE OFFER IS DESIGNED WITH ONE GOAL — YOUR GROWTH
            <span style={{ color: C.accent }}>.</span>
          </h2>
          <p style={{ color: C.support, fontSize: 15.5, lineHeight: 1.85, maxWidth: 620, margin: "0 auto 36px" }}>
            We combine strategy, design, and technology to deliver results that matter to your business.
          </p>
          <Link to="/contact" style={{
            ...sora,
            display: "inline-flex", alignItems: "center", gap: 10,
            backgroundColor: C.accent, color: C.light,
            padding: "14px 36px", borderRadius: 0,
            textDecoration: "none", fontSize: 11.5, fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            border: `2px solid ${C.accent}`,
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
            START YOUR PROJECT <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ backgroundColor: C.light, padding: "110px 32px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", textAlign: "center" }}>
          <SectionTag>Our Process</SectionTag>
          <h2 style={{
            ...sora, color: C.dark,
            fontSize: "clamp(1.8rem,4vw,3rem)",
            fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "-0.02em", lineHeight: 1.15,
            marginBottom: 60,
          }}>
            HOW WE MAKE IT HAPPEN
            <span style={{ color: C.accent }}>.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6" style={{ gap: 0 }}>
            {[
              { n: "01", t: "Discovery", d: "Study your business, goals, and audience." },
              { n: "02", t: "Strategy", d: "Craft a tailored roadmap aligned to your KPIs." },
              { n: "03", t: "Design", d: "Stunning visuals with intuitive user flows." },
              { n: "04", t: "Development", d: "Clean code, fast performance, fully responsive." },
              { n: "05", t: "Launch", d: "Deploy, test, and go live with confidence." },
              { n: "06", t: "Grow", d: "Monitor, optimize, and drive ongoing results." },
            ].map(({ n, t, d }, i) => (
              <div key={i} style={{
                backgroundColor: "#FFFFFF",
                padding: "36px 20px",
                borderRight: i < 5 ? `1px solid rgba(13,27,42,0.12)` : "none",
                borderBottom: `1px solid rgba(13,27,42,0.12)`,
                transition: "background-color 0.3s",
                textAlign: "center",
              }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(13,27,42,0.04)"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "#FFFFFF"}
              >
                <p style={{ color: "rgba(65,90,119,0.2)", fontSize: "2.2rem", fontWeight: 900, lineHeight: 1, marginBottom: 14, fontFamily: "Sora, sans-serif" }}>{n}</p>
                <p style={{ ...sora, color: C.dark, fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>{t}</p>
                <p style={{ color: "rgba(13, 27, 42, 0.75)", fontSize: 13, lineHeight: 1.7 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: C.secondary, padding: "110px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <SectionTag>Ready to Start?</SectionTag>
          <h2 style={{
            ...sora, color: C.light,
            fontSize: "clamp(1.8rem,4vw,2.8rem)",
            fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "-0.02em", lineHeight: 1.15,
            marginBottom: 20,
          }}>
            LET'S DISCUSS YOUR PROJECT
            <span style={{ color: C.accent }}>.</span>
          </h2>
          <p style={{ color: C.support, fontSize: 15.5, lineHeight: 1.8, marginBottom: 40 }}>
            Book a free 30-minute strategy call and discover how LorinzaZenix can accelerate your digital growth.
          </p>
          <Link to="/contact" style={{
            ...sora,
            display: "inline-flex", alignItems: "center", gap: 10,
            backgroundColor: C.accent, color: C.light,
            padding: "15px 40px", borderRadius: 0,
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
            GET A FREE CONSULTATION <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </div>
  );
}
