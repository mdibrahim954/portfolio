import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768; // px — matches Tailwind's `md` breakpoint

export function useIsMobile(breakpoint: number = MOBILE_BREAKPOINT) {
  // undefined until mounted, so SSR and the first client render agree (no hydration mismatch)
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

    const update = () => setIsMobile(mql.matches);
    update();

    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [breakpoint]);

  return !!isMobile;
}
