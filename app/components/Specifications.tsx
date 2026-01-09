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
    <section id="specs" className="py-24 lg:py-32 relative bg-white">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#32302F] mb-6">
            What Eclipse Does
          </h3>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            The stuff under the hood that makes autonomous routines work.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Path Planning */}
          <div className="p-6 bg-white border border-[#E5E5E5] rounded-xl transition-all duration-500 hover:shadow-md hover:border-[#9FAA75]">
            <h4 className="text-xl font-semibold text-[#32302F] mb-3">Path Planning</h4>
            <p className="text-[#6B6B6B] mb-4">
              Generate smooth trajectories using Bezier curve path planner for optimal robot movement.
              AI path router currently in development for intelligent obstacle avoidance and dynamic path optimization.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs bg-[#E4E9D3] text-[#32302F] rounded-full">Bezier curves</span>
              <span className="px-3 py-1 text-xs bg-[#E4E9D3] text-[#32302F] rounded-full">AI path router</span>
            </div>
          </div>

          {/* Motion Control */}
          <div className="p-6 bg-white border border-[#E5E5E5] rounded-xl transition-all duration-500 hover:shadow-md hover:border-[#9FAA75]">
            <h4 className="text-xl font-semibold text-[#32302F] mb-3">Motion Control</h4>
            <p className="text-[#6B6B6B] mb-4">
              Advanced motion control algorithms including PID controllers, motion profiler, and feedforward control.
              Implements pure pursuit, boomerang, and holonomic move-to-pose algorithms for precise robot positioning.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs bg-[#E4E9D3] text-[#32302F] rounded-full">Motion profiler</span>
              <span className="px-3 py-1 text-xs bg-[#E4E9D3] text-[#32302F] rounded-full">Pure pursuit</span>
              <span className="px-3 py-1 text-xs bg-[#E4E9D3] text-[#32302F] rounded-full">Boomerang</span>
              <span className="px-3 py-1 text-xs bg-[#E4E9D3] text-[#32302F] rounded-full">PID</span>
            </div>
          </div>

          {/* Odometry */}
          <div className="p-6 bg-white border border-[#E5E5E5] rounded-xl transition-all duration-500 hover:shadow-md hover:border-[#9FAA75]">
            <h4 className="text-xl font-semibold text-[#32302F] mb-3">Odometry & Localization</h4>
            <p className="text-[#6B6B6B] mb-4">
              Sensor fusion using Extended Kalman Filter to combine wheel odometry and GPS data
              for accurate robot position estimation and drift correction.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs bg-[#E4E9D3] text-[#32302F] rounded-full">Kalman Filter</span>
              <span className="px-3 py-1 text-xs bg-[#E4E9D3] text-[#32302F] rounded-full">Odometry</span>
              <span className="px-3 py-1 text-xs bg-[#E4E9D3] text-[#32302F] rounded-full">GPS</span>
            </div>
          </div>

          {/* Async Tasks */}
          <div className="p-6 bg-white border border-[#E5E5E5] rounded-xl transition-all duration-500 hover:shadow-md hover:border-[#9FAA75]">
            <h4 className="text-xl font-semibold text-[#32302F] mb-3">Async & Scheduling</h4>
            <p className="text-[#6B6B6B] mb-4">
              Task scheduler with priority queues for concurrent execution of robot subsystems.
              Event callbacks enable responsive, non-blocking operation.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs bg-[#E4E9D3] text-[#32302F] rounded-full">Task scheduler</span>
              <span className="px-3 py-1 text-xs bg-[#E4E9D3] text-[#32302F] rounded-full">Priority queues</span>
              <span className="px-3 py-1 text-xs bg-[#E4E9D3] text-[#32302F] rounded-full">Event callbacks</span>
            </div>
          </div>
        </div>

        {/* Code Preview */}
        <div className="mt-12 bg-[#F5F5F0] border border-[#E5E5E0] rounded-xl overflow-hidden transition-all duration-500 hover:shadow-md">
          {/* Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#E5E5E0] bg-[#EEEEE8]">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            <span className="ml-4 text-xs text-[#6B6B6B] font-mono">autonomous.cpp</span>
          </div>

          {/* Code with line numbers */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-mono">
              <tbody>
                {codeLines.map((line) => (
                  <tr key={line.num} className="hover:bg-[#EEEEE8] transition-colors duration-300">
                    <td className="py-0.5 pl-4 pr-4 text-right text-[#9FAA75] select-none border-r border-[#E5E5E0] w-12">
                      {line.num}
                    </td>
                    <td className="py-0.5 pl-4 pr-6 text-[#32302F] whitespace-pre">
                      {line.type === 'include' && (
                        <>
                          <span className="text-[#9FAA75]">#include </span>
                          <span className="text-[#6B6B6B]">{line.highlight}</span>
                        </>
                      )}
                      {line.type === 'empty' && ' '}
                      {line.type === 'function' && (
                        <span className="text-[#32302F]">{line.content}</span>
                      )}
                      {line.type === 'comment' && (
                        <span className="text-[#9FAA75]">{line.content}</span>
                      )}
                      {line.type === 'call' && (
                        <>
                          <span className="text-[#32302F]">{line.content}</span>
                          <span className="text-[#6B6B6B]">{line.method}</span>
                          <span className="text-[#32302F]">{line.args}</span>
                        </>
                      )}
                      {line.type === 'async' && (
                        <>
                          <span className="text-[#32302F]">{line.content}</span>
                          <span className="text-[#6B6B6B]">{line.method}</span>
                          <span className="text-[#32302F]">{line.args}</span>
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
