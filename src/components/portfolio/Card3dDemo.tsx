"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

interface CardTransform {
  rotateX: number;
  rotateY: number;
  scale: number;
}

type Card3dDemoProps = {
  title: string;
  desc: string;
  image: string;   // screenshot URL (local: /portfolio/x.png OR remote)
  liveUrl: string; // live demo link
  imageHeightClass?: string; // e.g. "h-80"
  imagePositionClass?: string; // e.g. "object-top" for full page screenshots
};

const Card3dDemo = ({
  title,
  desc,
  image,
  liveUrl,
  imageHeightClass = "h-96",     // bigger image height
  imagePositionClass = "object-top", // best for full-page screenshots
}: Card3dDemoProps) => {
  const { language } = useLanguage();
  const cta = language === "bn" ? "লাইভ ডেমো" : "Live Demo";
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const lastMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const card = cardRef.current;
    const img = imageRef.current;

    if (!card || !img) return;

    let rect: DOMRect | null = null;
    let centerX = 0;
    let centerY = 0;

    const measure = () => {
      rect = card.getBoundingClientRect();
      centerX = rect.left + rect.width / 2;
      centerY = rect.top + rect.height / 2;
    };

    measure();

    const updateCardTransform = (mouseX: number, mouseY: number) => {
      if (!rect) measure();

      const relativeX = mouseX - centerX;
      const relativeY = mouseY - centerY;

      const cardTransform: CardTransform = {
        rotateX: -relativeY * 0.035,
        rotateY: relativeX * 0.035,
        scale: 1.02,
      };

      const imageTransform: CardTransform = {
        rotateX: -relativeY * 0.025,
        rotateY: relativeX * 0.025,
        scale: 1.05,
      };

      return { cardTransform, imageTransform };
    };

    const animate = () => {
      const { cardTransform, imageTransform } = updateCardTransform(
        lastMousePosition.current.x,
        lastMousePosition.current.y
      );

      card.style.transform = `perspective(1000px) rotateX(${cardTransform.rotateX}deg) rotateY(${cardTransform.rotateY}deg) scale3d(${cardTransform.scale}, ${cardTransform.scale}, ${cardTransform.scale})`;
      card.style.boxShadow = "0 10px 35px rgba(0, 0, 0, 0.2)";

      img.style.transform = `perspective(1000px) rotateX(${imageTransform.rotateX}deg) rotateY(${imageTransform.rotateY}deg) scale3d(${imageTransform.scale}, ${imageTransform.scale}, ${imageTransform.scale})`;

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      lastMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => {
      // re-measure in case layout moved
      measure();
      card.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";
      img.style.transition = "transform 0.2s ease";
      animate();
    };

    const handleMouseLeave = () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);

      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
      card.style.boxShadow = "none";
      card.style.transition = "transform 0.5s ease, box-shadow 0.5s ease";

      img.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
      img.style.transition = "transform 0.5s ease";
    };

    const handleResizeOrScroll = () => measure();

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResizeOrScroll);
    window.addEventListener("scroll", handleResizeOrScroll, true);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);

      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResizeOrScroll);
      window.removeEventListener("scroll", handleResizeOrScroll, true);
    };
  }, []);

  return (
    <Card ref={cardRef} className="w-full  overflow-hidden rounded-2xl">
      <CardHeader>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 text-sm">
        {/* Bigger screenshot preview */}
        <div
          className={`group relative w-full ${imageHeightClass} overflow-hidden rounded-md bg-slate-100`}
        >
          <img
            ref={imageRef}
            src={image}
            alt={title}
            className={`card-image-scroll h-full w-full rounded-md object-cover ${imagePositionClass}`}
            loading="lazy"
          />
        </div>

        <p className="text-muted-foreground line-clamp-3">{desc}</p>

        {/* Live demo button */}
        <Button asChild className="w-full">
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
            {cta}
          </Link>
        </Button>
      </CardContent>
      <style jsx>{`
        .card-image-scroll {
          object-position: 50% 0%;
        }

        .group:hover .card-image-scroll {
          animation: imageScroll 8s linear forwards;
        }

        @keyframes imageScroll {
          from {
            object-position: 50% 0%;
          }
          to {
            object-position: 50% 100%;
          }
        }
      `}</style>
    </Card>
  );
};

export default Card3dDemo;
