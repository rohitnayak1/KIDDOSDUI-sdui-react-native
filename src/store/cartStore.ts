import { create } from "zustand";

interface CartState {
  count: number;

  addItem: (
    productId: string
  ) => void;

  removeItem: (
    productId: string
  ) => void;
}

export const cartStore =
  create<CartState>((set) => ({
    count: 0,

    addItem: () =>
      set((state) => ({
        count: state.count + 1,
      })),

    removeItem: () =>
      set((state) => ({
        count: Math.max(
          0,
          state.count - 1
        ),
      })),
  }));