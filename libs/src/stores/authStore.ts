import { Profile } from "@/types";
import { isAuth } from "../utils";
import { create } from "zustand";

interface AuthState {
  isAuth: boolean;
  profile?: Profile | null;
  setIsAuth: (value: boolean) => void;
  setProfile: (profile: Profile | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuth: isAuth(),
  profile: null,

  setIsAuth: (value) => set({ isAuth: value }),
  setProfile: (profile) => set({ profile: profile }),
}));
