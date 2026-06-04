import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/finalLogo.png";

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
      backgroundColor: scrolled ? "rgba(13, 27, 42, 0.95)" : "transparent",
      borderBottom: scrolled ? `1px solid rgba(65, 90, 119, 0.25)` : "none",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      transition: "all 0.3s ease",
    }}>
      <div style={{
        maxWidth: 1240, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 32px", height: 76,
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
           <img src={Logo} alt="Lorinza Zenix logo" className="w-22" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              color: isActive(l.to) ? C.light : C.support,
              textDecoration: "none", fontSize: 12.5, fontWeight: 600,
              letterSpacing: "0.08em", textTransform: "uppercase",
              paddingBottom: 4, position: "relative", transition: "color 0.2s",
              fontFamily: "Inter, sans-serif",
            }}
              onMouseEnter={e => e.currentTarget.style.color = C.light}
              onMouseLeave={e => e.currentTarget.style.color = isActive(l.to) ? C.light : C.support}
            >
              {l.label}
              {isActive(l.to) && (
                <span style={{
                  position: "absolute", bottom: -2, left: 0, right: 0, height: 2,
                  backgroundColor: C.accent,
                }} />
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link to="/contact" className="hidden md:inline-flex" style={{
          backgroundColor: C.accent, color: C.light,
          padding: "10px 24px", borderRadius: 0,
          textDecoration: "none", fontSize: 11, fontWeight: 700,
          letterSpacing: "0.1em", textTransform: "uppercase",
          fontFamily: "Sora, sans-serif",
          transition: "all 0.2s ease",
          border: `1.5px solid ${C.accent}`,
        }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.borderColor = C.light;
            e.currentTarget.style.color = C.light;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = C.accent;
            e.currentTarget.style.borderColor = C.accent;
            e.currentTarget.style.color = C.light;
          }}
        >
          Get a Free Consultation
        </Link>

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
