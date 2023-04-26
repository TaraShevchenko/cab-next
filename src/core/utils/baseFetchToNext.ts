/* eslint-disable @typescript-eslint/no-explicit-any */
import nextCookies from 'next-cookies'

export const baseFetchToNext = async (url: string, req: any, options?: any) => {
   const cookies = nextCookies({ req })
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      headers: {
         authorization: `${cookies.token}`,
      },
      ...options,
   })
   return await res.json()
}