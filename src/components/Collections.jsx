import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { collections } from "../data/products";

function Collections() {
  return (
    <section id="collections" className="section-padding bg-[#1b1815] text-white">
      <div className="container-main">
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <div className="gold-line" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c19a63]">
              Explore
            </span>
          </div>

          <h2 className="font-display text-5xl sm:text-6xl">
            Find Your <span className="italic text-[#c19a63]">Signature</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection, index) => (
            <motion.a
              href="#perfumes"
              key={collection.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative min-h-[430px] overflow-hidden"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="h-full min-h-[430px] w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-85"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-[#c19a63]">
                  {collection.subtitle}
                </p>

                <div className="flex items-end justify-between">
                  <h3 className="font-display text-4xl">
                    {collection.title}
                  </h3>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collections;




