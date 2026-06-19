import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const C = { dark: "#1E3A56", secondary: "#2D4A6A", accent: "#7FA0C4", support: "#B0C4DA", light: "#E0E1DD" };
const sora = { fontFamily: "'Sora', sans-serif" };

export function Footer() {
  const [isRevealed, setIsRevealed] = useState(false);
  const delayTimer = useRef(null);
  const isAtBottom = useRef(false);

  /* ── Reveal after user stays at the bottom for 1 second ── */
  useEffect(() => {
    const handleScroll = () => {
      if (isRevealed) return;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const distanceFromBottom = scrollHeight - scrollTop - clientHeight;

      if (distanceFromBottom < 20) {
        // User is at the bottom — start the delay if not already started
        if (!isAtBottom.current) {
          isAtBottom.current = true;
          delayTimer.current = setTimeout(() => {
            setIsRevealed(true);
          }, 800); // wait 800ms at the bottom before revealing
        }
      } else {
        // User scrolled away from bottom — cancel any pending reveal
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
      if (delayTimer.current) {
        clearTimeout(delayTimer.current);
      }
    };
  }, [isRevealed]);

  /* ── Dismiss footer immediately on scroll-down (wheel down) ── */
  const handleWheel = useCallback((e) => {
    // Scroll down = positive deltaY → user wants to go back to content
    if (e.deltaY > 10) {
      setIsRevealed(false);
      isAtBottom.current = false;
      // Small cooldown so it doesn't re-trigger instantly
      if (delayTimer.current) clearTimeout(delayTimer.current);
    }
    // Also allow scroll-up gesture to dismiss (legacy behavior)
    if (e.deltaY < -30) {
      setIsRevealed(false);
      isAtBottom.current = false;
      if (delayTimer.current) clearTimeout(delayTimer.current);
    }
  }, []);

  /* Touch handling for mobile swipe-down-to-dismiss */
  const touchStartY = useRef(0);

  const handleTouchStart = useCallback((e) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback((e) => {
    const deltaY = e.touches[0].clientY - touchStartY.current;
    // Swipe down (finger moves down) = dismiss
    if (deltaY > 60) {
      setIsRevealed(false);
      isAtBottom.current = false;
    }
    // Swipe up (finger moves up) = also dismiss
    if (deltaY < -60) {
      setIsRevealed(false);
      isAtBottom.current = false;
    }
  }, []);

  /* Cleanup body overflow on unmount */
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <>
      {/* Full-screen footer slide */}
      <AnimatePresence>
        {isRevealed && (
          <motion.footer
            key="footer-slide"
            initial={{ y: "100%" }}
            animate={{ y: "0%", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
            exit={{ y: "100%", transition: { duration: 0.25, ease: "easeIn" } }}
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
              justifyContent: "center",
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          >
            {/* Scroll-up hint */}
            <motion.div
              style={{
                position: "absolute",
                top: 28,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
                zIndex: 10,
              }}
              onClick={() => setIsRevealed(false)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              >
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                  <path d="M1 11L10 2L19 11" stroke={C.accent} strokeWidth="2" strokeLinecap="round" />
                </svg>
              </motion.div>
              <span style={{ ...sora, color: C.support, fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Scroll up to close
              </span>
            </motion.div>

            {/* Footer content — vertically centered */}
            <div style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
              padding: "80px 32px 40px", boxSizing: "border-box", width: "100%",
              overflowY: "auto",
            }}>
              <motion.div
                style={{ width: "100%", maxWidth: 1240, margin: "0 auto" }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-[52px]">
                  {/* Brand */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                      <span style={{ ...sora, fontWeight: 800, fontSize: 19, color: C.light, letterSpacing: "-0.02em", textTransform: "uppercase" }}>
                        Lorinza<span style={{ color: C.support }}>Zenix</span>
                      </span>
                    </div>
                    <p style={{ color: C.support, fontSize: 13.5, lineHeight: 1.8, marginBottom: 24, maxWidth: 260 }}>
                      Empowering businesses with cutting-edge digital solutions. We craft brands that connect, inspire, and convert.
                    </p>
                    <div style={{ display: "flex", gap: 10 }}>
                      {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                        <a key={i} href="#" style={{
                          width: 34, height: 34, borderRadius: 0,
                          border: "1px solid rgba(127, 160, 196,0.4)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: C.support, transition: "all 0.2s",
                          textDecoration: "none",
                        }}
                          onMouseEnter={e => { e.currentTarget.style.backgroundColor = C.accent; e.currentTarget.style.color = C.light; e.currentTarget.style.borderColor = C.accent; }}
                          onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = C.support; e.currentTarget.style.borderColor = "rgba(127, 160, 196,0.4)"; }}
                        >
                          <Icon size={14} />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div>
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
                          <Link to={to} style={{
                            color: C.support, textDecoration: "none", fontSize: 13.5,
                            display: "flex", alignItems: "center", gap: 8, transition: "color 0.2s",
                          }}
                            onMouseEnter={e => e.currentTarget.style.color = C.light}
                            onMouseLeave={e => e.currentTarget.style.color = C.support}
                          >
                            <span style={{ width: 12, height: 1.5, backgroundColor: C.accent, display: "inline-block", flexShrink: 0 }} />
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Services */}
                  <div>
                    <h4 style={{ ...sora, color: C.light, fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 22 }}>
                      Services
                    </h4>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                      {["UI/UX Design", "Web Development", "Digital Marketing", "Brand Identity", "SEO Optimization", "Social Media"].map(s => (
                        <li key={s}>
                          <span style={{
                            color: C.support, fontSize: 13.5,
                            display: "flex", alignItems: "center", gap: 8,
                          }}>
                            <span style={{ width: 12, height: 1.5, backgroundColor: C.accent, display: "inline-block", flexShrink: 0 }} />
                            {s}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact */}
                  <div>
                    <h4 style={{ ...sora, color: C.light, fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 22 }}>
                      Get In Touch
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                      {[
                        { Icon: Mail, text: "hello@lorinzazenix.com" },
                        { Icon: Phone, text: "+1 (555) 123-4567" },
                        { Icon: MapPin, text: "123 Digital Avenue, Tech City, TC 10001" },
                      ].map(({ Icon, text }, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                          <div style={{
                            width: 30, height: 30, borderRadius: 0,
                            backgroundColor: "rgba(127, 160, 196,0.2)",
                            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                          }}>
                            <Icon size={13} color={C.support} />
                          </div>
                          <span style={{ color: C.support, fontSize: 12.5, lineHeight: 1.65, paddingTop: 5 }}>{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom bar */}
            <motion.div
              style={{ borderTop: "1px solid rgba(127, 160, 196,0.15)", padding: "22px 32px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
                <p style={{ color: "rgba(176, 196, 218,0.6)", fontSize: 12.5, textAlign: "center", width: "100%", "@media (min-width: 768px)": { width: "auto", textAlign: "left" } }} className="md:w-auto text-center md:text-left w-full">
                  © {new Date().getFullYear()} LorinzaZenix Digital Agency. All rights reserved.
                </p>
                <p style={{ color: "rgba(176, 196, 218,0.6)", fontSize: 12.5, textAlign: "center", width: "100%", "@media (min-width: 768px)": { width: "auto", textAlign: "right" } }} className="md:w-auto text-center md:text-right w-full">
                  Crafted with <span style={{ color: C.accent }}>♥</span> for excellence
                </p>
              </div>
            </motion.div>
          </motion.footer>
        )}
      </AnimatePresence>
    </>
  );
}
