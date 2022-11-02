import { FC, ReactNode, useEffect, useState } from "react"
import { createPortal } from "react-dom"

type TPortalProps = {
    children: ReactNode;
}

const Portal: FC <TPortalProps>= ({ children }) => {
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)

      return () => setMounted(false)
   }, [])

   return mounted
      ? createPortal(children, 
        document.querySelector("#modal")!)
      : null
}

export default Portal