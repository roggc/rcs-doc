import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const useScrollToTop = (elementRef) => {
  const { pathname } = useLocation();

  useEffect(() => {
    elementRef.current.scroll({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
};
