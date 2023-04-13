/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { setDisabledLoading, setLoading } from '@/core/redux/slice'
import { TRootState } from '@/core/redux/store'
import { logOut, setCredentials } from '@/modules/auth/redux/slice'
import { IResponseToken } from '@/modules/auth/redux/types'

interface ApiResponse<T> {
   data: T;
}

interface IApi extends BaseQueryApi {
   getState: () => TRootState;
}

const baseQuery = fetchBaseQuery({
   baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
   credentials: 'include',
   prepareHeaders: (headers, { getState }) => {
      const token = (getState() as TRootState)?.auth?.token
      if (token) {
         headers.set('authorization', `Bearer ${token}`)
      }
      return headers
   }
})

const baseQueryWithRefreshToken = async (args: string | FetchArgs, api: IApi, extraOptions: any) => {
   !api.getState().app.disabledLoading && api.dispatch(setLoading(true))

   let result = await baseQuery(args, api, extraOptions)

   if (result?.error?.status === 403) {
      const response = await baseQuery('/refresh', api, extraOptions) as ApiResponse<IResponseToken>
      if (response?.data) {
         const id = api.getState().auth.id
         api.dispatch(setCredentials({ token: response.data.token, id }))
         result = await baseQuery(args, api, extraOptions)
      } else {
         api.dispatch(logOut())
      }
   }

   api.dispatch(setLoading(false))
   api.dispatch(setDisabledLoading(false))

   return result
}

export const coreApi = createApi({
   baseQuery: baseQueryWithRefreshToken,
   endpoints: () => ({})
})