export default function Specifications() {
  const codeLines = [
    { num: 1, content: '#include ', highlight: '"eclipse/eclipse.hpp"', type: 'include' },
    { num: 2, content: '', type: 'empty' },
    { num: 3, content: 'void autonomous() {', type: 'function' },
    { num: 4, content: '    // Drive to goal and score', type: 'comment' },
    { num: 5, content: '    mtp.', method: 'set_mtp_constants', args: '(9, 45, 7, 35, 120, 90);', type: 'async' },
    { num: 6, content: '    mtp.', method: 'move_to_point', args: '(39, 12, false, false, 1.3);', type: 'call' },
    { num: 7, content: '    intake.', method: 'spin', args: '(600);', type: 'call' },
    { num: 8, content: '', type: 'empty' },
    { num: 9, content: '    // Grab next ring while moving', type: 'comment' },
    { num: 10, content: '    mtp.', method: 'set_mtp_constants', args: '(9, 45, 7, 35, 120, 90);', type: 'async' },
    { num: 11, content: '    mtp.', method: 'move_to_point', args: '(39, 12, false, false, 1.3);', type: 'call' },
    { num: 12, content: '}', type: 'function' },
  ];

  return (
    <section id="specs" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            What Eclipse Does
          </h3>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            The stuff under the hood that makes autonomous routines work.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Path Planning */}
          <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] hover:border-indigo-500/50">
            <h4 className="text-xl font-semibold text-white mb-3">Path Planning</h4>
            <p className="text-zinc-400 mb-4">
              Generate smooth trajectories using Bezier curve path planner for optimal robot movement.
              AI path router currently in development for intelligent obstacle avoidance and dynamic path optimization.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full">Bezier curves</span>
              <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full">AI path router</span>
            </div>
          </div>

          {/* Motion Control */}
          <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] hover:border-indigo-500/50">
            <h4 className="text-xl font-semibold text-white mb-3">Motion Control</h4>
            <p className="text-zinc-400 mb-4">
              Advanced motion control algorithms including PID controllers, motion profiler, and feedforward control.
              Implements pure pursuit, boomerang, and holonomic move-to-pose algorithms for precise robot positioning.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full">Motion profiler</span>
              <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full">Pure pursuit</span>
              <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full">Boomerang</span>
              <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full">PID</span>
            </div>
          </div>

          {/* Odometry */}
          <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] hover:border-indigo-500/50">
            <h4 className="text-xl font-semibold text-white mb-3">Odometry & Localization</h4>
            <p className="text-zinc-400 mb-4">
              Sensor fusion using Extended Kalman Filter to combine wheel odometry and GPS data
              for accurate robot position estimation and drift correction.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full">Kalman Filter</span>
              <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full">Odometry</span>
              <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full">GPS</span>
            </div>
          </div>

          {/* Async Tasks */}
          <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] hover:border-indigo-500/50">
            <h4 className="text-xl font-semibold text-white mb-3">Async & Scheduling</h4>
            <p className="text-zinc-400 mb-4">
              Task scheduler with priority queues for concurrent execution of robot subsystems.
              Event callbacks enable responsive, non-blocking operation.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full">Task scheduler</span>
              <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full">Priority queues</span>
              <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full">Event callbacks</span>
            </div>
          </div>
        </div>

        {/* Code Preview */}
        <div className="mt-12 bg-zinc-900/80 border border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.1)] hover:border-indigo-500/30">
          {/* Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 text-xs text-zinc-500 font-mono">autonomous.cpp</span>
          </div>

          {/* Code with line numbers */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-mono">
              <tbody>
                {codeLines.map((line) => (
                  <tr key={line.num} className="hover:bg-zinc-800/30 transition-colors">
                    <td className="py-0.5 pl-4 pr-4 text-right text-zinc-600 select-none border-r border-zinc-800 w-12">
                      {line.num}
                    </td>
                    <td className="py-0.5 pl-4 pr-6 text-zinc-300 whitespace-pre">
                      {line.type === 'include' && (
                        <>
                          <span className="text-purple-400">#include </span>
                          <span className="text-green-400">{line.highlight}</span>
                        </>
                      )}
                      {line.type === 'empty' && ' '}
                      {line.type === 'function' && (
                        <span className="text-blue-400">{line.content}</span>
                      )}
                      {line.type === 'comment' && (
                        <span className="text-zinc-500">{line.content}</span>
                      )}
                      {line.type === 'call' && (
                        <>
                          <span className="text-zinc-300">{line.content}</span>
                          <span className="text-yellow-400">{line.method}</span>
                          <span className="text-cyan-300">{line.args}</span>
                        </>
                      )}
                      {line.type === 'async' && (
                        <>
                          <span className="text-zinc-300">{line.content}</span>
                          <span className="text-yellow-400">{line.method}</span>
                          <span className="text-cyan-300">{line.args}</span>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
