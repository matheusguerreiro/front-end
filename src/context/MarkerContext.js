// hooks
import { useContext, createContext, useReducer, useState } from "react";

// calculateCenter
import calculateCenter from '../utils/calculateCenter'

// Talhao.json
import json from '../data/Talhao.json'


function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]
    case 'rmAll':
      return []
    case 'change':
      return state.map((marker) => {
        marker.draggable = false
        if (marker.id === action.payload) {
          marker.draggable = true
        }
        return marker
      })
    case 'rm':
      return [...state.filter((marker) => marker.draggable !== true)]
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
  const [select, setSelect] = useState(null)

  return (
    <MarkerContext.Provider value={{state, dispatch, center, polygonCoordinates, select, setSelect}}>
      {children}
    </MarkerContext.Provider>
  )
}

export const useMarker = () => useContext(MarkerContext)