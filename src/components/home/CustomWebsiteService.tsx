import { CheckCircle2,Globe, Server, Zap, ShieldCheck, MousePointer2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    title: "Performance Optimized",
    description: "Unlike templates, our custom code is bloat-free, ensuring lightning-fast load speeds and better SEO rankings.",
    icon: <Zap className="w-5 h-5 text-amber-500" />,
  },
  {
    title: "Scalable Architecture",
    description: "Built with Next.js, your site grows with your business. Add features easily without starting from scratch.",
    icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
  },
  {
    title: "Unique Brand Identity",
    description: "Stand out from competitors with a 100% unique design tailored to your specific brand DNA.",
    icon: <MousePointer2 className="w-5 h-5 text-indigo-500" />,
  },
];

export default function CustomWebsiteService() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: The Narrative */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-3 py-1 text-primary">
                Custom Web Development
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight  dark:text-slate-100">
                Don&apos;t just build a website. <br />
                <span className="text-primary">Build a digital asset.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At <span className="font-semibold italic">Tietex IT</span>, we move beyond 
                off-the-shelf templates. We engineer bespoke web solutions from the 
                ground up, ensuring your digital presence is as unique as your business operations.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-6">
              {benefits.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors border border-transparent ">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-slate-100">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: The "All-in-One" Hosting Offer */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-4  rounded-[2rem] blur-2xl" />
            <div className="relative bg-card border shadow-2xl rounded-3xl p-8 md:p-12 overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Zero-Hassle Infrastructure</h3>
              </div>
              
              <p className="text-muted-foreground mb-8">
                Stop worrying about technical setups. We provide premium 
                <span className="text-foreground font-semibold"> Domain & High-Speed Hosting</span> 
                at an unbeatable price point, exclusively for our development clients.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500" /> 99.9% Uptime Guarantee
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500" /> Free SSL Certificates
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500" /> Managed Weekly Backups
                </li>
              </ul>

              <div className="p-6  rounded-2xl border border-dashed border-primary/30">
                <p className="text-sm font-semibold uppercase tracking-wider text-center mb-2">Special Bundle Price</p>
                <div className="text-center">
                  <span className="text-3xl font-bold">Starting from Only</span>
                  <p className="text-primary font-medium mt-1">Talk to our Dhaka Team for a Quote</p>
                </div>
              </div>

              <Button className="w-full mt-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/20">
                Get Your Custom Quote
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}