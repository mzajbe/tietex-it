"use client";

import { Map, MapControls, MapMarker, MarkerContent, MarkerPopup, MarkerTooltip } from "@/components/ui/map";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";


export function MyMap() {
  const { language } = useLanguage();
  const locations = [
    {
      id: 1,
      name:
        language === "bn"
          ? "১৮৮/২, তাজলেন রোড, মিরপুর ০১, ঢাকা ১২১৬"
          : "188/2, Tajlen Road, Mirpur 01, Dhaka 1216",
      lng: 90.440813,
      lat: 23.7983437,
    },
  ];

  return (
    <Card className="h-[300px] p-0 mt-24 overflow-hidden">
      <Map center={[-73.98, 40.76]} zoom={12}>
        {locations.map((location) => (
          <MapMarker
            key={location.id}
            longitude={location.lng}
            latitude={location.lat}
          >
            <MarkerContent>
              <div className="size-4 rounded-full bg-primary border-2 border-white shadow-lg" />
            </MarkerContent>
            <MarkerTooltip>{location.name}</MarkerTooltip>
            <MarkerPopup>
              <div className="space-y-1">
                <p className="font-medium text-foreground">{location.name}</p>
                <p className="text-xs text-muted-foreground">
                  {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                </p>
              </div>
            </MarkerPopup>
          </MapMarker>
        ))}
        <MapControls
          position="bottom-right"
          showZoom
          showCompass
          showLocate
          showFullscreen
        />
      </Map>
    </Card>
  );
}
