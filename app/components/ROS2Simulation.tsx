export default function ROS2Simulation() {
  return (
    <section id="simulation" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-indigo-400 tracking-wide uppercase mb-4">
            Development & Testing
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            ROS2 Simulation
          </h3>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Develop, test, and iterate on your autonomous routines without touching
            hardware. Full ROS2 integration for seamless simulation workflows.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Architecture Diagram */}
          <div className="lg:col-span-2 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
            <h4 className="text-lg font-semibold text-white mb-6">System Architecture</h4>

            {/* Diagram placeholder */}
            <div className="aspect-video bg-black/50 rounded-lg border border-zinc-700 relative overflow-hidden">
              <svg
                className="w-full h-full"
                viewBox="0 0 600 340"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Eclipse Core Box */}
                <rect x="230" y="20" width="140" height="60" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
                <text x="300" y="55" textAnchor="middle" fill="#e0e7ff" fontSize="14" fontWeight="600">Eclipse Core</text>

                {/* ROS2 Node Box */}
                <rect x="40" y="130" width="120" height="80" rx="8" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" />
                <text x="100" y="165" textAnchor="middle" fill="#93c5fd" fontSize="12" fontWeight="500">ROS2</text>
                <text x="100" y="185" textAnchor="middle" fill="#93c5fd" fontSize="12" fontWeight="500">Interface</text>

                {/* Gazebo Box */}
                <rect x="240" y="130" width="120" height="80" rx="8" fill="#0f172a" stroke="#22c55e" strokeWidth="2" />
                <text x="300" y="165" textAnchor="middle" fill="#86efac" fontSize="12" fontWeight="500">Gazebo</text>
                <text x="300" y="185" textAnchor="middle" fill="#86efac" fontSize="12" fontWeight="500">Simulation</text>

                {/* Hardware Box */}
                <rect x="440" y="130" width="120" height="80" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
                <text x="500" y="165" textAnchor="middle" fill="#fcd34d" fontSize="12" fontWeight="500">Hardware</text>
                <text x="500" y="185" textAnchor="middle" fill="#fcd34d" fontSize="12" fontWeight="500">Interface</text>

                {/* Sensors Box */}
                <rect x="40" y="260" width="120" height="60" rx="8" fill="#18181b" stroke="#52525b" strokeWidth="1.5" />
                <text x="100" y="295" textAnchor="middle" fill="#a1a1aa" fontSize="11">Sensor Data</text>

                {/* World Model Box */}
                <rect x="240" y="260" width="120" height="60" rx="8" fill="#18181b" stroke="#52525b" strokeWidth="1.5" />
                <text x="300" y="295" textAnchor="middle" fill="#a1a1aa" fontSize="11">World Model</text>

                {/* Actuators Box */}
                <rect x="440" y="260" width="120" height="60" rx="8" fill="#18181b" stroke="#52525b" strokeWidth="1.5" />
                <text x="500" y="295" textAnchor="middle" fill="#a1a1aa" fontSize="11">Actuators</text>

                {/* Connecting Lines */}
                {/* Eclipse to nodes */}
                <line x1="260" y1="80" x2="100" y2="130" stroke="#4b5563" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="300" y1="80" x2="300" y2="130" stroke="#4b5563" strokeWidth="1.5" />
                <line x1="340" y1="80" x2="500" y2="130" stroke="#4b5563" strokeWidth="1.5" strokeDasharray="4 4" />

                {/* Nodes to bottom boxes */}
                <line x1="100" y1="210" x2="100" y2="260" stroke="#3b82f6" strokeWidth="1.5" />
                <line x1="300" y1="210" x2="300" y2="260" stroke="#22c55e" strokeWidth="1.5" />
                <line x1="500" y1="210" x2="500" y2="260" stroke="#f59e0b" strokeWidth="1.5" />

                {/* Cross connections */}
                <line x1="160" y1="170" x2="240" y2="170" stroke="#4b5563" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="360" y1="170" x2="440" y2="170" stroke="#4b5563" strokeWidth="1" strokeDasharray="2 2" />
              </svg>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 flex gap-4 text-xs">
                <span className="flex items-center gap-1">
                  <span className="w-3 h-0.5 bg-zinc-500" />
                  Data Flow
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-0.5 bg-zinc-500" style={{ strokeDasharray: '2 2' }} />
                  Optional
                </span>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                ),
                title: "ROS2 Native",
                description: "Built on ROS2 Humble/Iron with full support for standard message types and services.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                ),
                title: "Gazebo Integration",
                description: "Pre-configured robot models and worlds for VEX and FRC platforms.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
                title: "Rapid Iteration",
                description: "Test autonomous routines in seconds, not hours. No robot required.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
                title: "CI/CD Ready",
                description: "Run automated tests in simulation as part of your build pipeline.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-indigo-500/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">{feature.title}</h5>
                    <p className="text-sm text-zinc-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
