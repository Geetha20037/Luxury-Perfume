import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="hero-glow relative min-h-screen overflow-hidden bg-[#171411] text-white"
    >
      <div className="absolute inset-0">
        <img
          src="/products/perfume-8.jpg"
          alt="Luxury perfume"
          className="h-full w-full object-cover object-center opacity-45"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#171411] via-[#171411]/85 to-[#171411]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171411] via-transparent to-[#171411]/30" />
      </div>

      <div className="container-main relative z-10 flex min-h-screen items-center pt-20">
        <div className="max-w-[720px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-7 flex items-center gap-4"
          >
            <div className="gold-line" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#c9a871]">
              The Art of Fragrance
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-[64px] leading-[0.9] sm:text-[82px] md:text-[104px]"
          >
            A Scent
            <br />
            <span className="italic text-[#c9a871]">Beyond</span>
            <br />
            Memory.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-[490px] text-sm leading-7 text-white/65 sm:text-base"
          >
            Discover refined fragrances crafted with rare ingredients,
            timeless artistry and an uncompromising attention to detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#perfumes"
              className="luxury-button inline-flex items-center gap-3 bg-[#b99561] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
            >
              Shop Collection
              <ArrowDownRight size={16} />
            </a>

            <a
              href="#collections"
              className="inline-flex items-center border border-white/30 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white"
            >
              Explore
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0">
        <div className="container-main flex items-center justify-between">
          <span className="text-[9px] uppercase tracking-[0.35em] text-white/40">
            SOLVÉRA / 2026
          </span>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="text-white/50"
          >
            <ArrowDownRight size={22} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;




