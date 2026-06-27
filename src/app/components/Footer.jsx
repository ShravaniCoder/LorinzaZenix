import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import { RiTwitterXLine } from "react-icons/ri";

const C = { dark: "#1E3A56", secondary: "#2D4A6A", accent: "#7FA0C4", support: "#B0C4DA", light: "#E0E1DD" };
const sora = { fontFamily: "'Sora', sans-serif" };

// Smoother spring config
const SPRING = { type: "spring", stiffness: 280, damping: 32, mass: 0.8 };
const EASE_OUT = [0.22, 1, 0.36, 1]; // Custom cubic-bezier — very smooth deceleration

// Stagger children inside the footer
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.18 },
  },
};

const colVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
};

export function Footer() {
  const [isRevealed, setIsRevealed] = useState(false);
  const delayTimer = useRef(null);
  const isAtBottom = useRef(false);

  /* ── Reveal after user stays at the bottom for 800ms ── */
  useEffect(() => {
    const handleScroll = () => {
      if (isRevealed) return;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const distanceFromBottom = scrollHeight - scrollTop - clientHeight;

      if (distanceFromBottom < 20) {
        if (!isAtBottom.current) {
          isAtBottom.current = true;
          delayTimer.current = setTimeout(() => setIsRevealed(true), 800);
        }
      } else {
        isAtBottom.current = false;
        if (delayTimer.current) {
          clearTimeout(delayTimer.current);
          delayTimer.current = null;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (delayTimer.current) clearTimeout(delayTimer.current);
    };
  }, [isRevealed]);

  const dismiss = useCallback(() => {
    setIsRevealed(false);
    isAtBottom.current = false;
    if (delayTimer.current) clearTimeout(delayTimer.current);
  }, []);

  /* ── Wheel: dismiss on any scroll ── */
  const handleWheel = useCallback((e) => {
    if (Math.abs(e.deltaY) > 10) dismiss();
  }, [dismiss]);

  /* ── Touch: dismiss on swipe ── */
  const touchStartY = useRef(0);
  const handleTouchStart = useCallback((e) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);
  const handleTouchMove = useCallback((e) => {
    if (Math.abs(e.touches[0].clientY - touchStartY.current) > 60) dismiss();
  }, [dismiss]);

  useEffect(() => () => { document.body.style.overflow = ""; }, []);

  return (
    <AnimatePresence>
      {isRevealed && (
        <motion.footer
          key="footer"
          initial={{ y: "100%" }}
          animate={{ y: "0%", transition: { ...SPRING } }}
          exit={{ y: "100%", transition: { duration: 0.28, ease: [0.4, 0, 1, 1] } }}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            backgroundColor: C.dark,
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          {/* ── Scroll-up hint ── */}
          <motion.div
            style={{
              position: "absolute",
              top: 24,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
              cursor: "pointer",
              zIndex: 10,
              userSelect: "none",
            }}
            onClick={dismiss}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.55, duration: 0.45, ease: EASE_OUT } }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
                <path d="M1 9L9 1L17 9" stroke={C.accent} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
            <span style={{ ...sora, color: C.support, fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Scroll up to close
            </span>
          </motion.div>

          {/* ── Main content ── */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "80px 32px 40px",
              boxSizing: "border-box",
              width: "100%",
              overflowY: "auto",
            }}
          >
            <motion.div
              style={{ width: "100%", maxWidth: 1240, margin: "0 auto" }}
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-[52px]">

                {/* Brand */}
                <motion.div variants={colVariants}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                    <span style={{ ...sora, fontWeight: 800, fontSize: 19, color: C.light, letterSpacing: "-0.02em", textTransform: "uppercase" }}>
                      Lorinza<span style={{ color: C.support }}>Zenix</span>
                    </span>
                  </div>
                  <p style={{ color: C.support, fontSize: 13.5, lineHeight: 1.8, marginBottom: 24, maxWidth: 260 }}>
                    Empowering businesses with cutting-edge digital solutions. We craft brands that connect, inspire, and convert.
                  </p>
                  <div style={{ display: "flex", gap: 10 }}>
                    {[
                      { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61590538412946" },
                      { Icon: Instagram, href: "https://www.instagram.com/lorinzazenix_digital.agency?igsh=MWFpdnIxdGY0MXpjOA==" },
                      { Icon: RiTwitterXLine, href: "https://x.com/lorinzazenix" },
                      { Icon: Linkedin, href: "https://www.linkedin.com/company/lorinzazenix" },
                    ].map(({ Icon, href }, i) => (
                      <motion.a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: 34, height: 34,
                          border: "1px solid rgba(127,160,196,0.4)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: C.support, textDecoration: "none",
                        }}
                        whileHover={{ backgroundColor: C.accent, color: C.light, borderColor: C.accent, scale: 1.1 }}
                        whileTap={{ scale: 0.92 }}
                        transition={{ type: "spring", stiffness: 400, damping: 18 }}
                      >
                        <Icon size={14} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Quick Links */}
                <motion.div variants={colVariants}>
                  <h4 style={{ ...sora, color: C.light, fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 22 }}>
                    Quick Links
                  </h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                    {[
                      { label: "Home", to: "/" },
                      { label: "About Us", to: "/about" },
                      { label: "Services", to: "/services" },
                      { label: "Contact Us", to: "/contact" },
                    ].map(({ label, to }) => (
                      <li key={to}>
                        <motion.div whileHover="hover" initial="rest">
                          <Link
                            to={to}
                            style={{ color: C.support, textDecoration: "none", fontSize: 13.5, display: "flex", alignItems: "center", gap: 8 }}
                          >
                            <motion.span
                              style={{ width: 12, height: 1.5, backgroundColor: C.accent, display: "inline-block", flexShrink: 0 }}
                              variants={{ rest: { width: 12 }, hover: { width: 18 } }}
                              transition={{ duration: 0.2, ease: EASE_OUT }}
                            />
                            <motion.span
                              variants={{ rest: { color: C.support }, hover: { color: C.light } }}
                              transition={{ duration: 0.2 }}
                            >
                              {label}
                            </motion.span>
                          </Link>
                        </motion.div>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Services */}
                <motion.div variants={colVariants}>
                  <h4 style={{ ...sora, color: C.light, fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 22 }}>
                    Services
                  </h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                    {["UI/UX Design", "Web Development", "Digital Marketing", "Brand Identity", "SEO Optimization", "Social Media"].map((s) => (
                      <li key={s} style={{ color: C.support, fontSize: 13.5, display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ width: 12, height: 1.5, backgroundColor: C.accent, display: "inline-block", flexShrink: 0 }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Contact */}
                <motion.div variants={colVariants}>
                  <h4 style={{ ...sora, color: C.light, fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 22 }}>
                    Get In Touch
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {[
                      { Icon: Mail, text: "contact@lorinzazenix.com" },
                      { Icon: Phone, text: "+91 86990 09381" },
                      { Icon: MapPin, text: "1311, MARATHON MILLENIUM, LBS ROAD, BESIDE NIRMAL LIFESTYLE MALL, MULUND WEST, Mumbai(400080)." },
                    ].map(({ Icon, text }, i) => (
                      <motion.div
                        key={i}
                        style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <div style={{
                          width: 30, height: 30,
                          backgroundColor: "rgba(127,160,196,0.2)",
                          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                        }}>
                          <Icon size={13} color={C.support} />
                        </div>
                        <span style={{ color: C.support, fontSize: 12.5, lineHeight: 1.65, paddingTop: 5 }}>{text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>

          {/* ── Bottom bar ── */}
          <motion.div
            style={{ borderTop: "1px solid rgba(127,160,196,0.15)", padding: "22px 32px" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.4, ease: EASE_OUT } }}
          >
            <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", justifyContent: "center" }}>
              <p style={{ color: "rgba(176,196,218,0.6)", fontSize: 13.5, textAlign: "center" }}>
                © {new Date().getFullYear()} LorinzaZenix Digital Agency. All rights reserved.
              </p>
            </div>
          </motion.div>
        </motion.footer>
      )}
    </AnimatePresence>
  );
}