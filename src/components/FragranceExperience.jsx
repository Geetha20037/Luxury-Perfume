import { motion } from "framer-motion";

const notes = [
  {
    number: "01",
    title: "Top Notes",
    description:
      "The first impression. Bright, fresh ingredients that greet the senses.",
    examples: "Bergamot â€¢ Citrus â€¢ Pink Pepper",
  },
  {
    number: "02",
    title: "Heart Notes",
    description:
      "The soul of the fragrance. Floral and aromatic notes unfold beautifully.",
    examples: "Rose â€¢ Jasmine â€¢ Saffron",
  },
  {
    number: "03",
    title: "Base Notes",
    description:
      "The lasting signature. Deep woods, musk and warm accords remain.",
    examples: "Oud â€¢ Amber â€¢ Sandalwood",
  },
];

function FragranceExperience() {
  return (
    <section className="section-padding bg-[#dcd1c2]">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="gold-line" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8d6b3f]">
                The Fragrance Experience
              </span>
            </div>

            <h2 className="font-display text-5xl leading-none sm:text-6xl">
              Three layers.
              <br />
              <span className="italic">One identity.</span>
            </h2>

            <p className="mt-7 max-w-[400px] text-sm leading-7 text-[#71665a]">
              A great perfume evolves throughout the day. Discover how every
              layer reveals a new part of the fragrance.
            </p>
          </div>

          <div className="space-y-3">
            {notes.map((note, index) => (
              <motion.div
                key={note.number}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="group grid gap-5 border-b border-[#bdb1a1] py-7 sm:grid-cols-[55px_1fr_auto] sm:items-center"
              >
                <span className="font-display text-2xl text-[#a8844f]">
                  {note.number}
                </span>

                <div>
                  <h3 className="font-display text-3xl">{note.title}</h3>

                  <p className="mt-2 max-w-[480px] text-sm leading-6 text-[#71665a]">
                    {note.description}
                  </p>
                </div>

                <p className="text-[9px] uppercase tracking-[0.12em] text-[#8d8378] sm:text-right">
                  {note.examples}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FragranceExperience;




