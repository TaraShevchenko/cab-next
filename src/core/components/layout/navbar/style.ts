import styled, { css } from 'styled-components'

import { flex } from '@/core/styles/utils'

export const NavbarWrapper = styled.div<{ isFull: boolean }>(
   ({ theme: { down, breakpoints, colorTheme }, isFull }) => css`
      ${flex.alignItemsCenter}
      flex-direction: column;
      height: 100vh;
      width: 100%;
      max-width: 319px;
      padding: 15px;
      background: ${colorTheme.navbar.background};
      border-right: 1px solid ${colorTheme.navbar.border};
      transition: all 0.2s ease-in-out;
      position: relative;
      z-index: 100;


      ${down(breakpoints.xxlg)} {
         position: absolute;
         max-width: ${isFull ? '319' : '80'}px;

         ${ListItemText} {
            display: ${!isFull && 'none'};
         }
      }
   `
)

export const Logo = styled.span(
   ({ theme: { down, breakpoints, colorTheme } }) => css`
      color: ${colorTheme.navbar.logo};
      width: 100%;
      margin-bottom: 105px;

      ${flex.justifyContentCenter}
      ${down(breakpoints.xxlg)} {
         display: none;
      }
   `
)

export const MobileLogo = styled.span(
   ({ theme: { down, breakpoints, colorTheme } }) => css`
      ${flex.justifyContentCenter}
      display: none;
      width: 100%;
      margin-bottom: 105px;
      color: ${colorTheme.navbar.logo};

      ${down(breakpoints.xxlg)} {
         display: flex;

         svg {
            width: 189px;
            height: 60px;
         }
      }
   `
)

export const List = styled.ul(
   ({ theme: { down, breakpoints } }) => css`
      ${flex.column};

      ${ListItem} {
         margin-bottom: 40px;
         
         ${down(breakpoints.xxlg)} {
            margin-bottom: 25px;
         }

         &:last-child {
            margin-bottom: 0;
         }
      }
   `
)

export const ListItem = styled.li<{ isActive?: boolean; isBurger?: boolean }>(
   ({ theme: { colorTheme }, isActive, isBurger }) => css`
      ${flex.alignItemsCenter}
      gap: 15px;
      cursor: pointer;
      position: relative;

      a {
         ${flex.alignItemsCenter}
         gap: 15px;
      }

      &:hover {
         ${ListItemText} {
            color: ${isActive ? colorTheme.navbar.activeText : colorTheme.navbar.hoverText};
         }
      }

      ${ListItemText} {
         color: ${isActive ? colorTheme.navbar.activeText : colorTheme.navbar.text};
      }

      ${ListItemIcon} {
         color: ${isActive ? colorTheme.navbar.activeIcon : colorTheme.navbar.icon};
         background: ${colorTheme.navbar.iconBackground};
      }
   `
)

export const ListItemText = styled.p(
   ({ theme: { fonts } }) => css`
      font-family: ${fonts.primary};
      font-weight: 500;
      font-size: 19px;
      line-height: 24px;
   `
)

export const ListItemIcon = styled.span(
   () => css`
      ${flex.center}
      width: 40px;
      height: 40px;
      border-radius: 15px;
   `
)

export const BurgerIconWrapper = styled.li(
   ({ theme: { down, breakpoints } }) => css`
      display: none;
      margin-bottom: 30px;
      position: relative;

      &:after {
         content: '';
         position: absolute;
         left: 0;
         bottom: -15px;
         height: 1px;
         width: 100%;
         background: ${({ theme }) => theme.colorTheme.navbar.burgerDivider};
      }

      ${down(breakpoints.xxlg)} {
         display: block;
      }
   `
)

export const BurgerIcon = styled.button(
   ({ theme: { colorTheme } }) => css`
      ${flex.center}
      width: 40px;
      height: 40px;
      border-radius: 15px;
      background: unset;
      border: 2px solid ${colorTheme.navbar.burgerIconBorder};
      color: ${colorTheme.navbar.icon};
   `
)