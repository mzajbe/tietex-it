import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const techStack = [
  { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
  { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "TypeScript", logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
  { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
  { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
  { name: "PostgreSQL", logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
  { name: "Prisma", logo: "https://cdn.worldvectorlogo.com/logos/prisma-2.svg" },
  { name: "Firebase", logo: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
  { name: "Shadcn/UI", logo: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4" },
  { name: "Stripe", logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg" },
  { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon-1.svg" },
];

export default function TechStack() {
  return (
    <section className="py-24  border-t">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <Badge variant="outline" className="border-primary text-primary px-4 py-1 uppercase tracking-widest text-[10px]">
            Our Tech Stack
          </Badge>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em]">
            Technologies We Work With
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
            TECHNOLOGIES WE SPECIALIZE IN
          </h3>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {techStack.map((tech, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center justify-center p-6 rounded-2xl border bg-card hover:bg-primary/[0.02] hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative w-12 h-12 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center mt-12 text-sm text-muted-foreground italic">
          And many more cutting-edge tools to ensure your project is built with the best.
        </p>
      </div>
    </section>
  );
}