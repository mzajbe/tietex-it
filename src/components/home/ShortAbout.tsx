import React from "react";
import { Separator } from "@/components/ui/separator";

const ShortAbout = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Bold Title */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Crafting Digital <br />
              <span className="text-primary">Excellence at Tietex IT.</span>
            </h2>
            <div className="mt-6 h-1.5 w-20 bg-primary rounded-full" />
          </div>

          {/* Right Side: Paragraph Content */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We are a dedicated software company specializing in building
              high-performance
              <span className="text-foreground font-medium">
                {" "}
                e-commerce platforms
              </span>{" "}
              and stunning{" "}
              <span className="text-foreground font-medium">
                portfolio websites
              </span>
              . Our team bridges the gap between complex technology and
              user-centric design.
            </p>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you need a custom-built{" "}
                <span className="text-foreground font-medium">CMS</span> to
                manage your content with ease or a robust web solution tailored
                to your specific business needs, we provide end-to-end
                development. Our expertise doesn&apos;t stop at code; we
                integrate{" "}
                <span className="text-foreground font-medium">
                  digital marketing
                </span>
                strategies into every project to ensure your brand doesn&apos;t
                just exist online, but thrives.
              </p>

              <Separator className="my-8" />

              {/* Simple horizontal list of keywords */}
              <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold uppercase tracking-widest text-primary/80">
                <span>E-Commerce</span>

                <span>Portfolio</span>
                <span>CMS</span>
                <span>Digital Marketing</span>
                <span>Custom Web</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortAbout;
