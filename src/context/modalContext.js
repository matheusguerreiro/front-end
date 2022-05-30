import { createContext, useContext, useState } from "react";

const ModalContext = createContext()

export const ModalContextProvider = ({children}) => {
  const [show, setShow] = useState(false)
  const [type, setType] = useState('')

  const changeShow = () => {
    setShow(!show)
  }

  return (
    <ModalContext.Provider value={{show, changeShow, type, setType}}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)