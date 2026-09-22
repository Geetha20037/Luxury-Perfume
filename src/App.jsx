import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedPerfumes from "./components/FeaturedPerfumes";
import Collections from "./components/Collections";
import BestSellers from "./components/BestSellers";
import AboutBrand from "./components/AboutBrand";
import FragranceExperience from "./components/FragranceExperience";
import SpecialOffer from "./components/SpecialOffer";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import SearchOverlay from "./components/SearchOverlay";
import QuickView from "./components/QuickView";
import Checkout from "./components/Checkout";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickView, setQuickView] = useState(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });

    setCartOpen(true);
  };

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  const toggleWishlist = (product) => {
    setWishlist((currentWishlist) => {
      const exists = currentWishlist.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return currentWishlist.filter(
          (item) => item.id !== product.id
        );
      }

      return [...currentWishlist, product];
    });
  };

  if (loading) {
    return (
      <LoadingScreen
        onComplete={() => setLoading(false)}
      />
    );
  }

  if (checkoutOpen) {
    return (
      <Checkout
        cart={cart}
        onBack={() => setCheckoutOpen(false)}
        onOrderComplete={() => {
          setCart([]);
          setCheckoutOpen(false);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f3ed] px-4 lg:px-6">
      <Navbar
        cartCount={cartCount}
        onSearchOpen={() => setSearchOpen(true)}
        onCartOpen={() => setCartOpen(true)}
      />

      <main>
        <Hero />

        <FeaturedPerfumes
          onAddToCart={addToCart}
          onWishlist={toggleWishlist}
          wishlist={wishlist}
          onQuickView={setQuickView}
        />

        <Collections />

        <BestSellers
          onAddToCart={addToCart}
          onWishlist={toggleWishlist}
          wishlist={wishlist}
          onQuickView={setQuickView}
        />

        <AboutBrand />

        <FragranceExperience />

        <SpecialOffer />

        <Testimonials />

        <Newsletter />
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeFromCart}
        onCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
      />

      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onAddToCart={addToCart}
      />

      <QuickView
        product={quickView}
        onClose={() => setQuickView(null)}
        onAddToCart={addToCart}
      />
    </div>
  );
}

export default App;



