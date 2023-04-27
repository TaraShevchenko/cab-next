/* eslint-disable @typescript-eslint/no-explicit-any */
import nextCookies from 'next-cookies'

export const baseFetchToNext = async (url: string, req: any, options?: any) => {
   try {
      const cookies = nextCookies({ req })
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
         headers: {
            authorization: `${cookies.token}`,
         },
         ...options,
      })
      return await res.json()
   } catch (error) {
      console.error(error)
   }
}
