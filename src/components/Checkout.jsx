import { useState } from "react";
import { ArrowLeft, Check, Lock } from "lucide-react";

function Checkout({ cart, onBack, onOrderComplete }) {
  const [placed, setPlaced] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setPlaced(true);
  };

  if (placed) {
    return (
      <div className="min-h-screen bg-[#f7f3ed] px-5 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center text-center">
          <div>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#171411] text-white">
              <Check size={28} strokeWidth={1.5} />
            </div>

            <p className="mt-7 text-[10px] uppercase tracking-[0.3em] text-[#a8844f]">
              Order Confirmed
            </p>

            <h1 className="mt-3 font-display text-5xl">
              Thank you for your order.
            </h1>

            <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-[#756b61]">
              Your fragrance selection has been confirmed. We look forward to
              bringing your SOLVÉRA experience to you.
            </p>

            <button
              onClick={onOrderComplete}
              className="mt-8 bg-[#171411] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#302a25]"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f3ed] px-5 py-10 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#756b61] transition hover:text-black"
        >
          <ArrowLeft size={15} />
          Back to shopping bag
        </button>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#a8844f]">
              SOLVÉRA Checkout
            </p>

            <h1 className="mt-3 font-display text-5xl">
              Complete your <span className="italic">order.</span>
            </h1>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-[0.16em]">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full border border-[#d1c8bd] bg-transparent px-4 py-4 text-sm outline-none focus:border-[#171411]"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-[0.16em]">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  className="w-full border border-[#d1c8bd] bg-transparent px-4 py-4 text-sm outline-none focus:border-[#171411]"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-[0.16em]">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  className="w-full border border-[#d1c8bd] bg-transparent px-4 py-4 text-sm outline-none focus:border-[#171411]"
                  placeholder="+91"
                />
              </div>

              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-[0.16em]">
                  Delivery Address
                </label>
                <textarea
                  required
                  rows="4"
                  className="w-full resize-none border border-[#d1c8bd] bg-transparent px-4 py-4 text-sm outline-none focus:border-[#171411]"
                  placeholder="Enter your delivery address"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 bg-[#171411] py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#302a25]"
              >
                <Lock size={14} />
                Place Order
              </button>
            </form>
          </div>

          <div className="h-fit border border-[#d5ccc1] bg-[#eee7de] p-6 sm:p-8">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#a8844f]">
              Your Selection
            </p>

            <h2 className="mt-2 font-display text-3xl">
              Order Summary
            </h2>

            <div className="mt-7 space-y-5">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b border-[#d5ccc1] pb-5"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-16 object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl">{item.name}</h3>

                    <p className="mt-1 text-xs text-[#857a70]">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="text-sm font-medium">
                    ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex justify-between border-t border-[#cfc5ba] pt-5">
              <span className="text-sm text-[#756b61]">Total</span>
              <span className="text-lg font-semibold">
                ₹{total.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;



