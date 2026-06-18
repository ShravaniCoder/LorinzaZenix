import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "./PageHero";

const C = { dark: "#1E3A56", secondary: "#2D4A6A", accent: "#7FA0C4", support: "#B0C4DA", light: "#E0E1DD" };
const sora = { fontFamily: "'Sora', sans-serif" };

function SectionTag({ children }) {
  return (
    <p
      style={{
        ...sora,
        color: C.accent,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 20,
      }}
    >
      <span style={{ display: "inline-block", width: 28, height: 1.5, backgroundColor: C.accent }} />
      {children}
    </p>
  );
}

function ContactCard({ icon: Icon, label, value, meta }) {
  return (
    <motion.div
      style={{
        display: "flex",
        alignItems: "flex-start",
        backgroundColor: C.secondary,
        border: `1px solid rgba(127, 160, 196, 0.28)`,
        willChange: "transform, opacity",
      }}
      className="p-4 sm:p-5 gap-3.5 sm:gap-4"
      whileHover={{ y: -4, borderColor: C.accent, boxShadow: "0 12px 30px rgba(30, 58, 86, 0.16)" }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <div
        style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(127, 160, 196, 0.14)",
          border: `1px solid rgba(127, 160, 196, 0.2)`,
        }}
        className="w-10 h-10 sm:w-12 sm:h-12"
      >
        <Icon size={18} color={C.light} strokeWidth={1.6} className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            ...sora,
            color: C.light,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 6,
          }}
          className="text-[10px] sm:text-xs"
        >
          {label}
        </p>
        <p style={{ color: C.light, fontWeight: 600, lineHeight: 1.45, overflowWrap: "anywhere" }} className="text-sm sm:text-base">{value}</p>
        <p style={{ color: C.support, lineHeight: 1.6, marginTop: 4 }} className="text-xs sm:text-[13px]">{meta}</p>
      </div>
      <motion.span style={{ marginTop: 2, color: C.accent }} whileHover={{ x: 4 }} transition={{ duration: 0.2 }} className="flex-shrink-0">
        <ArrowRight size={16} />
      </motion.span>
    </motion.div>
  );
}

