"use client";

import { Suspense, useState, useEffect, useRef, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import GridScene from "./GridScene";

interface HeroCanvasProps {
  className?: string;
}

// Loading fallback component
function CanvasLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-deep-navy">
      <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

// Shared refs for scroll and mouse data - avoids React re-renders
// These are updated directly from event listeners and read in useFrame
export const scrollRef = { current: 0 };
export const targetScrollRef = { current: 0 };
export const mouseRef = { current: { x: 0, y: 0 } };
export const targetMouseRef = { current: { x: 0, y: 0 } };

export default function HeroCanvas({ className = "" }: HeroCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [performanceLevel, setPerformanceLevel] = useState<"high" | "medium" | "low">("high");

  // Handle scroll - update ref directly, no state updates
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      // Normalize scroll progress (0 to 1) over the first viewport
      targetScrollRef.current = Math.min(scrollY / viewportHeight, 1);
    };

    // Set initial value
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mouse movement - update ref directly, no state updates
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1
      targetMouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Detect device capabilities on mount
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setPerformanceLevel("low");
      return;
    }

    // Check for GPU capabilities
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (gl) {
      const debugInfo = (gl as WebGLRenderingContext).getExtension("WEBGL_debug_renderer_info");
      if (debugInfo) {
        const renderer = (gl as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        // Check for integrated graphics or mobile GPUs
        if (renderer.toLowerCase().includes("intel") ||
            renderer.toLowerCase().includes("mali") ||
            renderer.toLowerCase().includes("adreno")) {
          setPerformanceLevel("medium");
        }
      }
    }
  }, []);

  const handlePerformanceChange = useCallback((level: "high" | "medium" | "low") => {
    setPerformanceLevel(level);
  }, []);

  return (
    <div ref={containerRef} className={`three-canvas-container ${className}`}>
      <Suspense fallback={<CanvasLoader />}>
        <Canvas
          camera={{ position: [0, 0, 15], fov: 60 }}
          dpr={performanceLevel === "high" ? [1, 1.5] : [1, 1]}
          frameloop="always"
          gl={{
            antialias: false,
            alpha: true,
            powerPreference: "high-performance",
            stencil: false,
            depth: false,
          }}
          style={{ background: "transparent" }}
        >
          <GridScene
            performanceLevel={performanceLevel}
            onPerformanceChange={handlePerformanceChange}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
