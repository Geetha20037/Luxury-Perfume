import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialIcons = [
    { icon: FaInstagram, label: "Instagram" },
    { icon: FaFacebookF, label: "Facebook" },
    { icon: FaTwitter, label: "Twitter" },
  ];

  const careContent = {
    "Shipping & Returns": {
      title: "Shipping & Returns",
      text: "We carefully prepare every AURELLE order. Orders are processed within 1–2 business days and delivered with premium protective packaging. If your fragrance arrives damaged, please contact our Client Care team within 48 hours.",
    },
    "Contact Us": {
      title: "Contact Us",
      text: "Our Client Care team is here to assist you with orders, fragrance recommendations and product questions.",
      extra: "hello@aurelleparfums.com  •  +1 800 234 5678",
    },
    FAQ: {
      title: "Frequently Asked Questions",
      text: "How long does delivery take? Standard delivery usually takes 3–7 business days. Can I change my order? Contact us as soon as possible after placing your order. Are fragrances authentic? Every AURELLE fragrance is presented as part of our official collection.",
    },
    Privacy: {
      title: "Privacy",
      text: "Your privacy matters to AURELLE. Information submitted through this website is used only to process orders, provide customer support and improve your shopping experience. We do not sell your personal information.",
    },
  };

  return (
    <>
      <footer id="contact" className="bg-[#171411] text-white">
        <div className="container-main py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

            {/* Brand */}
            <div>
              <div className="font-display text-4xl tracking-[0.12em]">
                AURELLE
              </div>

              <p className="mt-5 max-w-[330px] text-sm leading-7 text-white/45">
                Modern perfumery inspired by timeless artistry, rare
                ingredients and the stories that stay with us.
              </p>

              {/* Social Icons */}
              <div className="mt-7 flex gap-2">
                {socialIcons.map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    aria-label={label}
                    type="button"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
                  >
                    <Icon size={15} />
                  </button>
                ))}
              </div>
            </div>

            {/* Explore */}
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c19a63]">
                Explore
              </h3>

              <div className="mt-5 flex flex-col gap-3">
                {["Home", "Perfumes", "Collections", "About"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-white/55 transition hover:text-white"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Client Care */}
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c19a63]">
                Client Care
              </h3>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/55">
                {Object.keys(careContent).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setActiveModal(item)}
                    className="text-left transition hover:text-white"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c19a63]">
                Contact
              </h3>

              <div className="mt-5 space-y-3 text-sm leading-6 text-white/55">
                <p>hello@aurelleparfums.com</p>
                <p>+1 800 234 5678</p>
                <p>12 Maison Avenue, Paris</p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 text-[9px] uppercase tracking-[0.15em] text-white/35 sm:flex-row sm:items-center">
            <p>© 2026 AURELLE PARFUMS. ALL RIGHTS RESERVED.</p>

            <button
              type="button"
              onClick={scrollTop}
              className="flex items-center gap-2 transition hover:text-white"
            >
              Back to top
              <ArrowUpRight size={13} />
            </button>
          </div>
        </div>
      </footer>

      {/* Client Care Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 px-5 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[#f7f3ed] p-7 text-[#171411] shadow-2xl sm:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition hover:bg-black hover:text-white"
            >
              <X size={17} />
            </button>

            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c19a63]">
              AURELLE Client Care
            </p>

            <h2 className="mt-3 pr-10 font-display text-4xl">
              {careContent[activeModal].title}
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#756b61]">
              {careContent[activeModal].text}
            </p>

            {careContent[activeModal].extra && (
              <p className="mt-5 border-t border-[#d8cec2] pt-5 text-sm font-medium">
                {careContent[activeModal].extra}
              </p>
            )}

            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="mt-8 bg-[#171411] px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#302a25]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;


