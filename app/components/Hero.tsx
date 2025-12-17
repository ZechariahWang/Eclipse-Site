"use client";

import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js / Responsive Background */}
      <HeroBackground />

      {/* Gradient overlay for text readability */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, rgba(0, 0, 0, 0.3) 70%),
            linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.8) 100%)
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        {/* Team Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 border border-zinc-800/50 rounded-full mb-8 animate-fade-in-up backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-accent opacity-75" style={{ backgroundColor: "var(--cyan-accent)" }}></span>
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: "var(--cyan-accent)" }}></span>
          </span>
          <span className="text-sm text-zinc-300 font-medium">VEX Robotics</span>
          <span className="text-zinc-600">|</span>
          <span className="text-sm font-semibold" style={{ color: "var(--cyan-accent)" }}>Team 210Z</span>
        </div>

        {/* Main Title - Using Space Grotesk */}
        <h1 className="hero-title-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 animate-fade-in-up">
          <span className="hero-gradient-text">Eclipse</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-zinc-300 font-light max-w-3xl mx-auto mb-4 animate-fade-in-up stagger-1">
          A modern robotics framework for autonomous systems
        </p>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mb-12 animate-fade-in-up stagger-2">
          Built for precision. Designed for competition. Ready for production.
          <br className="hidden sm:block" />
          Power your robotics projects with real-time path planning, sensor fusion, and advanced control algorithms.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up stagger-3">
          <a
            href="#quickstart"
            className="group relative px-8 py-4 rounded-xl text-base font-medium text-white flex items-center gap-2 w-full sm:w-auto justify-center overflow-hidden transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, var(--primary-indigo) 0%, var(--purple-accent) 100%)",
              boxShadow: "0 0 30px rgba(99, 102, 241, 0.3)",
            }}
          >
            <span className="relative z-10">Get Started</span>
            <svg className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            {/* Hover glow effect */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(135deg, var(--cyan-accent) 0%, var(--primary-indigo) 100%)",
              }}
            />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-xl text-base font-medium text-white flex items-center gap-2 w-full sm:w-auto justify-center border border-zinc-700/50 bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50 hover:bg-zinc-800/50"
          >
            <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            Explore on GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 animate-fade-in-up stagger-4">
          {[
            {
              value: "100+",
              label: "Autonomous Runs",
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              accentColor: "var(--cyan-accent)",
            },
            {
              value: "<10ms",
              label: "Path Computation",
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              accentColor: "var(--primary-indigo)",
            },
            {
              value: "6+",
              label: "Competitions",
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              ),
              accentColor: "var(--purple-accent)",
            },
            {
              value: "99.9%",
              label: "Reliability",
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              ),
              accentColor: "var(--cyan-accent)",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="group text-center cursor-default p-4 lg:p-6 rounded-xl transition-all duration-300 hover:bg-zinc-900/50 backdrop-blur-sm border border-transparent hover:border-zinc-800/50"
              style={{
                boxShadow: "0 0 0 rgba(99, 102, 241, 0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 40px rgba(99, 102, 241, 0.15)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 0 rgba(99, 102, 241, 0)";
              }}
            >
              <div
                className="flex justify-center mb-3 opacity-60 group-hover:opacity-100 transition-all duration-300"
                style={{ color: stat.accentColor }}
              >
                {stat.icon}
              </div>
              <div
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-opacity-100"
                style={{
                  textShadow: "0 0 20px rgba(99, 102, 241, 0)",
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up stagger-5">
          <div className="flex flex-col items-center gap-2 text-zinc-500">
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border border-zinc-700 flex items-start justify-center p-2">
              <div
                className="w-1 h-2 rounded-full animate-bounce"
                style={{ backgroundColor: "var(--cyan-accent)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
