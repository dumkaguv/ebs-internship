import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { EXPIRES_AT } from "../config";
import { refreshAndSaveToken, getAccessToken } from "../utils";

const DELAY_MIN_BEFORE_EXPIRE = 1;

export const useAutoRefreshToken = () => {
  const location = useLocation();

  useEffect(() => {
    const token = getAccessToken();
    const expiresAtRaw = localStorage.getItem(EXPIRES_AT);

    if (!token || !expiresAtRaw) return;

    const expiresAt = new Date(expiresAtRaw).getTime();
    const now = Date.now();
    const delay = expiresAt - now - DELAY_MIN_BEFORE_EXPIRE * 60 * 1000;

    if (delay <= 0) {
      refreshAndSaveToken();
      return;
    }

    const interval = setInterval(refreshAndSaveToken, delay);

    return () => clearInterval(interval);
  }, [location.pathname]);
};
