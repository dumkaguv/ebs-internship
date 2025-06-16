import { RefObject } from "react";

const defineHeaderHeightCssVar = (
  headerRef: RefObject<HTMLDivElement | null>
) => {
  if (headerRef.current) {
    document.documentElement.style.setProperty(
      "--header-height",
      `${headerRef.current.offsetHeight}px`
    );
  }
};

export default defineHeaderHeightCssVar;
