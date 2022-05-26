// sass
import './map.sass'

// @react-google-maps/api
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// context
import {useMarker} from '../../context/MarkerContext'

// components
import MyPolygon from '../myPolygon/MyPolygon';
import MyMarker from '../myMarker/MyMarker';
import Buttons from '../buttons/Buttons';
import List from '../list/List';
import Modal from '../modal/Modal';


const Map = () => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB0M6YIG2aL58gl58imsjigAgsfU0dTrp0"
  })

  const {center} = useMarker()
  
  const mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
    mapTypeId: "satellite"
  }

  
  return (
    <div className='map'>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{width: '100%', height: '100%', position: 'relative'}}
          zoom={15}
          center={center}
          options={mapOptions}
        >
          <MyPolygon />
          <MyMarker />
          <Buttons />
          <List />
        </GoogleMap>
      ) : <>
      </>}
    </div>
  )
}

export default Map