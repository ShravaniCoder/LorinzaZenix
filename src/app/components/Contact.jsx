import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

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

export function Contact() {
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [budget, setBudget] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 }
    }
  };

  const inputStLight = (f) => ({
    width: "100%", boxSizing: "border-box",
    backgroundColor: focused === f ? "rgba(65,90,119,0.06)" : "#FFFFFF",
    border: `1.5px solid ${focused === f ? C.accent : "rgba(13, 27, 42, 0.15)"}`,
    borderRadius: 0, padding: "14px 16px",
    color: C.dark, fontSize: 13.5, outline: "none",
    fontFamily: "Inter, sans-serif",
    transition: "all 0.2s ease",
  });

  return (
    <div style={{ backgroundColor: C.dark }}>

      {/* ── HERO ── */}
      <section style={{
        backgroundColor: C.secondary, padding: "180px 32px 120px",
        textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, rgba(65,90,119,0.25) 0%, transparent 65%)" }} />
        <motion.div 
          style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <SectionTag>Let's Connect</SectionTag>
          </motion.div>
          <motion.h1 style={{
            ...sora, color: C.light,
            fontSize: "clamp(2.4rem,7vw,4.5rem)",
            fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "-0.02em", lineHeight: 1.1,
            marginBottom: 24,
          }}
            variants={fadeInUp}
          >
            READY TO START YOUR PROJECT
            <span style={{ color: C.accent }}>?</span>
          </motion.h1>
          <motion.p style={{ color: C.support, fontSize: 17, lineHeight: 1.8, maxWidth: 540, margin: "0 auto" }}
            variants={fadeInUp}
          >
            We'd love to hear about your vision. Let's explore how LorinzaZenix can elevate your digital presence to the next level.
          </motion.p>
        </motion.div>
      </section>

      {/* ── CONTACT STRIP ── */}
      <motion.section 
        style={{ backgroundColor: C.light }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }} className="grid grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: Mail, label: "Email Us", value: "hello@lorinzazenix.com" },
            { Icon: Phone, label: "Call Us", value: "+1 (555) 123-4567" },
            { Icon: MapPin, label: "Visit Us", value: "123 Digital Avenue, Tech City" },
            { Icon: Clock, label: "Hours", value: "Mon–Fri  9am – 6pm EST" },
          ].map(({ Icon, label, value }, i) => (
            <motion.div key={i} style={{
              padding: "32px 24px", textAlign: "center",
              borderRight: i < 3 ? "1px solid rgba(13, 27, 42, 0.12)" : "none",
              borderBottom: "1px solid rgba(13, 27, 42, 0.12)",
            }}
              variants={fadeInUp}
            >
              <Icon size={20} color="rgba(13, 27, 42, 0.65)" strokeWidth={1.5} style={{ marginBottom: 10 }} />
              <p style={{ color: "rgba(13, 27, 42, 0.6)", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6, fontFamily: "Sora, sans-serif" }}>{label}</p>
              <p style={{ color: C.dark, fontSize: 13, fontWeight: 600 }}>{value}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── INLINE QUICK FORM ── */}
      <motion.section 
        style={{ backgroundColor: C.dark, padding: "96px 32px", textAlign: "center", borderTop: `1px solid rgba(65,90,119,0.15)` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{
            ...sora, color: C.light,
            fontSize: "clamp(1.8rem,4vw,3rem)",
            fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "-0.02em", lineHeight: 1.15,
            marginBottom: 36,
          }}>
            TAKE THE FIRST STEP TOWARD DIGITAL EXCELLENCE
            <span style={{ color: C.accent }}>..</span>
          </h2>
          {submitted ? (
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 14,
              backgroundColor: C.secondary, borderRadius: 0, padding: "20px 32px",
            }}>
              <CheckCircle size={22} color="#4ade80" />
              <span style={{ ...sora, color: C.light, fontWeight: 700, fontSize: 14.5 }}>
                Message received! We'll be in touch within 24 hours.
              </span>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
              style={{ display: "flex", maxWidth: 720, margin: "0 auto", flexWrap: "wrap", gap: 0 }}>
              <input placeholder="Name *" required
                className="placeholder:text-[#778DA9]"
                style={{
                  flex: "1 1 200px", backgroundColor: C.secondary,
                  border: "1.5px solid rgba(65,90,119,0.35)", borderRight: "none",
                  padding: "15px 18px", color: C.light, fontSize: 13,
                  outline: "none", fontFamily: "Inter, sans-serif",
                  borderRadius: 0,
                }}
              />
              <input placeholder="Phone / Email *" required type="text"
                className="placeholder:text-[#778DA9]"
                style={{
                  flex: "1 1 200px", backgroundColor: C.secondary,
                  border: "1.5px solid rgba(65,90,119,0.35)", borderRight: "none",
                  padding: "15px 18px", color: C.light, fontSize: 13,
                  outline: "none", fontFamily: "Inter, sans-serif",
                  borderRadius: 0,
                }}
              />
              <button type="submit" style={{
                ...sora,
                backgroundColor: C.accent, color: C.light,
                padding: "15px 32px", border: "none", cursor: "pointer",
                fontSize: 11.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                transition: "background-color 0.2s", whiteSpace: "nowrap",
                borderRadius: 0,
              }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = C.secondary}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = C.accent}
              >
                PLEASE CONTACT ME
              </button>
            </form>
          )}
        </div>
      </motion.section>

      {/* ── FULL CONTACT FORM ── */}
      <motion.section 
        style={{ backgroundColor: C.light, padding: "110px 32px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 80, alignItems: "start" }}>

            {/* Left — info */}
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeInUp}>
                <SectionTag>Contact Details</SectionTag>
              </motion.div>
              <motion.h2 style={{
                ...sora, color: C.dark,
                fontSize: "clamp(1.5rem,3vw,2.4rem)",
                fontWeight: 800, textTransform: "uppercase",
                letterSpacing: "-0.02em", lineHeight: 1.15,
                marginBottom: 16, textAlign: "center",
              }}
                variants={fadeInUp}
              >
                GET IN TOUCH WITH US
                <span style={{ color: C.accent }}>.</span>
              </motion.h2>
              <motion.p style={{ color: "rgba(13, 27, 42, 0.7)", fontSize: 14.5, lineHeight: 1.85, marginBottom: 44, textAlign: "center" }}
                variants={fadeInUp}
              >
                Whether you're ready to start a project, want a free consultation, or just have a question — we're here and happy to help.
              </motion.p>
              <motion.div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 460, margin: "0 auto" }}
                variants={staggerContainer}
              >
                {[
                  { Icon: Mail, label: "Email Us", val: "hello@lorinzazenix.com", sub: "Reply within 24hrs" },
                  { Icon: Phone, label: "Call Us", val: "+1 (555) 123-4567", sub: "Mon–Fri, 9am–6pm EST" },
                  { Icon: MapPin, label: "Visit Us", val: "123 Digital Avenue, Tech City TC 10001", sub: "United States" },
                  { Icon: Clock, label: "Business Hours", val: "Mon – Fri: 9:00am – 6:00pm", sub: "Sat: 10:00am – 3:00pm" },
                ].map(({ Icon, label, val, sub }, i) => (
                  <motion.div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
                    variants={fadeInUp}
                  >
                    <div style={{
                      width: 44, height: 44, borderRadius: 0,
                      backgroundColor: "rgba(13, 27, 42, 0.06)",
                      border: `1px solid rgba(13, 27, 42, 0.12)`,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <Icon size={18} color={C.dark} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p style={{ color: "rgba(13, 27, 42, 0.6)", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4, fontFamily: "Sora, sans-serif" }}>{label}</p>
                      <p style={{ color: C.dark, fontSize: 14, fontWeight: 600 }}>{val}</p>
                      <p style={{ color: C.accent, fontSize: 12, marginTop: 2 }}>{sub}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(13, 27, 42, 0.12)",
                borderRadius: 0, padding: "24px 28px",
                maxWidth: 460, margin: "44px auto 0",
                boxShadow: "0 10px 30px -10px rgba(13,27,42,0.04)",
              }}
                variants={fadeInUp}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <MessageCircle size={18} color={C.dark} />
                  <span style={{ ...sora, color: C.dark, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>Our Promise</span>
                </div>
                <p style={{ color: "rgba(13, 27, 42, 0.7)", fontSize: 13.5, lineHeight: 1.8 }}>
                  We respond to every inquiry within 24 business hours. Mention urgency in your message and we'll prioritize it.
                </p>
              </motion.div>
            </motion.div>

            {/* Right — detailed form */}
            <motion.div style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(13, 27, 42, 0.12)",
              borderRadius: 0, padding: "48px 40px",
              boxShadow: "0 15px 40px -15px rgba(13, 27, 42, 0.08)",
            }}
              variants={fadeInUp}
            >
              {submitted ? (
                <div style={{ textAlign: "center", padding: "48px 0" }}>
                  <div style={{
                    width: 68, height: 68, borderRadius: "50%",
                    backgroundColor: "rgba(65,90,119,0.12)",
                    border: `2px solid ${C.accent}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 24px",
                  }}>
                    <CheckCircle size={30} color={C.accent} />
                  </div>
                  <h3 style={{ ...sora, color: C.dark, fontSize: "1.4rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: 12 }}>
                    MESSAGE SENT!
                  </h3>
                  <p style={{ color: "rgba(13, 27, 42, 0.7)", fontSize: 14, lineHeight: 1.8, maxWidth: 360, margin: "0 auto 36px" }}>
                    Thank you for reaching out to LorinzaZenix. Our team will review your project details and respond within 24 hours.
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); setBudget(""); }}
                    style={{
                      ...sora, backgroundColor: C.accent, color: C.light,
                      padding: "13px 32px", borderRadius: 0, border: "none",
                      fontSize: 11.5, fontWeight: 700, letterSpacing: "0.08em",
                      textTransform: "uppercase", cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = C.dark}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = C.accent}
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <>
                  <h3 style={{ ...sora, color: C.dark, fontSize: "1.3rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: 8 }}>
                    TELL US ABOUT YOUR PROJECT
                  </h3>
                  <p style={{ color: "rgba(13, 27, 42, 0.7)", fontSize: 13.5, marginBottom: 32, lineHeight: 1.65 }}>
                    Fill in the details and we'll craft a customized strategy just for you.
                  </p>

                  <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 16, marginBottom: 16 }}>
                      {[
                        { name: "name", label: "Full Name *", placeholder: "John Smith", type: "text" },
                        { name: "email", label: "Email Address *", placeholder: "john@company.com", type: "email" },
                      ].map(({ name, label, placeholder, type }) => (
                        <div key={name}>
                          <label style={{ color: "rgba(13, 27, 42, 0.75)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 8, fontFamily: "Sora, sans-serif" }}>
                            {label}
                          </label>
                          <input
                            name={name} type={type} required placeholder={placeholder}
                            value={form[name]}
                            onChange={e => setForm(p => ({ ...p, [name]: e.target.value }))}
                            className="placeholder:text-gray-400"
                            style={inputStLight(name)}
                            onFocus={() => setFocused(name)}
                            onBlur={() => setFocused(null)}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 16, marginBottom: 16 }}>
                      <div>
                        <label style={{ color: "rgba(13, 27, 42, 0.75)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 8, fontFamily: "Sora, sans-serif" }}>
                          Phone Number
                        </label>
                        <input
                          name="phone" type="tel" placeholder="+1 (555) 000-0000"
                          value={form.phone}
                          onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                          className="placeholder:text-gray-400"
                          style={inputStLight("phone")}
                          onFocus={() => setFocused("phone")}
                          onBlur={() => setFocused(null)}
                        />
                      </div>
                      <div>
                        <label style={{ color: "rgba(13, 27, 42, 0.75)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 8, fontFamily: "Sora, sans-serif" }}>
                          Service Needed *
                        </label>
                        <select
                          name="service" required
                          value={form.service}
                          onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                          style={{ ...inputStLight("service"), appearance: "none" }}
                          onFocus={() => setFocused("service")}
                          onBlur={() => setFocused(null)}
                        >
                          <option value="" style={{ backgroundColor: "#FFFFFF", color: C.dark }}>Select a service</option>
                          {["UI/UX Design", "Website Development", "Digital Marketing", "Brand Identity", "SEO Optimization", "Social Media", "Other"].map(s => (
                            <option key={s} value={s} style={{ backgroundColor: "#FFFFFF", color: C.dark }}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Budget pills */}
                    <div style={{ marginBottom: 20 }}>
                      <label style={{ color: "rgba(13, 27, 42, 0.75)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 10, fontFamily: "Sora, sans-serif" }}>
                        Project Budget
                      </label>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        {["$500–$1K", "$1K–$5K", "$5K–$10K", "$10K–$25K", "$25K+"].map(b => (
                          <button key={b} type="button" onClick={() => setBudget(b)} style={{
                            padding: "8px 16px", borderRadius: 0,
                            border: `1.5px solid ${budget === b ? C.accent : "rgba(13, 27, 42, 0.15)"}`,
                            backgroundColor: budget === b ? C.accent : "transparent",
                            color: budget === b ? C.light : "rgba(13, 27, 42, 0.7)",
                            fontSize: 12, fontWeight: 700, cursor: "pointer",
                            transition: "all 0.2s ease", fontFamily: "Inter, sans-serif",
                          }}>
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div style={{ marginBottom: 28 }}>
                      <label style={{ color: "rgba(13, 27, 42, 0.75)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 8, fontFamily: "Sora, sans-serif" }}>
                        Project Details *
                      </label>
                      <textarea
                        name="message" required rows={5}
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        value={form.message}
                        onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                        className="placeholder:text-gray-400"
                        style={{ ...inputStLight("message"), resize: "vertical", minHeight: 110 }}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>

                    <button type="submit" style={{
                      ...sora, width: "100%",
                      backgroundColor: C.accent, color: C.light,
                      padding: "15px 32px", borderRadius: 0, border: "none",
                      fontSize: 12, fontWeight: 700, letterSpacing: "0.1em",
                      textTransform: "uppercase", cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                      transition: "all 0.2s ease",
                    }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = C.dark}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = C.accent}
                    >
                      SEND MESSAGE <Send size={14} />
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── FAQ ── */}
      <motion.section 
        style={{ backgroundColor: C.secondary, padding: "110px 32px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", textAlign: "center" }}>
          <SectionTag>Common Questions</SectionTag>
          <motion.h2 
            style={{
              ...sora, color: C.light,
              fontSize: "clamp(1.8rem,4vw,3rem)",
              fontWeight: 800, textTransform: "uppercase",
              letterSpacing: "-0.02em", lineHeight: 1.15,
              marginBottom: 60,
            }}
            variants={fadeInUp}
          >
            FREQUENTLY ASKED QUESTIONS
            <span style={{ color: C.accent }}>.</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 4 }}>
            {[
              { q: "How long does a typical project take?", a: "Timelines vary by scope. A standard website takes 4–6 weeks, a full brand identity 2–4 weeks, and a digital marketing launch 1–2 weeks." },
              { q: "What is your minimum project budget?", a: "Our projects start from $999 for focused deliverables. Full-service engagements typically range from $3,000 to $25,000+ depending on scope." },
              { q: "Do you work with international clients?", a: "Absolutely. We work with clients across North America, Europe, Asia, and beyond via our fully digital-first workflow." },
              { q: "What do you need to get started?", a: "Just a conversation. We'll schedule a discovery call to understand your goals, then craft a customized proposal." },
              { q: "Do you offer ongoing support?", a: "Yes. We offer retainers for ongoing digital marketing, website maintenance, SEO monitoring, and social media management." },
              { q: "How do you measure success?", a: "We define KPIs at kickoff — conversion rates, organic traffic, brand engagement, or revenue impact — and report on them regularly." },
            ].map(({ q, a }, i) => (
              <motion.div 
                key={i} 
                style={{
                  backgroundColor: C.dark, padding: "32px",
                  textAlign: "left",
                  borderBottom: "3px solid transparent",
                  cursor: "pointer",
                }}
                variants={fadeInUp}
                whileHover={{
                  y: -4,
                  borderColor: C.accent,
                  boxShadow: "0 10px 30px rgba(65, 90, 119, 0.08)",
                }}
                transition={{ duration: 0.25 }}
              >
                <p style={{ ...sora, color: C.light, fontSize: "0.95rem", fontWeight: 700, marginBottom: 12, lineHeight: 1.4 }}>{q}</p>
                <p style={{ color: C.support, fontSize: 14, lineHeight: 1.8 }}>{a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── MAP PLACEHOLDER ── */}
      <motion.section 
        style={{ backgroundColor: C.light }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div style={{
          height: 300, position: "relative", overflow: "hidden",
          backgroundColor: C.light,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {/* Grid pattern */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `linear-gradient(rgba(13, 27, 42, 0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(13, 27, 42, 0.06) 1px,transparent 1px)`,
            backgroundSize: "44px 44px",
          }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,transparent 30%,rgba(224,225,221,0.8) 100%)" }} />
          <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
            <motion.div 
              style={{
                width: 52, height: 52, borderRadius: "50%", backgroundColor: C.accent,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 16px",
                boxShadow: `0 0 0 10px rgba(65,90,119,0.12),0 0 0 22px rgba(65,90,119,0.05)`,
              }}
              animate={{ 
                scale: [1, 1.08, 1],
                boxShadow: [
                  `0 0 0 10px rgba(65,90,119,0.12),0 0 0 22px rgba(65,90,119,0.05)`,
                  `0 0 0 15px rgba(65,90,119,0.08),0 0 0 28px rgba(65,90,119,0.02)`,
                  `0 0 0 10px rgba(65,90,119,0.12),0 0 0 22px rgba(65,90,119,0.05)`
                ]
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <MapPin size={22} color={C.light} />
            </motion.div>
            <p style={{ ...sora, color: C.dark, fontSize: "1rem", fontWeight: 700, marginBottom: 4 }}>LorinzaZenix HQ</p>
            <p style={{ color: "rgba(13, 27, 42, 0.7)", fontSize: 13.5 }}>123 Digital Avenue, Tech City, TC 10001</p>
          </div>
        </div>
      </motion.section>

    </div>
  );
}
