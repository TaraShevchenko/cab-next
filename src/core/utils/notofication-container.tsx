import { toast, ToastOptions } from 'react-toastify'

export const toastConfig: ToastOptions = {
   position: 'top-right',
   autoClose: 3000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
   theme: 'dark',
}

export const notificationContainer = (message: string, type: string): void => {
   switch (type) {
      case 'success':
         toast.success(message, toastConfig)
         break
      case 'error':
         toast.error(message, toastConfig)
         break
      case 'info':
         toast.info(message, toastConfig)
         break
      default:
         break
   }
}