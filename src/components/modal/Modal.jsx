// sass
import './modal.sass'

// context
import { useMarker } from '../../context/MarkerContext'
import { useModal } from '../../context/ModalContext'


const Modal = () => {

  const {dispatch} = useMarker()
  const {show, changeShow, type} = useModal()

  const handleRm = (id) => {
    dispatch({type: 'rm', marker: id})
    changeShow()
  }

  const handleRmAll = () => {
    dispatch({type: 'rmAll'})
    changeShow()
  }


  return (
    <>
      {show && (
        <div className='modal'>
          <div className="modalHeader">
            <i className="fa-solid fa-xmark" onClick={changeShow}></i>
          </div>
          <div className="modalTitle">
            {type === 'rm' ? 'Excluir ponto selecionado?' : 'Excluir todos os pontos?'}
          </div>
          <div className="modalMain">
            <h3>Atenção!</h3>
            <p>Essa ação não poderá ser desfeita.</p>
          </div>
          <hr className='line'/>
          <div className="modalFooter">
            <button className="excluir" onClick={type === 'rm' ? handleRm : handleRmAll}>
              <i className="fa-solid fa-trash-can"></i>
              Excluir
            </button>
            <button className="cancelar" onClick={changeShow}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal