import { motion } from "framer-motion";

function AboutBrand() {
  return (
    <section id="about" className="section-padding bg-[#f7f3ed]">
      <div className="container-main grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-5 -top-5 h-24 w-24 border-l border-t border-[#b99561]" />

          <img
            src="/products/perfume-3.jpg"
            alt="SOLVÉRA perfume"
            className="aspect-[4/5] w-full object-cover"
          />

          <div className="absolute bottom-5 right-5 bg-[#171411] px-6 py-5 text-white">
            <p className="font-display text-3xl">Since 1998</p>
            <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/50">
              Crafted with passion
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="gold-line" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#a8844f]">
              Our Story
            </span>
          </div>

          <h2 className="font-display text-5xl leading-[0.95] sm:text-6xl">
            Crafted for those
            <br />
            who <span className="italic text-[#a8844f]">feel deeply.</span>
          </h2>

          <div className="mt-8 space-y-5 text-sm leading-7 text-[#6f665d]">
            <p>
              SOLVÉRA was born from a fascination with the invisible language
              of scent. We believe a fragrance should do more than smell
              beautiful â€” it should become part of your story.
            </p>

            <p>
              From rare oud and delicate florals to warm amber and
              sophisticated woods, every composition is carefully balanced
              by master perfumers.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-3 border-y border-[#d9d1c7] py-6">
            <div>
              <p className="font-display text-3xl">25+</p>
              <p className="mt-1 text-[8px] uppercase tracking-[0.12em] text-[#887e73]">
                Years
              </p>
            </div>

            <div>
              <p className="font-display text-3xl">40+</p>
              <p className="mt-1 text-[8px] uppercase tracking-[0.12em] text-[#887e73]">
                Scents
              </p>
            </div>

            <div>
              <p className="font-display text-3xl">18</p>
              <p className="mt-1 text-[8px] uppercase tracking-[0.12em] text-[#887e73]">
                Countries
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutBrand;




