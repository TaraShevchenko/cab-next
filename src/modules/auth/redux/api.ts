import { coreApi } from '@/core/redux/api'

import { IAuthResponse, ILoginPayload, IRegistrationPayload } from './types'

export const api = coreApi.injectEndpoints({
   endpoints: builder => ({
      login: builder.mutation<IAuthResponse, ILoginPayload>({
         query: (payload) => ({
            url: '/login',
            method: 'POST',
            body: { ...payload }
         })
      }),
      registration: builder.mutation<IAuthResponse, IRegistrationPayload>({
         query: (payload) => ({
            url: '/registration',
            method: 'POST',
            body: { ...payload }
         })
      }),
   })
})

export const {
   useLoginMutation, useRegistrationMutation
} = api