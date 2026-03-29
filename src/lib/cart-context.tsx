"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  type ReactNode,
} from "react";

export interface CartItem {
  slug: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface ToastState {
  message: string;
  exiting: boolean;
}

interface CartContextType {
  items: CartItem[];
  addItem: (slug: string, name: string, price: number, image: string) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toast: ToastState | null;
  dismissToast: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function getStoredCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem("tess-cart");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const hydratedRef = useRef(false);
  const [toast, setToast] = useState<ToastState | null>(null);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Hydrate from localStorage on mount
  useEffect(() => {
    const stored = getStoredCart();
    if (stored.length > 0) {
      requestAnimationFrame(() => {
        setItems(stored);
      });
    }
    hydratedRef.current = true;
  }, []);

  useEffect(() => {
    if (hydratedRef.current) {
      localStorage.setItem("tess-cart", JSON.stringify(items));
    }
  }, [items]);

  const showToast = useCallback((message: string) => {
    // Clear any existing timeout
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToast({ message, exiting: false });

    // Auto-dismiss after 3 seconds
    toastTimeoutRef.current = setTimeout(() => {
      setToast((prev) => (prev ? { ...prev, exiting: true } : null));
      // Remove after exit animation
      setTimeout(() => {
        setToast(null);
      }, 300);
    }, 3000);
  }, []);

  const dismissToast = useCallback(() => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToast((prev) => (prev ? { ...prev, exiting: true } : null));
    setTimeout(() => {
      setToast(null);
    }, 300);
  }, []);

  const addItem = useCallback(
    (slug: string, name: string, price: number, image: string) => {
      setItems((prev) => {
        const existing = prev.find((i) => i.slug === slug);
        if (existing) {
          return prev.map((i) =>
            i.slug === slug ? { ...i, quantity: i.quantity + 1 } : i
          );
        }
        return [...prev, { slug, name, price, quantity: 1, image }];
      });
      // Show toast instead of opening cart drawer
      showToast(name);
    },
    [showToast]
  );

  const removeItem = useCallback((slug: string) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  }, []);

  const updateQuantity = useCallback((slug: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => i.slug !== slug));
    } else {
      setItems((prev) =>
        prev.map((i) => (i.slug === slug ? { ...i, quantity } : i))
      );
    }
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isOpen,
        setIsOpen,
        toast,
        dismissToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
