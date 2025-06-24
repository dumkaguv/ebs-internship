import { isAuth } from "@/utils";
import { create } from "zustand";

interface AuthState {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  isAuth: isAuth(),
  setIsAuth: (value) => set({ isAuth: value }),
}));
