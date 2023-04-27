import { StaticImageData } from 'next/image'

import { ICurrency } from '@/modules/currencies/redux/types'

export interface ITransactionsState {
   activeDepositCurrency: ICurrency | null
}

export interface IDepositData {
   qr: StaticImageData
   finish_time: string
   address: string
   amount: number
   asset_id: number
   asset: ICurrency
}

export interface ICreateDepositPayload {
   amount: number
   asset_id: number
}

export interface IDeleteDepositPayload {
   asset_id: number
}

export interface ITransactions {
   date: string
   type: 'deposit' | 'withdrawal'
   status: 'in progress' | 'done' | 'decline' // || pending, completed, failed
   amount: number
   amount_usdt: number
   asset: ICurrency
}
