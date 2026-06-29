import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { RiTwitterXLine } from "react-icons/ri";

const C = { dark: "#1E3A56", secondary: "#2D4A6A", accent: "#7FA0C4", support: "#B0C4DA", light: "#E0E1DD" };
const sora = { fontFamily: "'Sora', sans-serif" };

// Fade-up wrapper that animates once when it scrolls into view
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: C.dark,
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      {/* Grid */}
      <div style={{ padding: "48px 32px 28px", boxSizing: "border-box" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-[52px]">

            {/* Brand */}
            <Reveal delay={0}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <span style={{ ...sora, fontWeight: 800, fontSize: 19, color: C.light, letterSpacing: "-0.02em", textTransform: "uppercase" }}>
                  Lorinza<span style={{ color: C.support }}>Zenix</span>
                </span>
              </div>
              <p style={{ color: C.support, fontSize: 13.5, lineHeight: 1.8, marginBottom: 20, maxWidth: 260 }}>
                Empowering businesses with cutting-edge digital solutions. We craft brands that connect, inspire, and convert.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61590538412946" },
                  { Icon: Instagram, href: "https://www.instagram.com/lorinzazenix_digital.agency?igsh=MWFpdnIxdGY0MXpjOA==" },
                  { Icon: RiTwitterXLine, href: "https://x.com/lorinzazenix" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/company/lorinzazenix" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: 34, height: 34,
                      border: "1px solid rgba(127,160,196,0.4)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: C.support, textDecoration: "none",
                      transition: "background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = C.accent;
                      e.currentTarget.style.borderColor = C.accent;
                      e.currentTarget.style.color = C.light;
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.borderColor = "rgba(127,160,196,0.4)";
                      e.currentTarget.style.color = C.support;
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
            </Reveal>

            {/* Quick Links */}
            <Reveal delay={100}>
            <div>
              <h4 style={{ ...sora, color: C.light, fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>
                Quick Links
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 11 }}>
                {[
                  { label: "Home", to: "/" },
                  { label: "About Us", to: "/about" },
                  { label: "Services", to: "/services" },
                  { label: "Contact Us", to: "/contact" },
                ].map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      style={{ color: C.support, textDecoration: "none", fontSize: 13.5, display: "flex", alignItems: "center", gap: 8, transition: "color 0.15s, gap 0.15s, padding-left 0.15s" }}
                      onMouseEnter={e => { e.currentTarget.style.color = C.light; e.currentTarget.style.paddingLeft = "4px"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = C.support; e.currentTarget.style.paddingLeft = "0px"; }}
                    >
                      <span style={{ width: 12, height: 1.5, backgroundColor: C.accent, display: "inline-block", flexShrink: 0, transition: "width 0.15s" }} />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            </Reveal>

            {/* Services */}
            <Reveal delay={200}>
            <div>
              <h4 style={{ ...sora, color: C.light, fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>
                Services
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 11 }}>
                {["UI/UX Design", "Web Development", "Digital Marketing", "Brand Identity", "SEO Optimization", "Social Media"].map(s => (
                  <li key={s} style={{ color: C.support, fontSize: 13.5, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 12, height: 1.5, backgroundColor: C.accent, display: "inline-block", flexShrink: 0 }} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            </Reveal>

            {/* Contact */}
            <Reveal delay={300}>
            <div>
              <h4 style={{ ...sora, color: C.light, fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>
                Get In Touch
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { Icon: Mail, text: "contact@lorinzazenix.com" },
                  { Icon: Phone, text: "+91 86990 09381" },
                  { Icon: MapPin, text: "1311, MARATHON MILLENIUM, LBS ROAD, BESIDE NIRMAL LIFESTYLE MALL, MULUND WEST, Mumbai(400080)." },
                ].map(({ Icon, text }, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div style={{
                      width: 30, height: 30,
                      backgroundColor: "rgba(127,160,196,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <Icon size={13} color={C.support} />
                    </div>
                    <span style={{ color: C.support, fontSize: 12.5, lineHeight: 1.65, paddingTop: 5 }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            </Reveal>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(127,160,196,0.12)", padding: "16px 32px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", justifyContent: "center" }}>
          <p style={{ color: "rgba(176,196,218,0.55)", fontSize: 13, textAlign: "center", margin: 0 }}>
            © {new Date().getFullYear()} LorinzaZenix Digital Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}