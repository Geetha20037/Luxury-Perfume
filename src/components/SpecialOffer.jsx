import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function SpecialOffer() {
  return (
    <section className="relative overflow-hidden bg-[#171411] py-20 text-white">
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-30">
        <img
          src="/products/perfume-6.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[650px]"
        >
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#c19a63]">
            Limited Time
          </span>

          <h2 className="mt-4 font-display text-5xl leading-none sm:text-7xl">
            Your signature
            <br />
            scent awaits.
          </h2>

          <p className="mt-6 max-w-[470px] text-sm leading-7 text-white/55">
            Receive 20% off your first AURELLE fragrance and discover a scent
            created to become uniquely yours.
          </p>

          <a
            href="#perfumes"
            className="luxury-button mt-8 inline-flex items-center gap-3 bg-[#b99561] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em]"
          >
            Claim 20% Off
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default SpecialOffer;



