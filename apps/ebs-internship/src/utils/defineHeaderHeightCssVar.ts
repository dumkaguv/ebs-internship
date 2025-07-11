import { RefObject } from "react";

export const defineHeaderHeightCssVar = (
  headerRef: RefObject<HTMLDivElement | null>
) => {
  if (headerRef.current) {
    document.documentElement.style.setProperty(
      "--header-height",
      `${headerRef.current.offsetHeight}px`
    );
  }
};
