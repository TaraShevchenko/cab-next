import styled, { css } from 'styled-components'

import { flex } from '@/core/styles/utils'

export const NotificationsWrapper = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      position: relative;
      margin: 0 60px 0 40px;

      ${down(breakpoints.md)} {
         position: unset;
         margin: 0 20px 0 0;
      }
   `
)

export const NotificationsButton = styled.button(
   ({ theme: { up, breakpoints, colorTheme } }) => css`
      ${flex.center};
      border-radius: 15px;
      width: 38px;
      height: 38px;
      color: ${colorTheme.header.notificationColor};
      background: ${colorTheme.header.notificationBackground};
      border: 2px solid ${colorTheme.header.notificationBackground};
      transition: all 0.2s ease-in-out;
      cursor: pointer;

      ${up(breakpoints.xlg)} {
         &:hover {
            color: ${colorTheme.header.primaryColor};
            border: 2px solid ${colorTheme.header.primaryColor};
            transition: all 0.2s ease-in-out;
         }
      }
   `
)

export const NotificationDropdown = styled.div<{ isOpen: boolean }>(
   ({ theme: { down, breakpoints, colorTheme }, isOpen }) => css`
      opacity: ${isOpen ? '1' : '0'};
      pointer-events: ${isOpen ? 'unset' : 'none'};
      transition: all 0.2s ease-in-out;
      position: absolute;
      top: calc(100% + 23px);
      right: 50%;
      transform: translateX(50%);
      padding: 5px 5px 10px;
      box-shadow: 0 24px 24px -10px ${colorTheme.header.dropdownShadow};
      background: ${colorTheme.header.dropdownBorder};
      border-radius: 8px;

      width: 260px;

      ${down(breakpoints.md)} {
         top: 100%;
         right: 32px;
         transform: translateX(0);
      }

      &:after {
         content: '';
         width: 16px;
         height: 16px;
         position: absolute;
         background: ${colorTheme.header.dropdownBackground};
         right: 50%;
         top: -7px;
         border-top-left-radius: 2px;
         transform: translateX(50%) rotate(45deg);
         z-index: 2;

         ${down(breakpoints.md)} {
            right: 69px;
            transform: rotate(45deg);
         }
      }

      &:before {
         content: '';
         width: 18px;
         height: 18px;
         position: absolute;
         background: ${colorTheme.header.dropdownBorder};
         right: 50%;
         top: -9px;
         border-top-left-radius: 2px;
         transform: translateX(50%) rotate(45deg);

         z-index: -1;

         ${down(breakpoints.md)} {
            right: 68px;
            transform: rotate(45deg);
         }
      }
   `
)
export const NotificationDropdownTriangleBorder = styled.div(
   ({ theme: { colorTheme } }) => css`
      position: absolute;
      width: calc(100% - 2px);
      height: calc(100% - 2px);
      border-radius: 8px;
      left: 1px;
      top: 1px;
      z-index: 2;
      background: ${colorTheme.header.dropdownBackground};
   `
)

export const NotificationItem = styled.button(
   ({ theme: { up, breakpoints, colorTheme } }) => css`
      display: block;
      text-align: left;
      padding: 10px 18px;
      color: ${colorTheme.header.color};
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      border: none;
      width: 100%;
      border-radius: 4px;
      position: relative;
      z-index: 5;
      transition: all 0.2s ease-in-out;

      ${up(breakpoints.xlg)} {
         &:hover {
            transition: all 0.2s ease-in-out;
            background: ${colorTheme.header.dropdownItemHoverBackground};
         }
      }
   `
)

export const NotificationItemDate = styled.span(
   ({ theme: { colorTheme, fonts } }) => css`
      font-family: ${fonts.primary};
      font-weight: 500;
      font-size: 11px;
      color: ${colorTheme.header.notificationDate};
      margin-bottom: 3px;
   `
)

export const NotificationItemText = styled.span(
   ({ theme: { colorTheme, fonts } }) => css`
      display: block;
      font-family: ${fonts.secondary};
      font-weight: 600;
      font-size: 13px;
      line-height: 120%;
      color: ${colorTheme.colors.secondaryText};
   `
)

export const NotificationItemHighlightedText = styled.span(
   ({ theme: { colorTheme } }) => css`
      color: ${colorTheme.inputs.primary.color};
      font-weight: 700;
      padding: 0 3px;
   `
)

export const NotificationViewAll = styled.span(
   ({ theme: { colorTheme, fonts } }) => css`
      ${flex.center};
      margin-top: 10px;
      font-family: ${fonts.primary};
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      position: relative;
      z-index: 5;
      border: none;
      background: transparent;
      width: 100%;

      color: ${colorTheme.colors.secondaryText};
   `
)
