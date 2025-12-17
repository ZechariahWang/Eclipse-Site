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
    <div className="min-h-screen bg-black">
      <LoadingScreen minimumLoadTime={2000} />
      <Navigation />
      <main>
        <Hero />
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <VideoShowcase />
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <TeamShowcase />
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <Specifications />
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <QuickStart />
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <PathPlanner />
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <ROS2Simulation />
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <Awards />
      </main>

      <Footer />
    </div>
  );
}
