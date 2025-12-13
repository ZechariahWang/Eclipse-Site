interface Award {
  title: string;
  event: string;
  year: string;
  type: "gold" | "silver" | "bronze" | "special";
}

const awards: Award[] = [
  {
    title: "Tournament Champion",
    event: "State Championship",
    year: "2024",
    type: "gold",
  },
  {
    title: "Excellence Award",
    event: "Regional Qualifier",
    year: "2024",
    type: "gold",
  },
  {
    title: "Skills Champion",
    event: "Signature Event",
    year: "2024",
    type: "gold",
  },
  {
    title: "Design Award",
    event: "State Championship",
    year: "2023",
    type: "silver",
  },
  {
    title: "Autonomous Award",
    event: "Regional Qualifier",
    year: "2023",
    type: "special",
  },
  {
    title: "Tournament Finalist",
    event: "World Championship",
    year: "2023",
    type: "silver",
  },
];

const typeStyles = {
  gold: "from-yellow-500/20 to-yellow-600/20 border-yellow-500/30 text-yellow-400",
  silver: "from-zinc-400/20 to-zinc-500/20 border-zinc-400/30 text-zinc-300",
  bronze: "from-orange-600/20 to-orange-700/20 border-orange-500/30 text-orange-400",
  special: "from-indigo-500/20 to-indigo-600/20 border-indigo-500/30 text-indigo-400",
};

const typeIcons = {
  gold: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  ),
  silver: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  ),
  bronze: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  ),
  special: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
    </svg>
  ),
};

export default function Awards() {
  return (
    <section id="awards" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-indigo-400 tracking-wide uppercase mb-4">
            Recognition
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Awards & Honours
          </h3>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Recognition earned by teams using Eclipse in competition. Proven
            performance on the field.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`group p-6 rounded-xl border bg-gradient-to-br ${typeStyles[award.type]} card-hover`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={typeStyles[award.type].split(" ").pop()}>
                  {typeIcons[award.type]}
                </div>
                <span className="text-xs font-mono text-zinc-500">{award.year}</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">{award.title}</h4>
              <p className="text-sm text-zinc-400">{award.event}</p>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 lg:gap-16">
          {[
            { value: "15+", label: "Total Awards" },
            { value: "6", label: "Championships" },
            { value: "3", label: "Excellence Awards" },
            { value: "Top 10", label: "World Rankings" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
