import {
  Navigation,
  Hero,
  VideoShowcase,
  TeamShowcase,
  Specifications,
  PathPlanner,
  ROS2Simulation,
  Awards,
  Footer,
  QuickStart,
  LoadingScreen,
} from "./components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <LoadingScreen minimumLoadTime={2000} />
      <Navigation />
      <main>
        <Hero />
        <div className="h-px bg-[#E5E5E5]" />

        <VideoShowcase />
        <div className="h-px bg-[#E5E5E5]" />

        <TeamShowcase />
        <div className="h-px bg-[#E5E5E5]" />

        <Specifications />
        <div className="h-px bg-[#E5E5E5]" />

        <QuickStart />
        <div className="h-px bg-[#E5E5E5]" />

        <PathPlanner />
        <div className="h-px bg-[#E5E5E5]" />

        <ROS2Simulation />
        <div className="h-px bg-[#E5E5E5]" />

        <Awards />
      </main>

      <Footer />
    </div>
  );
}
