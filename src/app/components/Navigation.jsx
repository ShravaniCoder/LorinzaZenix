import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/finalLogo.png";

const MotionLink = motion(Link);

const C = { dark: "#1E3A56", secondary: "#2D4A6A", accent: "#7FA0C4", support: "#B0C4DA", light: "#E0E1DD" };
const sora = { fontFamily: "Sora, sans-serif" };

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : previousOverflow;
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const links = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Contact Us", to: "/contact" },
  ];

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.28, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.07, delayChildren: 0.08 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.22, ease: "easeIn", when: "afterChildren", staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const panelVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: 18, transition: { duration: 0.22, ease: "easeIn" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: 18, transition: { duration: 0.18, ease: "easeIn" } },
  };

  const isActive = (to) => to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 99999,
      backgroundColor: scrolled ? "rgba(30, 58, 86, 0.88)" : "transparent",
      borderBottom: scrolled ? `1px solid rgba(127, 160, 196, 0.25)` : "none",
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
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 36 }}>
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
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          style={{ background: "none", border: "none", color: C.light, cursor: "pointer", padding: 6 }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              background: "rgba(22, 40, 64, 0.74)",
              backdropFilter: "blur(18px)",
              overflow: "hidden",
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 20% 18%, rgba(127, 160, 196, 0.26) 0%, transparent 24%), radial-gradient(circle at 82% 26%, rgba(212, 175, 55, 0.12) 0%, transparent 28%), linear-gradient(180deg, rgba(30, 58, 86, 0.98) 0%, rgba(22, 40, 64, 0.98) 100%)" }} />

            <motion.div
              style={{
                position: "relative",
                zIndex: 1,
                minHeight: "100%",
                padding: "24px 24px 28px",
                display: "flex",
                flexDirection: "column",
              }}
              variants={panelVariants}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 36 }}>
                <Link to="/" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
                  <img src={Logo} alt="Lorinza Zenix logo" className="w-22" />
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close navigation menu"
                  style={{ background: "none", border: "none", color: C.light, cursor: "pointer", padding: 6 }}
                >
                  <X size={22} />
                </button>
              </div>

              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 18 }}>
                <motion.p
                  style={{ ...sora, color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 8 }}
                  variants={itemVariants}
                >
                  Navigation
                </motion.p>

                {links.map((l) => (
                  <motion.div key={l.to} variants={itemVariants}>
                    <Link
                      to={l.to}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 16,
                        color: isActive(l.to) ? C.light : C.support,
                        textDecoration: "none",
                        fontSize: "clamp(1.9rem, 7vw, 3.2rem)",
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                        lineHeight: 1.05,
                        textTransform: "uppercase",
                        fontFamily: "Sora, sans-serif",
                        padding: "12px 0",
                        borderBottom: `1px solid rgba(176, 196, 218, 0.16)`,
                      }}
                    >
                      <span>{l.label}</span>
                      <motion.span style={{ color: C.accent, fontSize: 14, letterSpacing: "0.2em" }} animate={{ x: [0, 4, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}>
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}

                <motion.div variants={itemVariants} style={{ marginTop: 10 }}>
                  <Link
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                    style={{
                      ...sora,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: C.accent,
                      color: C.light,
                      padding: "14px 22px",
                      borderRadius: 0,
                      textDecoration: "none",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      border: `1.5px solid ${C.accent}`,
                      boxShadow: "0 0 24px rgba(127, 160, 196, 0.2)",
                    }}
                  >
                    Get A Free Consultation
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
