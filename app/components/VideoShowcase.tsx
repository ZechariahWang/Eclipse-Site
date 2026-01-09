interface Video {
  id: string;
  title: string;
  description: string;
}

const videos: Video[] = [
  {
    id: "XXe81_lfgwo",
    title: "Autonomous Navigation Demo",
    description: "Full autonomous run with real-time path planning and obstacle avoidance.",
  },
  {
    id: "QZJNpFsUk18",
    title: "Path Planning Visualization",
    description: "Visual breakdown of Eclipse's trajectory generation system.",
  },
  {
    id: "bJKnJjIJ_p4",
    title: "Competition Highlights",
    description: "Best moments from VEX and FRC competitions powered by Eclipse.",
  },
];

function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="video-container border border-[#E5E5E5] shadow-sm">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default function VideoShowcase() {
  return (
    <section id="videos" className="py-24 lg:py-32 relative bg-white">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-[#9FAA75] tracking-wide uppercase mb-4">
            See It In Action
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#32302F] mb-6">
            Video Showcase
          </h3>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            Watch Eclipse perform in real competition environments. From autonomous
            runs to path planning demonstrations.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group"
            >
              <YouTubeEmbed videoId={video.id} title={video.title} />
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-[#32302F] group-hover:text-[#9FAA75] transition-colors duration-500">
                  {video.title}
                </h4>
                <p className="text-sm text-[#6B6B6B] mt-1">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-[#6B6B6B] text-sm">
            More videos available on our{" "}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9FAA75] hover:text-[#8A9563] transition-colors duration-500"
            >
              YouTube channel
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
