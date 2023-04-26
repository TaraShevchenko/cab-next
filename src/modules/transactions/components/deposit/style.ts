import styled, { css } from 'styled-components'

import { EColorTheme } from '@/core/styles/theme'
import { flex } from '@/core/styles/utils'

import currencyBackground1 from '@/core/assets/icons/deposit-currency-bg-1.svg?url'
import currencyBackground2 from '@/core/assets/icons/deposit-currency-bg-2.svg?url'

export const DepositWrapper = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      ${flex.column};
      gap: 56px;

      ${down(breakpoints.xxxlg)} {
         gap: 30px;
      }
   `
)
export const CurrencyWrapper = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      ${flex.justifyContentBetween}
      gap: 8px;

      ${down(breakpoints.xlg)} {
         flex-wrap: wrap;
         gap: 20px;
      }

      ${down(breakpoints.sm)} {
         gap: 10px;
      }
   `
)
export const Currency = styled.div<{ isActive?: boolean }>(
   ({ theme: { down, breakpoints, colorTheme, colors }, isActive }) => css`
      ${flex.alignItemsCenter};
      justify-content: flex-end;
      flex-direction: column;
      padding: 30px;
      height: 250px;
      width: calc(25% - 8px / 3);
      border-radius: 30px;
      position: relative;
      background: url(${currencyBackground1}), ${colorTheme.deposit.cardBackground} no-repeat 0 0;
      background-size: cover;
      box-shadow: ${colors.blackHoleTransparent} 0px 46px 70px -30px;
      cursor: pointer;
      pointer-events: ${isActive ? 'none' : 'unset'};

      &:nth-child(2n) {
         background: url(${currencyBackground2}), ${colorTheme.deposit.cardBackground} no-repeat 0 0;
         background-size: 100%;
      }

      &:before {
         content: '';
         opacity: ${isActive ? '1' : '0'};
         position: absolute;
         width: 100%;
         height: 100%;
         left: 0;
         top: 5px;
         border-radius: 30px;
         z-index: -1;

         background: ${colors.accent};
         box-shadow: 0 33px 40px -45px ${colors.accentHalfTransparent};
         transition: all 0.2s ease-in-out;
      }

      ${CurrencyRadio} {
         &:before {
            opacity: ${isActive ? '1' : '0'};
            transition: all 0.2s ease-in-out;
         }
      }

      ${down(breakpoints.xxxlg)} {
         height: 193px;
         padding: 20px;
      }

      ${down(breakpoints.xxlg_1400)} {
         width: calc(50% - 10px);
      }

      ${down(breakpoints.sm)} {
         height: 100px;
         width: 100%;
         padding: 0 0 0 100px;
         align-items: flex-start;
         justify-content: center;
      }
   `
)
export const CurrencyIcon = styled.div(
   ({ theme: { down, breakpoints, colorTheme, colors } }) => css`
      ${flex.center}
      position: absolute;
      left: 8px;
      top: 6px;
      height: 60px;
      width: 60px;
      border-radius: 100%;
      border: ${colorTheme.name === EColorTheme.light ? `1px solid ${colors.catskillWhite}` : 'none'};


      background: ${colorTheme.deposit.currencyIconBackground};

      img {
         height: 100%;
         width: 100%;
      }


      ${down(breakpoints.xxxlg)} {
         height: 42px;
         width: 42px;
      }

      ${down(breakpoints.sm)} {
         height: 30px;
         width: 30px;
         right: 14px;
         bottom: 14px;
         left: unset;
         top: unset;
      }
   `
)
export const CurrencyRadio = styled.div(
   ({ theme: { down, breakpoints, colorTheme, colors } }) => css`
      ${flex.center}
      position: absolute;
      right: 25px;
      top: 25px;
      height: 26px;
      width: 26px;
      border-radius: 100%;
      border: ${colorTheme.name === EColorTheme.light ? `1px solid ${colors.catskillWhite}` : 'none'};
      background: ${colorTheme.deposit.currencyIconBackground};

      &:before {
         content: '';
         position: absolute;
         width: 14px;
         height: 14px;
         opacity: 0;
         border-radius: 100%;
         background: ${colors.accent};
         box-shadow: ${colorTheme.name === EColorTheme.dark ? `0 0 6px 4px ${colors.accentHalfTransparent}` : 'none'};
         transition: all 0.2s ease-in-out;
      }

      ${down(breakpoints.sm)} {
         top: 16px;
         right: 16px;
         left: unset;
         bottom: unset;
      }
   `
)
export const CurrencyLogo = styled.div<{ type: number }>(
   ({ theme: { down, breakpoints }, type }) => css`
      position: absolute;
      top: 35%;
      transform: translateY(-50%);

      img {
         width: auto;
         height: ${type === 1 ? '110px' : type === 2 || type === 3 ? '80px' : type === 4 ? '100px' : 'auto'};
      }

      ${down(breakpoints.xxxlg)} {
         img {
            height: ${type === 1 ? '84px' : type === 2 || type === 3 ? '61px' : type === 4 ? '76px' : 'auto'};
         }
      }

      ${down(breakpoints.sm)} {
         top: 50%;
         left: ${type === 1 ? '44px' : type === 2 || type === 3 ? '37px' : type === 4 ? '47px' : 'auto'};

         img {
            height: ${type === 1 ? '51px' : type === 2 || type === 3 ? '39px' : type === 4 ? '36px' : 'auto'};
         }
      }
   `
)
export const CurrencyTextWrapper = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      ${flex.alignItemsCenter};
      flex-direction: column;
      gap: 2px;

      ${down(breakpoints.sm)} {
         justify-content: center;
         align-items: flex-start;
      }
   `
)
export const CurrencyTitle = styled.p(
   ({ theme: { down, breakpoints, fonts, colorTheme } }) => css`
      font-family: ${fonts.primary};
      font-weight: 500;
      font-size: 23px;
      line-height: 29px;
      text-align: center;

      color: ${colorTheme.colors.primaryText};

      ${down(breakpoints.xxxlg)} {
         font-size: 19px;
      }

      ${down(breakpoints.sm)} {
         font-size: 15px;
      }
   `
)
export const CurrencySubtitle = styled.p(
   ({ theme: { down, breakpoints, fonts, colorTheme } }) => css`
      font-family: ${fonts.primary};
      font-weight: 500;
      font-size: 15px;
      line-height: 19px;
      text-transform: uppercase;

      color: ${colorTheme.deposit.currencyChain};

      ${down(breakpoints.xxxlg)} {
         font-size: 13px;
      }

      ${down(breakpoints.sm)} {
         font-size: 12px;
      }
   `
)
export const DepositFormWrapper = styled.div(
   ({ theme: { down, breakpoints, colorTheme } }) => css`
      width: 100%;
      padding: 40px 75px;
      border-radius: 30px;

      background: ${colorTheme.deposit.cardBackground};
      box-shadow: 0 46px 70px -30px ${colorTheme.colors.shadow};

      ${down(breakpoints.xxxlg)} {
         padding: 40px 50px;
      }

      ${down(breakpoints.sm)} {
         padding: 40px 30px;
      }

      ${down(breakpoints.sm)} {
         padding: 40px 16px;
      }
   `
)
export const DepositFormTitle = styled.div(
   ({ theme: { down, breakpoints, fonts, colorTheme } }) => css`
      font-family: ${fonts.primary};
      font-style: normal;
      font-weight: 500;
      font-size: 23px;
      line-height: 29px;
      margin-bottom: 30px;

      color: ${colorTheme.colors.primaryText};

      ${down(breakpoints.sm)} {
         font-size: 19px;
      }

      ${down(breakpoints.sm)} {
         font-size: 15px;
      }
   `
)
export const DepositForm = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      display: flex;
      gap: 60px;

      ${down(breakpoints.xxxlg)} {
         gap: 30px;
      }

      ${down(breakpoints.xlg)} {
         flex-wrap: wrap;
         gap: 60px;
      }

      ${down(breakpoints.sm)} {
         gap: 40px;
      }
   `
)
export const DepositFormItem = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      width: calc(50% - 30px);

      ${down(breakpoints.xlg)} {
         width: 100%;
      }

         // ${down(breakpoints.xlg)} {
      //    width: calc(50% - 30px);
      // }

      ${down(breakpoints.lg)} {
         width: 100%;
      }
   `
)
export const DepositPriceWrapper = styled.div(
   ({ theme: { down, breakpoints, colorTheme, colors } }) => css`
      ${flex.justifyContentBetween};
      align-items: center;
      background: ${colorTheme.colors.body};
      border: ${colorTheme.name === EColorTheme.light ? `1px solid ${colors.catskillWhite}` : 'none'};
      border-radius: 20px;
      padding: 20px 35px;


      ${down(breakpoints.xxxlg)} {
         padding: 23px 20px;
      }

      ${down(breakpoints.sm)} {
         padding: 20px 40px 20px;
      }

      ${down(breakpoints.sm)} {
         padding: 20px 16px;
      }
   `
)
export const DepositPriceCurrencyWrapper = styled.div(
   () => css`
      display: flex;
      align-items: flex-end;
   `
)
export const DepositPriceMainCurrency = styled.div(
   ({ theme: { down, breakpoints, fonts, colorTheme } }) => css`
      font-family: ${fonts.primary};
      font-weight: 500;
      font-size: 30px;
      line-height: 100%;
      color: ${colorTheme.colors.primaryText};

      ${down(breakpoints.xxxlg)} {
         font-size: 23px;
      }

      ${down(breakpoints.md)} {
         font-size: 19px;
      }
   `
)
export const DepositPriceChosenCurrency = styled.div(
   ({ theme: { fonts, colorTheme } }) => css`
      font-family: ${fonts.primary};
      font-weight: 500;
      font-size: 15px;
      line-height: 100%;
      color: ${colorTheme.colors.primaryText};
   `
)
export const DepositPriceRateWrapper = styled.div(
   ({ theme: { down, breakpoints, fonts, colors } }) => css`
      font-family: ${fonts.primary};
      font-weight: 500;
      font-size: 30px;

      display: flex;
      align-items: flex-end;

      color: ${colors.fringyFlower};

      svg {
         width: 20px;
         height: 28px;
         margin-right: 15px;
      }

      img {
         margin: 0 15px;
         height: 30px;
         width: auto;
      }

      ${down(breakpoints.xxxlg)} {
         font-size: 23px;

         svg {
            margin-right: 12px;
         }

         img {
            margin: 0 12px;
            height: 25px;
         }
      }

      ${down(breakpoints.md)} {
         font-size: 19px;
      }
   `
)
export const DepositInput = styled.div(
   () => css`
      margin-top: 25px;

      input {
         padding-left: 60px;
      }
   `
)
export const DepositInputIcon = styled.span(
   ({ theme: { colorTheme } }) => css`
      ${flex.center};
      position: absolute;
      left: -10px;
      top: 50%;
      transform: translateY(-50%);

      width: 40px;
      height: 40px;


      background: ${colorTheme.colors.body};
      border-radius: 10px;

      img {
         width: 40px;
         height: 40px;
      }
   `
)
export const DepositInputTitle = styled.p(
   ({ theme: { fonts, colorTheme } }) => css`
      font-family: ${fonts.primary};
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 19px;

      color: ${colorTheme.colors.primaryText};
      margin-bottom: 8px;
   `
)
export const DepositInputHint = styled.span<{ isError?: boolean }>(
   ({ theme: { down, breakpoints, fonts }, isError }) => css`
      display: flex;
      justify-content: flex-end;
      font-family: ${fonts.secondary};
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 18px;

      color: ${isError ? 'rgb(194, 78, 78)' : '#526476'};
      margin-top: 4px;

      ${down(breakpoints.sm)} {
         font-size: 11px;
      }
   `
)
export const ButtonWrapper = styled.div(
   () => css`
      margin-top: 40px;
   `
)
export const DepositDataTitle = styled.p(
   ({ theme: { down, breakpoints, fonts, colorTheme } }) => css`
      font-family: ${fonts.primary};
      font-weight: 500;
      font-size: 19px;
      line-height: 24px;
      color: ${colorTheme.colors.primaryText};
      margin-bottom: 10px;

      ${down(breakpoints.md)} {
         font-size: 17px;
         line-height: 22px;
      }

      ${down(breakpoints.sm)} {
         font-size: 14px;
         line-height: 18px;
      }
   `
)
export const DepositDataTitleHighlighted = styled.span(
   ({ theme: { colors } }) => css`
      color: ${colors.accent};
   `
)
export const DepositDataText = styled.p(
   ({ theme: { down, breakpoints, fonts, colorTheme } }) => css`
      font-family: ${fonts.secondary};
      font-weight: 600;
      font-size: 15px;
      line-height: 20px;
      color: ${colorTheme.colors.secondaryText};

      ${down(breakpoints.sm)} {
         font-size: 13px;
         line-height: 18px;
      }
   `
)
export const DepositDataTextHighlighted = styled.span(
   ({ theme: { colorTheme } }) => css`
      color: ${colorTheme.colors.primaryText};
      font-weight: ${colorTheme.name === EColorTheme.light ? '700' : '400'};

   `
)
export const DepositDataWrapper = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      ${flex.alignItemsCenter};
      gap: 50px;
      margin: 30px 0;

      ${down(breakpoints.xxxlg)} {
         gap: 20px;
      }

      ${down(breakpoints.xlg)} {
         flex-direction: column-reverse;
      }

      ${down(breakpoints.lg)} {
         flex-direction: row;
         gap: 30px;
      }

      ${down(breakpoints.md)} {
         flex-direction: column-reverse;
      }

      ${down(breakpoints.sm)} {
         margin: 30px 0 20px;
      }
   `
)
export const DepositDataTimeContainer = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      width: calc(100% - 220px);

      ${down(breakpoints.xxxlg)} {
         width: calc(100% - 150px);
      }

      ${down(breakpoints.xlg)} {
         width: 100%
      }

      ${down(breakpoints.lg)} {
         width: calc(100% - 200px);
      }

      ${down(breakpoints.md)} {
         width: 100%
      }
   `
)
export const DepositDataQr = styled.div(
   ({ theme: { down, breakpoints, colorTheme } }) => css`
      ${flex.center};
      width: 170px;
      height: 170px;
      overflow: hidden;
      border-radius: 15px;
      background: ${colorTheme.deposit.qrBackground};

      img {
         width: calc(100% - 15px);
         height: calc(100% - 15px);
      }


      ${down(breakpoints.xxxlg)} {
         transform: unset;
         width: 130px;
         height: 130px;
      }

      ${down(breakpoints.xlg)} {
         margin: 0 auto;
         width: 170px;
         height: 170px;
      }

      ${down(breakpoints.lg)} {
         margin: 0
      }

      ${down(breakpoints.md)} {
         margin: 0 auto;
      }
   `
)
export const DepositDataTimeTitle = styled.p(
   ({ theme: { down, breakpoints, fonts, colorTheme } }) => css`
      font-family: ${fonts.primary};
      font-weight: 500;
      font-size: 19px;
      line-height: 24px;
      color: ${colorTheme.colors.primaryText};
      margin-bottom: 10px;

      ${down(breakpoints.md)} {
         font-size: 17px;
         line-height: 22px;
      }

      ${down(breakpoints.sm)} {
         font-size: 14px;
         line-height: 18px;
      }
   `
)
export const DepositDataTimeWrapper = styled.div(
   () => css`
      ${flex.alignItemsCenter};
      gap: 10px;
      margin-bottom: 15px;
   `
)
export const DepositDataTime = styled.p(
   ({ theme: { down, breakpoints, fonts, colorTheme, colors } }) => css`
      ${flex.center};
      padding: 12px 20px;
      background: ${colorTheme.colors.body};
      border-radius: 20px;
      width: 170px;
      border: ${colorTheme.name === EColorTheme.light ? `1px solid ${colors.catskillWhite}` : 'none'};

      font-family: ${fonts.primary};
      font-weight: 500;
      font-size: 25px;
      line-height: 100%;
      color: ${colors.fringyFlower};

      ${down(breakpoints.xxxlg)} {
         font-size: 19px;
         width: 150px;
      }
   `
)
export const DepositDataHint = styled.p(
   ({ theme: { colorTheme, fonts } }) => css`
      font-family: ${fonts.secondary};
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 18px;

      color: ${colorTheme.deposit.currencyChain};
   `
)
export const DepositDataAddress = styled.div(
   ({ theme: { colorTheme } }) => css`
      ${flex.alignItemsCenter};
      justify-content: space-between;
      padding: 15px 25px;
      background: ${colorTheme.colors.background};
      border-radius: 15px;
      height: 50px;
   `
)
export const DepositDataAddressText = styled.p(
   ({ theme: { down, breakpoints, fonts, colorTheme } }) => css`
      font-family: ${fonts.primary};
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: ${colorTheme.colors.secondaryText};
      max-width: calc(100% - 64px);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      ${down(breakpoints.xxxlg_1650)} {
         font-size: 12px;
         line-height: 15px;
         max-width: calc(100% - 59px);
      }

      ${down(breakpoints.sm)} {
         font-size: 10px;
         line-height: 13px;
         max-width: calc(100% - 53px);
      }
   `
)

export const DepositDataCopyAddress = styled.button(
   ({ theme: { colorTheme, colors } }) => css`
      border: none;
      cursor: pointer;
      background: transparent;
      color: ${colorTheme.deposit.currencyChain};
      transition: all 0.2s ease-in-out;

      &:hover {
         color: ${colors.accent};
         transition: all 0.2s ease-in-out;
      }

      svg {
         width: 21px;
         height: 21px;
      }
   `
)

