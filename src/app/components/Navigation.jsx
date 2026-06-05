import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../../assets/finalLogo.png";

const MotionLink = motion(Link);

const C = { dark: "#0D1B2A", secondary: "#1B263B", accent: "#415A77", support: "#778DA9", light: "#E0E1DD" };

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Contact Us", to: "/contact" },
  ];

  const isActive = (to) => to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      backgroundColor: scrolled ? "rgba(13, 27, 42, 0.88)" : "transparent",
      borderBottom: scrolled ? `1px solid rgba(65, 90, 119, 0.25)` : "none",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      transition: "background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-bottom 0.4s cubic-bezier(0.16, 1, 0.3, 1), backdrop-filter 0.4s",
    }}>
      <div style={{
        maxWidth: 1240, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 32px", 
        height: scrolled ? 68 : 88,
        transition: "height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
           <img src={Logo} alt="Lorinza Zenix logo" className="w-22" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {links.map(l => {
            const active = isActive(l.to);
            return (
              <Link key={l.to} to={l.to} style={{
                color: active ? C.light : C.support,
                textDecoration: "none", fontSize: 12.5, fontWeight: 600,
                letterSpacing: "0.08em", textTransform: "uppercase",
                paddingBottom: 4, position: "relative", transition: "color 0.25s ease",
                fontFamily: "Inter, sans-serif",
              }}
                onMouseEnter={e => e.currentTarget.style.color = C.light}
                onMouseLeave={e => e.currentTarget.style.color = active ? C.light : C.support}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="activeNavUnderline"
                    style={{
                      position: "absolute", bottom: -2, left: 0, right: 0, height: 2,
                      backgroundColor: "#F4C95D", // Elegant Gold
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <MotionLink 
          to="/contact" 
          className="hidden md:inline-flex" 
          style={{
            backgroundColor: C.accent, color: C.light,
            padding: "10px 24px", borderRadius: 0,
            textDecoration: "none", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            fontFamily: "Sora, sans-serif",
            border: `1.5px solid ${C.accent}`,
          }}
          whileHover={{
            scale: 1.03,
            backgroundColor: "transparent",
            borderColor: "#F4C95D",
            color: "#F4C95D",
            boxShadow: "0 0 15px rgba(244, 201, 93, 0.4)",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          Get a Free Consultation
        </MotionLink>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="flex md:hidden"
          style={{ background: "none", border: "none", color: C.light, cursor: "pointer", padding: 6 }}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          backgroundColor: C.secondary, borderTop: `1px solid rgba(65,90,119,0.25)`,
          padding: "20px 32px 24px",
        }} className="flex md:hidden flex-col gap-5">
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)} style={{
              color: isActive(l.to) ? C.light : C.support,
              textDecoration: "none", fontSize: 14, fontWeight: 600,
              letterSpacing: "0.08em", textTransform: "uppercase",
              fontFamily: "Inter, sans-serif",
            }}>{l.label}</Link>
          ))}
          <Link to="/contact" onClick={() => setMenuOpen(false)} style={{
            backgroundColor: C.accent, color: C.light, padding: "11px 20px",
            borderRadius: 0, textDecoration: "none", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase", width: "fit-content",
            fontFamily: "Sora, sans-serif",
            border: `1.5px solid ${C.accent}`,
          }}>Get a Free Consultation</Link>
        </div>
      )}
    </nav>
  );
}
