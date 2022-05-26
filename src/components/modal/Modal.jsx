// sass
import './modal.sass'


const Modal = () => {
  return (
    <div className='modal'>
      <div className="modalHeader">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div className="modalTitle">
        Excluir ...
      </div>
      <div className="modalMain">
        <h3>Atenção!</h3>
        <p>Essa ação não poderá ser desfeita.</p>
      </div>
      <hr className='line'/>
      <div className="modalFooter">
        <button className="excluir">
          <i class="fa-solid fa-trash-can"></i>
          Excluir
        </button>
        <button className="cancelar">
          Cancelar
        </button>
      </div>
    </div>
  )
}

export default Modal