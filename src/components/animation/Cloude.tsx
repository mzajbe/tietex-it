"use client";

import Script from "next/script";
import { useEffect, useRef, useState, type ReactNode } from "react";

declare global {
  interface Window {
    THREE?: unknown;
    VANTA?: {
      NET?: (options: {
        el: HTMLElement;
        mouseControls?: boolean;
        touchControls?: boolean;
        gyroControls?: boolean;
        minHeight?: number;
        minWidth?: number;
        scale?: number;
        scaleMobile?: number;
      }) => { destroy?: () => void };
    };
  }
}

type CloudBackgroundProps = {
  className?: string;
  children?: ReactNode;
  fullScreen?: boolean;
};

export default function Cloude({
  className,
  children,
  fullScreen = false,
}: CloudBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const vantaRef = useRef<{ destroy?: () => void } | null>(null);
  const [threeReady, setThreeReady] = useState(false);
  const [vantaReady, setVantaReady] = useState(false);
  const [resizeKey, setResizeKey] = useState(0);

  useEffect(() => {
    if (window.THREE) setThreeReady(true);
    if (window.VANTA?.NET) setVantaReady(true);
  }, []);

  useEffect(() => {
    if (!fullScreen) return;

    const handleResize = () => {
      setResizeKey((value) => value + 1);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [fullScreen]);

  useEffect(() => {
    if (!threeReady || !vantaReady || !containerRef.current) return;

    if (vantaRef.current?.destroy) {
      vantaRef.current.destroy();
      vantaRef.current = null;
    }

    if (window.VANTA?.NET) {
      const height =
        containerRef.current.offsetHeight || window.innerHeight || 200;
      const width =
        containerRef.current.offsetWidth || window.innerWidth || 200;

      vantaRef.current = window.VANTA.NET({
        el: containerRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: height,
        minWidth: width,
        scale: 1.0,
        scaleMobile: 1.0,
      });
    }

    return () => {
      if (vantaRef.current?.destroy) {
        vantaRef.current.destroy();
        vantaRef.current = null;
      }
    };
  }, [threeReady, vantaReady, resizeKey]);

  const wrapperClassName = [
    "relative",
    fullScreen ? "min-h-screen h-screen w-full overflow-hidden" : null,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const fullScreenStyle = fullScreen
    ? { minHeight: "100vh", height: "100vh", width: "100%" }
    : undefined;

  return (
    <div className={wrapperClassName} style={fullScreenStyle}>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        strategy="afterInteractive"
        onLoad={() => setThreeReady(true)}
      />
      {threeReady ? (
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
          strategy="afterInteractive"
          onLoad={() => setVantaReady(true)}
        />
      ) : null}
      <div
        ref={containerRef}
        className={[
          "absolute inset-0 h-full w-full z-0 pointer-events-none",
          fullScreen ? "min-h-screen h-screen" : null,
        ]
          .filter(Boolean)
          .join(" ")}
        style={fullScreenStyle}
      />
      {children}
    </div>
  );
}
