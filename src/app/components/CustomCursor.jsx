import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const containerRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);

  // Use refs for positions to avoid triggering React re-renders on mousemove
  const mouseCoords = useRef({ x: 0, y: 0 });
  const ringCoords = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);
  
  // Track theme using ref for access in mouse down/up handlers without re-registering listeners
  const isLightThemeRef = useRef(false);

  // Detect touch-only devices to disable custom cursor (which is pointer-only)
  useEffect(() => {
    const touchMedia = window.matchMedia("(pointer: coarse)");
    setIsTouchDevice(touchMedia.matches);
    const handleTouchChange = (e) => {
      setIsTouchDevice(e.matches);
    };
    touchMedia.addEventListener("change", handleTouchChange);

    return () => {
      touchMedia.removeEventListener("change", handleTouchChange);
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    // Track mouse coordinates
    const handleMouseMove = (e) => {
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;
      
      // Make cursor visible on first movement
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = (e) => {
      if (!containerRef.current) return;
      
      // Create ripple effect element
      const ripple = document.createElement("div");
      ripple.className = `custom-cursor-ripple ${isLightThemeRef.current ? "light-theme" : ""}`;
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      containerRef.current.appendChild(ripple);
      
      // Scale down dot and ring slightly on click
      if (dotRef.current) {
        dotRef.current.style.transform = "translate(-50%, -50%) scale(0.65)";
      }
      if (ringRef.current) {
        ringRef.current.style.transform = "translate(-50%, -50%) scale(0.85)";
      }

      // Automatically remove ripple DOM node after animation completes (400ms)
      setTimeout(() => {
        ripple.remove();
      }, 400);
    };

    const handleMouseUp = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      }
      if (ringRef.current) {
        ringRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      }
    };

    // Hover & Background Luminance detection using event delegation
    const handleMouseOver = (e) => {
      let target = e.target;
      let isClickable = false;
      
      // Traverse up to 5 levels to see if target or parent is clickable
      for (let i = 0; i < 5; i++) {
        if (!target) break;
        const tagName = target.tagName?.toLowerCase();
        
        if (
          ["a", "button", "input", "select", "textarea"].includes(tagName) ||
          target.getAttribute("role") === "button" ||
          target.classList?.contains("cursor-pointer") ||
          target.style?.cursor === "pointer" ||
          window.getComputedStyle(target).cursor === "pointer"
        ) {
          isClickable = true;
          break;
        }
        target = target.parentElement;
      }
      setIsHovered(isClickable);

      // Traversal for background color luminance to detect dark vs light section
      let bgTarget = e.target;
      let detectedTheme = "dark"; // Default body background is dark
      
      const getLuminance = (rgbStr) => {
        const match = rgbStr.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/);
        if (!match) return null;
        const r = parseInt(match[1], 10);
        const g = parseInt(match[2], 10);
        const b = parseInt(match[3], 10);
        const a = match[4] !== undefined ? parseFloat(match[4]) : 1;
        if (a < 0.15) return null; // Skip highly transparent backgrounds
        return 0.299 * r + 0.587 * g + 0.114 * b;
      };

      while (bgTarget && bgTarget !== document.body) {
        const bg = window.getComputedStyle(bgTarget).backgroundColor;
        if (bg && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)") {
          const lum = getLuminance(bg);
          if (lum !== null) {
            detectedTheme = lum > 175 ? "light" : "dark";
            break;
          }
        }
        bgTarget = bgTarget.parentElement;
      }

      const isLight = detectedTheme === "light";
      if (isLightThemeRef.current !== isLight) {
        isLightThemeRef.current = isLight;
        setIsLightTheme(isLight);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);

    // requestAnimationFrame loop for smooth physics / linear interpolation
    const updateCursor = () => {
      const { x: targetX, y: targetY } = mouseCoords.current;
      let { x: currentX, y: currentY } = ringCoords.current;

      // Linear interpolation (lerp) for the luxury lag ring effect
      const lerpFactor = 0.16;
      currentX += (targetX - currentX) * lerpFactor;
      currentY += (targetY - currentY) * lerpFactor;

      ringCoords.current.x = currentX;
      ringCoords.current.y = currentY;

      // Direct DOM mutation updates positions without React state latency
      if (dotRef.current) {
        dotRef.current.style.left = `${targetX}px`;
        dotRef.current.style.top = `${targetY}px`;
      }

      if (ringRef.current) {
        ringRef.current.style.left = `${currentX}px`;
        ringRef.current.style.top = `${currentY}px`;
      }

      animationFrameId.current = requestAnimationFrame(updateCursor);
    };

    animationFrameId.current = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isTouchDevice, isVisible]);

  if (isTouchDevice) return null;

  return (
    <div
      ref={containerRef}
      className={`custom-cursor-container ${isLightTheme ? "light-theme" : ""}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.25s ease-in-out",
      }}
    >
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${isHovered ? "hovered" : ""}`}
      />
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${isHovered ? "hovered" : ""}`}
      />
    </div>
  );
}
