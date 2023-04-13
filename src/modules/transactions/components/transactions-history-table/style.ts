import styled, { css } from 'styled-components'

export const DateFilterWrapper = styled.div(
   () => css`
      margin-bottom: 15px;
   `
)

export const TransactionWrapper = styled.div(
   () => css`
      display: flex;
      flex-direction: column;
      gap: 20px;
   `
)

export const Transaction = styled.div(
   ({ theme: { down, breakpoints, colorTheme } }) => css`
      padding: 21px 40px 19px;
      display: grid;
      grid-template-columns: 4.18fr 3.5fr 2.86fr 2.86fr;
      box-shadow: 0 46px 70px -30px ${colorTheme.colors.shadow};
      background: ${colorTheme.transactions.transactionBackground};
      border-radius: 20px;

      ${down(breakpoints.xxxlg)} {
         padding: 25px 40px;
         grid-template-columns: 2.92fr 2.36fr 2.5fr 1.62fr;
      }

      ${down(breakpoints.xlg)} {
         grid-template-columns: 2.42fr 1.76fr 1.8fr 1.54fr;
      }

      ${down(breakpoints.xlg)} {
         padding: 25px 30px;
      }

      ${down(breakpoints.lg)} {
         grid-template-columns: 1.2fr 1fr;
         grid-gap: 25px 0;
      }
   `
)

export const TransactionCol = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      ${down(breakpoints.lg)} {
         &:nth-child(2n) {
            display: flex;
            align-items: flex-end;
            flex-direction: column;
         }
      }
   `
)

export const ColName = styled.p(
   ({ theme: { down, breakpoints, fonts, colorTheme } }) => css`
      font-family: ${fonts.primary};
      font-weight: 500;
      font-size: 15px;
      line-height: 100%;
      color: ${colorTheme.transactions.transactionColName};
      margin-bottom: 8px;

      ${down(breakpoints.sm)} {
         font-size: 13px;
      }
   `
)

export const ColValue = styled.p<{ color?: 'yellow' | 'green' | 'red' }>(
   ({ theme: { down, breakpoints, fonts, colorTheme, colors }, color }) => css`
      font-family: ${fonts.primary};
      font-weight: 500;
      font-size: 19px;
      line-height: 24px;
      color: ${
         color === 'yellow' ? `${colors.capitalYellow}` :
            color === 'green' ? `${colors.accent}` :
               color === 'red' ? `${colors.lickAndKiss}` :
                  `${colorTheme.colors.primaryText}`};
      margin-bottom: 5px;

      ${down(breakpoints.sm)} {
         font-size: 15px;
      }
   `
)

export const ColSubValue = styled.p(
   ({ theme: { down, breakpoints, fonts, colorTheme } }) => css`
      font-family: ${fonts.secondary};
      font-weight: 500;
      font-size: 13px;
      line-height: 18px;
      color: ${colorTheme.colors.secondaryText};

      ${down(breakpoints.sm)} {
         font-size: 11px;
      }
   `
)