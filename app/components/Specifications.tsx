interface Spec {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const specs: Spec[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Modular Architecture",
    description: "Plugin-based system allowing custom subsystems and behaviors.",
    features: ["Hot-swappable modules", "Dependency injection", "Clean interfaces"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Real-Time Path Planning",
    description: "Sub-10ms trajectory generation with dynamic replanning.",
    features: ["Cubic spline interpolation", "Velocity profiling", "Constraint handling"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Sensor Fusion",
    description: "Multi-sensor data integration for accurate state estimation.",
    features: ["Kalman filtering", "IMU integration", "Encoder fusion"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Localization",
    description: "Precise position tracking using odometry and vision systems.",
    features: ["Wheel odometry", "Visual odometry", "SLAM support"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Control Algorithms",
    description: "Advanced PID, feedforward, and motion profiling controllers.",
    features: ["Cascaded PID", "Trapezoidal motion", "S-curve profiles"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Simulation Support",
    description: "Full integration with ROS2 and Gazebo simulation environments.",
    features: ["ROS2 native", "Gazebo plugins", "Hardware-in-loop"],
  },
];

export default function Specifications() {
  return (
    <section id="specs" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-indigo-400 tracking-wide uppercase mb-4">
            Technical Capabilities
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Specifications
          </h3>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Built from the ground up for high-performance robotics applications.
            Every component optimized for reliability and speed.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="group p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl card-hover hover:border-indigo-500/50"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:bg-indigo-500/20 transition-colors">
                {spec.icon}
              </div>

              {/* Title & Description */}
              <h4 className="text-lg font-semibold text-white mb-2">
                {spec.title}
              </h4>
              <p className="text-sm text-zinc-400 mb-4">
                {spec.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {spec.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2 text-sm text-zinc-500"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Code Preview */}
        <div className="mt-16 p-6 bg-zinc-900/80 border border-zinc-800 rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 text-xs text-zinc-500 font-mono">main.cpp</span>
          </div>
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="text-zinc-300">
{`#include `}<span className="text-green-400">&quot;eclipse/eclipse.hpp&quot;</span>{`

`}<span className="text-zinc-500">// Initialize Eclipse with default configuration</span>{`
`}<span className="text-indigo-400">Eclipse</span>::<span className="text-yellow-400">Chassis</span>{` chassis(`}<span className="text-orange-400">DrivetrainConfig</span>{`{});
`}<span className="text-indigo-400">Eclipse</span>::<span className="text-yellow-400">PathPlanner</span>{` planner(chassis);

`}<span className="text-zinc-500">// Generate and execute autonomous path</span>{`
`}<span className="text-purple-400">auto</span>{` path = planner.`}<span className="text-yellow-400">generatePath</span>{`(waypoints);
chassis.`}<span className="text-yellow-400">followPath</span>{`(path);`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
