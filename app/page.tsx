"use client";

import dynamic from "next/dynamic";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { Suspense, useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Cursor } from "./components/Cursor";
const DynamicInterface = dynamic(
  () => import("./components/Interface").then((mod) => mod.Interface),
  { ssr: false }
);
import { LoadingScreen } from "./components/LoadingScreen";
import { Menu } from "./components/Menu";
import { ParticleBackground } from "./components/ParticleBackground";
import { framerMotionConfig } from "@/lib/config";

const DynamicThreeScene = dynamic(() => import("./components/ThreeScene"), {
  ssr: false,
});

export default function Home() {
  const [section, setSection] = useState(0);
  const [started, setStarted] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  // Native scroll listener for section tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const newSection = Math.min(Math.floor(scrollY / windowHeight), 8);

      if (newSection !== section) {
        setSection(newSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [section]);

  return (
    <>
      <ParticleBackground />

      <LoadingScreen started={started} setStarted={setStarted} />

      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        {/* Fixed Canvas for 3D Scene - Behind Everything */}
        <DynamicThreeScene started={started} section={section} menuOpened={menuOpened} />

        {/* Scrollable Content - On Top with transparency */}
        {started && (
          <div className="relative z-10 w-full pointer-events-auto">
            <DynamicInterface setSection={setSection} />
          </div>
        )}

        {started && (
          <Menu
            onSectionChange={setSection}
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened}
          />
        )}
        <Cursor />
      </MotionConfig>

      <Leva hidden />
      <Analytics />
    </>
  );
}
