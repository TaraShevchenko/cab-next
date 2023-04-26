/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'

import { setDisabledLoading, setLoading } from '@/core/redux/slice'
import { RootState } from '@/core/redux/store'
import { IAuthResponse } from '@/modules/auth/redux/types'

interface ApiResponse<T> {
   data: T;
}

interface IApi extends BaseQueryApi {
   getState: () => RootState;
}

const baseQuery = fetchBaseQuery({
   baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
   credentials: 'include',
   prepareHeaders: (headers) => {
      const token = Cookies.get('token')
      if (token) {
         headers.set('authorization', token)
      }
      return headers
   }
})

const baseQueryWithRefreshToken = async (args: string | FetchArgs, api: IApi, extraOptions: any) => {
   !api.getState().app.disabledLoading && api.dispatch(setLoading(true))

   let result = await baseQuery(args, api, extraOptions)

   if (result?.error?.status === 403) {
      const response = await baseQuery('/refresh', api, extraOptions) as ApiResponse<IAuthResponse>
      if (response?.data) {
         Cookies.set('token', response.data.token)
         Cookies.set('user_id', response.data.id)
         result = await baseQuery(args, api, extraOptions)
      } else {
         Cookies.set('token', '')
         Cookies.set('user_id', '')
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