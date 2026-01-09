import type { Metadata } from "next";
import { Jost, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eclipse | Modern Robotics Framework",
  description: "A high-performance robotics framework for autonomous systems, competition environments, and simulation. Built for precision, speed, and reliability.",
  keywords: ["robotics", "autonomous", "framework", "ROS2", "path planning", "competition", "simulation"],
  openGraph: {
    title: "Eclipse | Modern Robotics Framework",
    description: "A high-performance robotics framework for autonomous systems, competition environments, and simulation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jost.variable} ${jetbrainsMono.variable} antialiased bg-white text-[#32302F]`}
      >
        {children}
      </body>
    </html>
  );
}
