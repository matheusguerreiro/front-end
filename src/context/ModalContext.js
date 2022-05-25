import { createContext, useContext, useState } from "react";

const ModalContext = createContext()

export const ModalContextProvider = ({children}) => {
  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow(!show)
  }

  return (
    <ModalContext.Provider value={{show, toggleShow}}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)