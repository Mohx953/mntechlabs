"use client"

import { Map } from "@/components/ui/map"

export const RotatingGlobeExample = () => {
  return (
    <div className="h-full w-full">
      <Map
        accessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || ""}
        projection="globe"
        autoRotate
        rotateSpeed={5}
        zoom={1.5}
        center={[0, 20]}
      />
    </div>
  )
}
