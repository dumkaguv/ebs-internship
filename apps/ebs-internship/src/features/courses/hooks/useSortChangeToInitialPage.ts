import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { Sort } from "../types";

export const useSortChangeToInitialPage = (
  sort: Sort,
  setCurrentPage: Dispatch<SetStateAction<number>>
) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setCurrentPage(1);
  }, [sort, setCurrentPage]);
};
