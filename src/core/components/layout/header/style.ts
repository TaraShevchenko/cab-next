import Image from 'next/image'
import styled, { css } from 'styled-components'

import { flex } from '@/core/styles/utils'

export const HeaderWrapper = styled.div(
   ({ theme: { down, breakpoints, colorTheme } }) => css`
      ${flex.alignItemsCenter};
      position: sticky;
      z-index: 80;
      top: 0;

      width: 100%;
      height: 90px;
      padding: 23px 90px;
      background: ${colorTheme.header.background};

      ${down(breakpoints.xxxlg)} {
         padding: 20px 50px;
      }

      ${down(breakpoints.xlg)} {
         height: 70px;
      }

      ${down(breakpoints.lg)} {
         padding: 22px 30px;
      }
   `
)

export const Title = styled.h1(
   ({ theme: { down, breakpoints, fonts, colorTheme } }) => css`
      font-family: ${fonts.primary};
      font-weight: 500;
      font-size: 40px;
      line-height: 110%;
      color: ${colorTheme.header.color};
      margin-right: auto;

      ${down(breakpoints.xxxlg)} {
         font-size: 27px;
      }
   `
)

export const ToggleThemeWrapper = styled.div(
   ({ theme: { down, breakpoints } }) => css`
      ${down(breakpoints.md)} {
         display: none;
      }
   `
)

export const BurgerWrapper = styled.button(
   ({ theme: { down, breakpoints, colorTheme } }) => css`
      display: none;

      ${down(breakpoints.md)} {
         ${flex.center}
         width: 40px;
         height: 40px;
         border-radius: 15px;
         color: ${colorTheme.header.mobileMenuHeaderColor};
         border: 2px solid ${colorTheme.navbar.burgerIconBorder};
      }
   `
)

export const ProfileWrapper = styled.div<{ isActive?: boolean }>(
   ({ theme: { down, breakpoints, colorTheme }, isActive }) => css`
      ${flex.alignItemsCenter};
      justify-content: space-between;
      position: relative;
      gap: 10px;
      min-width: 170px;

      ${ProfileName} {
         color: ${isActive ? colorTheme.header.primaryColor : colorTheme.header.color};

         svg {
            transform: ${isActive ? 'rotate(0)' : 'rotate(180deg)'};
         }
      }

      ${ProfileDropdown} {
         ${isActive && ProfileDropdownActive};
      }

      ${down(breakpoints.md)} {
         display: none;
      }
   `
)

export const ProfilePhotoWrapper = styled.span(
   ({ theme: { colorTheme } }) => css`
      width: 50px;
      height: 50px;
      border-radius: 100%;
      overflow: hidden;
      color: ${colorTheme.header.profileBlankIcon};
   `
)

export const ProfilePhoto = styled(Image)(
   () => css`
      width: 100%;
      height: 100%;
   `
)

export const ProfileName = styled.button(
   ({ theme: { up, breakpoints, colorTheme, fonts } }) => css`
      ${flex.alignItemsCenter};
      gap: 4px;
      font-family: ${fonts.primary};
      font-weight: 500;
      line-height: 22px;
      font-size: 17px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      border: none;

      svg {
         margin-top: 4px;
         transition: all 0.2s ease-in-out;
      }

      ${up(breakpoints.xlg)} {
         &:hover {
            color: ${colorTheme.header.primaryColor};
         }
      }
   `
)

export const ProfileNameText = styled.span(
   () => css`
      max-width: 130px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
   `
)

export const ProfileDropdownActive = css`
   top: calc(100% + 11px);
   opacity: 1;
   pointer-events: unset;
   transition: all 0.2s ease-in-out;
`

export const ProfileDropdown = styled.div(
   ({ theme: { colorTheme } }) => css`
      opacity: 0;
      pointer-events: none;
      transition: all 0.2s ease-in-out;
      position: absolute;
      top: 100%;
      padding: 4px;
      box-shadow: 0 24px 24px -10px ${colorTheme.header.dropdownShadow};
      background: ${colorTheme.header.dropdownBorder};
      border-radius: 8px;

      width: 100%;

      &:after {
         content: '';
         width: 10px;
         height: 10px;
         position: absolute;
         background: ${colorTheme.header.dropdownBackground};
         left: 20px;
         top: -4px;
         border-top-left-radius: 2px;
         transform: rotate(45deg);

         z-index: 2;
      }

      &:before {
         content: '';
         width: 12px;
         height: 12px;
         position: absolute;
         background: ${colorTheme.header.dropdownBorder};
         left: 19px;
         top: -5px;
         border-top-left-radius: 2px;
         transform: rotate(45deg);

         z-index: -1;
      }
   `
)
export const ProfileDropdownTriangleBorder = styled.div(
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

export const ProfileItem = styled.button(
   ({ theme: { up, breakpoints, colorTheme, fonts } }) => css`
      display: block;
      text-align: left;
      padding: 10px 20px;
      color: ${colorTheme.header.color};
      font-family: ${fonts.primary};
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

export const MobileMenuWrapper = styled.div<{ isActive: boolean }>(
   ({ theme: { down, breakpoints, colorTheme }, isActive }) => css`
      display: none;
      flex-direction: column;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100vw;
      z-index: 100;
      padding: 50px 95px;
      background: ${colorTheme.header.mobileMenuBackground};

      transform: translateY(${isActive ? 0 : 100}%);
      transition: all 0.2s ease-in-out;

      ${down(breakpoints.md)} {
         ${flex.center};
      }

      ${down(breakpoints.sm)} {
         padding: 50px 16px;
      }
   `
)

export const MobileMenuHeader = styled.div(
   ({ theme: { colorTheme } }) => css`
      ${flex.alignItemsCenter};
      justify-content: space-between;
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid ${colorTheme.header.mobileMenuDivider};
      width: 100%;

      &:before {
         content: '';
         position: absolute;
         top: 10px;
         left: 50%;
         transform: translateX(-50%);

         width: 90px;
         height: 4px;
         background: ${colorTheme.header.mobileMenuFooterButtonBackground};
         border-radius: 10px;
      }
   `
)

export const MobileMenuProfileWrapper = styled.div(
   ({ theme: { colorTheme } }) => css`
      ${flex.alignItemsCenter};
      gap: 10px;

      button {
         color: ${colorTheme.header.mobileMenuHeaderColor};
      }
   `
)

export const MobileMenuNavbarWrapper = styled.div(
   () => css`
      ${flex.column};
      gap: 25px;
      width: 100%;
   `
)

export const MobileMenuFooter = styled.div(
   ({ theme: { colorTheme } }) => css`
      ${flex.alignItemsCenter};
      justify-content: space-between;
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid ${colorTheme.header.mobileMenuDivider};
      width: 100%;
   `
)

export const MobileMenuLogOutButton = styled.button(
   ({ theme: { colorTheme, fonts } }) => css`
      ${flex.center};
      gap: 10px;
      width: 244px;
      height: 50px;
      font-family: ${fonts.primary};
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      border-radius: 20px;
      background: ${colorTheme.header.mobileMenuFooterButtonBackground};
      color: ${colorTheme.header.mobileMenuFooterButtonText};
      border: none;

      svg {
         color: ${colorTheme.header.mobileMenuFooterButtonIcon};
      }
   `
)
