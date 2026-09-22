import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
} from "lucide-react";

function CartDrawer({
  open,
  onClose,
  cart,
  onIncrease,
  onDecrease,
  onRemove,
  onCheckout,
}) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28 }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-[430px] flex-col bg-[#f7f3ed]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#ddd4c9] px-6 py-5">
              <div className="flex items-center gap-3">
                <ShoppingBag size={19} strokeWidth={1.5} />

                <div>
                  <p className="font-display text-2xl">
                    Shopping Bag
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#8b8075]">
                    {cart.length} {cart.length === 1 ? "Item" : "Items"}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close cart"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition duration-300 hover:bg-black hover:text-white"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Cart Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {cart.length === 0 ? (
                <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d8cec2]">
                    <ShoppingBag size={25} strokeWidth={1.2} />
                  </div>

                  <h2 className="mt-6 font-display text-3xl">
                    Your bag is empty
                  </h2>

                  <p className="mt-3 max-w-[280px] text-sm leading-6 text-[#7d7268]">
                    Discover a fragrance crafted to become part of your story.
                  </p>

                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-7 border-b border-black pb-1 text-[10px] font-semibold uppercase tracking-[0.18em] transition hover:text-[#a8844f]"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 border-b border-[#ddd4c9] pb-6"
                    >
                      <div className="h-28 w-20 shrink-0 overflow-hidden bg-[#e9e3d9]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="font-display text-xl leading-tight">
                              {item.name}
                            </h3>

                            <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#8b8075]">
                              {item.type || item.category}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => onRemove(item.id)}
                            aria-label={`Remove ${item.name}`}
                            className="text-[#8b8075] transition hover:text-red-600"
                          >
                            <Trash2 size={16} strokeWidth={1.5} />
                          </button>
                        </div>

                        <p className="mt-3 text-sm font-semibold">
                          ₹{item.price.toLocaleString("en-IN")}
                        </p>

                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center border border-[#d5ccc1]">
                            <button
                              type="button"
                              onClick={() => onDecrease(item.id)}
                              className="flex h-8 w-8 items-center justify-center transition hover:bg-black hover:text-white"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={13} />
                            </button>

                            <span className="flex h-8 min-w-8 items-center justify-center border-x border-[#d5ccc1] text-xs">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() => onIncrease(item.id)}
                              className="flex h-8 w-8 items-center justify-center transition hover:bg-black hover:text-white"
                              aria-label="Increase quantity"
                            >
                              <Plus size={13} />
                            </button>
                          </div>

                          <p className="text-sm font-semibold">
                            ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-[#ddd4c9] bg-[#f7f3ed] px-6 py-6">
                <div className="flex justify-between text-sm">
                  <span className="text-[#756b61]">
                    Subtotal
                  </span>

                  <span className="font-semibold">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>

                <p className="mt-2 text-[10px] text-[#93887d]">
                  Shipping calculated at checkout.
                </p>

                <button
                  type="button"
                  onClick={onCheckout}
                  className="luxury-button mt-5 w-full bg-[#171411] py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#302a25]"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default CartDrawer;



