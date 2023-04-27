import styled, { css } from 'styled-components'

export const StyledAnchor = styled.span(
   ({ theme: { colors, colorTheme } }) => css`
      display: inline-block;
      position: relative;

      font-weight: 700;
      font-size: 15px;
      line-height: 20px;
      color: ${colorTheme.colors.primaryText};

      transition: all 0.2s ease-in-out;

      &:after {
         content: '';
         position: absolute;
         bottom: -4px;
         left: 0;
         width: 100%;
         height: 2px;

         border-radius: 2px;
         background-color: ${colors.accent};
      }

      &:hover {
         color: ${colors.fringyFlower};
      }
   `
)
