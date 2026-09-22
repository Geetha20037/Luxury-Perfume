
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X, ArrowUpRight } from "lucide-react";
import { products } from "../data/products";

function SearchOverlay({
  isOpen,
  onClose,
  onAddToCart,
}) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const filteredProducts = products.filter((product) => {
    const searchText = `${product.name} ${product.category} ${product.type} ${product.notes || ""}`
      .toLowerCase();

    return searchText.includes(query.toLowerCase().trim());
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#171411]/70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="min-h-[55vh] bg-[#f7f3ec] px-5 py-6 sm:px-8 lg:px-16"
          >
            {/* Header */}
            <div className=" flex  items-center justify-between">
              <div className="font-display text-2xl tracking-[0.16em]">
                AURELLE
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close search"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition duration-300 hover:bg-black hover:text-white"
              >
                <X size={19} />
              </button>
            </div>

            {/* Search Area */}
            <div className=" mt-16 ">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c19a63]">
                Search AURELLE
              </p>

              <div className="flex items-center gap-4 border-b border-black/20 pb-4">
                <Search
                  size={25}
                  strokeWidth={1.4}
                  className="text-black/45"
                />

                <input
                  autoFocus
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search perfumes..."
                  className="w-full bg-transparent font-display text-3xl outline-none placeholder:text-black/25 sm:text-5xl"
                />

                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="text-xs uppercase tracking-widest text-black/45 hover:text-black"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Results */}
              <div className="mt-8 max-h-[45vh] overflow-y-auto pr-2">
                {query.trim() === "" ? (
                  <div className="py-8 text-sm text-black/45">
                    Search for a perfume, fragrance type or collection.
                  </div>
                ) : filteredProducts.length === 0 ? (
                  <div className="py-8">
                    <p className="font-display text-2xl">
                      No perfumes found.
                    </p>
                    <p className="mt-2 text-sm text-black/45">
                      Try another perfume name or fragrance type.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="group flex items-center gap-4 border-b border-black/10 py-4"
                      >
                        {/* Image */}
                        <div className="h-20 w-16 shrink-0 overflow-hidden bg-[#e9e3d9]">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                          />
                        </div>

                        {/* Details */}
                        <div className="min-w-0 flex-1">
                          <h3 className="font-display text-xl">
                            {product.name}
                          </h3>

                          <p className="mt-1 text-xs uppercase tracking-wider text-black/45">
                            {product.type || product.category}
                          </p>

                          <p className="mt-1 text-sm font-medium">
                            â‚¹{product.price.toLocaleString("en-IN")}
                          </p>
                        </div>

                        {/* Add */}
                        <button
                          type="button"
                          onClick={() => {
                            onAddToCart(product);
                            onClose();
                          }}
                          className="flex items-center gap-2 border-b border-black pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] transition hover:text-[#c19a63] hover:border-[#c19a63]"
                        >
                          Add
                          <ArrowUpRight size={13} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SearchOverlay;



