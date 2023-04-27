import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

import Button from '@/core/components/ui/button/Button'

import { notificationContainer } from '@/core/utils/notofication-container'

import CopyIcon from '@/core/assets/icons/copy.svg'
import ReferralIcon from '@/core/assets/icons/referrals.svg'

import { REFERRAL_DATA } from './config'
import * as S from '../style'

const Referral = () => {
   const handleCopied = () => notificationContainer('Copied !', 'success')

   return (
      <S.CommonCard>
         <S.CardTitle>Referral link</S.CardTitle>
         <S.ReferralWrapper>
            <S.ReferralLinkWrapper>
               <S.ReferralLink>{REFERRAL_DATA?.link}</S.ReferralLink>
               <CopyToClipboard onCopy={handleCopied} text={REFERRAL_DATA?.link || ''}>
                  <S.ReferralCopyLink>
                     <CopyIcon />
                  </S.ReferralCopyLink>
               </CopyToClipboard>
            </S.ReferralLinkWrapper>

            <S.ReferralQRWrapper>
               <S.ReferralQRText>Or use QR Code</S.ReferralQRText>
               <S.ReferralQrWrapper>
                  <S.ReferralQr>
                     <S.ReferralQRImage height="155" width="155" src={REFERRAL_DATA?.qr} alt="qrCode" />
                  </S.ReferralQr>
               </S.ReferralQrWrapper>
            </S.ReferralQRWrapper>
         </S.ReferralWrapper>

         <Button variant="outlined">
            <S.ButtonIconWrapper>
               <ReferralIcon />
            </S.ButtonIconWrapper>
            Open referrals list
         </Button>

         <S.ReferralQRMobileWrapper>
            <S.ReferralQRText>Or use QR Code</S.ReferralQRText>
            <S.ReferralQrWrapper>
               <S.ReferralQr>
                  <S.ReferralQRImage height="210" width="210" src={REFERRAL_DATA?.qr} alt={'qrCode'} />
               </S.ReferralQr>
            </S.ReferralQrWrapper>
         </S.ReferralQRMobileWrapper>
      </S.CommonCard>
   )
}

export default Referral
