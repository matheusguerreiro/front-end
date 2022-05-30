// hooks
import { useContext, createContext, useReducer} from "react";

// calculateCenter
import calculateCenter from '../utils/calculateCenter'

// Talhao.json
import json from '../data/Talhao.json'


function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.marker]
    case 'rmAll':
      return []
    case 'change':
      return state.filter((marker) => {
        marker.draggable = false
        marker.id === action.id && (marker.draggable = !action.draggable)
        return marker
      })
    case 'rm':
      return [...state.filter((marker) => (
        marker.draggable !== true
      ))]
    default:
      return state
  }
}

const initialState = []

const MarkerContext = createContext()

const polygonCoordinates = json.features[0].geometry.coordinates[0].map((coordinate) => (
  {lat: coordinate[1], lng: coordinate[0]}
))
const center = calculateCenter(polygonCoordinates)

export const MarkerContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <MarkerContext.Provider value={{state, dispatch, center, polygonCoordinates}}>
      {children}
    </MarkerContext.Provider>
  )
}

export const useMarker = () => useContext(MarkerContext)