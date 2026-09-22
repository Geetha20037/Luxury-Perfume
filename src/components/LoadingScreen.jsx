import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const steps = [10, 50, 100];
    let index = 0;

    const timer = setInterval(() => {
      index += 1;

      if (index < steps.length) {
        setProgress(steps[index]);
      }

      if (index === steps.length - 1) {
        clearInterval(timer);

        setTimeout(() => {
          onComplete();
        }, 900);
      }
    }, 900);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-[#0b0a09] text-[#f7f3ed]"
    >
      {/* Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.2, 0.08],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[420px] w-[420px] rounded-full bg-[#c9a36a] blur-[120px]"
      />

      {/* Floating Fragrance Particles */}
      {[...Array(18)].map((_, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0,
            y: 80,
            x: (index - 9) * 28,
          }}
          animate={{
            opacity: [0, 0.7, 0],
            y: -250,
            x: (index - 9) * 28 + Math.sin(index) * 35,
          }}
          transition={{
            duration: 3 + (index % 3),
            delay: index * 0.15,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="absolute bottom-[30%] h-1 w-1 rounded-full bg-[#c9a36a]"
        />
      ))}

      <div className="relative z-10 flex flex-col items-center">

        {/* Brand */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            letterSpacing: "0.7em",
          }}
          animate={{
            opacity: 1,
            y: 0,
            letterSpacing: "0.35em",
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="font-display text-4xl sm:text-5xl"
        >
          SOLVÉRA
        </motion.div>

        {/* Gold Line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 90, opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
          className="mt-5 h-px bg-[#c9a36a]"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.1,
            duration: 1,
          }}
          className="mt-5 text-[9px] uppercase tracking-[0.4em] text-white/40"
        >
          A Scent Beyond Memory
        </motion.p>

        {/* Perfume Bottle */}
        <div className="relative mt-16 h-[190px] w-[120px]">

          {/* Bottle Glow */}
          <motion.div
            animate={{
              opacity: [0.15, 0.35, 0.15],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="absolute inset-0 rounded-[35px] bg-[#c9a36a] blur-2xl"
          />

          {/* Bottle */}
          <div className="absolute bottom-0 left-1/2 h-[135px] w-[100px] -translate-x-1/2 overflow-hidden rounded-[18px_18px_24px_24px] border border-[#c9a36a]/50 bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-[0_0_40px_rgba(201,163,106,0.12)]">

            {/* Liquid */}
            <motion.div
              initial={{ height: "5%" }}
              animate={{ height: `${progress}%` }}
              transition={{
                duration: 1.4,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#8f6a38] via-[#c9a36a] to-[#e2c38e]"
            />

            {/* Bottle Label */}
            <div className="absolute left-1/2 top-1/2 z-10 w-[70px] -translate-x-1/2 -translate-y-1/2 border border-[#c9a36a]/40 bg-[#0b0a09]/70 px-2 py-3 text-center backdrop-blur-sm">
              <p className="text-[7px] tracking-[0.3em] text-[#c9a36a]">
                SOLVÉRA
              </p>
              <p className="mt-1 text-[5px] uppercase tracking-[0.2em] text-white/50">
                Parfum
              </p>
            </div>
          </div>

          {/* Bottle Neck */}
          <div className="absolute bottom-[128px] left-1/2 h-[28px] w-[42px] -translate-x-1/2 border border-[#c9a36a]/40 bg-white/[0.05]" />

          {/* Cap */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="absolute bottom-[154px] left-1/2 h-[24px] w-[50px] -translate-x-1/2 rounded-t-md border border-[#c9a36a]/50 bg-[#171411]"
          />
        </div>

        {/* Progress */}
        <div className="mt-10 w-[230px]">

          <div className="flex items-center justify-between">
            <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
              Creating your essence
            </span>

            <motion.span
              key={progress}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-xl text-[#c9a36a]"
            >
              {progress}%
            </motion.span>
          </div>

          <div className="mt-3 h-px w-full bg-white/10">
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className="h-full bg-[#c9a36a]"
            />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 text-[8px] uppercase tracking-[0.35em] text-white/20"
      >
        Maison SOLVÉRA · Paris
      </motion.p>
    </motion.div>
  );
}

export default LoadingScreen;
