"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = (props) => {
  const { started, setStarted } = props;
  // Local simulated progress to avoid importing useProgress from drei
  const [displayProgress, setDisplayProgress] = useState(0);
  const progressRef = useRef(0);

  useEffect(() => {
    // Simulate progress smoothly; stop when started becomes true
    let raf = null;
    const step = () => {
      // Increase speed a bit when low, slow when high
      const delta = (100 - progressRef.current) * 0.02 + 0.3;
      progressRef.current = Math.min(100, progressRef.current + delta);
      setDisplayProgress(Math.round(progressRef.current));
      if (!started && progressRef.current < 99) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);

    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [started]);

  // Fallback to ensure it starts eventually
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (!started) {
        setStarted(true);
      }
    }, 4000);

    return () => clearTimeout(fallbackTimer);
  }, [started, setStarted]);

  return (
    <AnimatePresence>
      {!started && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)"
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 hero-pattern opacity-10"></div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-2 h-2 bg-primary-400 rounded-full animate-float opacity-60"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-accent-400 rounded-full animate-bounce-subtle opacity-40"></div>
            <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary-300 rounded-full animate-float opacity-50"></div>
            <div className="absolute bottom-20 right-10 w-2 h-2 bg-accent-300 rounded-full animate-bounce-subtle opacity-30"></div>
          </div>

          <div className="flex flex-col items-center space-y-8 z-10">
            {/* Logo */}
            <motion.img
              src="/logo.png"
              alt="Arhan Ansari Logo"
              className="w-20 h-20 object-contain filter drop-shadow-2xl"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: 1, 
                rotate: 0,
                filter: ["drop-shadow(0 0 20px rgba(14, 165, 233, 0.5))", "drop-shadow(0 0 30px rgba(217, 70, 239, 0.5))"]
              }}
              transition={{ 
                duration: 1,
                filter: { duration: 2, repeat: Infinity, repeatType: "reverse" }
              }}
            />

            {/* Main Text */}
            <div className="relative text-center">
              <motion.div
                className="text-4xl md:text-7xl font-display font-bold text-gradient relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div
                  className="absolute left-0 top-0 overflow-hidden bg-gradient-to-r from-primary-400 via-accent-400 to-primary-600 bg-clip-text text-transparent transition-all duration-500 ease-out"
                  style={{ width: `${displayProgress}%` }}
                >
                  Arhan Ansari
                </div>
                <div className="text-neutral-700">Arhan Ansari</div>
              </motion.div>
              
              <motion.p
                className="text-neutral-400 text-lg mt-4 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Crafting immersive digital experiences
              </motion.p>
            </div>

            {/* Progress Bar */}
            <div className="w-80 max-w-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-neutral-400">Loading Experience</span>
                <span className="text-sm text-primary-400 font-bold">{Math.round(displayProgress)}%</span>
              </div>
              
              <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full shadow-glow"
                  initial={{ width: 0 }}
                  animate={{ width: `${displayProgress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Loading Items: not available without useProgress; showing progress only */}

            {/* Spinning Loader */}
            <motion.div
              className="w-8 h-8 border-2 border-neutral-700 border-t-primary-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Gradient Overlays */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-accent-500/10 to-primary-500/10 rounded-full blur-2xl"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
