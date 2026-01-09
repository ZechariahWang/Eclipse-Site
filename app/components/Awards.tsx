export default function Awards() {
  return (
    <section id="awards" className="py-24 lg:py-32 relative overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#32302F] mb-6">
            Competition Results
          </h3>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            What we&apos;ve won running Eclipse. 37+ awards and counting.
          </p>
        </div>

        {/* Season Highlights */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {/* 2024-25 Season */}
          <div className="p-6 bg-white border border-[#E5E5E5] rounded-xl transition-all duration-500 hover:shadow-md hover:border-[#9FAA75]">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-[#32302F]">2024-25 Season</h4>
              <span className="text-xs text-[#9FAA75] font-mono">High Stakes</span>
            </div>
            <ul className="space-y-2 text-[#6B6B6B]">
              <li className="flex items-start gap-2">
                <span className="text-[#FF7A00] mt-0.5">*</span>
                <span>Tournament Champion @ YYC Showdown (Dec 2024)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF7A00] mt-0.5">*</span>
                <span>Excellence Award @ Calgary Stampede Classic</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF7A00] mt-0.5">*</span>
                <span>Skills Champion - 347 pts combined</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9FAA75] mt-0.5">*</span>
                <span>Design Award @ Cochrane Qualifier</span>
              </li>
            </ul>
          </div>

          {/* 2023-24 Season */}
          <div className="p-6 bg-white border border-[#E5E5E5] rounded-xl transition-all duration-500 hover:shadow-md hover:border-[#9FAA75]">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-[#32302F]">2023-24 Season</h4>
              <span className="text-xs text-[#9FAA75] font-mono">Over Under</span>
            </div>
            <ul className="space-y-2 text-[#6B6B6B]">
              <li className="flex items-start gap-2">
                <span className="text-[#FF7A00] mt-0.5">*</span>
                <span>World Championship Division Finalist</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF7A00] mt-0.5">*</span>
                <span>Alberta Provincial Champion</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF7A00] mt-0.5">*</span>
                <span>3x Tournament Champion</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9FAA75] mt-0.5">*</span>
                <span>Autonomous Award @ Provincials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9FAA75] mt-0.5">*</span>
                <span>Think Award @ Calgary Regional</span>
              </li>
            </ul>
          </div>

          {/* 2022-23 Season */}
          <div className="p-6 bg-white border border-[#E5E5E5] rounded-xl transition-all duration-500 hover:shadow-md hover:border-[#9FAA75]">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-[#32302F]">2022-23 Season</h4>
              <span className="text-xs text-[#9FAA75] font-mono">Spin Up</span>
            </div>
            <ul className="space-y-2 text-[#6B6B6B]">
              <li className="flex items-start gap-2">
                <span className="text-[#FF7A00] mt-0.5">*</span>
                <span>Excellence Award @ Provincials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF7A00] mt-0.5">*</span>
                <span>2x Tournament Champion</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9FAA75] mt-0.5">*</span>
                <span>Robot Skills 2nd Place - Alberta</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Rankings */}
        <div className="mt-12 flex flex-wrap justify-center gap-12 lg:gap-20">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-[#32302F] mb-1">1st</div>
            <div className="text-sm text-[#6B6B6B]">Alberta</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-[#32302F] mb-1">6th</div>
            <div className="text-sm text-[#6B6B6B]">Canada</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-[#32302F] mb-1">16th</div>
            <div className="text-sm text-[#6B6B6B]">World</div>
          </div>
        </div>
      </div>
    </section>
  );
}
