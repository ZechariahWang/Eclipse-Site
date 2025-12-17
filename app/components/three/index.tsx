// Dynamic import wrapper for Next.js SSR compatibility
import dynamic from "next/dynamic";

// Dynamically import HeroCanvas with SSR disabled to avoid Three.js hydration issues
export const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-deep-navy flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});
