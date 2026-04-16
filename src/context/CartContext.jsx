import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { syncCart as syncCartApi } from "../api/shopApi";

const CartContext = createContext(null);
const STORAGE_KEY = "genzstore_cart";

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isSyncing, setIsSyncing] = useState(false);
  const [cartError, setCartError] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      console.error("Failed to save cart");
    }
  }, [cartItems]);

  const addToCart = async (product) => {
    const nextCart = cartItems.some((item) => item.id === product.id)
      ? cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...cartItems, { ...product, quantity: 1 }];

    setCartItems(nextCart);

    try {
      setIsSyncing(true);
      await syncCartApi(nextCart);
    } catch {
      setCartError("Unable to sync cart with backend right now.");
    } finally {
      setIsSyncing(false);
    }
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const itemCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const cartTotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        itemCount,
        cartTotal,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isSyncing,
        cartError,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
