import { coreApi } from '@/core/redux/api'

import { IAuthResponse, ILoginPayload, ILogoutResponse, IRegistrationPayload } from './types'
import { API_ROUTES } from '@/config'

export const api = coreApi.injectEndpoints({
   endpoints: builder => ({
      login: builder.mutation<IAuthResponse, ILoginPayload>({
         query: (payload) => ({
            url: API_ROUTES.LOGIN,
            method: 'POST',
            body: { ...payload }
         })
      }),
      registration: builder.mutation<IAuthResponse, IRegistrationPayload>({
         query: (payload) => ({
            url: API_ROUTES.REGISTRATION,
            method: 'POST',
            body: { ...payload }
         })
      }),
      logout: builder.mutation<ILogoutResponse, void>({
         query: () => ({
            url: API_ROUTES.LOGOUT,
            method: 'POST',
         })
      }),
   })
})

export const {
   useLoginMutation, useRegistrationMutation, useLogoutMutation
} = api