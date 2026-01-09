export default function TeamShowcase() {
  return (
    <section id="team" className="py-24 lg:py-32 relative overflow-hidden bg-[#F8F8F8]">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#32302F] mb-6">
              Team 210Z
            </h3>
            <p className="text-lg text-[#6B6B6B] mb-8">
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
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#E4E9D3] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-[#9FAA75]"
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
                  <span className="text-[#32302F]">{achievement}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Visual/Stats Card */}
          <div className="relative">
            <div className="p-8 lg:p-10 bg-white border border-[#E5E5E5] rounded-xl shadow-sm">
              {/* Team Logo */}
              <div className="w-full aspect-video bg-[#F8F8F8] rounded-lg mb-8 overflow-hidden border border-[#E5E5E5]">
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
                  <div key={index} className="text-center p-4 bg-[#F8F8F8] rounded-lg border border-[#E5E5E5]">
                    <div className="text-2xl font-bold text-[#32302F]">{stat.value}</div>
                    <div className="text-xs text-[#6B6B6B] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
