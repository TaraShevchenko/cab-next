import styled, { css } from 'styled-components'

import { flex } from '@/core/styles/utils'

export const Container = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      display: flex;
      min-height: 100vh;

      ${down(breakpoints.lg)} {
         height: 100%;
         flex-direction: column;
      }
   `
)

export const Left = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      ${flex.center}
      flex: 0 0 40%;
      position: relative;

      .background-image {
         height: 100%;
         width: 100%;
         color: transparent;
         max-width: 100%;
         object-fit: cover;
         object-position: 0 0;
         position: absolute;
         left: 0;
         top: 0;
         z-index: -1;
      }

      ${down(breakpoints.xxxlg)} {
         flex: 0 0 48%;
      }

      ${down(breakpoints.lg)} {
         height: 100%;
         flex: 0 1 52%;

         padding: 109px 0;

         .welcome-logo {
            width: 120px;
            height: 152px;
         }
      }

      ${down(breakpoints.md)} {
         padding: 64px 0;
      }

      ${down(breakpoints.sm)} {
         padding: 40px 0;

         .welcome-logo {
            width: 78px;
            height: 100px;
         }
      }

      ${down(breakpoints.xsm)} {
         padding: 15px 0;
      }
   `
)

export const Right = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      position: relative;
      flex: 0 0 60%;

      ${down(breakpoints.xxxlg)} {
         flex: 0 0 52%;
      }

      ${down(breakpoints.lg)} {
         height: 100%;
         flex: 1 0 52%;
      }
   `
)

export const SignAnhor = styled.div(
   ({ theme: { colorTheme, down, breakpoints, fonts } }) => css`
      position: absolute;
      bottom: 40px;
      left: 50%;

      font-family: ${fonts.secondary};
      font-weight: 600;
      font-size: 15px;
      line-height: 20px;
      color: ${colorTheme.colors.secondaryText};

      transform: translate(-50%, -100%);

      ${down(breakpoints.xxxlg)} {
         bottom: 30px;
      }

      ${down(breakpoints.sm)} {
         left: 24px;
         transform: translate(0%, -100%);

         font-size: 13px;
         line-height: 18px;
      }

      ${down(breakpoints.xsm)} {
         bottom: 20px;
      }
   `
)

export const ToggleWrapper = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      position: absolute;
      bottom: 40px;
      right: 0;

      transform: translate(-50%, -50%);

      ${down(breakpoints.xxxlg)} {
         bottom: 30px;
      }

      ${down(breakpoints.xsm)} {
         bottom: 20px;
      }
   `
)

export const FormWrapper = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      width: 100%;
      padding: 0 40px;
      max-width: 550px;

      ${down(breakpoints.lg)} {
         padding: 60px 40px 120px;
      }

      ${down(breakpoints.sm)} {
         padding: 60px 24px 120px;
      }

      ${down(breakpoints.xsm)} {
         padding: 30px 16px 90px;
      }
   `
)

export const Title = styled.h3(
   ({ theme: { colorTheme, fonts, down, breakpoints } }) => css`
      font-family: ${fonts.primary};
      font-weight: 500;
      font-size: 40px;
      line-height: 44px;
      color: ${colorTheme.colors.primaryText};

      ${down(breakpoints.md)} {
         font-size: 30px;
         line-height: 33px;
      }

      ${down(breakpoints.sm)} {
         font-size: 25px;
         line-height: 28px;
      }
   `
)

export const Description = styled.div(
   ({ theme: { colorTheme, down, breakpoints, fonts } }) => css`
      font-family: ${fonts.secondary};
      font-weight: 600;
      font-size: 19px;
      line-height: 26px;
      color: ${colorTheme.colors.secondaryText};

      margin-bottom: 30px;

      ${down(breakpoints.md)} {
         font-size: 17px;
         line-height: 23px;
      }

      ${down(breakpoints.sm)} {
         font-size: 15px;
         line-height: 20px;
      }
   `
)

export const Form = styled.form(
   ({ theme: { down, breakpoints } }) => css`
      ${flex.column}
      gap: 20px;

      z-index: 1;

      ${down(breakpoints.sm)} {
         gap: 15px;
      }
   `
)

export const Terms = styled.p(
   ({ theme: { colorTheme, fonts } }) => css`
      font-family: ${fonts.secondary};
      font-weight: 600;
      font-size: 15px;
      line-height: 20px;
      color: ${colorTheme.colors.secondaryText};

      margin-left: 10px;
   `
)

export const CaptchaWrapper = styled.div(
   () => css`
      margin-bottom: -30px;
   `
)

export const ButtonWrapper = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      margin-top: 30px;

      ${down(breakpoints.sm)} {
         margin-top: 20px;

         button {
            width: 100%;
         }
      }
   `
)
