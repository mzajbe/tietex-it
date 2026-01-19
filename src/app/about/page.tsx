import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Handshake, Target, TrendingUp, Users } from "lucide-react";

import teamPhoto from "@/components/about/algoleague-yYWOYeX-jLY-unsplash.jpg";

export const metadata = {
  title: "About - Tietex IT",
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Team Member 1",
      role: "CEO & Founder",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbQg_ISwwljpWFF9kNu8aifEqQYq5v634HhA&s",
    },
    {
      name: "Team Member 2",
      role: "Product Designer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbQg_ISwwljpWFF9kNu8aifEqQYq5v634HhA&s",
    },
    {
      name: "Team Member 3",
      role: "Lead Engineer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbQg_ISwwljpWFF9kNu8aifEqQYq5v634HhA&s",
    },
    {
      name: "Team Member 4",
      role: "Growth Strategist",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbQg_ISwwljpWFF9kNu8aifEqQYq5v634HhA&s",
    },
  ];

  const clients = [
    "UNO",
    "ForFare",
    "MasterCard",
    "CodersTrust",
    "LBSL",
    "YouthLink",
    "Prothom Alo",
    "Black Paper",
    "City Bank",
    "Mashriq",
    "DIRD",
    "Shikkha Karmo",
  ];

  const achievements = [
    "10+ Years of Excellence",
    "500+ Projects Completed",
    "50+ Team Members",
    "98% Client Satisfaction",
    "20+ Industries Served",
  ];

  const process = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Discovery",
      description:
        "Understand goals, users, and constraints to build a clear roadmap.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategy",
      description:
        "Define structure, scope, and success metrics before we build.",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Design + Build",
      description:
        "Create a premium UI and ship a fast, scalable product.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Launch + Grow",
      description:
        "Deploy, optimize performance, and support ongoing growth.",
    },
  ];

  return (
    <main className="-mt-24">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_10%_20%,#F16F31_0%,transparent_30%),radial-gradient(circle_at_90%_10%,#F16F31_0%,transparent_35%)]" />
        <div className="container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-widest text-white/60">
                About Tietex IT
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                We build digital products that feel premium and perform fast.
              </h1>
              <p className="text-lg text-white/75 max-w-xl">
                We are a Dhaka-based team of designers and engineers helping
                ambitious brands launch websites, platforms, and experiences
                that convert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary text-slate-950 hover:opacity-90">
                  Meet the Team
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  View Portfolio
                </Button>
              </div>
              <div className="flex flex-wrap gap-3 pt-4 text-sm text-white/70">
                {achievements.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/20 bg-white/5 px-4 py-2"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden border-white/10 bg-white/5 shadow-2xl">
                <CardContent className="p-0">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={teamPhoto}
                      alt="Our team"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-xs uppercase tracking-widest text-white/70">
                        Team culture
                      </p>
                      <p className="text-lg font-semibold">Driven. Curious. Fast.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-slate-400">Why us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              A partner that blends strategy, design, and engineering.
            </h2>
            <p className="text-slate-600">
              We collaborate closely with your team to craft a clear roadmap,
              design with intent, and ship with speed.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "User-first design systems",
              "Scalable, modern stack",
              "Transparent communication",
              "Measurable business impact",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border bg-white p-6 shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <p className="mt-4 text-slate-800 font-semibold">{item}</p>
                <p className="mt-2 text-sm text-slate-600">
                  Built around outcomes that improve product clarity and growth.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Awesome Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-3">
              A multidisciplinary crew that brings clarity, creativity, and
              speed to every project.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-900">{member.name}</p>
                    <p className="text-sm text-slate-600">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Process to Work With Us
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-3">
            Clear phases, zero surprises — from discovery to launch.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step) => (
            <Card key={step.title} className="border bg-white">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  {step.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Trusted by Teams Worldwide
            </h2>
            <p className="text-white/70 mt-3">
              We work with startups, enterprises, and industry leaders.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clients.map((client) => (
              <div
                key={client}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center text-sm font-semibold text-white/80"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-[32px] bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-12 text-white">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Let&apos;s build something that feels premium and performs fast.
                </h2>
                <p className="mt-4 text-white/70 max-w-xl">
                  Tell us about your goals and we&apos;ll map a plan to deliver.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Button className="bg-white text-slate-900 hover:bg-white/90">
                  Start a Project
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
