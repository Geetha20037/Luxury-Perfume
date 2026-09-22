import { Heart, Plus, Star, Eye } from "lucide-react";
import { motion } from "framer-motion";

function ProductCard({
  product,
  onAddToCart,
  onWishlist,
  isWishlisted,
  onQuickView,
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
      className="product-card group"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#ebe5dc]">
        <img
          src={product.image}
          alt={product.name}
          className="product-image h-full w-full object-cover"
        />

        <div className="absolute left-4 top-4 bg-[#171411] px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-white">
          New
        </div>

        <button
          onClick={() => onWishlist(product)}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#171411] shadow-sm backdrop-blur transition hover:bg-[#171411] hover:text-white"
        >
          <Heart
            size={16}
            fill={isWishlisted ? "currentColor" : "none"}
          />
        </button>

        <div className="absolute bottom-4 left-4 right-4 flex translate-y-3 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={() => onQuickView(product)}
            className="flex flex-1 items-center justify-center gap-2 bg-white/95 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#171411]"
          >
            <Eye size={14} />
            Quick View
          </button>

          <button
            onClick={() => onAddToCart(product)}
            className="flex w-12 items-center justify-center bg-[#b99561] text-white"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl font-semibold">
              {product.name}
            </h3>

            <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#857a6e]">
              {product.type}
            </p>
          </div>

          <div className="text-right">
            <p className="font-medium">₹{product.price.toLocaleString("en-IN")}</p>
            <p className="text-xs text-[#a59a8e] line-through">
              ₹{product.oldPrice.toLocaleString("en-IN")}
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-1 text-[#a8844f]">
          <Star size={12} fill="currentColor" />
          <span className="text-[11px] text-[#625a52]">
            {product.rating}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default ProductCard;





