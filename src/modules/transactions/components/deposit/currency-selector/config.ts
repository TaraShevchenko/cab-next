import { ICurrency } from '@/modules/currencies/redux/types'

import bscImage from '@/core/assets/images/willRemoved/logo-bep.svg?url'
import ercImage from '@/core/assets/images/willRemoved/logo-erc.svg?url'
import ethImage from '@/core/assets/images/willRemoved/logo-eth.svg?url'
import tronImage from '@/core/assets/images/willRemoved/logo-trc.svg?url'
import unionImage from '@/core/assets/images/willRemoved/logo-union.svg?url'
import usdtImage from '@/core/assets/images/willRemoved/logo-usdt.svg?url'

export const CURRENCY: ICurrency[] = [
   {
      id: 1,
      asset_name: 'Ethereum',
      asset_code: 'ETH',
      asset_image: ethImage,
      chain_code: 'ERC20',
      chain_image: ercImage,
   },
   {
      id: 2,
      asset_name: 'USDT',
      asset_code: 'USDT',
      asset_image: usdtImage,
      chain_code: 'ERC20',
      chain_image: ercImage,
   },
   {
      id: 3,
      asset_name: 'USDT',
      asset_code: 'USDT',
      asset_image: usdtImage,
      chain_code: 'TRC20',
      chain_image: tronImage,
   },
   {
      id: 4,
      asset_name: 'BNB Smart Chain',
      asset_code: 'BNB',
      asset_image: unionImage,
      chain_code: 'BEP20',
      chain_image: bscImage,
   },
]
