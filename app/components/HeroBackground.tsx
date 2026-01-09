"use client";

// Simple light background - no Three.js, no complex animations
export default function HeroBackground() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      {/* Clean white to cream gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #F8F8F8 50%, #E4E9D3 100%)",
        }}
      />

      {/* Subtle decorative element - optional sage accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40vh] opacity-30"
        style={{
          background: "linear-gradient(180deg, transparent 0%, #E4E9D3 100%)",
        }}
      />
    </div>
  );
}
