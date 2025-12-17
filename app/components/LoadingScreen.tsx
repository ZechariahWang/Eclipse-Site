"use client";

import { useState, useEffect } from "react";

interface LoadingScreenProps {
  minimumLoadTime?: number;
}

export default function LoadingScreen({ minimumLoadTime = 1500 }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Ease out the progress - slower as it approaches 100
        const remaining = 100 - prev;
        const increment = Math.max(remaining * 0.08, 0.5);
        return Math.min(prev + increment, 100);
      });
    }, 50);

    // Minimum display time + wait for window load
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(minimumLoadTime - elapsed, 0);

      setTimeout(() => {
        setProgress(100);
        // Start fade out animation
        setTimeout(() => {
          setIsLoading(false);
          // Remove from DOM after fade animation
          setTimeout(() => {
            setIsVisible(false);
          }, 500);
        }, 200);
      }, remainingTime);
    };

    // Check if already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(progressInterval);
      window.removeEventListener("load", handleLoad);
    };
  }, [minimumLoadTime]);

  if (!isVisible) return null;

  return (
    <div
      className={`loading-screen ${isLoading ? "loading-screen-visible" : "loading-screen-hidden"}`}
      aria-hidden={!isLoading}
    >
      {/* Background with gradient */}
      <div className="loading-screen-bg" />

      {/* Grid pattern overlay */}
      <div className="loading-screen-grid" />

      {/* Content */}
      <div className="loading-screen-content">
        {/* Logo/Brand mark */}
        <div className="loading-logo">
          <svg
            viewBox="0 0 100 100"
            className="loading-logo-svg"
            aria-label="Eclipse Logo"
          >
            {/* Outer ring */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#loading-gradient)"
              strokeWidth="2"
              className="loading-ring loading-ring-outer"
            />
            {/* Middle ring */}
            <circle
              cx="50"
              cy="50"
              r="32"
              fill="none"
              stroke="url(#loading-gradient-2)"
              strokeWidth="1.5"
              className="loading-ring loading-ring-middle"
            />
            {/* Inner core */}
            <circle
              cx="50"
              cy="50"
              r="18"
              fill="url(#loading-core-gradient)"
              className="loading-core"
            />
            {/* Eclipse effect - shadow */}
            <circle
              cx="50"
              cy="50"
              r="16"
              fill="var(--deep-navy)"
              className="loading-eclipse"
            />
            {/* Glow point */}
            <circle
              cx="66"
              cy="50"
              r="3"
              fill="var(--cyan-accent)"
              className="loading-glow-point"
            />
            {/* Gradient definitions */}
            <defs>
              <linearGradient id="loading-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary-indigo)" />
                <stop offset="50%" stopColor="var(--cyan-accent)" />
                <stop offset="100%" stopColor="var(--purple-accent)" />
              </linearGradient>
              <linearGradient id="loading-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--cyan-accent)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="var(--primary-indigo)" stopOpacity="0.3" />
              </linearGradient>
              <radialGradient id="loading-core-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--primary-indigo)" />
                <stop offset="100%" stopColor="var(--deep-navy)" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Brand name */}
        <h1 className="loading-title">
          <span className="loading-title-text">ECLIPSE</span>
        </h1>

        {/* Tagline */}
        <p className="loading-tagline">Modern Robotics Framework</p>

        {/* Progress bar */}
        <div className="loading-progress-container">
          <div className="loading-progress-track">
            <div
              className="loading-progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="loading-progress-text">{Math.round(progress)}%</span>
        </div>
      </div>

      {/* Decorative particles */}
      <div className="loading-particles">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="loading-particle"
            style={{
              left: `${15 + (i * 14)}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
