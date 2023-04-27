import styled, { css } from 'styled-components'

import { flex } from '@/core/styles/utils'

export const NotificationsFilters = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      margin-bottom: 40px;

      ${down(breakpoints.md)} {
         margin-bottom: 30px;
      }
   `
)

export const NotificationsListWrapper = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 45px;

      &:last-child {
         margin-bottom: 0;
      }

      ${down(breakpoints.md)} {
         gap: 10px;
         margin-bottom: 30px;
      }
   `
)

export const NotificationsListTitle = styled.p(
   ({ theme: { colorTheme, fonts, down, breakpoints } }) => css`
      font-family: ${fonts.primary};
      font-weight: 500;
      font-size: 23px;
      line-height: 29px;

      color: ${colorTheme.colors.primaryText};

      ${down(breakpoints.lg)} {
         font-size: 19px;
      }

      ${down(breakpoints.md)} {
         margin-bottom: 5px;
      }

      ${down(breakpoints.sm)} {
         font-size: 17px;
      }
   `
)

export const NotificationsListItem = styled.div(
   ({ theme: { colorTheme, down, breakpoints } }) => css`
      display: flex;
      border-radius: 20px;
      padding: 19px 37px;

      background: ${colorTheme.colors.secondaryBackground};
      box-shadow: 0 46px 70px -30px ${colorTheme.colors.shadow};

      ${down(breakpoints.md)} {
         padding: 30px;
         flex-direction: column;
      }

      ${down(breakpoints.sm)} {
         padding: 30px 16px;
      }
   `
)

export const IconWrapper = styled.div(
   ({ theme: { colorTheme, down, breakpoints } }) => css`
      ${flex.center}
      min-width: 90px;
      max-width: 90px;
      margin-right: 20px;
      padding-right: 30px;

      color: ${colorTheme.notification.notificationIcon};
      border-right: 1px solid ${colorTheme.notification.notificationIconDivider};

      ${down(breakpoints.md)} {
         justify-content: start;
         border-right: none;
         border-bottom: 1px solid ${colorTheme.notification.notificationIconDivider};
         min-width: 100%;
         max-width: 100%;
         margin-right: 0;
         padding-right: 0;
         margin-bottom: 20px;
         padding-bottom: 25px;

         svg {
            transform: scale(1.15);
         }
      }
   `
)

export const Date = styled.p(
   ({ theme: { colorTheme, fonts, down, breakpoints } }) => css`
      font-family: ${fonts.primary};
      font-weight: 500;
      font-size: 15px;

      color: ${colorTheme.notification.notificationIcon};

      margin-bottom: 8px;

      ${down(breakpoints.lg)} {
         font-size: 13px;
         margin-bottom: 5px;
      }
   `
)

export const Title = styled.h4(
   ({ theme: { colorTheme, fonts, down, breakpoints } }) => css`
      font-family: ${fonts.primary};
      color: ${colorTheme.colors.primaryText};

      font-weight: 500;
      font-size: 19px;
      line-height: 24px;

      margin-bottom: 5px;

      ${down(breakpoints.lg)} {
         font-size: 17px;
         line-height: 22px;
      }
      ${down(breakpoints.sm)} {
         font-size: 15px;
         line-height: 19px;
      }
   `
)

export const Subtitle = styled.p(
   ({ theme: { colorTheme, fonts, down, breakpoints } }) => css`
      font-family: ${fonts.secondary};
      font-size: 15px;
      font-weight: 600;
      line-height: 20px;

      color: ${colorTheme.notification.notificationItemSubtitle};

      ${down(breakpoints.lg)} {
         font-size: 13px;
      }
   `
)

export const Link = styled.span(
   ({ theme: { colorTheme, down, breakpoints } }) => css`
      color: ${colorTheme.notification.notificationLink};
      padding: 0 4px;

      ${down(breakpoints.lg)} {
         padding: 0 3px;
      }
   `
)

export const Highlighted = styled.span(
   ({ theme: { colorTheme, down, breakpoints } }) => css`
      color: ${colorTheme.colors.primaryText};
      font-weight: 700;
      padding: 0 4px;

      ${down(breakpoints.lg)} {
         padding: 0 3px;
      }
   `
)
