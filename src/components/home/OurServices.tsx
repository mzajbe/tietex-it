import { 
  Laptop, 
  ShoppingCart, 
  UserCircle, 
  Settings, 
  TrendingUp, 
  Layout 
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const services = [
  {
    title: "E-commerce Development",
    description: "Launch your online shop with secure payment integration (bKash, Nagad, etc.) and a smooth checkout experience tailored for the local and global market.",
    icon: <ShoppingCart className="w-6 h-6" />,
  },
  {
    title: "Portfolio Websites",
    description: "Stand out in the Dhaka professional scene. We build sleek, responsive portfolios that showcase your skills and land you high-value clients.",
    icon: <UserCircle className="h-6 w-6" />,
  },
  {
    title: "Custom CMS",
    description: "Take full control of your content. We build easy-to-use dashboards so you can update your website without writing a single line of code.",
    icon: <Settings className="h-6 w-6" />,
  },
  {
    title: "Digital Marketing",
    description: "Go beyond just a website. We help you dominate social media and search engines to drive real traffic and sales to your business.",
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    title: "Modern UI/UX Design",
    description: "Clean, minimalist designs that follow modern standards. We ensure your website looks great on mobile, tablet, and desktop.",
    icon: <Layout className="h-6 w-6" />,
  },
  {
    title: "Tech Support",
    description: "Reliable maintenance and support right here from Dhaka. We ensure your website stays fast, secure, and always online.",
    icon: <Laptop className="h-6 w-6" />,
  },
];

const OurServices = () => {
    return (
        <section className="py-24 px-6 ">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
            Web Design Company in Dhaka
          </h2>
          <h3 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Discover what we can <br className="hidden md:block" /> do for you
          </h3>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl">
            Tietex IT empowers businesses in Bangladesh with world-class software 
            solutions and cutting-edge digital strategies.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-slate-200 dark:border-slate-800 transition-all hover:border-primary/50 hover:shadow-xl hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="mt-4 text-xl font-bold leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
              {/* Subtle bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Card>
          ))}
        </div>
      </div>
    </section>
    );
};

export default OurServices;