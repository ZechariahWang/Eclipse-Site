"use client";

import { useEffect, useState } from "react";
import { HeroCanvas } from "./three";

type DeviceType = "mobile" | "tablet" | "desktop";

// Custom hook for responsive device detection
function useDeviceType(): DeviceType {
  const [deviceType, setDeviceType] = useState<DeviceType>("desktop");

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceType("mobile");
      } else if (width < 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);
    return () => window.removeEventListener("resize", checkDeviceType);
  }, []);

  return deviceType;
}

// Mobile-only CSS fallback with gradient and SVG grid
function MobileFallback() {
  return (
    <div className="hero-mobile-fallback" aria-hidden="true">
      {/* Base gradient background is in CSS */}

      {/* SVG Grid overlay with perspective */}
      <div className="hero-grid-svg" />

      {/* Animated glow line */}
      <div className="hero-glow-line" />

      {/* CSS particle effects */}
      <div className="hero-particles" />

      {/* Additional decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top gradient fade */}
        <div
          className="absolute top-0 left-0 right-0 h-32"
          style={{
            background: "linear-gradient(to bottom, rgba(10, 14, 39, 0.8), transparent)",
          }}
        />

        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background: "linear-gradient(to top, rgba(0, 0, 0, 1), transparent)",
          }}
        />

        {/* Corner accents */}
        <div
          className="absolute top-1/4 left-0 w-32 h-px opacity-40"
          style={{
            background: "linear-gradient(to right, var(--cyan-accent), transparent)",
          }}
        />
        <div
          className="absolute top-1/3 right-0 w-24 h-px opacity-30"
          style={{
            background: "linear-gradient(to left, var(--primary-indigo), transparent)",
          }}
        />
      </div>
    </div>
  );
}

// Tablet fallback with simplified grid (no bloom/particles)
function TabletFallback() {
  return (
    <div className="hero-mobile-fallback" aria-hidden="true">
      <div className="hero-grid-svg" style={{ opacity: 0.5 }} />
      <div className="hero-glow-line" />

      {/* Simplified particle-like dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${20 + Math.random() * 60}%`,
              background: i % 2 === 0 ? "var(--cyan-accent)" : "var(--primary-indigo)",
              opacity: 0.3 + Math.random() * 0.3,
              animation: `float-particle ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlays */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64"
        style={{
          background: "linear-gradient(to top, rgba(0, 0, 0, 1), transparent)",
        }}
      />
    </div>
  );
}

// Main Hero background component with device-aware rendering
export default function HeroBackground() {
  const deviceType = useDeviceType();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Server-side and initial render: show mobile fallback (lightest)
  if (!mounted) {
    return <MobileFallback />;
  }

  // Device-specific rendering
  switch (deviceType) {
    case "mobile":
      // Mobile: CSS-only fallback (saves ~500KB-1MB)
      return <MobileFallback />;

    case "tablet":
      // Tablet: Simplified grid without Three.js effects
      return <TabletFallback />;

    case "desktop":
    default:
      // Desktop: Full Three.js experience with bloom
      return <HeroCanvas />;
  }
}
