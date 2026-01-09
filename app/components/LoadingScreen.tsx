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
          }, 700);
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
      {/* Background */}
      <div className="loading-screen-bg" />

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
              stroke="#9FAA75"
              strokeWidth="2"
              className="loading-ring loading-ring-outer"
            />
            {/* Middle ring */}
            <circle
              cx="50"
              cy="50"
              r="32"
              fill="none"
              stroke="#E4E9D3"
              strokeWidth="1.5"
              className="loading-ring loading-ring-middle"
            />
            {/* Inner core */}
            <circle
              cx="50"
              cy="50"
              r="18"
              fill="#9FAA75"
              className="loading-core"
            />
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
    </div>
  );
}
