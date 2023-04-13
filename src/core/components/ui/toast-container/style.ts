import styled, { css } from 'styled-components'

export const ToastContainer = styled.div(
   ({ theme: { colorTheme, colors, down, breakpoints } }) => css`
      .Toastify__toast {
         background: ${colorTheme.colors.background};
      }

      .Toastify__toast-container {
         ${down(breakpoints.sm)} {
            top: 10px;
            left: 16px;
            max-width: calc(100vw - 32px);
         }
      }

      .Toastify__toast-body {
         color: ${colorTheme.colors.primaryText};
      }

      .Toastify__close-button {
         color: ${colorTheme.colors.primaryText};
      }

      .Toastify__progress-bar {
         background: ${colors.accent};
      }
   `
)