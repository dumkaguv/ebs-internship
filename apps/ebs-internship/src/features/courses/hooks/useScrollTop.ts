import { useEffect } from "react";

export const useScrollTop = (currentPage: number) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);
};
