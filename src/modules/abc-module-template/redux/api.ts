import { coreApi } from '@/core/redux/api'

export const api = coreApi.injectEndpoints({
   endpoints: builder => ({
      templateGetRequest: builder.query({
         query: (payload) => `/url?param=${payload}`
      }),
      templatePostRequest: builder.mutation({
         query: (payload) => ({
            url: '/url',
            method: 'POST',
            body: { ...payload }
         })
      }),
   })
})

export const {
   useTemplateGetRequestQuery, useTemplatePostRequestMutation
} = api