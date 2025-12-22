export default function TeamShowcase() {
  return (
    <section id="team" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Team 210Z
            </h3>
            <p className="text-lg text-zinc-400 mb-8">
              Eclipse was developed by and for Team 210Z, a competitive robotics
              team based in Calgary, Alberta.
            </p>

            {/* Achievements */}
            <div className="space-y-4 mb-8">
              {[
                "2023 Mecha Mayhem Champion ",
                "2023 Alberta Provincial Champions",
                "2024 WestMech Excellence in Programming Award",
                "used in over 50+ robots within Alberta",
              ].map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-zinc-300">{achievement}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Visual/Stats Card */}
          <div className="relative">
            <div className="gradient-border p-8 lg:p-10">
              {/* Team Logo */}
              <div className="w-full aspect-video bg-zinc-900 rounded-lg mb-8 overflow-hidden border border-zinc-800">
                <img src="/210Z.png" alt="Team Logo" className="w-full h-full object-cover" />
              </div>

              {/* Team Stats */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "1st", label: "Alberta" },
                  { value: "6th", label: "Canada" },
                  { value: "16th", label: "World (22,000+ teams)" },
                  { value: "37+", label: "Awards" },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-600/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
