import React from "react";
import { Card } from "@/components/ui/card";
import map from "@/../public/BangladeshMap.png";
import Image from "next/image";

const offices = [
  {
    id: 1,
    name: "Tietex IT",
    address: "188/2, Tajlen Road, Mirpur 01, Dhaka 1216",
    top: "30%", // Position relative to map height
    left: "45%", // Position relative to map width
  },
//   {
//     id: 2,
//     name: "EMEA Hub",
//     address: "456 Tech Lane, London, UK",
//     top: "45%",
//     left: "65%",
//   },
];

export default function OfficeMap() {
  return (
    <div className="relative w-full mx-auto py-20 px-4 bg-white overflow-hidden">
      {/* Heading Section */}
      {/* <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight">
          Our Global Presence
        </h2>
        <p className="text-muted-foreground mt-2">
          Visit us at one of our international offices.
        </p>
      </div> */}

      {/* Map Container */}
      <div className="relative w-full aspect-2/1 min-h-100">
        {/* The Dotted Map Background */}
        
        <Image
          src={map}
          alt="World Map"
          className="w-full h-full object-contain opacity-40 select-none pointer-events-none"
        ></Image>
        

        {/* Office Markers & Info Cards */}
        {offices.map((office) => (
          <div
            key={office.id}
            className="absolute group transition-all duration-300"
            style={{ top: office.top, left: office.left }}
          >
            {/* The Blue Connecting Line and Dot */}
            <div className="flex flex-col items-center">
              {/* Info Card */}
              <Card className="mb-4 p-4 w-48 bg-gray-800 text-white border-none shadow-2xl opacity-0 group-hover:opacity-100 lg:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                <h4 className="font-bold text-sm">{office.name}</h4>
                <p className="text-[15px] text-gray-400 mt-1 leading-relaxed">
                  {office.address}
                </p>
              </Card>

              {/* Connector */}
              <div className="w-[2px] h-12 bg-blue-500 relative">
                {/* The Map Dot */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional Gradient Background (Matches your screenshot) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 via-transparent to-transparent -z-10" />
    </div>
  );
}
