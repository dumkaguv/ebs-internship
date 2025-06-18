import { Dispatch, SetStateAction, useRef } from "react";
import { Sort } from "../types";
import useDeepCompareEffect from "use-deep-compare-effect";

export const useChangeToInitialPage = (
  sort: Sort,
  categories: number[],
  authors: number[],
  setCurrentPage: Dispatch<SetStateAction<number>>,
  searchValue: string | null
) => {
  const isFirstRender = useRef(true);

  useDeepCompareEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setCurrentPage(1);
  }, [sort, setCurrentPage, categories, authors, searchValue]);
};
