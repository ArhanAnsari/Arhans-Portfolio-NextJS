"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";

export default function ThreeScene({ started, section, menuOpened }) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none">
      <Canvas
        shadows
        camera={{ position: [0, 3, 10], fov: 42 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ display: "block", width: "100%", height: "100%" }}
      >
        <color attach="background" args={["#0f172a"]} />
        <fog attach="fog" args={["#0f172a", 20, 50]} />

        <Suspense fallback={null}>
          {started && <Experience section={section} menuOpened={menuOpened} />}
        </Suspense>
      </Canvas>
    </div>
  );
}
