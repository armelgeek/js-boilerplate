import { create }  from "zustand"
import { persist } from "zustand/middleware"
import {ProductStoreInterface} from "../../../application/stores/product/product.store.interface";

const store = persist<ProductStoreInterface>(
  (set) => ({
    count: 0,
    increment: () => set((state) => ({ ...state, count: state.count + 1 })),
    decrement: () => set((state) => ({ ...state, count: state.count - 1 })),
    incrementFixed: (value: number) =>
      set((state) => ({ ...state, count: state.count + value })),
    decrementFixed: (value: number) =>
      set((state) => ({ ...state, count: state.count - value })),
  }),

  { name: "count" }
)

const useCountStore = create(store)

export { useCountStore }
