"use client";

import { ReactLenis } from "lenis/react";
import { type FC, useRef } from "react";

type LenisScrollProviderProps = {
  children: React.ReactNode;
};

const LenisScrollProvider: FC<LenisScrollProviderProps> = ({ children }) => {
  const lenisRef = useRef<any>(null);

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

