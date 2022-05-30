// sass
import './buttons.sass'

// icons
import pin from '../../icons/Pin.svg'
import trash from '../../icons/Trash.svg'

// context
import { useMarker } from '../../context/markerContext'
import { useModal } from '../../context/modalContext'


const Buttons = () => {

  const {state, dispatch, center} = useMarker()
  const {changeShow, setType} = useModal()

  const handleAdd = () => {
    let today = new Date()
    const marker = {
      id: Math.random(),
      position: {lat: center.lat, lng: center.lng},
      date: today,
      draggable: false
    }
    dispatch({ type: 'add', marker: marker })
  }

  const modalRm = () => {
    setType('rm')
    changeShow()
  }

  const modalRmAll = () => {
    setType('rmAll')
    changeShow()
  }

  let select = state.some((marker) => marker.draggable)

  return (
    <div className="buttonsDiv">
      {select && <button className='red' onClick={modalRm}>
        <span className='default'>Deletar Pin <img src={trash} alt="" /></span>
        <span className='min'>Del Pin <img src={trash} alt="" /></span>
      </button>}
      <button onClick={handleAdd}>
        <span className="default">Adicionar Novo <img src={pin} alt="" /></span>
        <span className="min">Add Novo <img src={pin} alt="" /></span>
      </button>
      {state.length > 0 && <button className='red' onClick={modalRmAll}>
        <span className="default">Deletar Todos <img src={trash} alt="" /></span>
        <span className="min">Del Todos <img src={trash} alt="" /></span>
      </button>}
    </div>
  )
}

export default Buttons