import styled from 'styled-components'

export const Container = styled.div`
   position: relative;
`

export const Switch = styled.div`
   position: absolute;
   top: 50%;
   right: 20px;
   color: ${({ theme }) => theme.colorTheme.inputs.primary.iconColor};
   z-index: 3;
   transform: translate(0%, -50%);
   cursor: pointer;
`
