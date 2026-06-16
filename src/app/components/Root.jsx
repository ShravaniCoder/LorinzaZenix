import { Outlet, useLocation, Link } from "react-router";
import { useEffect, useState } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { MessageCircle, X, Phone, Mail } from "lucide-react";
import { CustomCursor } from "./CustomCursor";

const C = { dark: "#1E3A56", secondary: "#2D4A6A", accent: "#7FA0C4", support: "#B0C4DA", light: "#E0E1DD" };
const sora = { fontFamily: "'Sora', sans-serif" };

function FloatingChat() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: "fixed", bottom: 28, right: 28, zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
      {open && (
        <div style={{
          backgroundColor: C.secondary,
          border: `1px solid rgba(127, 160, 196,0.4)`,
          borderRadius: 6, padding: "22px",
          width: 272, boxShadow: "0 20px 60px rgba(0,0,0,0.55)",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
            <div>
              <p style={{ ...sora, color: C.light, fontSize: 13.5, fontWeight: 700 }}>LorinzaZenix</p>
              <p style={{ color: C.support, fontSize: 11, display: "flex", alignItems: "center", gap: 5, marginTop: 3 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#4ade80", display: "inline-block" }} />
                Online — replies within 1 hr
              </p>
            </div>
            <button onClick={() => setOpen(false)}
              style={{ background: "none", border: "none", color: C.support, cursor: "pointer", padding: 2, marginTop: 2 }}>
              <X size={15} />
            </button>
          </div>
          <p style={{ color: C.support, fontSize: 12.5, lineHeight: 1.7, marginBottom: 16 }}>
            Hi there! 👋 Ready to grow your digital presence? We'd love to help.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Link to="/contact" onClick={() => setOpen(false)} style={{
              ...sora,
              backgroundColor: C.accent, color: C.light,
              padding: "10px 16px", borderRadius: 3,
              textDecoration: "none", fontSize: 11.5, fontWeight: 700,
              letterSpacing: "0.07em", textTransform: "uppercase",
              textAlign: "center", display: "block",
              transition: "background-color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = C.support}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = C.accent}
            >
              Get Free Consultation
            </Link>
            <a href="mailto:hello@lorinzazenix.com" style={{
              display: "flex", alignItems: "center", gap: 8,
              color: C.support, textDecoration: "none", fontSize: 12.5, padding: "6px 2px",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.color = C.light}
              onMouseLeave={e => e.currentTarget.style.color = C.support}
            >
              <Mail size={13} /> hello@lorinzazenix.com
            </a>
            <a href="tel:+15551234567" style={{
              display: "flex", alignItems: "center", gap: 8,
              color: C.support, textDecoration: "none", fontSize: 12.5, padding: "2px 2px",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.color = C.light}
              onMouseLeave={e => e.currentTarget.style.color = C.support}
            >
              <Phone size={13} /> +1 (555) 123-4567
            </a>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} style={{
        width: 52, height: 52, borderRadius: "50%",
        backgroundColor: C.accent,
        border: `2px solid rgba(176, 196, 218,0.35)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 6px 28px rgba(127, 160, 196,0.45)",
        transition: "background-color 0.2s, transform 0.2s",
      }}
        onMouseEnter={e => { e.currentTarget.style.backgroundColor = C.support; e.currentTarget.style.transform = "scale(1.05)"; }}
        onMouseLeave={e => { e.currentTarget.style.backgroundColor = C.accent; e.currentTarget.style.transform = "scale(1)"; }}
      >
        {open ? <X size={20} color={C.light} /> : <MessageCircle size={20} color={C.light} />}
      </button>
    </div>
  );
}

export function Root() {
  const { pathname } = useLocation();
  const isAboutPage = pathname === "/about";
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <div style={{ backgroundColor: C.dark, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <CustomCursor />
      <Navigation />
      <main style={isAboutPage ? undefined : { flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
}
