import { IExchangeRateResponse } from '@/modules/currencies/redux/types'
import { IDepositData } from '@/modules/transactions/redux/types'

import ercImage from '@/core/assets/images/willRemoved/logo-erc.svg?url'
import ethImage from '@/core/assets/images/willRemoved/logo-eth.svg?url'
import qrImage from '@/core/assets/images/willRemoved/qr.png'

export const depositFormNames = {
   amount: 'amount',
   converted: 'converted'
}

export const depositFormInitialValues = {
   [depositFormNames.amount]: '',
   [depositFormNames.converted]: ''
}

export const EXCHANGE_RATE: IExchangeRateResponse = {
   exchange_rate: 8.9
}

export const DEPOSIT_DATA: IDepositData = {
   qr: qrImage,
   finish_time: new Date('2023-03-18T23:59:59').toISOString(),
   address: '0xb794f5ea0ba39494ce839613fffba74279579268',
   amount: 2,
   asset_id: 1,
   asset: {
      id: 1,
      asset_name: 'Ethereum',
      asset_code: 'ETH',
      asset_image: ethImage,
      chain_code: 'ERC20',
      chain_image: ercImage,
   },
}