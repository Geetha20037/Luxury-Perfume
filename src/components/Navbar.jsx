
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";

function Navbar({
  cartCount = 0,
  onCartOpen,
  onSearchOpen,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Perfumes", href: "#perfumes" },
    { label: "Collections", href: "#collections" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavigation = () => {
    setMobileOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#f7f3ec]/90 backdrop-blur-xl">
      <div className="container-main flex h-[76px] items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={handleNavigation}
          className="font-display text-2xl tracking-[0.16em] text-[#171411]"
        >
          SOLVÉRA
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-[11px] font-medium uppercase tracking-[0.16em] text-[#171411]/65 transition-colors duration-300 hover:text-[#171411]"
            >
              {item.label}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#171411] transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">

          {/* Search */}
          <button
            type="button"
            onClick={onSearchOpen}
            aria-label="Open search"
            className="flex h-10 w-10 items-center justify-center rounded-full transition duration-300 hover:bg-black/5"
          >
            <Search size={18} strokeWidth={1.5} />
          </button>

          {/* Cart */}
          <button
            type="button"
            onClick={onCartOpen}
            aria-label="Open cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full transition duration-300 hover:bg-black/5"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />

            {cartCount > 0 && (
              <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#171411] px-1 text-[8px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-black/5 lg:hidden"
          >
            {mobileOpen ? (
              <X size={20} strokeWidth={1.5} />
            ) : (
              <Menu size={20} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-black/10 bg-[#f7f3ec]"
          >
            <nav className="container-main flex flex-col py-5">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavigation}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-black/10 py-4 text-xs font-medium uppercase tracking-[0.18em] text-[#171411]"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;




