import { Outlet, useLocation, Link } from "react-router";
import { useEffect, useState } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { X, Phone, Mail } from "lucide-react";
import { CustomCursor } from "./CustomCursor";

const C = { dark: "#1E3A56", secondary: "#2D4A6A", accent: "#7FA0C4", support: "#B0C4DA", light: "#E0E1DD" };
const sora = { fontFamily: "'Sora', sans-serif" };

const WhatsAppIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

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
        backgroundColor: "#25D366",
        border: `2px solid rgba(37, 211, 102, 0.35)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 6px 28px rgba(37, 211, 102, 0.45)",
        transition: "background-color 0.2s, transform 0.2s",
      }}
        onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#1ebe57"; e.currentTarget.style.transform = "scale(1.05)"; }}
        onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#25D366"; e.currentTarget.style.transform = "scale(1)"; }}
      >
        {open ? <X size={20} color={C.light} /> : <WhatsAppIcon size={24} color={C.light} />}
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
