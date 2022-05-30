// sass
import './buttons.sass'

// icons
import pin from '../../icons/Pin.svg'
import trash from '../../icons/Trash.svg'

// context
import { useMarker } from '../../context/markerContext'
import { useModal } from '../../context/modalContext'


const Buttons = () => {

  const {state, dispatch, center, /* select, setSelect */} = useMarker()
  const {changeShow, setType} = useModal()

  const handleAdd = () => {
    let today = new Date()
      let day = (today.getDate()) < 10 ? ('0'+(today.getDate())) : (today.getDate())
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

  const modalRm = () => {
    setType('rm')
    changeShow()
  }

  const modalRmAll = () => {
    setType('rmAll')
    changeShow()
  }

  // queria ter feito assim... mas não deu
  // state.some((marker) => marker.draggable) ? setSelect(true) : setSelect(false)

  let select = false
  state.some((marker) => marker.draggable) ? select = true : select = false

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