// sass
import './buttons.sass'

// icons
import pin from '../../icons/Pin.svg'
import trash from '../../icons/Trash.svg'

// context
import { useMarker } from '../../context/MarkerContext'


const Buttons = () => {

  const {state, dispatch, center} = useMarker()

  const handleAdd = () => {
    let today = new Date()
      let day = (today.getDay()+22) < 10 ? ('0'+(today.getDay())) : (today.getDay()+22)
      let month = (today.getMonth()+1) < 10 ? ('0'+(today.getMonth()+1)) : (today.getMonth()+1)
      let year = today.getFullYear()
        let hours = today.getHours() < 10 ? ('0'+(today.getHours())) : (today.getHours())
        let minutes = today.getMinutes() < 10 ? ('0'+(today.getMinutes())) : (today.getMinutes())
    const marker = {
      id: Math.random(),
      position: {lat: center.lat, lng: center.lng},
      date: `${day}/${month}/${year} - ${hours}:${minutes}`,
      draggable: false
    }
    dispatch({ type: 'add', marker: marker })
  }

  const handleRmAll = () => {
    dispatch({type: 'rmAll'})
  }

  const handleRm = (id) => {
    dispatch({type: 'rm', payload: id})
  }

  let select = false
  state.some((marker) => marker.draggable) ? select = true : select = false

  return (
    <div className="buttonsDiv">
      {select && <button className='red' onClick={handleRm}>
        Deletar Pin <img src={trash} alt="" />
      </button>}
      <button onClick={handleAdd}>
        Adicionar Novo <img src={pin} alt="" />
      </button>
      {state.length > 0 && <button className='red' onClick={handleRmAll}>
        Deletar Todos <img src={trash} alt="" />
      </button>}
    </div>
  )
}

export default Buttons