import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Amelia Carter",
    role: "Verified Customer",
    image: "/products/perfume-2.jpg",
    text: "Velvet Rose has become my everyday signature. It feels elegant without ever being overwhelming.",
  },
  {
    name: "Daniel Morgan",
    role: "Verified Customer",
    image: "/products/perfume-1.jpg",
    text: "Oud Royale is incredibly sophisticated. The longevity and depth are genuinely impressive.",
  },
  {
    name: "Sofia Laurent",
    role: "Verified Customer",
    image: "/products/perfume-5.jpg",
    text: "The whole SOLVÉRA experience feels luxurious from the packaging to the fragrance itself.",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((current) => (current + 1) % testimonials.length);
  };

  const previous = () => {
    setActive(
      (current) =>
        (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const item = testimonials[active];

  return (
    <section className="section-padding bg-[#f7f3ed]">
      <div className="mx-auto w-full max-w-[850px] px-5 text-center">
        <div className="mb-5 flex justify-center">
          <div className="gold-line" />
        </div>

        <p className="text-[10px] uppercase tracking-[0.3em] text-[#a8844f]">
          Words From Our Clients
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-9"
          >
            <div className="flex justify-center gap-1 text-[#b99561]">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={14} fill="currentColor" />
              ))}
            </div>

            <blockquote className="mt-7 font-display text-3xl leading-tight sm:text-5xl">
              â€œ{item.text}â€
            </blockquote>

            <div className="mt-8 flex items-center justify-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="h-11 w-11 rounded-full object-cover"
              />

              <div className="text-left">
                <p className="text-xs font-semibold">{item.name}</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-[#91877c]">
                  {item.role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-9 flex justify-center gap-2">
          <button
            onClick={previous}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5ccc1] transition hover:bg-[#171411] hover:text-white"
          >
            <ChevronLeft size={17} />
          </button>

          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5ccc1] transition hover:bg-[#171411] hover:text-white"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;





