import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "./PageHero";
import ContactImg from "../../images/contactt.webp";
 
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
        gap: 16,
        backgroundColor: C.secondary,
        border: `1px solid rgba(127, 160, 196, 0.28)`,
        padding: "20px 20px",
        willChange: "transform, opacity",
      }}
      whileHover={{ y: -4, borderColor: C.accent, boxShadow: "0 12px 30px rgba(30, 58, 86, 0.16)" }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(127, 160, 196, 0.14)",
          border: `1px solid rgba(127, 160, 196, 0.2)`,
        }}
      >
        <Icon size={18} color={C.light} strokeWidth={1.6} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            ...sora,
            color: C.light,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 6,
          }}
        >
          {label}
        </p>
        <p style={{ color: C.light, fontSize: 15, fontWeight: 600, lineHeight: 1.45 }}>{value}</p>
        <p style={{ color: C.support, fontSize: 12.5, lineHeight: 1.6, marginTop: 4 }}>{meta}</p>
      </div>
      <motion.span style={{ marginTop: 2, color: C.accent }} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
        <ArrowRight size={16} />
      </motion.span>
    </motion.div>
  );
}

export function Contact() {
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [result, setResult] = useState("");

const onSubmit = async (event) => {
  event.preventDefault();

  setResult("Sending...");

  const formData = new FormData(event.target);

  formData.append(
    "access_key",
    "57f9ca46-b522-419d-80b6-e4470e41e115"
  );

  const response = await fetch(
    "https://api.web3forms.com/submit",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  if (data.success) {
    setSubmitted(true);
    setResult("Message Sent Successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    event.target.reset();
  } else {
    console.log("Error", data);
    setResult("Something went wrong!");
  }
};

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
    { icon: Mail, label: "Email", value: "contact@lorinzazenix.com", meta: "Reply within 24 business hours" },
    { icon: Phone, label: "Phone", value: "+91 86990 09381", meta: "Mon to Fri, 9am to 6pm EST" },
    { icon: MapPin, label: "Location", value: "1311, MARATHON MILLENIUM, LBS ROAD, BESIDE NIRMAL LIFESTYLE MALL, MULUND WEST, Mumbai(400080).", meta: "Remote-first, global client base" },
  ];

  return (
    <div style={{ backgroundColor: C.dark }}>
     

      <motion.section
        style={{
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(180deg, ${C.dark} 0%, ${C.secondary} 100%)`,
          padding: "104px 32px",
        }}
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
          <div style={{ gap: 56, alignItems: "flex-start" }} className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr]">
            <motion.div variants={blockVariants}>
           
              <motion.h1
                style={{
                  ...sora,
                  color: C.light,
                  fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                  marginBottom: 18,
                }}
                variants={headingVariants}
              >
                LET'S BUILD SOMETHING TOGETHER
                <span style={{ color: C.accent }}>.</span>
              </motion.h1>
              <motion.p
                style={{ color: C.support, fontSize: 16, lineHeight: 1.85, maxWidth: 540, marginBottom: 34 }}
                variants={paragraphVariants}
              >
               One conversation. That's where it starts.
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
                padding: "30px 30px",
                boxShadow: "0 16px 36px rgba(30, 58, 86, 0.12)",
              }}
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
                     onSubmit={onSubmit}
                    style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}
                    variants={containerVariants}
                  >
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }} className="sm:grid-cols-2">
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
                        placeholder=""
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

                    {result && (
  <p
    style={{
      color: C.light,
      textAlign: "center",
      marginTop: "10px",
    }}
  >
    {result}
  </p>
)}
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
