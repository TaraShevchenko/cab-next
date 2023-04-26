import { StaticImageData } from 'next/image'

import { ICurrency } from '@/modules/currencies/redux/types'

export interface IUserState {
   userData: IUserData | null;
}

export interface IUserData {
   id: string;
   user_image: string;
   // user_image: StaticImageData;
   // referral?: IUserDataReferral;

   first_name: string;
   last_name: string;
   email: string;
   password: string;
   uauth: string;
   balance: number;
   personal_volume: number;
   personal_volume_farming_date: string;
   personal_volume_farming_day_of_month: number;
   reference_personal_volume: number;
   calculated_volume: number;
   farm: number;
   percent: number;
   v_bonus: number;
   m_bonus: number;
   created_date: string;
   updated_date: string;
   deleted_date: string;
}

export interface IUserDataReferral {
   link: string;
   qr: StaticImageData;
}

export interface IAvailableBalance {
   balance_fst: number;
   balance_usdt: number;
}

export interface IUserByEmailRequestPayload {
   email: string;
}

export interface IUserByIdRequestPayload {
   id: number;
}

export interface INotification {
   id: number;
   type: 'deposit' | 'withdrawal' | 'bonus' | 'referral';
   currency?: ICurrency;
   amount?: number;
   amount_fst?: number;
   status?: 'successfully' | 'failed'; // || completed, failed
   referral_name?: string;
}