import { AnimatePresence, motion } from "framer-motion";
import { X, Star, ShoppingBag } from "lucide-react";

function QuickView({ product, onClose, onAddToCart }) {
  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            className="fixed left-1/2 top-1/2 z-[100] max-h-[90vh] w-[calc(100%-24px)] max-w-[850px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto bg-[#f7f3ed]"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90"
            >
              <X size={18} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="aspect-[4/5] bg-[#e9e2d9] md:aspect-auto">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-10">
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#a8844f]">
                  {product.category} Collection
                </p>

                <h2 className="mt-3 font-display text-5xl leading-none">
                  {product.name}
                </h2>

                <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-[#877d73]">
                  {product.type}
                </p>

                <div className="mt-5 flex items-center gap-1 text-[#a8844f]">
                  <Star size={13} fill="currentColor" />
                  <span className="text-xs text-[#6d645c]">
                    {product.rating}
                  </span>
                </div>

                <p className="mt-6 text-sm leading-7 text-[#70665d]">
                  {product.description}
                </p>

                <div className="mt-7 grid grid-cols-3 border-y border-[#d8d0c6] py-5">
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.15em] text-[#a8844f]">
                      Top
                    </p>
                    <p className="mt-2 text-xs">{product.notes.top}</p>
                  </div>

                  <div>
                    <p className="text-[8px] uppercase tracking-[0.15em] text-[#a8844f]">
                      Heart
                    </p>
                    <p className="mt-2 text-xs">{product.notes.heart}</p>
                  </div>

                  <div>
                    <p className="text-[8px] uppercase tracking-[0.15em] text-[#a8844f]">
                      Base
                    </p>
                    <p className="mt-2 text-xs">{product.notes.base}</p>
                  </div>
                </div>

                <div className="mt-7 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-semibold">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>

                    <span className="ml-2 text-sm text-[#988e84] line-through">
                      ₹{product.oldPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="luxury-button mt-6 flex items-center justify-center gap-3 bg-[#171411] py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white"
                >
                  <ShoppingBag size={15} />
                  Add to Shopping Bag
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default QuickView;





