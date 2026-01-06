import { 
  Award, 
  Users, 
  Zap, 
  Headphones, 
  Clock, 
  Palette, 
  BarChart3, 
  SearchCode, 
  ShieldCheck 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    title: "Long Experience",
    desc: "Years of industry expertise bringing complex digital visions to life.",
    icon: <Award className="w-6 h-6" />,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Creative Tech-Park",
    desc: "A hub of innovation where the latest technology meets creative thinking.",
    icon: <Users className="w-6 h-6" />,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Highly Professional",
    desc: "A disciplined approach to project management and communication.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "bg-slate-500/10 text-slate-600",
  },
  {
    title: "Quick Support",
    desc: "Dedicated support team ready to assist you whenever you need help.",
    icon: <Headphones className="w-6 h-6" />,
    color: "bg-green-500/10 text-green-600",
  },
  {
    title: "Fast Delivery",
    desc: "We respect your timelines, ensuring quality launches without delays.",
    icon: <Clock className="w-6 h-6" />,
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    title: "Excellent UI-UX",
    desc: "User-centric designs that ensure high engagement and ease of use.",
    icon: <Palette className="w-6 h-6" />,
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    title: "Focus On Results",
    desc: "We don't just build; we ensure your website drives business growth.",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "bg-indigo-500/10 text-indigo-600",
  },
  {
    title: "Technical Audit",
    desc: "Deep technical scans to ensure security, speed, and SEO health.",
    icon: <SearchCode className="w-6 h-6" />,
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    title: "Satisfied Guarantee",
    desc: "Your success is ours. We guarantee a product you'll be proud of.",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-yellow-500/10 text-yellow-600",
  },
];

export default function WhyHireUs() {
  return (
    <section className="py-24 ">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Why Hire <span className="text-primary">Tietex IT</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine technical mastery with a commitment to excellence, 
            making us the preferred partner for businesses looking to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="border-none bg-background shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="pt-8">
                <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}