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
    const marker = {
      id: Math.random(),
      position: {lat: center.lat, lng: center.lng},
      date: `${(today.getDay()+22) < 10 ? ('0'+(today.getDay())) : (today.getDay()+22)}/${(today.getMonth() + 1) < 10 ? ('0'+(today.getMonth()+1)) : (today.getMonth()+1)}/${today.getFullYear()} - ${today.getHours() < 10 ? ('0'+(today.getHours())) : (today.getHours())}:${today.getMinutes() < 10 ? ('0'+(today.getMinutes())) : (today.getMinutes())}`,
      draggable: false
    }
    dispatch({ type: 'add', payload: marker })
  }

  const handleRmAll = () => {
    dispatch({type: 'rmAll'})
  }

  const handleRm = (id) => {
    dispatch({type: 'rm', payload: id})
  }

  return (
    <div className="buttonsDiv">
      <button className='red' onClick={handleRm}>
        Deletar Pin <img src={trash} alt="" />
      </button>
      <button onClick={handleAdd}>
        Adicionar Novo <img src={pin} alt="" />
      </button>
      <button className='red' onClick={handleRmAll}>
        Deletar Todos <img src={trash} alt="" />
      </button>
    </div>
  )
}

export default Buttons