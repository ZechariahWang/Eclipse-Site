"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { PerformanceMonitor } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

import {
  scrollRef,
  targetScrollRef,
  mouseRef,
  targetMouseRef,
} from "./HeroCanvas";

// Color constants matching the CSS variables
const COLORS = {
  primaryIndigo: new THREE.Color("#6366f1"),
  cyanAccent: new THREE.Color("#00d4ff"),
  purpleAccent: new THREE.Color("#7c3aed"),
  deepNavy: new THREE.Color("#0a0e27"),
};

// Lerp factor for smooth interpolation (lower = smoother but slower)
const SCROLL_LERP = 0.08;
const MOUSE_LERP = 0.06;

// Linear interpolation helper
function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

interface GridSceneProps {
  performanceLevel: "high" | "medium" | "low";
  onPerformanceChange: (level: "high" | "medium" | "low") => void;
}

// Instanced particles component for performance
function InstancedParticles({
  count,
  performanceLevel,
}: {
  count: number;
  performanceLevel: "high" | "medium" | "low";
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const particleCount = performanceLevel === "high" ? count : performanceLevel === "medium" ? Math.floor(count / 3) : Math.floor(count / 6);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 40;
      const y = Math.random() * 15 - 5;
      const z = (Math.random() - 0.5) * 40;
      const scale = Math.random() * 0.04 + 0.02;
      const speed = Math.random() * 0.3 + 0.1;
      const offset = Math.random() * Math.PI * 2;
      temp.push({ x, y, z, scale, speed, offset });
    }
    return temp;
  }, [particleCount]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i];
      const y = particle.y + Math.sin(time * particle.speed + particle.offset) * 0.5;
      dummy.position.set(particle.x, y, particle.z);
      dummy.scale.setScalar(particle.scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, particleCount]}>
      <sphereGeometry args={[1, 4, 4]} />
      <meshBasicMaterial color={COLORS.cyanAccent} transparent opacity={0.6} />
    </instancedMesh>
  );
}

