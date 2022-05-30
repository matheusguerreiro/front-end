// sass
import './list.sass'

// context
import { useMarker } from '../../context/markerContext'

// icon
import cultureIcon from '../../icons/Culture Icon.svg'


const List = () => {

  const {state} = useMarker()

  const handleDate = (date) => {
    let day = (date.getDate()) < 10 ? ('0'+(date.getDate())) : (date.getDate())
    let month = (date.getMonth()+1) < 10 ? ('0'+(date.getMonth()+1)) : (date.getMonth()+1)
    let year = date.getFullYear()
    let hours = date.getHours() < 10 ? ('0'+(date.getHours())) : (date.getHours())
    let minutes = date.getMinutes() < 10 ? ('0'+(date.getMinutes())) : (date.getMinutes())
    return `${day}/${month}/${year} - ${hours}:${minutes}`
  }

  return (
    <div className='list'>
      <div className="listHeader">
        <h3>Listagem de pontos</h3>
      </div>
      <div className="listMain">
        {state.length > 0 ?
          state.map((marker, i) => (
            <div key={marker.id} className={marker.draggable ? 'contentS' : 'content'}>
              {i < 9 ? <p><img src={cultureIcon} alt="" />Ponto n° 00{i+1}</p> : <p><img src={cultureIcon} alt="" />Ponto n° 0{i+1}</p>}
              <p className="date">Criado em: {handleDate(marker.date)}</p>
            </div>
          )) :
          <div className='content2'>
            <p>Sem pontos de monitoramento para exibir no momento.</p>
          </div>}
      </div>
    </div>
  )
}

export default List