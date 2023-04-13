import styled, { css } from 'styled-components'

export const LayoutWrapper = styled.div(
   () => css`
      display: flex;
   `
)
export const NavbarWrapper = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      width: 319px;

      ${down(breakpoints.xxlg)} {
         width: 80px;
      }

      ${down(breakpoints.md)} {
         display: none;
      }
   `
)
export const ContentWrapper = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      height: 100vh;
      width: calc(100% - 319px);

      ${down(breakpoints.xxlg)} {
         width: calc(100% - 80px);
      }

      ${down(breakpoints.md)} {
         width: 100%;
      }
   `
)
export const ContentOffset = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      padding: 90px;

      ${down(breakpoints.xxxlg)} {
         padding: 90px 50px;
      }

      ${down(breakpoints.lg)} {
         padding: 70px 30px;
      }

      ${down(breakpoints.sm)} {
         padding: 40px 16px;
      }
   `
)