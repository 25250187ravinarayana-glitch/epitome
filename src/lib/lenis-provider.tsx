"use client";

import { ReactLenis } from "lenis/react";
import { type FC, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

type LenisScrollProviderProps = {
  children: React.ReactNode;
};

const LenisScrollProvider: FC<LenisScrollProviderProps> = ({ children }) => {
  const lenisRef = useRef<any>(null);
  const pathname = usePathname();

  // Reset scroll position when route changes
  useEffect(() => {
    // Disable scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Force immediate scroll to top
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }, [pathname]);

  return (
    <ReactLenis 
      ref={lenisRef} 
      root 
      options={{ 
        lerp: 0.1, 
        duration: 1.5,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisScrollProvider;

