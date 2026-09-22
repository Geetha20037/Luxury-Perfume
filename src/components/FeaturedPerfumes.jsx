import { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

function FeaturedPerfumes({
  onAddToCart,
  onWishlist,
  wishlist,
  onQuickView,
}) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Men", "Women", "Unisex", "Luxury"];

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section id="perfumes" className="section-padding bg-[#f7f3ed]">
      <div className="container-main">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="gold-line" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#a8844f]">
                Curated Selection
              </span>
            </div>

            <h2 className="font-display text-5xl leading-none sm:text-6xl">
              Featured <span className="italic">Perfumes</span>
            </h2>
          </div>

          <div className="hide-scrollbar flex max-w-full gap-2 overflow-x-auto pb-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap border px-4 py-2 text-[9px] uppercase tracking-[0.15em] transition ${
                  activeCategory === category
                    ? "border-[#171411] bg-[#171411] text-white"
                    : "border-[#d6cec3] text-[#71685f] hover:border-[#171411]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onWishlist={onWishlist}
              isWishlisted={wishlist.some(
                (item) => item.id === product.id
              )}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPerfumes;



