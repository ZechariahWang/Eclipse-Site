"use client";

import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Simple light background */}
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        {/* Main Title */}
        <h1 className="heading-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 animate-fade-in-up text-[#32302F]">
          Eclipse
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-[#6B6B6B] font-normal max-w-3xl mx-auto mb-4 animate-fade-in-up stagger-1">
          A modern robotics framework for autonomous systems
        </p>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-[#6B6B6B] max-w-2xl mx-auto mb-12 animate-fade-in-up stagger-2 leading-relaxed">
          Built for precision. Designed for competition. Ready for production.
          <br className="hidden sm:block" />
          Power your robotics projects with real-time path planning, sensor fusion, and advanced control algorithms.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up stagger-3">
          <a
            href="#quickstart"
            className="group px-8 py-4 rounded-xl text-base font-medium text-white flex items-center gap-2 w-full sm:w-auto justify-center bg-[#9FAA75] hover:bg-[#8A9563] transition-all duration-500"
          >
            <span>Get Started</span>
            <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="https://github.com/ZechariahWang/Eclipse"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-xl text-base font-medium text-[#32302F] flex items-center gap-2 w-full sm:w-auto justify-center border border-[#E5E5E5] bg-white hover:border-[#9FAA75] hover:bg-[#E4E9D3] transition-all duration-500"
          >
            <svg className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            Explore on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
