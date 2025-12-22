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
      code: "git clone https://github.com/ZechariahWang/Eclipse.git",
    },
    {
      number: "02",
      title: "Build the project",
      description: "Compile Eclipse with your VEX toolchain",
      code: "cd eclipse && pros mu",
    },
    {
      number: "03",
      title: "Configure your chassis",
      description: "Set up Eclipse with your robot's specifications",
      code: `#include "eclipse/eclipse.hpp"

// Configure your drivetrain
AssetConfig config(
	{-20, -9, -19}, // Left Motor Ports (negative value means ports are reversed)
	{7, 15, 12} // Right Motor Ports (negative value means port is reversed)
); `,
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
      </div>
    </section>
  );
}
