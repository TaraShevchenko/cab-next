export interface IAuthSlice {
   id: string | null
   token: string | null
}

export interface ILoginPayload {
   email: string
   password: string
   totp: string
}

export interface IRegistrationPayload {
   first_name: string
   last_name: string
   email: string
   password: string
   totp: string
}

export interface IAuthResponse {
   id: string
   token: string
}

export interface ILogoutResponse {
   message: boolean
}
