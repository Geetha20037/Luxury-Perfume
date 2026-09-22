import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-[#dcd1c2] py-20">
      <div className="container-main text-center">
        <div className="mx-auto w-full max-w-[650px] px-5">
          <div className="mb-5 flex justify-center">
            <div className="gold-line" />
          </div>

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#8c6a3f]">
            Stay In The Scent
          </p>

          <h2 className="mt-4 font-display text-5xl leading-none sm:text-6xl">
            Join our <span className="italic">world.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[470px] text-sm leading-6 text-[#71665a]">
            Receive fragrance stories, new collection announcements and
            exclusive offers directly in your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-[550px] flex-col gap-2 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              className="min-w-0 flex-1 border border-[#bdb1a1] bg-transparent px-5 py-4 text-sm outline-none transition focus:border-[#171411]"
            />

            <button className="luxury-button flex items-center justify-center gap-3 bg-[#171411] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
              {submitted ? (
                <>
                  Subscribed
                  <Check size={15} />
                </>
              ) : (
                <>
                  Subscribe
                  <ArrowRight size={15} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;




