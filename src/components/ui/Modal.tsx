import { MouseEvent, createContext, useContext, useRef } from "react";
import { createPortal } from "react-dom";


const ModalContext=createContext(null)



export default function Modal({isOpen,onClose,children}) {
  const containerRef=useRef <HTMLDivElement|null> (null)
  
  const handleOutsideClose=(e:MouseEvent)=>{
   
     
    console.log("outside modal")
    if(containerRef.current!==(e.target)){
      console.log("inside")

       console.log("ff",containerRef.current)
     
      console.log("target",e.target)
      onClose()
      
    }
  }

  return  createPortal(
  <div onClick={handleOutsideClose} className={`fixed flex justify-center items-center inset-0 bg-gray-500/70 z-[999] ${isOpen?"visible":"invisible" } `}>
    <ModalContext.Provider value={{onClose}}>
    <div onClick={handleOutsideClose} ref={containerRef} className="bg-white  w-full max-w-sm rounded-md">

{children}
</div>

    </ModalContext.Provider>
     
  </div>, document.getElementById('portal') as Element
 
    
    
  )
}

const CloseButton=()=>{
 const{onClose} =useContext(ModalContext)
  return <button onClick={onClose}>
      Close Button
  </button>
}

Modal.CloseButton=CloseButton


