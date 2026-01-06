import { Users, Globe, Briefcase, Award } from "lucide-react";

const stats = [
  {
    label: "Happy Clients",
    value: "150+",
    description: "Trusted by businesses worldwide for digital growth.",
    icon: <Users className="h-5 w-5 text-primary" />,
  },
  {
    label: "Projects Completed",
    value: "320+",
    description: "Successful e-commerce and CMS deployments.",
    icon: <Briefcase className="h-5 w-5 text-primary" />,
  },
  {
    label: "Websites Launched",
    value: "200+",
    description: "High-performance portfolio and business sites.",
    icon: <Globe className="h-5 w-5 text-primary" />,
  },
  {
    label: "Retention Rate",
    value: "98%",
    description: "Clients who return to us for ongoing marketing.",
    icon: <Award className="h-5 w-5 text-primary" />,
  },
];

export default function StatisticsSection() {
  return (
    <section className="py-20 border-t border-b bg-slate-50/30 dark:bg-transparent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-3">
              <div className="p-3 bg-primary/10 rounded-xl">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-4xl font-extrabold tracking-tight text-foreground">
                  {stat.value}
                </h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary mt-1">
                  {stat.label}
                </p>
                <p className="text-sm text-muted-foreground mt-2 max-w-[200px]">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}