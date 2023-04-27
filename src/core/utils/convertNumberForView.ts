export const convertNumberForView = (value?: string | number) => {
   return (
      value
         ?.toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
         })
         .replace(',', ', ') || ''
   )
}
