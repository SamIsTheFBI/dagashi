import { create } from "zustand"

type CategoryStore = {
  categoryName: string;
  setCategoryName: (category: string) => void
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  categoryName: "",
  setCategoryName: (category) => set({ categoryName: category }),
}))
