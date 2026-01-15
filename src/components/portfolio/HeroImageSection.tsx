import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

type HeroImageSectionProps = {
  /** Local: "/images/hero.jpg" (place in /public) or remote url (needs next config) */
  src: string | StaticImageData;
  alt: string;
  /** Default: 20vh (≈ 20% of screen height) */
  heightClassName?: string;
  /** Default: shows top part of a landscape image nicely */
  objectPositionClassName?: string; // e.g. "object-center" | "object-top"
  /** Optional overlay classes if you want later */
  className?: string;
  priority?: boolean;
};

export default function HeroImageSection({
  src,
  alt,
  heightClassName = "h-[20vh]",
  objectPositionClassName = "object-center",
  className,
  priority = true,
}: HeroImageSectionProps) {
  return (
    <section className={cn("w-full", className)}>
      <div className={cn("relative w-full overflow-hidden", heightClassName)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn("object-cover", objectPositionClassName)}
          sizes="100vw"
        />
      </div>
    </section>
  );
}
