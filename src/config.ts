export const config = {
   storageNamespace: 'fansee__',
   emptyChar: '—',
}

export enum ERoutesPaths {
   SIGN_IN = '/sign-in',
   SIGN_UP = '/sign-up',
   DASHBOARD = '/dashboard',
   DEPOSIT = '/deposit',
   NOTIFICATIONS = '/notifications',
   TRANSACTIONS = '/transactions',
}

export enum ERoutesAccess {
   AUTHENTICATED_USER = 'AuthenticatedUser',
   FULL_ACCESS = 'FullAccess',
   GUEST = 'Guest',
}

export const routes = [
   {
      path: ERoutesPaths.SIGN_IN,
      title: 'Sign In',
      access: ERoutesAccess.GUEST,
      description: 'Sign in to your account',
   },
   {
      path: ERoutesPaths.SIGN_UP,
      title: 'Sign Up',
      access: ERoutesAccess.GUEST,
      description: 'Create a new account',
   },
   {
      path: ERoutesPaths.DASHBOARD,
      title: 'Dashboard',
      access: ERoutesAccess.AUTHENTICATED_USER,
      description: 'Access your dashboard',
   },
   {
      path: ERoutesPaths.DEPOSIT,
      title: 'Buy tokens',
      access: ERoutesAccess.AUTHENTICATED_USER,
      description: 'Purchase tokens securely',
   },
   {
      path: ERoutesPaths.NOTIFICATIONS,
      title: 'Notifications',
      access: ERoutesAccess.AUTHENTICATED_USER,
      description: 'View your notifications',
   },
   {
      path: ERoutesPaths.TRANSACTIONS,
      title: 'Transactions',
      access: ERoutesAccess.AUTHENTICATED_USER,
      description: 'Check your transactions',
   },
]

export const API_ROUTES = {
   LOGIN: '/login',
   REGISTRATION: '/registration',
   LOGOUT: '/logout',
   USER: (id: string) => `/users/${id}`,
   USER_BALANCE: (id: string) => `/users/${id}/balance`,
   USER_PASSWORD: (id: string) => `/users/${id}/password`,
   USERS: '/users'
}

export const test = {test: 'test'}
