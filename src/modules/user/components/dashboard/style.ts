import Image from 'next/image'
import styled, { css } from 'styled-components'

import { flex } from '@/core/styles/utils'

import cardWithLogo from '@/core/assets/icons/card-with-logo.svg?url'
import card from '@/core/assets/icons/card.svg?url'
import mobileCardWithLogo from '@/core/assets/icons/mobile-card-with-logo.svg?url'
import mobileCard from '@/core/assets/icons/mobile-card.svg?url'

export const DashboardWrapper = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      ${flex.column};
      gap: 56px;

      ${down(breakpoints.xxxlg)} {
         gap: 30px;
      }
   `
)
export const CardWrapper = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      display: flex;
      gap: 60px;

      ${down(breakpoints.xxxlg)} {
         gap: 30px;
      }

      ${down(breakpoints.xlg)} {
         flex-direction: column;
      }
   `
)
export const Card = styled.div<{ withLogo?: boolean; isChart?: boolean }>(
   ({ theme: { down, breakpoints, colorTheme }, withLogo, isChart }) => css`
      position: relative;
      width: 100%;
      min-height: 300px;
      box-shadow: 0 46px 70px -30px ${colorTheme.colors.shadow};
      border-radius: 30px;
      overflow: hidden;

      background-size: cover;
      background-position: 0 50%;
      background-repeat: no-repeat;
      background-image: url(${withLogo ? cardWithLogo : card}),
         linear-gradient(
            180deg,
            ${colorTheme.dashboard.cardGradientColor1} 0%,
            ${colorTheme.dashboard.cardGradientColor2} 14.91%,
            ${colorTheme.dashboard.cardGradientColor3} 33.99%,
            ${colorTheme.dashboard.cardGradientColor3} 71.61%,
            ${colorTheme.dashboard.cardGradientColor2} 87.15%,
            ${colorTheme.dashboard.cardGradientColor1} 100%
         );

      padding: 40px 75px ${isChart ? '19px' : '49px'};

      svg {
         width: 100%;
         height: 100%;
         object-fit: cover;
      }

      ${down(breakpoints.xxxlg)} {
         background-image: url(${withLogo ? mobileCardWithLogo : mobileCard}),
            linear-gradient(
               180deg,
               ${colorTheme.dashboard.cardGradientColor1} 0%,
               ${colorTheme.dashboard.cardGradientColor2} 14.91%,
               ${colorTheme.dashboard.cardGradientColor3} 33.99%,
               ${colorTheme.dashboard.cardGradientColor3} 71.61%,
               ${colorTheme.dashboard.cardGradientColor2} 87.15%,
               ${colorTheme.dashboard.cardGradientColor1} 100%
            );
         padding: 40px 50px ${isChart ? '20px' : '34px'};
      }

      ${down(breakpoints.xlg)} {
         background-image: url(${withLogo ? cardWithLogo : card}),
            linear-gradient(
               180deg,
               ${colorTheme.dashboard.cardGradientColor1} 0%,
               ${colorTheme.dashboard.cardGradientColor2} 14.91%,
               ${colorTheme.dashboard.cardGradientColor3} 33.99%,
               ${colorTheme.dashboard.cardGradientColor3} 71.61%,
               ${colorTheme.dashboard.cardGradientColor2} 87.15%,
               ${colorTheme.dashboard.cardGradientColor1} 100%
            );
      }

      ${down(breakpoints.lg)} {
         background-image: url(${withLogo ? mobileCardWithLogo : mobileCard}),
            linear-gradient(
               180deg,
               ${colorTheme.dashboard.cardGradientColor1} 0%,
               ${colorTheme.dashboard.cardGradientColor2} 14.91%,
               ${colorTheme.dashboard.cardGradientColor3} 33.99%,
               ${colorTheme.dashboard.cardGradientColor3} 71.61%,
               ${colorTheme.dashboard.cardGradientColor2} 87.15%,
               ${colorTheme.dashboard.cardGradientColor1} 100%
            );
         padding: 40px 30px 34px;
      }

      ${down(breakpoints.sm)} {
         background-image: url(${withLogo ? mobileCardWithLogo : mobileCard}),
            linear-gradient(
               180deg,
               ${colorTheme.dashboard.cardGradientColor1} 0%,
               ${colorTheme.dashboard.cardGradientColor2} 14.91%,
               ${colorTheme.dashboard.cardGradientColor3} 33.99%,
               ${colorTheme.dashboard.cardGradientColor3} 71.61%,
               ${colorTheme.dashboard.cardGradientColor2} 87.15%,
               ${colorTheme.dashboard.cardGradientColor1} 100%
            );
         padding: 30px 16px 16px;
      }
   `
)

