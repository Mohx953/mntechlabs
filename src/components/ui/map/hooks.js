import { useContext } from "react"
import { MapContext } from "./map"

export const useMap = () => {
  const context = useContext(MapContext)
  if (!context) {
    return { map: null, isLoaded: false, library: "mapbox" };
  }
  return context
}
