import { setLoading } from '@/core/redux/slice'
import { useAppDispatch } from '@/core/redux/store'

const useLoading = (time?: number) => {
   const dispatch = useAppDispatch()
   return (fn: () => void) => {
      dispatch(setLoading(true))
      setTimeout(() => {
         fn()
         dispatch(setLoading(false))
      }, time || 200)
   }
}

export default useLoading