export const CommonCard = styled.div(
   ({ theme: { down, breakpoints, colorTheme } }) => css`
      width: 100%;
      min-height: 319px;
      background: ${colorTheme.dashboard.cardBackground};
      box-shadow: 0 46px 70px -30px ${colorTheme.colors.shadow};
      border-radius: 30px;
      padding: 40px 75px;
      position: relative;

      ${down(breakpoints.xxlg)} {
         padding: 40px 50px;
      }

      ${down(breakpoints.sm)} {
         padding: 40px 30px;
      }

      ${down(breakpoints.sm)} {
         padding: 30px 16px 40px;
      }
   `
)

export const CardTitle = styled.h3(
   ({ theme: { down, breakpoints, colorTheme, fonts } }) => css`
      font-family: ${fonts.primary};
      font-style: normal;
      font-weight: 500;
      font-size: 23px;
      line-height: 29px;
      margin-bottom: 26px;
      color: ${colorTheme.colors.primaryText};

      ${down(breakpoints.md)} {
         font-size: 19px;
      }

      ${down(breakpoints.sm)} {
         font-size: 15px;
      }
   `
)

export const ButtonGroup = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      ${flex.alignItemsCenter};
      flex-wrap: wrap;
      gap: 20px;

      ${down(breakpoints.sm)} {
         flex-direction: column;
         gap: 10px;

         button,
         a,
         a > span {
            width: 100%;
            justify-content: center;
         }
      }
   `
)

export const ButtonIconWrapper = styled.span(
   () => css`
      ${flex.center};
      height: 24px;
      width: 24px;
   `
)

export const CardBalanceWrapper = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      ${flex.column};
      margin: 52px 0 40px;

      ${down(breakpoints.sm)} {
         margin: 23px 0 20px;
      }
   `
)

