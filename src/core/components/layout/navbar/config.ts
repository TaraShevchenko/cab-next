import DashboardIcon from '@/core/assets/icons/dashboard.svg'
import ReferralsIcon from '@/core/assets/icons/referrals.svg'
import SettingsIcon from '@/core/assets/icons/settings.svg'
import SwapIcon from '@/core/assets/icons/swap.svg'
import WalletIcon from '@/core/assets/icons/wallet.svg'

import { INavbarMenuItem } from './types'
import { ERoutesPaths } from '@/config'

export const NAVBAR_MENU: INavbarMenuItem[] = [
   {
      name: 'Dashboard',
      icon: DashboardIcon,
      url: ERoutesPaths.DASHBOARD
   },
   {
      name: 'Buy tokens',
      icon: WalletIcon,
      url: ERoutesPaths.DEPOSIT
   },
   {
      name: 'My referrals',
      icon: ReferralsIcon,
      url: ''
   },
   {
      name: 'Transactions',
      icon: SwapIcon,
      url: ERoutesPaths.TRANSACTIONS
   },
   {
      name: 'Settings',
      icon: SettingsIcon,
      url: ''
   },
]