export default function PathPlanner() {
  return (
    <section id="planner" className="py-24 lg:py-32 relative overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visualization */}
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-square bg-[#F8F8F8] border border-[#E5E5E5] rounded-xl overflow-hidden relative transition-all duration-500 hover:shadow-md hover:border-[#9FAA75]">
              {/* Path visualization placeholder */}
              <svg
                className="w-full h-full"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Grid lines */}
                {[...Array(9)].map((_, i) => (
                  <g key={i}>
                    <line
                      x1={50 + i * 37.5}
                      y1="50"
                      x2={50 + i * 37.5}
                      y2="350"
                      stroke="#E5E5E5"
                      strokeWidth="1"
                    />
                    <line
                      x1="50"
                      y1={50 + i * 37.5}
                      x2="350"
                      y2={50 + i * 37.5}
                      stroke="#E5E5E5"
                      strokeWidth="1"
                    />
                  </g>
                ))}

                {/* Path curve */}
                <path
                  d="M 80 320 Q 120 280, 160 240 T 240 180 Q 280 160, 320 140 T 350 80"
                  stroke="url(#pathGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Waypoints */}
                <circle cx="80" cy="320" r="8" fill="#9FAA75" />
                <circle cx="160" cy="240" r="6" fill="#9FAA75" opacity="0.7" />
                <circle cx="240" cy="180" r="6" fill="#9FAA75" opacity="0.7" />
                <circle cx="320" cy="140" r="6" fill="#9FAA75" opacity="0.7" />
                <circle cx="350" cy="80" r="8" fill="#9FAA75" />

                {/* Robot indicator */}
                <g>
                  <rect
                    x="145"
                    y="225"
                    width="30"
                    height="30"
                    rx="4"
                    fill="#32302F"
                    transform="rotate(35, 160, 240)"
                  />
                  <polygon
                    points="160,215 170,235 150,235"
                    fill="#9FAA75"
                    transform="rotate(35, 160, 240)"
                  />
                </g>

                {/* Gradient definition */}
                <defs>
                  <linearGradient id="pathGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9FAA75" />
                    <stop offset="100%" stopColor="#E4E9D3" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Labels */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-white border border-[#E5E5E5] rounded text-xs text-[#6B6B6B] font-mono">
                Path Preview
              </div>
              <div className="absolute bottom-4 right-4 flex gap-4 text-xs text-[#6B6B6B]">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#9FAA75]" />
                  Waypoints
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-[#32302F]" />
                  Robot
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-medium text-[#9FAA75] tracking-wide uppercase mb-4">
              Core Feature
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#32302F] mb-6">
              Intelligent Path Planning
            </h3>
            <p className="text-lg text-[#6B6B6B] mb-8">
              Eclipse&apos;s path planning system generates smooth, optimized trajectories
              that respect your robot&apos;s physical constraints while maximizing
              efficiency and precision.
            </p>

            {/* Features list */}
            <div className="space-y-6">
              {[
                {
                  title: "Cubic Spline Generation",
                  description:
                    "Smooth curves through waypoints with continuous first and second derivatives for jerk-limited motion.",
                },
                {
                  title: "Velocity Profiling",
                  description:
                    "Automatic speed optimization based on path curvature, ensuring maximum velocity on straights and controlled cornering.",
                },
                {
                  title: "Real-Time Replanning",
                  description:
                    "Dynamic path adjustments in response to sensor feedback, maintaining accuracy even with wheel slip or obstacles.",
                },
                {
                  title: "Constraint-Aware",
                  description:
                    "Respects acceleration limits, motor saturation, and physical boundaries for safe, reliable execution.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#E4E9D3] flex items-center justify-center text-[#9FAA75] text-sm font-mono">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                  <div>
                    <h4 className="text-[#32302F] font-medium mb-1">{feature.title}</h4>
                    <p className="text-sm text-[#6B6B6B]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