// Animated wireframe grid floor
function WireframeGrid({
  performanceLevel,
}: {
  performanceLevel: "high" | "medium" | "low";
}) {
  const gridRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.LineBasicMaterial>(null);
  const gridSize = performanceLevel === "high" ? 60 : performanceLevel === "medium" ? 50 : 40;
  const divisions = performanceLevel === "high" ? 40 : performanceLevel === "medium" ? 30 : 20;

  // Create custom grid geometry with glow
  const gridGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const colors: number[] = [];
    const halfSize = gridSize / 2;
    const step = gridSize / divisions;

    // Create grid lines
    for (let i = 0; i <= divisions; i++) {
      const pos = -halfSize + i * step;

      // Horizontal lines
      vertices.push(-halfSize, 0, pos);
      vertices.push(halfSize, 0, pos);

      // Vertical lines
      vertices.push(pos, 0, -halfSize);
      vertices.push(pos, 0, halfSize);

      // Color gradient based on distance from center
      const distFromCenter = Math.abs(pos) / halfSize;
      const colorIntensity = 1 - distFromCenter * 0.5;

      // Blend between indigo and cyan
      const color = new THREE.Color().lerpColors(
        COLORS.primaryIndigo,
        COLORS.cyanAccent,
        distFromCenter * 0.3
      );

      // Add colors for both ends of each line
      for (let j = 0; j < 4; j++) {
        colors.push(color.r * colorIntensity, color.g * colorIntensity, color.b * colorIntensity);
      }
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    return geometry;
  }, [gridSize, divisions]);

  useFrame((state) => {
    if (!gridRef.current) return;

    const time = state.clock.getElapsedTime();

    // Smoothly interpolate scroll and mouse values using lerp
    // This prevents jerky animations by smoothing the transition
    scrollRef.current = lerp(scrollRef.current, targetScrollRef.current, SCROLL_LERP);
    mouseRef.current.x = lerp(mouseRef.current.x, targetMouseRef.current.x, MOUSE_LERP);
    mouseRef.current.y = lerp(mouseRef.current.y, targetMouseRef.current.y, MOUSE_LERP);

    const smoothScroll = scrollRef.current;
    const smoothMouseX = mouseRef.current.x;
    const smoothMouseY = mouseRef.current.y;

    // Subtle base rotation
    const baseRotationX = -Math.PI / 2.5;
    const baseRotationZ = Math.PI / 12;

    // Mouse parallax (limited to 5-10 degrees = ~0.09-0.17 radians)
    const mouseRotationX = smoothMouseY * 0.1; // ~5.7 degrees max
    const mouseRotationY = smoothMouseX * 0.15; // ~8.6 degrees max

    // Scroll-based rotation and depth
    const scrollRotationX = smoothScroll * 0.3;
    const scrollPositionZ = smoothScroll * 5;

    // Apply rotations smoothly
    gridRef.current.rotation.x = baseRotationX + mouseRotationX + scrollRotationX;
    gridRef.current.rotation.y = mouseRotationY + Math.sin(time * 0.1) * 0.02;
    gridRef.current.rotation.z = baseRotationZ + Math.cos(time * 0.15) * 0.01;

    // Position based on scroll
    gridRef.current.position.y = -8 + scrollPositionZ * 0.5;
    gridRef.current.position.z = -10 - scrollPositionZ;

    // Pulse the grid opacity subtly
    if (materialRef.current) {
      materialRef.current.opacity = 0.4 + Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <group ref={gridRef} position={[0, -8, -10]}>
      <lineSegments geometry={gridGeometry}>
        <lineBasicMaterial
          ref={materialRef}
          vertexColors
          transparent
          opacity={0.5}
          linewidth={1}
        />
      </lineSegments>
    </group>
  );
}

// Secondary accent grid for depth
function AccentGrid({
  performanceLevel,
}: {
  performanceLevel: "high" | "medium" | "low";
}) {
  const gridRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!gridRef.current) return;
    const time = state.clock.getElapsedTime();

    // Use the already-smoothed scroll value from scrollRef
    const smoothScroll = scrollRef.current;

    gridRef.current.rotation.x = -Math.PI / 3 + smoothScroll * 0.2;
    gridRef.current.position.y = -12 + Math.sin(time * 0.3) * 0.5;
    gridRef.current.position.z = -20 - smoothScroll * 8;
  });

  if (performanceLevel === "low") return null;

  return (
    <mesh ref={gridRef} position={[0, -12, -20]} rotation={[-Math.PI / 3, 0, 0]}>
      <planeGeometry args={[80, 80, 20, 20]} />
      <meshBasicMaterial
        color={COLORS.purpleAccent}
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

// Data stream lines
function DataStreams({
  performanceLevel,
}: {
  performanceLevel: "high" | "medium" | "low";
}) {
  const linesRef = useRef<THREE.Group>(null);
  const streamCount = performanceLevel === "high" ? 12 : performanceLevel === "medium" ? 6 : 0;

  const streams = useMemo(() => {
    return Array.from({ length: streamCount }, (_, i) => ({
      x: (Math.random() - 0.5) * 30,
      z: (Math.random() - 0.5) * 30,
      height: Math.random() * 10 + 5,
      speed: Math.random() * 2 + 1,
      offset: Math.random() * Math.PI * 2,
    }));
  }, [streamCount]);

  useFrame((state) => {
    if (!linesRef.current) return;
    const time = state.clock.getElapsedTime();

    linesRef.current.children.forEach((child, i) => {
      const stream = streams[i];
      const mesh = child as THREE.Mesh;
      const y = ((time * stream.speed + stream.offset) % stream.height) - stream.height / 2;
      mesh.position.y = y - 5;

      // Fade based on position
      const material = mesh.material as THREE.MeshBasicMaterial;
      const fadePos = Math.abs(y) / (stream.height / 2);
      material.opacity = (1 - fadePos) * 0.4;
    });
  });

  if (performanceLevel === "low") return null;

  return (
    <group ref={linesRef}>
      {streams.map((stream, i) => (
        <mesh key={i} position={[stream.x, 0, stream.z]}>
          <boxGeometry args={[0.02, 2, 0.02]} />
          <meshBasicMaterial color={COLORS.cyanAccent} transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  );
}

// Main scene component
export default function GridScene({
  performanceLevel,
  onPerformanceChange,
}: GridSceneProps) {
  const handleIncline = () => {
    // Performance is good, can increase quality
    if (performanceLevel === "low") {
      onPerformanceChange("medium");
    } else if (performanceLevel === "medium") {
      onPerformanceChange("high");
    }
  };

  const handleDecline = () => {
    // Performance is poor, reduce quality
    if (performanceLevel === "high") {
      onPerformanceChange("medium");
    } else if (performanceLevel === "medium") {
      onPerformanceChange("low");
    }
  };

  return (
    <>
      {/* Performance monitoring */}
      <PerformanceMonitor
        onIncline={handleIncline}
        onDecline={handleDecline}
        flipflops={3}
        factor={1}
      />

      {/* Ambient lighting - using only ambient since we use meshBasicMaterial */}
      <ambientLight intensity={0.3} />

      {/* Background color */}
      <color attach="background" args={[COLORS.deepNavy]} />

      {/* Fog for depth */}
      <fog attach="fog" args={[COLORS.deepNavy, 15, 50]} />

      {/* Main wireframe grid - reads from shared refs internally */}
      <WireframeGrid performanceLevel={performanceLevel} />

      {/* Secondary accent grid - reads from shared refs internally */}
      <AccentGrid performanceLevel={performanceLevel} />

      {/* Instanced particles */}
      <InstancedParticles count={150} performanceLevel={performanceLevel} />

      {/* Data stream lines */}
      <DataStreams performanceLevel={performanceLevel} />

      {/* Post-processing effects - only on high performance */}
      {performanceLevel === "high" && (
        <EffectComposer multisampling={0}>
          <Bloom
            luminanceThreshold={0.3}
            luminanceSmoothing={0.9}
            intensity={0.8}
            mipmapBlur
          />
        </EffectComposer>
      )}
    </>
  );
}
