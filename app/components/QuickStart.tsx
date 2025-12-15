"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 p-2 text-zinc-400 hover:text-white bg-zinc-800/50 hover:bg-zinc-700/50 rounded-lg transition-all duration-200"
      aria-label="Copy code"
    >
      {copied ? (
        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )}
    </button>
  );
}

function CodeBlock({ code, language = "bash" }: CodeBlockProps) {
  return (
    <div className="relative group">
      <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-indigo-500/30">
        <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900/50">
          <span className="text-xs text-zinc-500 font-mono">{language}</span>
        </div>
        <div className="p-4 overflow-x-auto">
          <pre className="text-sm font-mono text-zinc-300">
            <code>{code}</code>
          </pre>
        </div>
      </div>
      <CopyButton code={code} />
    </div>
  );
}

export default function QuickStart() {
  const steps = [
    {
      number: "01",
      title: "Clone the repository",
      description: "Get the Eclipse framework from GitHub",
      code: "git clone https://github.com/210Z/eclipse.git",
    },
    {
      number: "02",
      title: "Build the project",
      description: "Compile Eclipse with your VEX toolchain",
      code: "cd eclipse && pros make",
    },
    {
      number: "03",
      title: "Configure your chassis",
      description: "Set up Eclipse with your robot's specifications",
      code: `#include "eclipse/eclipse.hpp"

// Configure your drivetrain
eclipse::Chassis chassis({
    .leftMotors = {1, 2, 3},
    .rightMotors = {-4, -5, -6},
    .trackWidth = 12.5,
    .wheelDiameter = 3.25
});`,
    },
  ];

  return (
    <section id="quickstart" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-indigo-400 tracking-wide uppercase mb-4">
            Quick Start
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get up and running in minutes
          </h3>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Follow these simple steps to integrate Eclipse into your VEX robotics project.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative pl-16 lg:pl-20"
            >
              {/* Step number */}
              <div className="absolute left-0 top-0 w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                <span className="text-sm lg:text-base font-mono font-bold text-indigo-400">
                  {step.number}
                </span>
              </div>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[19px] lg:left-[23px] top-12 lg:top-14 w-px h-[calc(100%+2rem)] bg-gradient-to-b from-indigo-500/30 to-transparent" />
              )}

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">
                    {step.title}
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    {step.description}
                  </p>
                </div>
                <CodeBlock code={step.code} language={index === 2 ? "cpp" : "bash"} />
              </div>
            </div>
          ))}
        </div>

        {/* Additional resources */}
        <div className="mt-16 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.1)] hover:border-indigo-500/30">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">
                Need more help?
              </h4>
              <p className="text-zinc-400 text-sm">
                Check out our documentation for detailed guides and API reference.
              </p>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
