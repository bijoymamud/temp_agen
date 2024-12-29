import { create } from "zustand";

export const useAnimationStore = create(() => {
  const randomIndex = Math.floor(Math.random() * 4);
  return { selectedVariant: randomIndex };
});
