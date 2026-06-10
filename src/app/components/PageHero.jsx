import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const C = { dark: "#0D1B2A", accent: "#415A77", support: "#778DA9", light: "#E0E1DD" };
const sora = { fontFamily: "'Sora', sans-serif" };

export function PageHero({ eyebrow, title, description, image, alt }) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const eyebrowVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: "easeOut" },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "clamp(520px, 74vh, 760px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "160px 32px 120px",
        textAlign: "center",
        backgroundColor: C.dark,
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.34) contrast(0.98) saturate(0.95)",
          transform: "scale(1.02)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(3, 12, 35, 0.72) 0%, rgba(2, 10, 28, 0.8) 52%, rgba(1, 8, 24, 0.92) 100%), radial-gradient(circle at 50% 42%, rgba(65, 90, 119, 0.2) 0%, transparent 58%)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: "10%",
          right: "8%",
          width: "460px",
          height: "460px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(65, 90, 119, 0.22) 0%, rgba(13, 27, 42, 0) 70%)",
          filter: "blur(110px)",
          pointerEvents: "none",
        }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.7, 0.92, 0.7] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "10%",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, rgba(13, 27, 42, 0) 70%)",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.65, 0.82, 0.65] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 920, margin: "0 auto" }}>
        <motion.p
          style={{
            ...sora,
            color: C.accent,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
          variants={eyebrowVariants}
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          style={{
            ...sora,
            color: C.light,
            fontSize: "clamp(2.2rem, 5.6vw, 4.6rem)",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
            marginBottom: 24,
          }}
          variants={headingVariants}
        >
          {title}
          <span style={{ color: C.accent }}>.</span>
        </motion.h1>

        <motion.p
          style={{
            color: C.support,
            fontSize: 17,
            lineHeight: 1.85,
            maxWidth: 640,
            margin: "0 auto",
          }}
          variants={paragraphVariants}
        >
          {description}
        </motion.p>
      </div>

      <ImageWithFallback
        src={image}
        alt={alt}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0 }}
      />
    </motion.section>
  );
}