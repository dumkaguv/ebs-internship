import qs from "qs";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useQueryUrlParams = (params: Record<string, any>) => {
  const isMounted = useRef(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isMounted.current) {
      const currentParams = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });
      const mergedParams = { ...currentParams, ...params };
      console.log(mergedParams);
      const newQueryParams = qs.stringify(mergedParams);

      navigate(`${location.pathname}?${newQueryParams}`);
    }

    isMounted.current = true;
  }, [params]);
};
