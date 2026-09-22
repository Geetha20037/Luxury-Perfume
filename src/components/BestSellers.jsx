import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

function BestSellers({
  onAddToCart,
  onWishlist,
  wishlist,
  onQuickView,
}) {
  const bestSellers = products.slice(4, 8);

  return (
    <section className="section-padding bg-[#eee8df]">
      <div className="container-main">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="gold-line" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#a8844f]">
                Most Loved
              </span>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl">
              Best <span className="italic">Sellers</span>
            </h2>
          </div>

          <a
            href="#perfumes"
            className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em]"
          >
            View all
            <ArrowRight size={15} />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((product) => (
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

export default BestSellers;