export const CardBalance = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      display: flex;
      align-items: flex-end;
      margin-bottom: 5px;

      svg {
         width: 50px;
         height: 71px;
      }

      ${down(breakpoints.xxxlg)} {
         svg {
            width: 40px;
            height: auto;
         }
      }
   `
)

export const Balance = styled.p(
   ({ theme: { down, breakpoints, colorTheme, fonts } }) => css`
      margin-left: 11px;
      font-family: ${fonts.primary};
      font-weight: 500;
      font-size: 95px;
      line-height: 0.8;
      color: ${colorTheme.colors.primaryText};

      ${down(breakpoints.xxxlg)} {
         font-size: 80px;
         margin-left: -5px;
      }

      ${down(breakpoints.sm)} {
         font-size: 55px;
      }
   `
)

export const BalanceCurrency = styled.p(
   ({ theme: { down, breakpoints, colorTheme, fonts } }) => css`
      font-family: ${fonts.primary};
      font-weight: 500;
      font-size: 30px;
      line-height: 110%;
      text-transform: uppercase;
      color: ${colorTheme.colors.primaryText};

      ${down(breakpoints.xxxlg)} {
         font-size: 23px;
      }

      ${down(breakpoints.sm)} {
         font-size: 17px;
      }
   `
)

export const ConvertedBalance = styled.p(
   ({ theme: { down, breakpoints, colorTheme, fonts } }) => css`
      font-family: ${fonts.primary};
      font-weight: 500;
      font-size: 19px;
      line-height: 110%;
      text-transform: uppercase;
      color: ${colorTheme.dashboard.convertedText};

      ${down(breakpoints.xxxlg)} {
         font-size: 17px;
      }

      ${down(breakpoints.sm)} {
         font-size: 13px;
      }
   `
)

export const ReferralWrapper = styled.div(
   () => css`
      gap: 78px;
      display: flex;
      margin: 30px 0 40px;
   `
)

export const ReferralLinkWrapper = styled.div(
   ({ theme: { down, breakpoints, colorTheme } }) => css`
      gap: 32px;
      display: flex;
      padding: 29px 45px;
      background: ${colorTheme.colors.background};
      border-radius: 30px;

      ${down(breakpoints.xxxlg)} {
         padding: 25px 30px;
      }

      ${down(breakpoints.md)} {
         padding: 20px;
      }

      ${down(breakpoints.sm)} {
         padding: 18px 16px;
         width: 100%;
         justify-content: space-between;
      }
   `
)

export const ReferralLink = styled.p(
   ({ theme: { down, breakpoints, colors, fonts } }) => css`
      font-family: ${fonts.primary};
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 31px;
      color: ${colors.pigeonPost};

      ${down(breakpoints.xxxlg)} {
         font-size: 19px;
      }

      ${down(breakpoints.md)} {
         font-size: 15px;
      }

      ${down(breakpoints.sm)} {
         font-size: 12px;
         max-width: calc(100% - 65px);
         overflow: hidden;
         text-overflow: ellipsis;
      }
   `
)

export const ReferralCopyLink = styled.button(
   ({ theme: { down, breakpoints, colorTheme } }) => css`
      height: 35px;
      color: ${colorTheme.dashboard.copyIcon};
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      border: none;

      svg {
         height: 100%;
         width: 100%;
      }

      &:hover {
         color: #10eab5;
         transition: all 0.2s ease-in-out;
      }

      ${down(breakpoints.xxxlg)} {
         width: 30px;
         height: 30px;
      }
   `
)

export const ReferralQRWrapper = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      gap: 40px;
      position: relative;

      ${flex.alignItemsCenter}
      ${down(breakpoints.xxxlg_1750)} {
         position: absolute;
         top: 40px;
         right: 75px;
         flex-direction: column;
         align-items: unset;
      }

      ${down(breakpoints.xxlg)} {
         right: 50px;
         gap: 30px;
      }

      ${down(breakpoints.xlg)} {
         display: flex;
      }

      ${down(breakpoints.xlg_1150)} {
         display: none;
      }
   `
)

export const ReferralQRMobileWrapper = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      gap: 40px;
      margin-top: 60px;
      position: relative;
      display: none;

      ${down(breakpoints.xxlg_1400)} {
         ${flex.column}
      }

      ${down(breakpoints.xxlg)} {
         display: none;
      }

      ${down(breakpoints.xlg_1150)} {
         ${flex.column};
      }
   `
)

export const ReferralQRText = styled.p(
   ({ theme: { colorTheme, fonts } }) => css`
      font-family: ${fonts.primary};
      font-style: normal;
      font-weight: 500;
      font-size: 23px;
      line-height: 29px;
      color: ${colorTheme.colors.primaryText};
   `
)

export const ReferralQrWrapper = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      height: 15px;

      ${down(breakpoints.xxxlg_1750)} {
         height: 100%;
      }
   `
)

export const ReferralQr = styled.span(
   ({ theme: { down, breakpoints, colorTheme } }) => css`
      ${flex.center}
      position: relative;
      transform: translateY(-50%);
      width: 195px;
      height: 195px;
      overflow: hidden;
      border-radius: 30px;
      background: ${colorTheme.dashboard.qrBackground};

      ${down(breakpoints.xxxlg_1750)} {
         transform: unset;
         width: 170px;
         height: 170px;
      }

      ${down(breakpoints.xlg_1150)} {
         width: 250px;
         height: 250px;
      }
   `
)

export const ReferralQRImage = styled(Image)(
   () => css`
      width: calc(100% - 40px);
      height: calc(100% - 40px);
   `
)
