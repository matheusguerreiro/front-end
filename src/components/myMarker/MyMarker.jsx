// @react-google
import { Marker } from "@react-google-maps/api"

// context
import { useMarker } from "../../context/markerContext"

// icons
import moveOff from '../../icons/Regular=on, Move=off.svg'
import moveOn from '../../icons/Regular=off, Move=on.svg'


const MyMarker = () => {

  const {state, dispatch} = useMarker()

  const handleClick = (id, draggable) => {
    dispatch({type: 'change', id: id, draggable: draggable})
  }

  return (
    state.map((marker) => (
      <Marker 
        position={marker.position}
        onClick={() => handleClick(marker.id, marker.draggable)}
        key={marker.id}
        icon={marker.draggable ? moveOn : moveOff}
        draggable={marker.draggable}
      />
    ))
  )
}

export default MyMarker