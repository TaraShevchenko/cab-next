import styled, { css } from 'styled-components'

export const Container = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;

   z-index: -1;
   overflow: hidden;
`

export const Circle = styled.div<{
   top: string;
   left: string;
}>(
   ({ top = '', left = ''}) => css`
      position: absolute;
      width: 584.29px;
      height: 584.29px;

      top: ${top};
      left: ${left};

      opacity: 0.1;
      transform: rotate(-12.14deg);

      background: radial-gradient(50% 50% at 50% 50%,
      #ea1010 0%,
      rgba(234, 16, 16, 0) 100%);
   `,
)

export const CircleCrimson = styled(Circle)(
   ({ theme: { colors } }) => css`
      background: radial-gradient(50% 50% at 50% 50%,
      ${colors.crimson} 0%,
      rgba(234, 16, 16, 0) 100%);
   `,
)

export const CircleAccent = styled(Circle)(
   ({ theme: { colors } }) => css`
      background: radial-gradient(50% 50% at 50% 50%,
      ${colors.accent} 0%,
      rgba(16, 234, 181, 0) 100%);
   `,
)
