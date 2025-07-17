import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const useClearSearchParams = () => {
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({});
  }, [setSearchParams]);
};
