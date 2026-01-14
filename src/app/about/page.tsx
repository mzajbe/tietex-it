import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Target,
  Handshake,
  CheckCircle2,
  Award,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

import teamPhoto from "@/components/about/algoleague-yYWOYeX-jLY-unsplash.jpg";
import img1 from "@/components/about/algoleague-yYWOYeX-jLY-unsplash.jpg"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Team Member 1",
      role: "CEO & Founder",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbQg_ISwwljpWFF9kNu8aifEqQYq5v634HhA&s",
    },
    {
      name: "Team Member 1",
      role: "CEO & Founder",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbQg_ISwwljpWFF9kNu8aifEqQYq5v634HhA&s",
    },
    {
      name: "Team Member 1",
      role: "CEO & Founder",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbQg_ISwwljpWFF9kNu8aifEqQYq5v634HhA&s",
    },
    {
      name: "Team Member 1",
      role: "CEO & Founder",
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
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Understanding Requirements",
      description:
        "We start by understanding your business needs, goals, and challenges to create a tailored solution.",
    },
    {
      icon: <Target className="w-12 h-12 text-blue-500" />,
      title: "Planning & Strategy",
      description:
        "Our team develops a comprehensive strategy and roadmap aligned with your objectives.",
    },
    {
      icon: <CheckCircle2 className="w-12 h-12 text-blue-500" />,
      title: "Creating Project",
      description:
        "We execute the plan with precision, maintaining regular communication and quality standards.",
    },
    {
      icon: <Handshake className="w-12 h-12 text-blue-500" />,
      title: "Project Kickoff",
      description:
        "Official project launch with clear milestones, timelines, and deliverables defined.",
    },
    {
      icon: <Award className="w-12 h-12 text-blue-500" />,
      title: "Testing & Quality",
      description:
        "Rigorous testing ensures your solution meets the highest quality standards.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
      title: "Deployment & Support",
      description:
        "Seamless deployment followed by ongoing support and maintenance for your success.",
    },
  ];

  const partners = [
    { name: "AWS Partner", logo: "/api/placeholder/120/60" },
    { name: "BASIS", logo: "/api/placeholder/120/60" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-white py-20">
        <div className="container mx-auto px-4 mt-4">
          {/* <div className="text-center mb-12">
            <h1 className="text-4xl md:text-3xl font-bold mb-4 text-gray-900">
              Preferred by a Growing Number of Valued Customers
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Building trust through innovation, dedication, and exceptional service
            </p>
          </div> */}

          {/* Team Photo */}
          <div className="max-w-7xl mx-auto px-4">
            <Card className="overflow-hidden shadow-2xl border-none">
              <CardContent className="p-0">
                <div className="relative aspect-video w-full group">
                  {/* The Actual Image */}
                  <Image
                    src={teamPhoto}
                    alt="Our Team at AWS Cloud Day"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />

                  {/* Overlay to make text readable */}
                  {/* <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white p-4 md:p-8">
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4">
              AWS Cloud Day
            </h2>
            <p className="text-sm md:text-xl font-medium opacity-90">
              Our Team at AWS Community Event
            </p>
          </div>
        </div> */}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center text-sm opacity-80 max-w-4xl mx-auto">
            <p>
              Located in the heart of Bangladesh Technology, our expert team at
              Shadhin Technologies Ltd. is your growth partner - bringing
              innovative AWS cloud solutions to grow your business. We combine
              local expertise with global standards to deliver exceptional cloud
              solutions and custom software development.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Awesome Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals who make it all happen. Our diverse
            team brings together expertise, creativity, and passion to deliver
            outstanding results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <CardContent className="p-6 text-center">
                {/* Profile Image Container */}
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border-2 border-gray-50">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    /* Fallback to Initial if no image exists */
                    <div className="w-full h-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>

                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{member.role}</p>

                {/* Social Icons */}
                <div className="flex justify-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-200 transition-colors text-xs font-bold">
                    f
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-200 transition-colors text-xs font-bold">
                    in
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
      </section>

      {/* Clients Section */}
      <section className=" bg-gray-50">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A Few Clients We Have Worked With
            </h2>
            <p className="text-gray-600">
              Trusted by leading organizations across multiple industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {clients.map((client, index) => (
              <Card
                key={index}
                className="hover:shadow-md transition-shadow duration-300"
              >
                <CardContent className="p-6 flex items-center justify-center h-24">
                  <div className="text-center font-semibold text-gray-700">
                    {client}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section className="py-16 bg-gray-50 ">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Process to Work With Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined workflow ensures efficient delivery and
              exceptional results at every stage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {process.map((step, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{step.icon}</div>
                  <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="p-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tietex IT&apos;s Partnership
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strategic partnerships that empower us to deliver cutting-edge
              solutions and exceptional value to our clients
            </p>
          </div>

          <div className="flex justify-center gap-12 flex-wrap">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="w-48 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-8 flex items-center justify-center">
                  <div className="text-center font-bold text-gray-700">
                    {partner.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo Bottom */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 aspect-video flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <h3 className="text-4xl font-bold mb-2">Garlic n Ginger</h3>
                  <p className="text-lg opacity-80">
                    Team Gathering & Celebration
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="border-l-4 border-blue-500 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                Worked with 20+ industries, including Orange County, ForFare,
                CodersTrust.
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By closely focusing on innovative solutions and best practices,
                we've worked with renowned companies in 50+ sectors. Our track
                record speaks for itself - from startups to enterprises,
                we&apos;ve delivered solutions that drive growth, efficiency,
                and success. Our experience spans across e-commerce, fintech,
                healthcare, education, and many other industries, allowing us to
                bring cross-industry insights to every project. We're committed
                to understanding your unique challenges and delivering tailored
                solutions that exceed expectations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's build something amazing together
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}
