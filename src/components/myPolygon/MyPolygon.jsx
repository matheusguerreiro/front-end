// @react-google
import { Polygon } from "@react-google-maps/api"

// context
import { useMarker } from "../../context/markerContext"


const polygonOptions = {
  fillColor: '#fff',
  strokeColor: '#fff'
}


const MyPolygon = () => {

  const {polygonCoordinates} = useMarker()

  return <Polygon paths={polygonCoordinates} options={polygonOptions} />
}

export default MyPolygon