"use client";

import Script from "next/script";
import { useEffect, useRef, useState, type ReactNode } from "react";

declare global {
  interface Window {
    THREE?: unknown;
    VANTA?: {
      CLOUDS?: (options: {
        el: HTMLElement;
        mouseControls?: boolean;
        touchControls?: boolean;
        gyroControls?: boolean;
        minHeight?: number;
        minWidth?: number;
      }) => { destroy?: () => void };
    };
  }
}

type CloudBackgroundProps = {
  className?: string;
  children?: ReactNode;
};

export default function Cloude({
  className,
  children,
}: CloudBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const vantaRef = useRef<{ destroy?: () => void } | null>(null);
  const [threeReady, setThreeReady] = useState(false);
  const [vantaReady, setVantaReady] = useState(false);

  useEffect(() => {
    if (!threeReady || !vantaReady || !containerRef.current) return;

    if (vantaRef.current?.destroy) {
      vantaRef.current.destroy();
      vantaRef.current = null;
    }

    if (window.VANTA?.CLOUDS) {
      vantaRef.current = window.VANTA.CLOUDS({
        el: containerRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
      });
    }

    return () => {
      if (vantaRef.current?.destroy) {
        vantaRef.current.destroy();
        vantaRef.current = null;
      }
    };
  }, [threeReady, vantaReady]);

  const wrapperClassName = ["relative", className].filter(Boolean).join(" ");

  return (
    <div className={wrapperClassName}>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        strategy="afterInteractive"
        onLoad={() => setThreeReady(true)}
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds.min.js"
        strategy="afterInteractive"
        onLoad={() => setVantaReady(true)}
      />
      <div ref={containerRef} className="absolute inset-0" />
      {children}
    </div>
  );
}
