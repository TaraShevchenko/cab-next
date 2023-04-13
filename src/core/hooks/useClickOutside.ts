import { RefObject, useEffect } from 'react'

const useClickOutside = <T extends HTMLElement>(ref: RefObject<T>, fn: () => void) => {
   useEffect(() => {
      const element = ref?.current
      const handleClickOutside = (event: Event) => {
         if (element && !element.contains(event.target as Node | null)) {
            fn()
         }
      }
      if (element) {
         document.addEventListener('mousedown', handleClickOutside)
         return () => {
            document.removeEventListener('mousedown', handleClickOutside)
         }
      }
   }, [ fn, ref ])
}

export default useClickOutside
