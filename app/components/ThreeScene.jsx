"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import * as THREE from "three";

// Some Drei/third-party bundles reference a global lowercase `three` variable.
// Ensure it's available on the client to avoid runtime ReferenceError.
if (typeof window !== "undefined" && !window.three) {
  // expose as a lowercase global to satisfy legacy/UMD consumers
  // eslint-disable-next-line no-undef, no-restricted-globals
  window.three = THREE;
}

export default function ThreeScene({ started, section, menuOpened }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set to true only after hydration is complete
    setIsClient(true);
  }, []);

  // Don't render Canvas on server or during initial render on client
  // This prevents @react-three/fiber from trying to access React internals
  // before hydration is fully complete
  if (!isClient) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none bg-slate-900" />
    );
  }

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
