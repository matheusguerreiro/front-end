// sass
import './list.sass'

// context
import { useMarker } from '../../context/MarkerContext'

// icon
import cultureIcon from '../../icons/Culture Icon.svg'


const List = () => {

  const {state} = useMarker()

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
              {/* <p><img src={cultureIcon} alt="" />Ponto n° {i+1}</p> */}
              <p className="date">Criado em: {marker.date}</p>
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