export function Contact() {
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  const blockVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const inputStyle = (name, isTextArea = false) => ({
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: focused === name ? "#15304A" : "#122840",
    border: `1.5px solid ${focused === name ? C.accent : "rgba(176, 196, 218, 0.16)"}`,
    borderRadius: 0,
    padding: isTextArea ? "16px 18px" : "15px 18px",
    color: C.light,
    fontSize: 14,
    lineHeight: 1.6,
    outline: "none",
    fontFamily: "Inter, sans-serif",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease",
    boxShadow: focused === name ? "0 0 0 4px rgba(127, 160, 196, 0.08)" : "none",
  });

  const cards = [
    { icon: Mail, label: "Email", value: "hello@lorinzazenix.com", meta: "Reply within 24 business hours" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", meta: "Mon to Fri, 9am to 6pm EST" },
    { icon: MapPin, label: "Location", value: "123 Digital Avenue, Tech City", meta: "Remote-first, global client base" },
  ];

  return (
    <div style={{ backgroundColor: C.dark, overflow: "hidden" }}>
      <PageHero
        eyebrow="Contact"
        title="GET IN TOUCH"
        description="Tell us about your goals and we’ll shape a focused response that feels tailored, clear, and distinctly LorinzaZenix."
        image="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1920&q=80"
        alt="Modern agency collaboration environment"
      />

      <motion.section
        style={{
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(180deg, ${C.dark} 0%, ${C.secondary} 100%)`,
        }}
        className="px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-26"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: `radial-gradient(circle at 50% 38%, rgba(127, 160, 196, 0.24) 0%, transparent 34%), radial-gradient(circle at 18% 16%, rgba(127, 160, 196, 0.18) 0%, transparent 26%), radial-gradient(circle at 80% 18%, rgba(127, 160, 196, 0.12) 0%, transparent 22%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "clamp(8rem, 20vw, 18rem)",
            fontWeight: 800,
            letterSpacing: "-0.08em",
            color: "rgba(224, 225, 221, 0.03)",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            userSelect: "none",
            pointerEvents: "none",
            ...sora,
          }}
        >
          CONTACT
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1240, margin: "0 auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-10 lg:gap-14 items-start">
            <motion.div variants={blockVariants}>
              <SectionTag>Contact</SectionTag>
              <motion.h1
                style={{
                  ...sora,
                  color: C.light,
                  fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                  marginBottom: 18,
                }}
                variants={headingVariants}
              >
                GET IN TOUCH
                <span style={{ color: C.accent }}>.</span>
              </motion.h1>
              <motion.p
                style={{ color: C.support, fontSize: 16, lineHeight: 1.85, maxWidth: 540, marginBottom: 34 }}
                variants={paragraphVariants}
              >
                Tell us about your goals and we’ll shape a focused response that feels tailored, clear, and distinctly LorinzaZenix.
              </motion.p>

              <motion.div style={{ display: "flex", flexDirection: "column", gap: 16 }} variants={containerVariants}>
                {cards.map((card, index) => (
                  <motion.div key={card.label} variants={blockVariants} transition={{ delay: index * 0.05 }}>
                    <ContactCard {...card} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={blockVariants}
              style={{
                position: "relative",
                backgroundColor: C.secondary,
                border: `1px solid rgba(127, 160, 196, 0.24)`,
                boxShadow: "0 16px 36px rgba(30, 58, 86, 0.12)",
              }}
              className="p-5 sm:p-8"
            >
              <div style={{ position: "relative", zIndex: 1 }}>
                {submitted ? (
                  <motion.div style={{ display: "flex", alignItems: "center", gap: 14, padding: "22px 24px", border: `1px solid rgba(127, 160, 196, 0.22)` }} variants={blockVariants}>
                    <CheckCircle size={22} color={C.accent} />
                    <div>
                      <p style={{ ...sora, color: C.light, fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>
                        Message sent
                      </p>
                      <p style={{ color: C.support, fontSize: 13.5, lineHeight: 1.7 }}>
                        Thanks for reaching out. We’ll be in touch within 24 business hours.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    style={{ display: "grid", gap: 16 }}
                    className="grid grid-cols-1"
                    variants={containerVariants}
                  >
                    <div style={{ display: "grid", gap: 16 }} className="grid grid-cols-1 sm:grid-cols-2">
                      <div>
                        <label style={{ ...sora, display: "block", color: C.support, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                          Name
                        </label>
                        <input
                          name="name"
                          required
                          placeholder="John Smith"
                          value={form.name}
                          onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                          style={inputStyle("name")}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                        />
                      </div>
                      <div>
                        <label style={{ ...sora, display: "block", color: C.support, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                          Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="john@company.com"
                          value={form.email}
                          onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                          style={inputStyle("email")}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ ...sora, display: "block", color: C.support, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                        Phone
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                        style={inputStyle("phone")}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>

                    <div>
                      <label style={{ ...sora, display: "block", color: C.support, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                        Message
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={8}
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        value={form.message}
                        onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                        style={{ ...inputStyle("message", true), resize: "vertical", minHeight: 180 }}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>

                    <button
                      type="submit"
                      style={{
                        ...sora,
                        width: "100%",
                        backgroundColor: C.accent,
                        color: C.light,
                        padding: "15px 32px",
                        borderRadius: 0,
                        border: `1.5px solid ${C.accent}`,
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10,
                        transition: "transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.backgroundColor = C.secondary;
                        e.currentTarget.style.borderColor = C.light;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.backgroundColor = C.accent;
                        e.currentTarget.style.borderColor = C.accent;
                      }}
                    >
                      SEND MESSAGE <Send size={14} />
                    </button>
                  </motion.form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
