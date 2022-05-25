// @react-google
import { Marker } from "@react-google-maps/api"

// context
import { useMarker } from "../../context/MarkerContext"

// icons
import regularOn from '../../icons/Regular=on, Move=off.svg'
import regularOff from '../../icons/Regular=off, Move=on.svg'


const MyMarker = () => {

  const {state, dispatch} = useMarker()

  const handleClick = (id) => {
    dispatch({type: 'change', payload: id})
  }

  return (
    state.map((marker, i) => (
      <Marker 
        position={marker.position}
        onClick={() => handleClick(marker.id)}
        key={marker.id}
        icon={marker.draggable ? regularOff : regularOn}
        draggable={marker.draggable}
      />
    ))
  )
}

export default MyMarker